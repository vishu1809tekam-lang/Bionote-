/* ==========================================================================
   BioNotes — Notes page script
   Renders the note cards from NOTES (js/data.js) into #notesGrid and
   handles the expand/collapse of each card's topic list.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const notesGrid = document.getElementById('notesGrid');
  if (!notesGrid) return;

  NOTES.forEach((n, i) => {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
      <div class="tag">${n.tag}</div>
      <h3>${n.title}</h3>
      <p>${n.desc}</p>
      <div class="topics" id="topics-${i}">
        <ul>${n.topics.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    `;
    // Tapping a card expands/collapses its topic list
    card.addEventListener('click', () => {
      document.getElementById(`topics-${i}`).classList.toggle('open');
    });
    notesGrid.appendChild(card);
  });
});
