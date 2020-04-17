import Mmenu from 'mmenu-js';

document.addEventListener(
	"DOMContentLoaded", () => {
		new Mmenu( "#m-menu", {
			"extensions": [
			"pagedim-black"
			],
			"navbars": [
			{
				"position": "bottom",
				"content": [
				"<a class='fa fa-envelope' href='#/'></a>",
				"<a class='fa fa-twitter' href='#/'></a>",
				"<a class='fa fa-facebook' href='#/'></a>"
				]
			}
			]
		});
	}
	);