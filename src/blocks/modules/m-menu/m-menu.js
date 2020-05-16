import Mmenu from 'mmenu-js';

(function initMobileMenu(){
	let menuArray = mobileLinks || null;

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
			"content": mobileContacts
		},
		{
			"position": "bottom",
			"content": mobileLinks
		}
		]
	});
})();