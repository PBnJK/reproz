const COURSES = ['Enfermagem', 'Radiologia', 'Desenvolvimento', 'Adminstração'];
let displayIdx = 0;

function changeCourses() {
	document.getElementById('dyn-profession').innerHTML = COURSES[displayIdx];
	displayIdx += 1;
	if (displayIdx >= COURSES.length) {
		displayIdx = 0;
	}
}

setInterval(changeCourses, 1000);
