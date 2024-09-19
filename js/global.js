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
<header>
    <a href="index.html">
        <img class="logo" src="assets/logo.svg" alt="Logo da Proz">
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

            <a href="https://gestao.prozeducacao.com.br/">
                <i class="fa fa-desktop"></i> JoyClass
            </a>
        </div>
    </nav>
</header>

<footer>
	<div id="logo-tel">
		<img class="logo" src="assets/logo.svg" alt="Logo da Proz">

		<div id="links">
			<a id="link-whats" href="https://wa.me/1241241241">
				<i class="fa fa-whatsapp"></i> WhatsApp
			</a>
			<a href="tel:08005803041">
				<i class="fa fa-phone"></i> 0800 580 3041
			</a>
			<a href="https://www.canalintegro.com.br/proz#:~:text=0800%20878%209045-,Bem%2Dvindo%20ao%20Canal%20de%20%C3%89tica%20PROZ,%2F2013%20(Lei%20Anticorrup%C3%A7%C3%A3o).">
				<i class="fa fa-tag"></i> Canal de Ética
			</a>
		</div>

		<div id="socials">
			<div>
				<a href="https://www.facebook.com/prozeducacaobr">
					<i class="fa fa-facebook"></i>
				</a>
			</div>
			<div>
				<a href="https://www.instagram.com/prozeducacaobr/">
					<i class="fa fa-instagram"></i>
				</a>
			</div>
			<div>
				<a href="https://www.youtube.com/c/ProzEduca%C3%A7%C3%A3obr">
					<i class="fa fa-youtube"></i>
				</a>
			</div>
			<div>
				<a href="https://www.linkedin.com/company/prozeducacao">
					<i class="fa fa-linkedin"></i>
				</a>
			</div>
		</div>
	</div>

	<hr>

	<p>
		© 2022 Proz • CNPJ: 08.690.642/0001-71 • Essa Educação Profissional S.A. • Todos os direitos reservados •
		<b><a href="https://prozeducacao.com.br/politica-de-privacidade/">
			Política de Privacidade
		</a></b>
	</p>
</footer>
    `;

	document.body.appendChild(TEMPLATE.content);
}

loadHeader();

setFocusable(document.getElementById("check"));
