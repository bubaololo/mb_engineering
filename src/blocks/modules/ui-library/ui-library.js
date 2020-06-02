import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import ruLocale from '@fullcalendar/core/locales/ru';

document.addEventListener("DOMContentLoaded", ready);

function ready() {
	// function reInitCalendar(calendar) {
	// 	calendar.destroy();
	// 	calendar.render();
	// }

	(function initCalendar() {

		const calendarItem = document.querySelector('.calendar');

		// if (calendarArrow) {
		// 	for(let i = 0; i < calendarArrow.length; i++) {

		// 	}
		// }

		if (calendarItem) {
			let calendar = new Calendar(calendarItem, {
				plugins: [ dayGridPlugin, listPlugin ],
				defaultView: checkType(),
				locale: ruLocale,
				weekNumberCalculation: 'ISO',
				contentHeight: 'auto',
				header: {
					left:   'prev, title, next',
					center: '',
					right:  'today'
				},
				events: [
				{
					title: '12.00 Очень важное мероприятие',
					start: '2020-05-15',
					end: '2020-05-20',
				},
				{
					title: '12.00 Тренинг корпорации МСП «Генерация бизнес-идеи» Светлогорск',
					start: '2020-05-19',
					end: '2020-06-02',
				}
				],
				windowResize: function(view) {
					if (document.documentElement.clientWidth > 1200) {
						this.changeView('dayGridMonth');
					} else {
						this.changeView('listWeek');
					}
				}
			});

			function checkType() {
				if (document.documentElement.clientWidth > 1200) {
					return 'dayGridMonth';
				} else {
					return 'listWeek';
				}
			}

			calendar.render();

			(function toggleType() {
				const btnMounth = document.querySelector('.tabs__btn--mounth');
				const btnWeek = document.querySelector('.tabs__btn--week');

				if (btnMounth && btnWeek) {
					btnMounth.addEventListener('click', function(e) {
						e.preventDefault();
						btnWeek.classList.remove('tabs__btn--active');
						this.classList.add('tabs__btn--active');
						calendar.changeView('dayGridMonth');
					});

					btnWeek.addEventListener('click', function(e) {
						e.preventDefault();
						btnMounth.classList.remove('tabs__btn--active');
						this.classList.add('tabs__btn--active');
						calendar.changeView('listWeek');
					});
				}

			})();
		}		

	})();

	// Выпадение дроп-карточки

	(function () {
		const dropArrow = document.querySelectorAll('.drop-card__header');

		if (dropArrow) {
			for (let i = 0; i < dropArrow.length; i++) {
				dropArrow[i].addEventListener('click', function() {
					this.parentNode.classList.toggle('drop-card--open');
				})

				dropArrow[i].addEventListener('keydown', function() {
					if (event.code == 'Enter') {
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

		function select (tabs, blocks, n) {
			for (let m = 0; m < tabs.length; m++) {
				tabs[m].classList.remove('tabs__link--active');
				blocks[m].classList.remove('units__block--active');
			}
			tabs[n].classList.add('tabs__link--active');
			blocks[n].classList.add('units__block--active');
		}

	})();

	// Переключение вида списка книг

	(function toogleBookList() {
		const btnList = document.querySelector('.tab-btns__btn--list');
		const btnCards = document.querySelector('.tab-btns__btn--cards');
		const list = document.querySelector('.books');

		if (btnList && btnCards && list) {
			btnList.addEventListener('click', function(e) {
				btnCards.classList.remove('tab-btns__btn--active');
				this.classList.add('tab-btns__btn--active');
				e.preventDefault();
				list.classList.remove('books--cards');
			});

			btnCards.addEventListener('click', function(e) {
				btnList.classList.remove('tab-btns__btn--active');
				this.classList.add('tab-btns__btn--active');
				e.preventDefault();
				list.classList.add('books--cards');
			})
		}
	})();
}

