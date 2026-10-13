// Native details remain available if JavaScript or modal dialogs are unavailable.
(() => {
  const dialog = document.querySelector('#publication-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const content = dialog.querySelector('.dialog-content');
  const closeButton = dialog.querySelector('.dialog-close');
  let opener = null;
  let backdropPress = false;

  function openPublication(article, summary) {
    if (dialog.open) return;
    const title = document.createElement('h2');
    title.id = 'dialog-paper-title';
    title.textContent = article.querySelector('h4').textContent;
    const abstractHeading = document.createElement('h3');
    abstractHeading.textContent = summary.querySelector('span').textContent;
    const abstract = document.createElement('section');
    abstract.className = 'dialog-abstract';
    abstract.append(abstractHeading, article.querySelector('.abstract-content').cloneNode(true));
    content.replaceChildren(
      title,
      article.querySelector('.authors').cloneNode(true),
      article.querySelector('.venue').cloneNode(true),
      article.querySelector('.paper-links').cloneNode(true),
      abstract
    );
    opener = summary;
    dialog.showModal();
    document.documentElement.classList.add('publication-modal-open');
    dialog.scrollTop = 0;
    closeButton.focus({ preventScroll: true });
  }

  document.querySelectorAll('.publication-list article').forEach(article => {
    const summary = article.querySelector('.publication-abstract summary');
    if (!summary) return;
    summary.setAttribute('aria-haspopup', 'dialog');
    summary.setAttribute('aria-controls', dialog.id);
    article.classList.add('publication-interactive');
    summary.addEventListener('click', event => {
      event.preventDefault();
      openPublication(article, summary);
    });
    article.addEventListener('click', event => {
      if (event.target.closest('a, button, summary, details')) return;
      if (window.getSelection()?.toString()) return;
      openPublication(article, summary);
    });
  });

  function outsidePanel(event) {
    const rect = dialog.getBoundingClientRect();
    return event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom);
  }
  dialog.addEventListener('pointerdown', event => { backdropPress = outsidePanel(event); });
  dialog.addEventListener('click', event => {
    if (backdropPress && outsidePanel(event)) dialog.close();
    backdropPress = false;
  });
  closeButton.addEventListener('click', () => dialog.close());
  // Escape and the close button both use the native dialog close lifecycle.
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('publication-modal-open');
    backdropPress = false;
    opener?.focus({ preventScroll: true });
    opener = null;
  });
})();
