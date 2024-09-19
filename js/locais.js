const INFO_STATE = document.getElementById('estado');
const INFO_LOCAL = document.getElementById('local');

const MG_LOCAIS = `
<li>Belo Horizonte (Centro)</li>
<li>Belo Horizonte (Venda Nova)</li>
<li>Contagem</li>
<li>Divinópolis</li>
<li>Juiz de Fora</li>
<li>Montes Claros</li>
<li>Uberlândia</li>
`

const SP_LOCAIS = `
<li>Campo Limpo</li>
<li>Carapicuíba</li>
<li>Diadema</li>
<li>Grajaú</li>
<li>Guarulhos</li>
<li>Guaianases</li>
<li>Itaquera</li>
<li>Jabaquara</li>
<li>Mauá</li>
<li>Mogi das Cruzes</li>
<li>Osasco</li>
<li>Sacomã</li>
<li>Santo Amaro</li>
<li>Santo André</li>
<li>São Miguel Paulista</li>
<li>Tucuruvi</li>
<li>Vila Nova Cachoeirinha</li>
`

const PR_LOCAIS = `
<li>Curitiba</li>
`

function onStateHover(s) {
	switch (s.id) {
		case 'br-mg':
			INFO_STATE.textContent = 'Minas Gerais';
			INFO_LOCAL.innerHTML = MG_LOCAIS;
			break;
		case 'br-sp':
			INFO_STATE.textContent = 'São Paulo';
			INFO_LOCAL.innerHTML = SP_LOCAIS;
			break;
		case 'br-pr':
			INFO_STATE.textContent = 'Paraná';
			INFO_LOCAL.innerHTML = PR_LOCAIS;
			break;
	}
}


const MAP = document.getElementById('mapa');
const PATHS = [
	document.getElementById('br-mg'),
	document.getElementById('br-sp'),
	document.getElementById('br-pr'),
];

function lowerAll() {
	PATHS.forEach((path) => {
		path.style.transform = 'scale(1)';
		path.style.fill = 'var(--c-brightorange)';
	})
}

PATHS.forEach((path) => {
	path.addEventListener("mouseover", () => {
		lowerAll();

		MAP.appendChild(path);

		path.style.transform = 'scale(1.25)';
		path.style.fill = 'var(--c-darkestorange)';

		onStateHover(path);
	});
});
