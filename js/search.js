/* ==========================================================================
   BioNotes — Search page script
   Reads the ?q= query parameter from the URL, searches across NOTES,
   QUESTIONS and PRACTICALS (js/data.js), and renders matching results.
   Also powers the search box on this page itself, so a user can refine
   their query without going back to another page first.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const resultsBox = document.getElementById('search-results');
  const queryHeading = document.getElementById('searchQueryText');
  const pageSearchInput = document.getElementById('searchInput');
  if (!resultsBox) return;

  function runSearch(term) {
    term = term.trim().toLowerCase();

    if (queryHeading) {
      queryHeading.textContent = term ? `Results for "${term}"` : 'Type a keyword to search';
    }

    resultsBox.innerHTML = '';
    if (!term) return;

    let found = [];

    NOTES.forEach(n => {
      const hay = (n.title + ' ' + n.desc + ' ' + n.topics.join(' ')).toLowerCase();
      if (hay.includes(term)) found.push({ tag: 'Notes', title: n.title, desc: n.desc, href: 'notes.html' });
    });
    QUESTIONS.forEach((q, i) => {
      if (q.q.toLowerCase().includes(term)) found.push({ tag: 'MCQ', title: `Question ${i + 1}`, desc: q.q, href: 'mcqs.html' });
    });
    PRACTICALS.forEach(p => {
      const hay = (p.title + ' ' + p.desc + ' ' + p.meta).toLowerCase();
      if (hay.includes(term)) found.push({ tag: 'Practical', title: p.title, desc: p.desc, href: 'practicals.html' });
    });

    if (!found.length) {
      resultsBox.innerHTML = '<p class="no-results">No matches. Try a different keyword like "PCR", "immunity", or "cell".</p>';
      return;
    }

    found.forEach(f => {
      const div = document.createElement('div');
      div.className = 'result-item';
      div.style.cursor = 'pointer';
      div.innerHTML = `<div class="rtag">${f.tag}</div><h4>${f.title}</h4><p style="font-size:13.5px; color:var(--ink-soft); margin-top:4px;">${f.desc}</p>`;
      div.addEventListener('click', () => { window.location.href = f.href; });
      resultsBox.appendChild(div);
    });
  }

  // Run search immediately based on ?q= in the URL
  const params = new URLSearchParams(window.location.search);
  const initialTerm = params.get('q') || '';
  if (pageSearchInput) pageSearchInput.value = initialTerm;
  runSearch(initialTerm);

  // Let the user refine the search directly on this page
  if (pageSearchInput) {
    let debounce;
    pageSearchInput.addEventListener('input', (e) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => runSearch(e.target.value), 150);
    });
  }
});
