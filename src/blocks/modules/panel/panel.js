// Скрывание изображений
(function toggleImage(){

	const btn = document.querySelector('#toggle-image');
	const imageArray = document.querySelectorAll('.image');

	if (btn && imageArray) {
		btn.addEventListener('click', toggle);
	}

	function toggle() {
		let i;
		for(i = 0; i < imageArray.length; i++) {
			imageArray[i].classList.toggle('image--hide');
		}
	}

})();

// Перключаем тему
(function toggleTheme(){

	const body = document.querySelector('.body');
	const btn = document.querySelector('#toggle-theme');
	let localVar = localStorage.getItem("theme");

	if (body && btn) {
		btn.addEventListener('click', toggle);
	}

	(function initTheme() {

		if (localVar == 'light'||false||0) {
			localStorage.setItem("theme","light");
			body.classList.add('body--light');
		} else {
			body.classList.add('body--dark');
		}
	})();

	function toggle(){
		if (localVar == 'light') {
			localStorage.setItem("theme","dark");
			localVar = localStorage.getItem("theme");
			body.classList.remove('body--light');
			body.classList.add('body--dark');
		} else {
			localStorage.setItem("theme","light");
			localVar = localStorage.getItem("theme");
			body.classList.remove('body--dark');
			body.classList.add('body--light');
		}
	}

})();

// localStorage.setItem("myNumber","111");