const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
	toggleTheme();
});

function toggleTheme() {
	toggle.checked ? setTheme('dark') : setTheme('light');
}

function setTheme(themeName) {
	document
		.getElementById('theme-link')
		.setAttribute('href', `theme-${themeName}.css`);
}

// Setting theme preference in localStorage
function savingThemePreference(themeName) {
	localStorage.setItem('theme', themeName);
}

window.onload = function () {
	const savedTheme = localStorage.getItem('theme') || 'light';

	setTheme(savedTheme);
	checkbox.checked = savedTheme === 'dark';
};
