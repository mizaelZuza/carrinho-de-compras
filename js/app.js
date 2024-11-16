const carrinhoDeProdutos = document.getElementById("lista-produtos");
const carrinho = document.getElementById("carrinho");
const nomeDoProduto = document.getElementById("produto");
const quantidade = document.getElementById("quantidade");
const valorTotalDoCarrinhoItem = document.getElementById("valor-total");
let valorTotalCarrinho = 0;
let verificarItem;
limpar();

function adicionar() {
    if (quantidade.value == 0 || quantidade.value == "") {
        alert("Escolha a quantidade de produtos! Não é possivel adicionar um produto sem informar uma quantidade.");

    } else {

        const [nome, preco] = nomeDoProduto.value.split("-");
        let precoTotalProduto = calcularValorProduto(preco, quantidade.value);
        adicionarProdutoNoCarrinho(nome, precoTotalProduto, quantidade.value);
        calcularValorTotalDoCarrinho(precoTotalProduto);
        quantidade.value = 0;
    }
}

function limpar() {
    valorTotalDoCarrinhoItem.innerHTML = "R$0";
    carrinhoDeProdutos.innerHTML = "";
    quantidade.value = "";
    valorTotalCarrinho = 0;
}

function adicionarProdutoNoCarrinho(nome, preco, quantidade) {
    carrinhoDeProdutos.innerHTML += `
            <section class="carrinho__produtos__produto">
              <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>
            </section>
        `;
}

function calcularValorProduto(preco, quantidade) {
    const [moeda, valor] = preco.split("R$");
    let valorDoItem = parseInt(valor) * parseInt(quantidade);
    return valorDoItem;
}

function calcularValorTotalDoCarrinho(precoTotalProduto) {
    valorTotalCarrinho += precoTotalProduto;
    valorTotalDoCarrinhoItem.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotalCarrinho}</span>`;
}