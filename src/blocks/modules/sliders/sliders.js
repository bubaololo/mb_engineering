import Swiper from 'swiper';

(function () {
	const mySwiper = new Swiper ('.slider-page__container', {
		// slideActiveClass: 'lalala',
		effect: 'fade',
		pagination: {
			el: '.slider-page__fraction',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<div class="slider-page__now ' + currentClass + '"></div>' +
				'<div class="slider-page__sep"></div>' +
				'<div class="slider-page__all ' + totalClass + '"></div>';
			}
		},
		navigation: {
			nextEl: '.slider-page__btn--next',
			prevEl: '.slider-page__btn--prev',
			disabledClass: 'slider-page__btn--disabled'
		},
	})
})();