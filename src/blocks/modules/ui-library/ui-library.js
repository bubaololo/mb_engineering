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


}

