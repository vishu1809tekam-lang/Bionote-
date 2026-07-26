/* ==========================================================================
   BioNotes — Contact page script
   Builds a mailto link from the contact form fields, same behavior as the
   original single-page version.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const msg = document.getElementById('cMsg').value;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@bionotes.example?subject=${subject}&body=${body}`;

    const status = document.getElementById('formStatus');
    if (status) status.style.display = 'block';
  });
});
