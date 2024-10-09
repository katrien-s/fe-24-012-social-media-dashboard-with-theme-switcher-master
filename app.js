function setTheme(themeName) {
	document
		.getElementById('theme-link')
		.setAttribute('href', `theme-${themeName}.css`);
}
