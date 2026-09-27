// Switch the whole page between dark and light color modes
(() => {
  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  };

  setTheme(localStorage.getItem('theme') || 'light');

  document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
    button.addEventListener('click', () => {
      setTheme(button.getAttribute('data-bs-theme-value'));
    });
  });
})();
