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
