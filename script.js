const themeDots = document.querySelectorAll('.theme-dot');
let theme = localStorage.getItem('theme');

if(theme === null) {
	setTheme('light');
} else {
	setTheme(theme);
}

themeDots.forEach(e => e.addEventListener('click', function() {
	let mode = this.dataset.mode;
	setTheme(mode);
}))

function setTheme(mode) {
	if(mode === 'light') {
		document.querySelector('#theme-style').href = './styles/style.css';
	}
	if(mode === 'blue') {
		document.querySelector('#theme-style').href = './styles/blue.css';
	}
	if(mode === 'green') {
		document.querySelector('#theme-style').href = './styles/green.css';
	}
	if(mode === 'purple') {
		document.querySelector('#theme-style').href = './styles/purple.css';
	}

	localStorage.setItem('theme', mode);

}