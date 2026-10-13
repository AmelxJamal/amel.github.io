// Motion is decorative; all content remains usable without JavaScript.
(() => {
  const button = document.querySelector('.motion-toggle');
  if (!button) return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pausedByUser = false;
  try {
    pausedByUser = localStorage.getItem('amel-motion-paused') === 'true';
  } catch (_) { /* Storage may be unavailable in private or file previews. */ }

  function updateMotion() {
    const paused = preference.matches || pausedByUser;
    document.documentElement.dataset.motionPaused = String(paused);
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = preference.matches ? 'Motion reduced' : paused ? 'Resume motion' : 'Pause motion';
    button.disabled = preference.matches;
    button.title = preference.matches ? 'Motion is disabled by your device preferences' : '';
  }

  button.addEventListener('click', () => {
    pausedByUser = !pausedByUser;
    try {
      localStorage.setItem('amel-motion-paused', String(pausedByUser));
    } catch (_) { /* The control still works without persistent storage. */ }
    updateMotion();
  });
  preference.addEventListener('change', updateMotion);
  updateMotion();
  button.hidden = false;
})();
