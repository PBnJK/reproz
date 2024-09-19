const FORM = document.getElementById('signup-form');
const SELECT = FORM.querySelector('#course-select');

const DIALOG = document.querySelector('dialog');
DIALOG.close();

const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach((item) => {
	item.addEventListener('click', (e) => {
		const COURSE = e.target.getAttribute('course');
		SELECT.value = COURSE;

		DIALOG.showModal();
	});
})

const CLOSE_MODAL = document.getElementById('close-modal');
CLOSE_MODAL.addEventListener('click', () => {
	DIALOG.close();
})

function handlePhone(e) {
	let input = e.target;
	input.value = formatPhoneNumber(input.value);
}

function formatPhoneNumber(number) {
	if (!number) {
		return '';
	}

	/* Remove caracteres não-númericos */
	number = number.replace(/\D/g, '');

	/* Converte dois números seguidos por outro número para um DDD */
	number = number.replace(/(\d{2})(\d)/, '($1) $2');

	/* Adiciona um traço aos números anteriores aos quatro últimos números */
	number = number.replace(/(\d{4,5})(\d{4})$/, '$1-$2');

	return number;
}
