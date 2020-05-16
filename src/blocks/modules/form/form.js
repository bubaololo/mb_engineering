(function(){
	(function initFileInputs(){
		const inputs = document.querySelectorAll('.file');

		if (inputs) {
			for (let i = 0; i < inputs.length; i++) {
				let input = inputs[i].querySelector('input');
				let field = inputs[i].querySelector('.file__text');
				let fileMessage = inputs[i].querySelector('.file__message');
				let fileLength = 0;
				let arrayText = '';

				input.addEventListener('change', function(){
					// console.log('Что-то добваили');
					fileLength = input.files.length;
					// field.innerText = 'Что-то добваили';
					// console.log(input.files.FileList.toString())
					field.innerText = 'Количество файлов: ' + fileLength;
				})
			}
		}
	})();

	(function toggleForm() {
		const controls = document.querySelectorAll('.form__control');

		for(let i = 0; i < controls.length; i++) {
			let checkbox = controls[i].querySelector('.checkbox__field');
			let btn = controls[i].querySelector('.btn');

			if (checkbox && btn) {

				checkbox.addEventListener('change', function(){
					if (checkbox.checked) {
						btn.classList.remove('btn--disabled');
					} else {
						btn.classList.add('btn--disabled');
					}
				});
			}
		}
	})();
})();