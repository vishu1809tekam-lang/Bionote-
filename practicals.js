/* ==========================================================================
   BioNotes — Practicals page script
   Renders the practical list from PRACTICALS (js/data.js) into #pracList.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const pracList = document.getElementById('pracList');
  if (!pracList) return;

  PRACTICALS.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'prac';
    div.innerHTML = `
      <div class="prac-index">${String(i + 1).padStart(2, '0')}</div>
      <div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="meta">${p.meta}</div>
      </div>
    `;
    pracList.appendChild(div);
  });
});
