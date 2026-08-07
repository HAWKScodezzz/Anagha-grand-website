document.addEventListener('DOMContentLoaded', () => {
  const loginSection = document.getElementById('loginSection');
  const dashboardSection = document.getElementById('dashboardSection');
  const logoutBtn = document.getElementById('logoutBtn');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const loginError = document.getElementById('loginError');
  const reviewsTableBody = document.getElementById('reviewsTableBody');

  const statPending = document.getElementById('statPending');
  const statApproved = document.getElementById('statApproved');
  const statRejected = document.getElementById('statRejected');

  let currentFilter = 'all';
  let cachedReviews = [];

  // Check Auth State on Page Load
  async function checkAuth() {
    try {
      const res = await fetch('/api/admin/check-auth');
      const data = await res.json();

      if (data.isAuthenticated) {
        showDashboard();
      } else {
        showLogin();
      }
    } catch (err) {
      showLogin();
    }
  }

  function showLogin() {
    loginSection.style.display = 'block';
    dashboardSection.style.display = 'none';
    logoutBtn.style.display = 'none';
  }

  function showDashboard() {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    logoutBtn.style.display = 'inline-block';
    fetchAdminReviews();
  }

  // Login Form Submit
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const password = document.getElementById('adminPass').value;

      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        });
        const data = await res.json();

        if (data.success) {
          loginError.style.display = 'none';
          showDashboard();
        } else {
          loginError.style.display = 'block';
          loginError.textContent = data.error || 'Invalid Password';
        }
      } catch (err) {
        loginError.style.display = 'block';
        loginError.textContent = 'Server connection error.';
      }
    });
  }

  // Logout Button
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await fetch('/api/admin/logout', { method: 'POST' });
      showLogin();
    });
  }

  // Fetch Reviews from Admin API
  async function fetchAdminReviews() {
    try {
      const res = await fetch('/api/admin/reviews');
      const data = await res.json();

      if (data.success) {
        cachedReviews = data.reviews;
        updateStats();
        renderTable();
      }
    } catch (err) {
      console.error('Error fetching admin reviews', err);
    }
  }

  function updateStats() {
    const pending = cachedReviews.filter(r => r.status === 'pending').length;
    const approved = cachedReviews.filter(r => r.status === 'approved').length;
    const rejected = cachedReviews.filter(r => r.status === 'rejected').length;

    if (statPending) statPending.textContent = pending;
    if (statApproved) statApproved.textContent = approved;
    if (statRejected) statRejected.textContent = rejected;
  }

  function renderTable() {
    let filtered = cachedReviews;
    if (currentFilter !== 'all') {
      filtered = cachedReviews.filter(r => r.status === currentFilter);
    }

    if (filtered.length === 0) {
      reviewsTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: var(--color-text-muted);">No reviews found for this status filter.</td></tr>`;
      return;
    }

    reviewsTableBody.innerHTML = filtered.map(r => `
      <tr>
        <td><strong>#${r.id}</strong></td>
        <td>${r.name}</td>
        <td><small>${r.user_type || 'Traveler'}</small></td>
        <td><span style="color:var(--color-mustard); font-weight:bold;">${'★'.repeat(r.rating)}</span></td>
        <td style="max-width: 300px; font-style: italic;">"${r.comment}"</td>
        <td><span class="status-badge status-${r.status}">${r.status}</span></td>
        <td>
          ${r.status !== 'approved' ? `<button class="action-btn btn-approve" onclick="updateReviewStatus(${r.id}, 'approved')">Approve</button>` : ''}
          ${r.status !== 'rejected' ? `<button class="action-btn btn-reject" onclick="updateReviewStatus(${r.id}, 'rejected')">Reject</button>` : ''}
          <button class="action-btn btn-delete" onclick="deleteReview(${r.id})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  // Filter Buttons Event Listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderTable();
    });
  });

  // Global functions exposed for onclick handlers
  window.updateReviewStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        fetchAdminReviews();
      }
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  window.deleteReview = async (id) => {
    if (!confirm(`Are you sure you want to delete review #${id}?`)) return;
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchAdminReviews();
      }
    } catch (err) {
      alert('Failed to delete review.');
    }
  };

  checkAuth();
});
