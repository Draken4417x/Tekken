const listaSelecaoLutadores = document.querySelectorAll(".lutador"); 

listaSelecaoLutadores.forEach(lutador => {
	lutador.addEventListener("click", () => {
		esconderCartaoLutador();
		const idLutadorSelecionado = mostrarCartaoLutadorSelecionado(lutador);
		desativarLutadorNaListagem();
		ativarLutadorSelecionadoNaListagem(idLutadorSelecionado);
	});
});

function ativarLutadorSelecionadoNaListagem(idLutadorSelecionado) {
	const lutadorSelecionadoNaListagem = document.getElementById(idLutadorSelecionado);
	if (lutadorSelecionadoNaListagem) {
		lutadorSelecionadoNaListagem.classList.add("ativo");
	}
}

function desativarLutadorNaListagem() {
	const lutadorAtivoNaListagem = document.querySelector(".ativo");
	if (lutadorAtivoNaListagem) {
		lutadorAtivoNaListagem.classList.remove("ativo");
	}
}

function mostrarCartaoLutadorSelecionado(lutador) {
	const idLutadorSelecionado = lutador.getAttribute("id");
	const idDoCartaoLutadorParaAbrir = "cartao-" + idLutadorSelecionado;
	const cartaoLutadorParaAbrir = document.getElementById(idDoCartaoLutadorParaAbrir);
	if (cartaoLutadorParaAbrir) {
		cartaoLutadorParaAbrir.classList.add("aberto");
	}
	return idLutadorSelecionado;
}

function esconderCartaoLutador() {
	const cartaoLutadorAberto = document.querySelector(".cartao-lutador.aberto"); 
	if (cartaoLutadorAberto) {
		cartaoLutadorAberto.classList.remove("aberto");
	}
}
