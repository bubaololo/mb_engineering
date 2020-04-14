import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/ru';

(function() {

	document.addEventListener('DOMContentLoaded', function() {
		var calendarEl = document.querySelector('.calendar');

		var calendar = new Calendar(calendarEl, {
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
	});

})();