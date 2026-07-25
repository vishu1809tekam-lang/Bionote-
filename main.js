/* ==========================================================================
   BioNotes — Shared site script
   Loaded on every page. Handles the mobile nav toggle, marking the active
   nav link for the current page, the footer year, and the nav search box
   (which sends the user to search.html with their query).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile hamburger nav ---------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------- Active nav link ----------
     Each <body> carries a data-page attribute (e.g. data-page="notes").
     We match it against each nav link's data-page to highlight the right one. */
  const currentPage = document.body.getAttribute('data-page');
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-page') === currentPage);
      // Close mobile menu after a link is tapped
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav search box ----------
     Typing and pressing Enter sends the user to search.html?q=term.
     search.html reads the query param and renders results itself. */
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const term = searchInput.value.trim();
        if (term) {
          window.location.href = 'search.html?q=' + encodeURIComponent(term);
        }
      }
    });
  }

});
