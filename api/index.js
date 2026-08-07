const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const session = require('express-session');

const app = express();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'anagha123';
const DB_FILE = '/tmp/reviews.json';

const initialReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Best highway pitstop on the Bangalore-Mangalore route! Clean restrooms, piping hot masala dosa, and super fast service. Ample parking for big cars.",
    user_type: "Bangalore - Mangalore Traveler",
    status: "approved",
    created_at: "2026-08-01 12:30:00"
  },
  {
    id: 2,
    name: "Ananya Hegde",
    rating: 5,
    comment: "The Malnad style architecture gives such a serene vibe. We stopped here for family lunch. The South Indian thali was authentic and delicious! Kids loved the open play lawn.",
    user_type: "Family Trip",
    status: "approved",
    created_at: "2026-07-28 14:15:00"
  },
  {
    id: 3,
    name: "Dr. Vikram Rao",
    rating: 4,
    comment: "Very convenient location right near Channarayapatna. Crisp idlis, fresh filter coffee, and quick takeaway box for our trip ahead to Sakleshpur.",
    user_type: "Regular Commuter",
    status: "approved",
    created_at: "2026-07-20 09:45:00"
  },
  {
    id: 4,
    name: "Priya & Suhas",
    rating: 5,
    comment: "100% Pure Veg paradise! We tried the Paneer Butter Masala with Tandoori Roti and finished with Filter Coffee. Spotless hygiene and great hospitality.",
    user_type: "Weekend Drive",
    status: "approved",
    created_at: "2026-07-15 20:10:00"
  },
  {
    id: 5,
    name: "Suresh Gowda",
    rating: 5,
    comment: "Plenty of shade under palm trees for parking. Terracotta roof keeps the inside cool even in peak afternoon. High quality vegetarian food on NH-75.",
    user_type: "Karnataka Roadtrip",
    status: "approved",
    created_at: "2026-07-10 13:00:00"
  }
];

function getReviews() {
  if (!fs.existsSync(DB_FILE)) {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(initialReviews, null, 2));
    } catch (e) {}
    return initialReviews;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return initialReviews;
  }
}

function saveReviews(reviews) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(reviews, null, 2));
  } catch (e) {}
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'anagha-grand-secret-key-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// API Routes
app.get('/api/reviews', (req, res) => {
  try {
    const reviews = getReviews();
    const approved = reviews.filter(r => r.status === 'approved').sort((a, b) => b.id - a.id);
    const totalCount = approved.length;
    const avgRating = totalCount > 0 
      ? parseFloat((approved.reduce((acc, r) => acc + r.rating, 0) / totalCount).toFixed(1))
      : 4.5;

    res.json({
      success: true,
      reviews: approved,
      stats: { totalReviews: totalCount, averageRating: avgRating }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/reviews', (req, res) => {
  try {
    const { name, rating, comment, user_type } = req.body;
    if (!name || !rating || !comment) {
      return res.status(400).json({ success: false, error: 'Name, rating, and comment are required.' });
    }
    const numericRating = parseInt(rating, 10);
    const reviews = getReviews();
    const newId = reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1;

    const newReview = {
      id: newId,
      name: name.trim(),
      rating: numericRating,
      comment: comment.trim(),
      user_type: (user_type || 'Highway Traveler').trim(),
      status: 'pending',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    reviews.push(newReview);
    saveReviews(reviews);

    res.json({
      success: true,
      message: 'Thank you! Your review has been submitted for moderation and will appear once approved.',
      reviewId: newId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

function authAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) return next();
  return res.status(401).json({ success: false, error: 'Unauthorized. Please login.' });
}

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    res.json({ success: true, message: 'Logged in successfully.' });
  } else {
    res.status(401).json({ success: false, error: 'Invalid password.' });
  }
});

app.post('/api/admin/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true, message: 'Logged out successfully.' });
});

app.get('/api/admin/check-auth', (req, res) => {
  res.json({ isAuthenticated: !!(req.session && req.session.isAdmin) });
});

app.get('/api/admin/reviews', authAdmin, (req, res) => {
  try {
    let reviews = getReviews().sort((a, b) => b.id - a.id);
    const filter = req.query.status;
    if (filter && ['pending', 'approved', 'rejected'].includes(filter)) {
      reviews = reviews.filter(r => r.status === filter);
    }
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch('/api/admin/reviews/:id', authAdmin, (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { status, comment, rating } = req.body;
    const reviews = getReviews();
    const idx = reviews.findIndex(r => r.id === id);
    if (idx === -1) return res.status(404).json({ success: false, error: 'Review not found.' });

    if (status) reviews[idx].status = status;
    if (comment !== undefined) reviews[idx].comment = comment.trim();
    if (rating !== undefined) reviews[idx].rating = parseInt(rating, 10);

    saveReviews(reviews);
    res.json({ success: true, message: 'Review updated successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/admin/reviews/:id', authAdmin, (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    let reviews = getReviews();
    reviews = reviews.filter(r => r.id !== id);
    saveReviews(reviews);
    res.json({ success: true, message: 'Review deleted successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = app;
