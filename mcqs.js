/* ==========================================================================
   BioNotes — MCQs page script
   Renders the quiz from QUESTIONS (js/data.js) into #quizPanel and handles
   checking answers + scoring.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const quizPanel = document.getElementById('quizPanel');
  if (!quizPanel) return;

  // Render each question with its options
  QUESTIONS.forEach((item, qi) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'q';
    qDiv.innerHTML = `
      <div class="q-num">Question ${qi + 1} of ${QUESTIONS.length}</div>
      <div class="q-text">${item.q}</div>
      <div class="options">
        ${item.options.map((opt, oi) => `
          <label class="option" data-qi="${qi}" data-oi="${oi}">
            <input type="radio" name="q${qi}" value="${oi}">
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
    `;
    quizPanel.appendChild(qDiv);
  });

  // Check-answers button + score display
  const actions = document.createElement('div');
  actions.className = 'quiz-actions';
  actions.innerHTML = `<button class="btn btn-primary" id="checkAnswersBtn">Check answers</button><span class="score-box" id="scoreBox"></span>`;
  quizPanel.appendChild(actions);

  document.getElementById('checkAnswersBtn').addEventListener('click', () => {
    let score = 0;
    QUESTIONS.forEach((item, qi) => {
      const selected = quizPanel.querySelector(`input[name="q${qi}"]:checked`);
      const optionLabels = quizPanel.querySelectorAll(`.option[data-qi="${qi}"]`);
      optionLabels.forEach(label => {
        const oi = Number(label.dataset.oi);
        label.classList.remove('correct', 'incorrect');
        if (oi === item.answer) label.classList.add('correct');
        else if (selected && Number(selected.value) === oi) label.classList.add('incorrect');
      });
      if (selected && Number(selected.value) === item.answer) score++;
    });
    document.getElementById('scoreBox').textContent = `Score: ${score} / ${QUESTIONS.length}`;
  });
});
