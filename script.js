const theme = document.getElementById('theme');

theme.addEventListener('change', () => {
  document.body.classList.toggle('light');
});