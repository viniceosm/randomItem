window.addEventListener('load', function () {
	document.getElementById('btnGerar').addEventListener('click', gerarItem);

	function gerarItem () {
		let taItens = document.getElementById('taItens').value;
		let itensArray = taItens.split('\n');
		let itens = [];

		for (let item of itensArray) {
			let atributos = item.split(';');

			itens.push({
				nome: atributos[0],
				atributo: parseFloat(atributos[1]),
				preco: parseFloat(atributos[2])
			});

		}

		let itemMaiorAtributo = itens.reduce((ant, o) => {
			if (o.atributo > ant.atributo) {
				return o;
			}
			return ant;
		}, {atributo: 0 });

		let itemNovo = {
			nome: 'Espada roxa',
			atributo: itemMaiorAtributo.atributo + (Math.floor(Math.random() * 10) + 1),
			preco: itemMaiorAtributo.preco + (Math.floor(Math.random() * 30) + 1)
		};

		document.getElementById('taItens').value += `\n${itemNovo.nome};${itemNovo.atributo};${itemNovo.preco}`;
	}
});