const checkbox = document.getElementById('theme-toggle');

function toggleTheme() {
	checkbox.checked ? setTheme('dark') : setTheme('light');
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
