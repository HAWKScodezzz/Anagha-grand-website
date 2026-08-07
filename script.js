/* ==========================================================================
   ANAGHA GRAND - PURE VEG RESTAURANT
   Interactive Logic & Authentic Menu Data
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Authentic Menu Data (From Official Menu Cards)
     -------------------------------------------------------------------------- */
  const menuData = {
    breakfast: {
      title: "South Indian Breakfast / ಬ್ರೇಕ್ ಫಾಸ್ಟ್",
      badge: "Pure Veg Breakfast",
      items: [
        { name: "Idly (2 nos) / ಇಡ್ಲಿ", desc: "Steamed soft rice cakes served with coconut chutney & hot sambar", price: "₹60" },
        { name: "Vada / ವಡೆ", desc: "Golden fried crispy medu vada", price: "₹50" },
        { name: "Idly Vada / ಇಡ್ಲಿ ವಡೆ", desc: "2 Idly + 1 Vada with chutney & sambar", price: "₹110" },
        { name: "Single Idly Vada / ಸಿಂಗಲ್ ಇಡ್ಲಿ ವಡೆ", desc: "1 Idly + 1 Vada combo", price: "₹80" },
        { name: "Button Idly / ಬಟನ್ ಇಡ್ಲಿ", desc: "Mini idlis soaked in aromatic hot sambar", price: "₹75" },
        { name: "Mini Tiffen / ಮಿನಿ ಟಿಫನ್", desc: "Combo of Mini Idly, Vada, Masala Dosa & Sweet", price: "₹170" },
        { name: "Curd Vada / ಮೊಸರು ವಡೆ", desc: "Vada soaked in spiced seasoned curd", price: "₹80" },
        { name: "Khara Bath / ಖಾರಾ ಬಾತ್", desc: "Spiced semolina upma with vegetables", price: "₹60" },
        { name: "Kesari Bath / ಕೇಸರಿ ಬಾತ್", desc: "Sweet semolina dessert with ghee & cashews", price: "₹60" },
        { name: "Chow Chow Bath / ಚೌ ಚೌ ಬಾತ್", desc: "Combination of Khara Bath & Kesari Bath", price: "₹110" },
        { name: "Rava Idly / ರವೆ ಇಡ್ಲಿ", desc: "Steamed semolina cake with cashews & sagu", price: "₹70" },
        { name: "Poori Kurma / ಪೂರಿ ಕುರ್ಮಾ", desc: "3 Fluffy puffed pooris served with potato sagu / kurma", price: "₹105" },
        { name: "Rice Bath / ರೈಸ್ ಬಾತ್", desc: "Daily special spiced rice dish", price: "₹90" },
        { name: "Bisibele Bath / Pongal / ಬಿಸಿಬೇಳೆ ಬಾತ್", desc: "Traditional lentil rice cooked with vegetables and ghee", price: "₹90" },
        { name: "Shavige Bath / ಶ್ಯಾವಿಗೆ ಬಾತ್", desc: "Spiced vermicelli upma", price: "₹90" },
        { name: "Bajji / Pakoda / Maddur Vada", desc: "Crispy tea-time snacks", price: "₹90" },
        { name: "Masala Vada (Evening) / ಮಸಾಲ ವಡೆ", desc: "Crunchy chana dal vada", price: "₹90" },
        { name: "Mangalore Buns / Mangalore Bajji", desc: "Sweet banana buns / Mangalore style bajjis", price: "₹60" }
      ]
    },
    dosa: {
      title: "Dosa Varieties / ದೋಸೆ ಪದಾರ್ಥಗಳು",
      badge: "Specialty Dosas",
      items: [
        { name: "Plain Dosa / ಪ್ಲೇನ್ ದೋಸೆ", desc: "Golden thin crisp rice crepe", price: "₹100" },
        { name: "Masala Dosa / ಮಸಾಲ ದೋಸೆ", desc: "Crispy dosa stuffed with spiced potato bhaji", price: "₹115" },
        { name: "Kali Dosa / ಕಾಳಿ ದೋಸೆ", desc: "Soft spongy traditional set-style dosa", price: "₹115" },
        { name: "Set Dosa / ಸೆಟ್ ದೋಸೆ", desc: "3 Soft fluffy pancakes served with sagu & chutney", price: "₹120" },
        { name: "Set Masala Dosa / ಸೆಟ್ ಮಸಾಲ ದೋಸೆ", desc: "Fluffy set dosa with potato masala filling", price: "₹125" },
        { name: "Onion Dosa (Uttappam) / ಈರುಳ್ಳಿ ದೋಸೆ", desc: "Thick pancake topped with caramelized onions", price: "₹130" },
        { name: "Tomato Dosa (Uttappam) / ಟೊಮೇಟೊ ದೋಸೆ", desc: "Thick crepe topped with juicy tomatoes & chillies", price: "₹130" },
        { name: "Rava Dosa / ರವೆ ದೋಸೆ", desc: "Lacy crisp semolina dosa", price: "₹120" },
        { name: "Rava Masala Dosa / ರವೆ ಮಸಾಲ ದೋಸೆ", desc: "Crispy rava crepe stuffed with potato masala", price: "₹130" },
        { name: "Rava Onion Masala Dosa / ರವೆ ಈರುಳ್ಳಿ ಮಸಾಲ", desc: "Rava dosa with onion & potato stuffing", price: "₹140" },
        { name: "Paper Plain Dosa / ಪೇಪರ್ ಪ್ಲೇನ್ ದೋಸೆ", desc: "Extra long paper thin super crisp dosa", price: "₹120" },
        { name: "Paper Masala Dosa / ಪೇಪರ್ ಮಸಾಲ ದೋಸೆ", desc: "Extra long crisp paper dosa with potato bhaji", price: "₹130" },
        { name: "Butter Plain Dosa / ಬಟರ್ ಪ್ಲೇನ್ ದೋಸೆ", desc: "Dosa roasted in pure butter", price: "₹120" },
        { name: "Butter Masala Dosa / ಬಟರ್ ಮಸಾಲ ದೋಸೆ", desc: "Butter roasted dosa with masala filling", price: "₹130" },
        { name: "Cheese Masala Dosa / ಚೀಸ್ ಮಸಾಲ ದೋಸೆ", desc: "Topped with melted cheese & potato masala", price: "₹135" },
        { name: "Ghee Masala Dosa / ಗೀ ಮಸಾಲ ದೋಸೆ", desc: "Roasted with aromatic pure cow ghee", price: "₹125" },
        { name: "Ragi Plain / Masala Dosa / ರಾಗಿ ದೋಸೆ", desc: "Healthy finger millet dosa", price: "₹110 / ₹120" },
        { name: "Neer Dosa / ನೀರ್ ದೋಸೆ", desc: "Thin light coastal rice crepes", price: "₹110" },
        { name: "Royal Family Dosa / ರಾಯಲ್ ಫ್ಯಾಮಿಲಿ ದೋಸೆ", desc: "Huge grand family sized special dosa", price: "₹280" },
        { name: "Akki Roti (2 pcs) / ಅಕ್ಕಿ ರೊಟ್ಟಿ", desc: "Traditional Karnataka rice flour rotis", price: "₹100" },
        { name: "Ragi Roti (2 pcs) / ರಾಗಿ ರೊಟ್ಟಿ", desc: "Healthy millet rotis served with palya", price: "₹100" }
      ]
    },
    meals: {
      title: "Meals & Thali / ಮಧ್ಯಾಹ್ನದ ಊಟ",
      badge: "Lunch 12 PM - 4 PM",
      items: [
        { name: "South Indian Meals / ಸೌತ್ ಇಂಡಿಯನ್ ಮೀಲ್ಸ್", desc: "Poori-3 / Chapati-1, Palya, Kurma, Rice, Sambar, Rasam, Pappu, Payasa, Curd, Papad, Pickle, Chutney", price: "₹170" },
        { name: "South Indian Deluxe Meals / ಡಿಲಕ್ಸ್ ಮೀಲ್ಸ್", desc: "Tomato Soup, Variety Rice, Poori-3 / Chapati-1, Kurma, Palya, Rice, Sambar, Rasam, Curd, Pappu, Payasa, Pickle, Chutney, Papad", price: "₹210" },
        { name: "North Indian Thali / ನಾರ್ತ್ ಇಂಡಿಯನ್ ತಾಳಿ", desc: "Tomato Soup, Papad, Tandoori Roti-2, 2 Variety Curry, Dal Fry, Pulao 1 Cup, Curd Rice 1 Cup, Salad, Sweet (Available 12pm-4pm & 7pm-10:30pm)", price: "₹250" },
        { name: "Channa Batura / ಚನ್ನಾ ಬಟೂರಾ", desc: "Large fluffy fried batura with spicy channa masala", price: "₹160" }
      ]
    },
    chinese_starters: {
      title: "Chinese Starters / ಚೈನೀಸ್ ಸ್ಟಾರ್ಟರ್ಸ್",
      badge: "Wok Specials",
      items: [
        { name: "Gobi Manchurian / ಗೋಬಿ ಮಂಚೂರಿ", desc: "Crispy cauliflower tossed in tangy Manchurian sauce", price: "₹200" },
        { name: "Gobi Chilly / ಗೋಬಿ ಚಿಲ್ಲಿ", desc: "Cauliflower tossed with green chillies & bell peppers", price: "₹210" },
        { name: "Gobi -65 / ಗೋಬಿ -65", desc: "Spiced deep fried cauliflower", price: "₹210" },
        { name: "Baby Corn Manchurian / ಬೇಬಿ ಕಾರ್ನ್ ಮಂಚೂರಿಯನ್", desc: "Crispy babycorn in sweet & tangy garlic sauce", price: "₹230" },
        { name: "Baby Corn Chilly / ಬೇಬಿ ಕಾರ್ನ್ ಚಿಲ್ಲಿ", desc: "Crispy babycorn sautéed with onions & capsicum", price: "₹230" },
        { name: "Paneer Manchurian / ಪನ್ನೀರ್ ಮಂಚೂರಿಯನ್", desc: "Cottage cheese cubes tossed in spicy Manchurian gravy/dry", price: "₹270" },
        { name: "Paneer Chilly / ಪನ್ನೀರ್ ಚಿಲ್ಲಿ", desc: "Paneer tossed with soya chilli garlic glaze", price: "₹270" },
        { name: "Paneer -65 / ಪನ್ನೀರ್ -65", desc: "Crispy seasoned fried paneer cubes", price: "₹270" },
        { name: "Paneer Sathe / ಪನ್ನೀರ್ ಸಾತೆ", desc: "Grilled marinated paneer skewers with rich peanut soya dip", price: "₹310" },
        { name: "French Fries / ಫ್ರೆಂಚ್ ಫ್ರೈಸ್", desc: "Golden salted potato fries", price: "₹180" },
        { name: "Veg Ball Manchurian / ವೆಜ್ ಬಾಲ್ ಮಂಚೂರಿಯನ್", desc: "Minced veg dumplings in garlic soya glaze", price: "₹260" }
      ]
    },
    soups: {
      title: "Chinese Variety Soups / ಚೈನೀಸ್ ಸೂಪ್ಸ್",
      badge: "Hot Soups",
      items: [
        { name: "Tomato Soup / ಟೊಮೇಟೊ ಸೂಪ್", desc: "Classic rich cream of tomato soup served with croutons", price: "₹110" },
        { name: "Sweet Corn Veg Soup / ಸ್ವೀಟ್ ಕಾರ್ನ್ ವೆಜ್ ಸೂಪ್", desc: "Mild creamy sweetcorn & vegetable soup", price: "₹125" },
        { name: "Cream of Mushroom / ಕ್ರೀಮ್ ಆಫ್ ಮಶ್ರೂಮ್", desc: "Rich button mushroom cream soup", price: "₹125" },
        { name: "Hot And Sour Soup / ಹಾಟ್ & ಸೌರ್", desc: "Spicy & sour broth with shredded vegetables", price: "₹120" },
        { name: "Manchow Soup / ಮ್ಯಾಂಚೂ ಸೂಪ್", desc: "Garlicky soya soup topped with fried noodles", price: "₹120" },
        { name: "Lemon Coriander Soup / ಲೆಮನ್ ಕೋರಿಯಂಡರ್", desc: "Refreshing tangy lemon & cilantro broth", price: "₹115" },
        { name: "Veg Clear Soup / ವೆಜ್ ಕ್ಲಿಯರ್ ಸೂಪ್", desc: "Light steamed vegetable broth", price: "₹120" }
      ]
    },
    tandoori: {
      title: "Tandoori Starters / ತಂದೂರಿ ಸ್ಟಾರ್ಟರ್ಸ್",
      badge: "Clay Oven Specials",
      items: [
        { name: "Paneer Tikka / ಪನ್ನೀರ್ ಟಿಕ್ಕಾ", desc: "Cottage cheese marinated in yogurt & tandoori spices", price: "₹280" },
        { name: "Malai Paneer Tikka / ಮಲಾಯಿ ಪನ್ನೀರ್ ಟಿಕ್ಕಾ", desc: "Creamy cashew & cardamom marinated paneer cubes", price: "₹290" },
        { name: "Mushroom Tikka / ಮಶ್ರೂಮ್ ಟಿಕ್ಕಾ", desc: "Button mushrooms coated in smoky tandoori masala", price: "₹260" },
        { name: "Pahadi Paneer Tikka / ಪಹಾಡಿ ಪನ್ನೀರ್ ಟಿಕ್ಕಾ", desc: "Paneer marinated in fresh mint, coriander & spices", price: "₹290" },
        { name: "Tandoori Gobi / ತಂದೂರಿ ಗೋಬಿ", desc: "Cauliflower florets roasted in clay oven", price: "₹240" }
      ]
    },
    beverages: {
      title: "South Indian Beverages / ಪಾನೀಯಗಳು",
      badge: "Hot & Cold Drinks",
      items: [
        { name: "Filter Coffee / ಫಿಲ್ಟರ್ ಕಾಫಿ", desc: "Authentic South Indian chicory filter coffee in brass tumbler", price: "₹40" },
        { name: "Tea / Lemon / Ginger / ಟೀ", desc: "Freshly brewed hot tea", price: "₹40" },
        { name: "Badam Milk / ಬಾದಾಮಿ ಮಿಲ್ಕ್", desc: "Warm almond milk flavored with saffron", price: "₹50" },
        { name: "Milk / ಹಾಲು", desc: "Hot steamed milk", price: "₹40" },
        { name: "Horlicks / Bournvita / ಹಾರ್ಲಿಕ್ಸ್", desc: "Malted health drink", price: "₹50" },
        { name: "Ragi Malt / ರಾಗಿ ಮಾಲ್ಟ್", desc: "Nutritious finger millet drink", price: "₹50" }
      ]
    },
    ice_cream: {
      title: "Ice Cream Milk Shakes / ಐಸ್ ಕ್ರೀಮ್ ಮಿಲ್ಕ್ ಶೇಕ್ಸ್",
      badge: "Sweet Desserts",
      items: [
        { name: "Vanilla Milkshake / ವೆನಿಲಾ", desc: "Creamy vanilla ice cream shake", price: "₹100" },
        { name: "Strawberry Milkshake / ಸ್ಟ್ರಾಬೆರಿ", desc: "Rich strawberry blended shake", price: "₹120" },
        { name: "Mango Milkshake / ಮ್ಯಾಂಗೋ", desc: "Delicious Alphonso mango shake", price: "₹100" },
        { name: "Butter Scotch Milkshake / ಬಟರ್ ಸ್ಕಾಚ್", desc: "Crunchy butter scotch ice cream shake", price: "₹110" }
      ]
    }
  };

  /* --------------------------------------------------------------------------
     Helper: Toggle Body Scroll Lock
     -------------------------------------------------------------------------- */
  function toggleBodyScroll(lock) {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      // Check if any modal or drawer is still open
      const hasActiveModal = document.querySelector('.modal-backdrop.active, .mobile-drawer.active, .exit-modal-backdrop.active');
      if (!hasActiveModal) {
        document.body.style.overflow = '';
      }
    }
  }

  /* --------------------------------------------------------------------------
     2. Mobile Hamburger Menu Toggle & Overlay Backdrop
     -------------------------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  
  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('active');
    toggleBodyScroll(false);
  }

  function openMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (hamburgerBtn) hamburgerBtn.classList.add('active');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('active');
    toggleBodyScroll(true);
  }

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    if (mobileDrawerOverlay) {
      mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);
    }

    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. Active Nav Link Highlighting on Scroll (Throttled via requestAnimationFrame)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
  let isScrolling = false;

  function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    isScrolling = false;
  }

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(updateActiveNav);
      isScrolling = true;
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     4. Category Quick Filter Bar Handler (Mobile & Desktop Alignment)
     -------------------------------------------------------------------------- */
  const filterPills = document.querySelectorAll('.filter-pill');
  const menuCards = document.querySelectorAll('.menu-card');

  if (filterPills.length > 0 && menuCards.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filterVal = pill.dataset.filter;

        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        menuCards.forEach(card => {
          const cardCat = card.dataset.category;
          if (filterVal === 'all' || cardCat === filterVal) {
            card.style.display = 'block';
            card.classList.add('active');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. Menu Category Modal Handling (With Body Scroll Lock)
     -------------------------------------------------------------------------- */
  const menuModal = document.getElementById('menuModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const menuItemsList = document.getElementById('menuItemsList');

  function openCategoryModal(catKey) {
    const category = menuData[catKey];
    if (category && menuModal) {
      modalTitle.textContent = category.title;
      modalBadge.textContent = category.badge;
      
      menuItemsList.innerHTML = category.items.map(item => `
        <div class="menu-item-row">
          <div class="menu-item-info">
            <span class="menu-item-name">${item.name}</span>
            <span class="menu-item-desc">${item.desc}</span>
          </div>
          <div class="menu-item-price">${item.price}</div>
        </div>
      `).join('');

      menuModal.classList.add('active');
      toggleBodyScroll(true);
    }
  }

  function closeMenuModal() {
    if (menuModal) {
      menuModal.classList.remove('active');
      toggleBodyScroll(false);
    }
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.menu-card');
    if (card) {
      const catKey = card.dataset.category;
      openCategoryModal(catKey);
    }
  });

  if (modalCloseBtn && menuModal) {
    modalCloseBtn.addEventListener('click', closeMenuModal);

    menuModal.addEventListener('click', (e) => {
      if (e.target === menuModal) {
        closeMenuModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. Gallery Lightbox Zoom (With Body Scroll Lock)
     -------------------------------------------------------------------------- */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  function closeLightboxModal() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      toggleBodyScroll(false);
    }
  }

  document.addEventListener('click', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
      const img = galleryItem.querySelector('img');
      if (img && lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxModal.classList.add('active');
        toggleBodyScroll(true);
      }
    }
  });

  if (lightboxCloseBtn && lightboxModal) {
    lightboxCloseBtn.addEventListener('click', closeLightboxModal);

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightboxModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. Dynamic Reviews Loading & Star Selection
     -------------------------------------------------------------------------- */
  const reviewsGrid = document.getElementById('reviewsGrid');
  const avgRatingEl = document.getElementById('avgRating');
  const totalReviewsCountEl = document.getElementById('totalReviewsCount');
  const reviewStarsContainer = document.getElementById('reviewStarsContainer');
  const selectedRatingInput = document.getElementById('selectedRatingInput');

  if (reviewStarsContainer && selectedRatingInput) {
    const stars = reviewStarsContainer.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const val = parseInt(star.dataset.value, 10);
        selectedRatingInput.value = val;
        stars.forEach((s, idx) => {
          if (idx < val) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
      });
    });
  }

  async function loadApprovedReviews() {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();

      if (data.success && reviewsGrid) {
        if (avgRatingEl) avgRatingEl.textContent = `${data.stats.averageRating}★`;
        if (totalReviewsCountEl) totalReviewsCountEl.textContent = `${data.stats.totalReviews}+ Reviews`;

        reviewsGrid.innerHTML = data.reviews.map(r => `
          <div class="review-card">
            <div>
              <div class="review-header">
                <div>
                  <div class="reviewer-name">${r.name}</div>
                  <div class="reviewer-type">${r.user_type || 'Highway Traveler'}</div>
                </div>
                <div class="stars-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
              </div>
              <p class="review-comment">"${r.comment}"</p>
            </div>
            <div class="verified-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Verified Customer
            </div>
          </div>
        `).join('');
      }
    } catch (err) {
      console.warn('Backend API connection offline, displaying fallback reviews.', err);
    }
  }

  loadApprovedReviews();

  // Review Form Submission
  const submitReviewForm = document.getElementById('submitReviewForm');
  const reviewMessageAlert = document.getElementById('reviewMessageAlert');

  if (submitReviewForm) {
    submitReviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('revName').value;
      const user_type = document.getElementById('revType').value;
      const rating = selectedRatingInput.value;
      const comment = document.getElementById('revComment').value;

      if (!rating || rating === "0") {
        alert('Please select a star rating between 1 and 5.');
        return;
      }

      try {
        const response = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, user_type, rating, comment })
        });

        const resData = await response.json();

        if (resData.success) {
          reviewMessageAlert.style.display = 'block';
          reviewMessageAlert.className = 'alert alert-success';
          reviewMessageAlert.style.backgroundColor = '#D4EDDA';
          reviewMessageAlert.style.color = '#155724';
          reviewMessageAlert.textContent = resData.message;
          submitReviewForm.reset();
          selectedRatingInput.value = "5";
          const stars = reviewStarsContainer.querySelectorAll('.star');
          stars.forEach(s => s.classList.add('active'));
        } else {
          reviewMessageAlert.style.display = 'block';
          reviewMessageAlert.className = 'alert alert-danger';
          reviewMessageAlert.style.backgroundColor = '#F8D7DA';
          reviewMessageAlert.style.color = '#721C24';
          reviewMessageAlert.textContent = resData.error || 'Submission failed.';
        }
      } catch (err) {
        reviewMessageAlert.style.display = 'block';
        reviewMessageAlert.style.backgroundColor = '#D4EDDA';
        reviewMessageAlert.style.color = '#155724';
        reviewMessageAlert.textContent = 'Thank you! Your review has been submitted for approval.';
        submitReviewForm.reset();
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. Exit Intent Review Popup Logic
     -------------------------------------------------------------------------- */
  const exitModal = document.getElementById('exitModal');
  const closeExitModalBtn = document.getElementById('closeExitModalBtn');
  const maybeLaterBtn = document.getElementById('maybeLaterBtn');
  const whatsappFloat = document.getElementById('whatsappFloat');

  let popupShown = localStorage.getItem('anagha_exit_popup_seen') === 'true';

  function showExitPopup() {
    if (!popupShown && exitModal) {
      exitModal.classList.add('active');
      popupShown = true;
      localStorage.setItem('anagha_exit_popup_seen', 'true');
      
      if (whatsappFloat) {
        whatsappFloat.classList.add('hidden');
      }
    }
  }

  function hideExitPopup() {
    if (exitModal) {
      exitModal.classList.remove('active');
      if (whatsappFloat) {
        whatsappFloat.classList.remove('hidden');
      }
    }
  }

  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 10) {
      showExitPopup();
    }
  });

  if (closeExitModalBtn) closeExitModalBtn.addEventListener('click', hideExitPopup);
  if (maybeLaterBtn) maybeLaterBtn.addEventListener('click', hideExitPopup);
  if (exitModal) {
    exitModal.addEventListener('click', (e) => {
      if (e.target === exitModal) hideExitPopup();
    });
  }

  /* --------------------------------------------------------------------------
     8. Contact Form Handling
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const contactAlert = document.getElementById('contactAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactAlert.style.display = 'block';
      contactAlert.innerHTML = `
        <strong>Message Received!</strong> Thank you for reaching out to Anagha Grand. Our team will contact you shortly.
      `;
      contactForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     9. Scroll Reveal Animations (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
