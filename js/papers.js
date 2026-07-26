/* ==========================================================================
   BioNotes — Previous Papers page script
   Renders rows from PAPERS (js/data.js) into the #papersTable body.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const papersBody = document.querySelector('#papersTable tbody');
  if (!papersBody) return;

  PAPERS.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="mono">${p.year}</td>
      <td>${p.exam}</td>
      <td>${p.sem}</td>
      <td><a href="#" class="dl-link" onclick="return false;">Download PDF</a></td>
    `;
    papersBody.appendChild(tr);
  });
});
