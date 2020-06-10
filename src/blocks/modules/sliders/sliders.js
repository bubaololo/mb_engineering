import Swiper from 'swiper';

(function () {
	const mySwiper = new Swiper ('.slider-front__container', {
		autoHeight: true,
		pagination: {
			el: '.slider-front__fraction',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<div class="slider-front__now ' + currentClass + '"></div>' +
				'<div class="slider-front__sep"></div>' +
				'<div class="slider-front__all ' + totalClass + '"></div>';
			}
		},
		navigation: {
			nextEl: '.slider-front__btn--next',
			prevEl: '.slider-front__btn--prev',
			disabledClass: 'slider-front__btn--disabled'
		},
	})
})();

(function () {
	const mySwiper = new Swiper ('.slider-page__container', {
		autoHeight: true,
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