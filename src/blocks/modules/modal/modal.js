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

$(document).ready(function() {

	$('.slider-front__more').click(function(e){
		e.preventDefault();
		console.log(this);
		$.magnificPopup.open({
			items: {
				src: '#slider-front__modal',
				type: 'inline'
			}
		});
	});

	$('.modal-link').magnificPopup({
		type:'inline',
	});

});