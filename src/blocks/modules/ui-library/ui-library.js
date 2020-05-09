import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/ru';

document.addEventListener("DOMContentLoaded", ready);

function ready() {

	(function() {

		const calendarArrow = document.querySelectorAll('.calendar');

		if (calendarArrow) {
			for(let i = 0; i < calendarArrow.length; i++) {
				let calendar = new Calendar(calendarArrow[i], {
					plugins: [ dayGridPlugin ],
					locale: 'ru',
					weekNumberCalculation: 'ISO',
					header: {
						left:   'prev, title, next',
						center: '',
						right:  'today'
					}
				});

				calendar.render();
			}
		}

	})();

	// Выпадение дроп-карточки

	(function () {
		const dropArrow = document.querySelectorAll('.drop-card__header');

		if (dropArrow) {
			for (let i = 0; i < dropArrow.length; i++) {
				dropArrow[i].addEventListener('click', function() {
					this.parentNode.classList.toggle('drop-card--open');
					console.log(this.parentNode)
				})

				dropArrow[i].addEventListener('keydown', function() {
					if (event.code == 'Space') {
						event.preventDefault();
						this.parentNode.classList.toggle('drop-card--open');
					}
				})
			}
		}

	})();

	// Переключения radio с клавиатуры

	(function () {
		const radio = document.querySelectorAll('.radio');

		if (radio) {
			for (let i = 0; i < radio.length; i++) {
				radio[i].addEventListener('keydown', setCustomEvent);
			}
		}

		function setCustomEvent () {
			if (event.code == 'Space') {
				event.preventDefault();
				this.querySelector('input').checked = true;
			}
		}

	})();

	// Переключения checkbox с клавиатуры

	(function () {
		const radio = document.querySelectorAll('.checkbox');

		if (radio) {
			for (let i = 0; i < radio.length; i++) {
				radio[i].addEventListener('keydown', setCustomEvent);
			}
		}

		function setCustomEvent () {
			if (event.code == 'Space') {
				event.preventDefault();
				if (this.querySelector('input'). checked == true) {
					this.querySelector('input').checked = false;
				} else {
					this.querySelector('input').checked = true;
				}
				
			}
		}

	})();

	// Переключение табов контента

	(function toggleContentTabs() {
		const units = document.querySelectorAll('.units');

		if (units) {

			for (let n = 0; n < units.length; n++) {
				let tabs = units[n].querySelectorAll('.tabs__link');
				let blocks = units[n].querySelectorAll('.units__block');

				for(let z = 0; z < tabs.length; z++) {
					tabs[z].addEventListener('click', function (e){
						e.preventDefault();
						console.log(z);
						select(tabs, blocks, z);
					});
				}
				
			}
		}

	})();

	function select (tabs, blocks, n) {
		for (let m = 0; m < tabs.length; m++) {
			tabs[m].classList.remove('tabs__link--active');
			blocks[m].classList.remove('units__block--active');
		}
		tabs[n].classList.add('tabs__link--active');
		blocks[n].classList.add('units__block--active');
	}
}

