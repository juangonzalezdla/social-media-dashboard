const body = document.querySelector('body');
const theme = document.getElementById('theme');

theme.addEventListener('click', () => {
  body.classList.toggle('light');

  // Guardamos el modo en localstorage.
	if (body.classList.contains('light')) {
		localStorage.setItem('light-mode', 'true');
	} else {
		localStorage.setItem('light-mode', 'false');
	}
});

// Obtenemos el modo actual.
if (localStorage.getItem('light-mode') === 'true') {
	body.classList.add('light');
} else {
  body.classList.remove('light');
}