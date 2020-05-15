import Mmenu from 'mmenu-js';

(function initMobileMenu(){
	let menuArray = mobileLinks || null;
	console.log(menuArray)

	new Mmenu( "#mmenu", {
		"extensions": [
		"pagedim-black"
		],
		"navbar": {
			"title": "Мой Бизнес"
		},
		"navbars": [
		{
			"position": "bottom",
			"content": mobileLinks
		}
		]
	});
})();