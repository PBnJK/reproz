function setFocusable(cb) {
	const NEW_VALUE = cb.checked ? "0" : "-1";
	const MENU = document.getElementById("nav-mobile").children;
	for (c of MENU) {
		c.setAttribute("tabindex", NEW_VALUE);
		console.log(c);
	}
}

function toggleHamburger() {
	const CB = document.getElementById("check");
	CB.checked = !CB.checked;

	setFocusable(CB);
}

function loadHeader() {
	const TEMPLATE = document.createElement('template');
	TEMPLATE.innerHTML = `
<header id="navbar">
    <a href="index.html" id="logo-link">
        <img id="logo" src="assets/img_logo_proz.png" alt="Logo da Proz">
    </a>

    <nav>
        <input title="Abrir Menu" type="checkbox" id="check">

        <label for="check" id="hamburger" tabindex="0"
               onkeydown="if ((event.keyCode||event.which) != 9){ toggleHamburger(); }"
               onclick="setFocusable(this);">
            <i class="fa fa-bars" id="bars"></i>
        </label>

        <div id="nav-mobile">
            <a href="cursos.html">
                <i class="fa fa-book"></i> Cursos
            </a>

            <a href="locais.html">
                <i class="fa fa-map-marker"></i> Locais
            </a>

            <a href="#">
                <i class="fa fa-times-circle"></i> Coisa 1
            </a>

            <a href="#">
                <i class="fa fa-times-circle"></i> Coisa 2
            </a>

            <a href="https://gestao.prozeducacao.com.br/">
                <i class="fa fa-desktop"></i> JoyClass
            </a>
        </div>
    </nav>
</header>
    `;

	document.body.appendChild(TEMPLATE.content);
}

loadHeader();

setFocusable(document.getElementById("check"));
