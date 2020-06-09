import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import ruLocale from '@fullcalendar/core/locales/ru';

document.addEventListener("DOMContentLoaded", ready);

function ready() {
	const linkAll = '../events-all.json';
	const linkMission = '../events-mission.json';
	const linkLearn = '../events-learn.json';
	const linkPresent = '../events-present.json';

	function initCalendar(linkType) {

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
				events: linkType,
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

	};

	initCalendar(linkAll);
}

