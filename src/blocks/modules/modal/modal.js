import magnificPopup from 'magnific-popup';

(function(){
	$.ajax({
		url: '/piece.json',
		type: "../events.json",
		dataType: "json",
		success: function (data) {
			alert(data);
		}
	});
})();


// const events = [
// {
// 	"id": 0,
// 	"title": "Первое мероприятие",
// 	"extendedProps": "",
// 	"eventConstraint": "",
// 	"eventOverlap": "",
// 	"eventAllow": "",
// 	"eventBackgroundColor": "",
// 	"eventTextColor": "",
// 	"eventClassNames": "",
// 	"eventContent": "<div class='text'><h3>Заголовок первого мероприятия</h3><p>Большой текст-описание первого мероприятия</p></div>"
// },
// {
// 	"id": 1,
// 	"title": "Второе мероприятие",
// 	"extendedProps": "",
// 	"eventConstraint": "",
// 	"eventOverlap": "",
// 	"eventAllow": "",
// 	"eventBackgroundColor": "",
// 	"eventTextColor": "",
// 	"eventClassNames": "",
// 	"eventContent": '<div class="modal text"><h4>Онлайн-тренинг «Возможности маркетплейсов для малого бизнеса: на примере торговой платформы Wildberries»</h4><a href="" class="btn btn--60"><span>Страница мероприятия</span></a><p>В кризисной ситуации, когда розничные точки закрылись практически в один день, компании почти полностью переместили свою деятельность в Интернет. И для малого бизнеса этот путь стал единственным способом выжить Однако одномоментно сделать собственный продающий сайт и привлечь туда клиентов очень сложно. Выходом для малого и среднего бизнеса стало сотрудничество с маркетплейсами. В число крупнейших из них входит торговая платформа Wildberries.</p><p><b>На вебинаре разберём вопросы:</b></p><ul><li>могут ли маркетплейсы решить проблемы, вызванные кризисом?</li><li>сотрудничество с Wildberries: как стать партнером крупнейшего продавца Рунета?</li><li>возможности торговой платформы Wildberries для управления поставками и продажами.</li><li>какие инструменты важно использовать для успешных продаж в онлайн-магазине?</li><li>на какую поддержку могут рассчитывать предприниматели.</li></ul><p>Ответы на эти и другие вопросы о работе с маркетплейсом Wildberries вы сможете найти, став участником онлайн-тренинга, организованного совместно с АО «Корпорацией МСП» и Wildberries. Вы сможете рассмотреть ситуацию со всех сторон. В числе спикеров будут и представитель Wildberries, и предприниматель, который с ними успешно сотрудничает, и представители инфраструктуры поддержки предпринимателей.</p></div>'
// },
// {
// 	"id": 2,
// 	"title": "Третье мероприятие",
// 	"extendedProps": "",
// 	"eventConstraint": "",
// 	"eventOverlap": "",
// 	"eventAllow": "",
// 	"eventBackgroundColor": "",
// 	"eventTextColor": "",
// 	"eventClassNames": "",
// 	"eventContent": "<div class='text'><h3>Заголовок третьего мероприятия</h3><p>Большой текст-описание третьего мероприятия</p></div>"
// }
// ]

$(document).ready(function() {

	// $('.slider-front__more').magnificPopup({
	// 	items: [
	// 	{
	// 		src: events[1].eventContent,
	// 		type: 'inline'
	// 	},
	// 	],
	// 	callbacks: {
	// 		beforeOpen: function() {
	// 			console.log(this);
	// 		},
	// 	}
	// });

	// $('.slider-front__more').magnificPopup({
	// 	// type: 'inline',
	// 	items: [
	// 	{
	// 		// src: events[1].eventContent,
	// 		src: events[$(this).data('data-id')],
	// 		type: 'inline'
	// 	},
	// 	],
	// 	// callbacks: {
	// 	// 	beforeOpen: function() {
	// 	// 		console.log($(this).data('data-id'));
	// 	// 	},
	// 	// }
	// });

	$('.slider-front__more').click(function(e){
		e.preventDefault();
		let eventNumber = $(this).data('id');
		$.magnificPopup.open({
			items: [
			{
				src: events[eventNumber].eventContent,
				type: 'inline'
			},
			],
		});
	});

});