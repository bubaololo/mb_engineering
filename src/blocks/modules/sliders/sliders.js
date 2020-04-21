import Swiper from 'swiper';

(function () {
	const mySwiper = new Swiper ('.slider-page__container', {
		// loop: true,
		slideActiveClass: 'lalala',
		// pagination: {
		// 	el: '.swiper-pagination',
		// },
		navigation: {
			nextEl: '.slider-page__btn--next',
			prevEl: '.slider-page__btn--prev',
			disabledClass: 'slider-page__btn--disabled'
		},
	})
})();