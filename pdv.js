// =====================================================
// PDV - RESTAURANTE LANCHONETE MM
// CONTROLE DE PRODUTOS + ESTOQUE
// =====================================================

let pedidoPDV = [];
let categoriaSelecionada = "Todos";


// =====================================================
// PRODUTOS
// =====================================================

const produtosPDV = [

    // LANCHES
    { nome: "X-Burguer", categoria: "Lanches", preco: 20 },
    { nome: "X-Salada", categoria: "Lanches", preco: 22 },
    { nome: "X-Bacon", categoria: "Lanches", preco: 26 },
    { nome: "X-Egg", categoria: "Lanches", preco: 24 },
    { nome: "X-Frango", categoria: "Lanches", preco: 22 },
    { nome: "X-Tudo", categoria: "Lanches", preco: 32 },
    { nome: "X-Calabresa", categoria: "Lanches", preco: 23 },
    { nome: "X-Duplo Cheddar", categoria: "Lanches", preco: 34 },
    { nome: "X-Contrafilé", categoria: "Lanches", preco: 30 },
    { nome: "X-Vegetariano", categoria: "Lanches", preco: 25 },

    { nome: "Bacon Extra", categoria: "Lanches", preco: 6 },
    { nome: "Queijo Extra", categoria: "Lanches", preco: 5 },
    { nome: "Cheddar Extra", categoria: "Lanches", preco: 5 },
    { nome: "Ovo Extra", categoria: "Lanches", preco: 3 },
    { nome: "Hambúrguer Extra", categoria: "Lanches", preco: 8 },
    { nome: "Catupiry Extra", categoria: "Lanches", preco: 5 },

    // HOT DOG
    { nome: "Dog Simples", categoria: "Hot Dog", preco: 14 },
    { nome: "Dog Duplo", categoria: "Hot Dog", preco: 18 },
    { nome: "Dog Frango", categoria: "Hot Dog", preco: 20 },
    { nome: "Dog Bacon", categoria: "Hot Dog", preco: 22 },
    { nome: "Dog Tudo", categoria: "Hot Dog", preco: 26 },

    // ESFIRRAS
    { nome: "Esfirra de Carne", categoria: "Esfirras", preco: 8 },
    { nome: "Esfirra de Frango", categoria: "Esfirras", preco: 8.5 },
    { nome: "Esfirra de Queijo", categoria: "Esfirras", preco: 9 },
    { nome: "Esfirra de Calabresa", categoria: "Esfirras", preco: 9 },
    { nome: "Esfirra de Presunto e Queijo", categoria: "Esfirras", preco: 9.5 },
    { nome: "Esfirra de Frango com Catupiry", categoria: "Esfirras", preco: 10 },
    { nome: "Esfirra de Carne com Queijo", categoria: "Esfirras", preco: 10 },
    { nome: "Esfirra de Bacon com Queijo", categoria: "Esfirras", preco: 11 },
    { nome: "Esfirra Quatro Queijos", categoria: "Esfirras", preco: 11.5 },
    { nome: "Esfirra Especial da Casa", categoria: "Esfirras", preco: 12 },

    // PORÇÕES
    { nome: "Batata Frita Tradicional 500g", categoria: "Porções", preco: 28 },
    { nome: "Batata com Cheddar e Bacon 600g", categoria: "Porções", preco: 38 },
    { nome: "Calabresa Acebolada 500g", categoria: "Porções", preco: 35 },
    { nome: "Frango a Passarinho 700g", categoria: "Porções", preco: 42 },
    { nome: "Isca de Tilápia 500g", categoria: "Porções", preco: 48 },
    { nome: "Contrafilé Acebolado 500g", categoria: "Porções", preco: 55 },

    // BEBIDAS
    { nome: "Coca-Cola Lata", categoria: "Bebidas", preco: 6.5 },
    { nome: "Coca-Cola Zero Lata", categoria: "Bebidas", preco: 6.5 },
    { nome: "Guaraná Lata", categoria: "Bebidas", preco: 6.5 },
    { nome: "Fanta Lata", categoria: "Bebidas", preco: 6.5 },
    { nome: "Sprite Lata", categoria: "Bebidas", preco: 6.5 },
    { nome: "Coca-Cola 2L", categoria: "Bebidas", preco: 14 },
    { nome: "Guaraná Antarctica 2L", categoria: "Bebidas", preco: 14 },
    { nome: "Fanta 2L", categoria: "Bebidas", preco: 14 },
    { nome: "Água sem gás", categoria: "Bebidas", preco: 4 },
    { nome: "Água com gás", categoria: "Bebidas", preco: 4.5 },

    // MARMITAS
    { nome: "Marmita Pequena", categoria: "Marmitas", preco: 20 },
    { nome: "Marmita Média", categoria: "Marmitas", preco: 25 },
    { nome: "Marmita Grande", categoria: "Marmitas", preco: 28 },
    { nome: "Marmita Comercial", categoria: "Marmitas", preco: 50 },

    // À LA CARTE
    { nome: "À Parmegiana - Frango", categoria: "À La Carte", preco: 38 },
    { nome: "À Parmegiana - Carne", categoria: "À La Carte", preco: 44 },
    { nome: "À Parmegiana - Peixe", categoria: "À La Carte", preco: 46 },
    { nome: "À Parmegiana - Filé Mignon", categoria: "À La Carte", preco: 58 },

    { nome: "Strogonoff Cremoso - Frango", categoria: "À La Carte", preco: 32 },
    { nome: "Strogonoff Cremoso - Carne", categoria: "À La Carte", preco: 42 },
    { nome: "Strogonoff Cremoso - Camarão ou Peixe", categoria: "À La Carte", preco: 48 },

    { nome: "Escondidinho Gratinado - Frango", categoria: "À La Carte", preco: 32 },
    { nome: "Escondidinho Gratinado - Carne Seca", categoria: "À La Carte", preco: 38 },
    { nome: "Escondidinho Gratinado - Peixe ou Bacalhau", categoria: "À La Carte", preco: 42 },

    { nome: "Grelhado Clássico - Frango", categoria: "À La Carte", preco: 28 },
    { nome: "Grelhado Clássico - Bisteca Suína", categoria: "À La Carte", preco: 32 },
    { nome: "Grelhado Clássico - Contrafilé", categoria: "À La Carte", preco: 36 },
    { nome: "Grelhado Clássico - Tilápia", categoria: "À La Carte", preco: 38 },

    { nome: "Ao Molho Quatro Queijos - Frango", categoria: "À La Carte", preco: 36 },
    { nome: "Ao Molho Quatro Queijos - Peixe", categoria: "À La Carte", preco: 42 },
    { nome: "Ao Molho Quatro Queijos - Medalhão", categoria: "À La Carte", preco: 48 },

    { nome: "Ao Molho de Camarão ou Ervas Finas - Peixe", categoria: "À La Carte", preco: 45 },
    { nome: "Ao Molho de Camarão ou Ervas Finas - Mignon", categoria: "À La Carte", preco: 52 },

    { nome: "Massa com Iscas - Frango", categoria: "À La Carte", preco: 34 },
    { nome: "Massa com Filé de Peixe", categoria: "À La Carte", preco: 40 },
    { nome: "Massa com Iscas de Filé Mignon", categoria: "À La Carte", preco: 46 }
];


// =====================================================
// PIZZAS
// =====================================================

const saboresPizza = [
    { nome: "Atum", preco: 52 },
    { nome: "Bacon", preco: 50 },
    { nome: "Baiana", preco: 52 },
    { nome: "Calabresa", preco: 48 },
    { nome: "Calabresa com Catupiry", preco: 52 },
    { nome: "Churrasco", preco: 62 },
    { nome: "Frango com Catupiry", preco: 52 },
    { nome: "Lombo com Catupiry", preco: 54 },
    { nome: "Marguerita", preco: 48 },
    { nome: "Milho com Bacon", preco: 50 },
    { nome: "Moda da Casa", preco: 65 },
    { nome: "Mussarela", preco: 45 },
    { nome: "Napolitana", preco: 48 },
    { nome: "Palmito", preco: 54 },
    { nome: "Portuguesa", preco: 52 },
    { nome: "Presunto e Queijo", preco: 48 },
    { nome: "Quatro Queijos", preco: 55 },
    { nome: "Strogonoff de Carne", preco: 60 },
    { nome: "Tilápia", preco: 58 },
    { nome: "Vegetariana", preco: 52 },

    { nome: "Banana com Canela", preco: 45 },
    { nome: "Beijinho", preco: 48 },
    { nome: "Brigadeiro", preco: 45 },
    { nome: "Chocoloco", preco: 50 },
    { nome: "Confeti", preco: 48 },
    { nome: "Doce de Leite", preco: 45 },
    { nome: "Paçoca", preco: 48 },
    { nome: "Prestígio", preco: 48 },
    { nome: "Romeu e Julieta", preco: 45 },
    { nome: "Sensação", preco: 52 }
];

const tamanhosPizza = [
    { nome: "Pequena", pedacos: 4, sabores: 1 },
    { nome: "Média", pedacos: 8, sabores: 2 },
    { nome: "Grande", pedacos: 12, sabores: 3 }
];

const bordasPizza = [
    { nome: "Sem Borda", preco: 0 },
    { nome: "Catupiry Original", preco: 10 },
    { nome: "Cheddar", preco: 10 },
    { nome: "Mussarela", preco: 12 },
    { nome: "Provolone", preco: 12 },
    { nome: "Requeijão com Alho Frito", preco: 11 },
    { nome: "Vulcão / Pãozinho", preco: 15 },
    { nome: "Chocolate ao Leite", preco: 12 },
    { nome: "Chocolate Branco", preco: 12 },
    { nome: "Doce de Leite", preco: 10 },
    { nome: "Goiabada", preco: 10 }
];

const complementosPizza = [
    { nome: "Azeite Trufado", preco: 8 },
    { nome: "Bacon Crocante Extra", preco: 7 },
    { nome: "Catupiry Extra", preco: 8 },
    { nome: "Cheddar Extra", preco: 7 },
    { nome: "Cebola Crispy", preco: 5 },
    { nome: "Geleia de Pimenta", preco: 6 },
    { nome: "Mussarela Extra", preco: 8 },
    { nome: "Ovo Cozido Extra", preco: 4 },
    { nome: "Parmesão Ralado", preco: 6 },
    { nome: "Pimenta Biquinho", preco: 5 }
];


// =====================================================
// ESTOQUE / DISPONIBILIDADE
// =====================================================

let indisponiveisPDV = JSON.parse(
    localStorage.getItem("indisponiveisPDV") || "[]"
);


// Verifica se está disponível
function produtoDisponivelPDV(nome) {

    return !indisponiveisPDV.includes(nome);
}


// Salva disponibilidade
function salvarEstoquePDV() {

    localStorage.setItem(
        "indisponiveisPDV",
        JSON.stringify(indisponiveisPDV)
    );
}


// =====================================================
// ALTERNAR DISPONIBILIDADE
// =====================================================

function alternarDisponibilidadePDV(nome) {

    const posicao =
        indisponiveisPDV.indexOf(nome);

    if (posicao >= 0) {

        indisponiveisPDV.splice(posicao, 1);

        alert(
            "🟢 Produto disponível novamente:\n\n" +
            nome
        );

    } else {

        indisponiveisPDV.push(nome);

        // Se estiver no pedido, remove
        pedidoPDV =
            pedidoPDV.filter(
                item => item.nome !== nome
            );

        alert(
            "🔴 Produto marcado como esgotado:\n\n" +
            nome
        );
    }

    salvarEstoquePDV();

    mostrarProdutosPDV();

    atualizarPedidoPDV();
}


// =====================================================
// DINHEIRO
// =====================================================

function dinheiroPDV(valor) {

    return Number(valor).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


// =====================================================
// MOSTRAR PRODUTOS
// =====================================================

function mostrarProdutosPDV() {

    const container =
        document.getElementById(
            "resultadoProdutosPDV"
        );

    if (!container) return;

    const buscaElemento =
        document.getElementById(
            "buscaPDV"
        );

    const busca =
        buscaElemento
            ? buscaElemento.value.toLowerCase().trim()
            : "";

    container.innerHTML = "";

    const produtos =
        produtosPDV.filter(produto => {

            const categoriaOK =
                categoriaSelecionada === "Todos" ||
                produto.categoria === categoriaSelecionada;

            const buscaOK =
                produto.nome
                    .toLowerCase()
                    .includes(busca);

            return categoriaOK && buscaOK;
        });


    // =================================================
    // PIZZA
    // =================================================

    if (
        (categoriaSelecionada === "Todos" ||
         categoriaSelecionada === "Pizza") &&
        ("pizza".includes(busca) || busca === "")
    ) {

        const pizzaDisponivel =
            produtoDisponivelPDV("Pizza");

        container.innerHTML += `

            <div class="produtoPDV">

                <h3>🍕 Pizza</h3>

                <p>
                    Monte sua pizza escolhendo
                    tamanho, sabores, borda e adicionais.
                </p>

                ${
                    pizzaDisponivel
                    ? `
                        <button
                            onclick="abrirMontagemPizza()">
                            🍕 MONTAR PIZZA
                        </button>
                    `
                    : `
                        <strong>
                            🔴 ESGOTADO
                        </strong>
                    `
                }

                <br><br>

                <button
                    onclick="alternarDisponibilidadePDV('Pizza')">

                    ${
                        pizzaDisponivel
                        ? "🔴 Marcar esgotado"
                        : "🟢 Disponível novamente"
                    }

                </button>

            </div>
        `;
    }


    // =================================================
    // PRODUTOS
    // =================================================

    produtos.forEach(produto => {

        const indice =
            produtosPDV.indexOf(produto);

        const disponivel =
            produtoDisponivelPDV(
                produto.nome
            );

        container.innerHTML += `

            <div class="produtoPDV">

                <h3>
                    ${produto.nome}
                </h3>

                <p>
                    ${dinheiroPDV(produto.preco)}
                </p>

                ${
                    disponivel
                    ? `
                        <button
                            onclick="adicionarProdutoPDV(${indice})">

                            ➕ Adicionar

                        </button>
                    `
                    : `
                        <strong>
                            🔴 ESGOTADO
                        </strong>
                    `
                }

                <br><br>

                <button
                    onclick="alternarDisponibilidadePDV('${produto.nome.replace(/'/g, "\\'")}')">

                    ${
                        disponivel
                        ? "🔴 Marcar esgotado"
                        : "🟢 Disponível novamente"
                    }

                </button>

            </div>
        `;
    });


    if (
        produtos.length === 0 &&
        categoriaSelecionada !== "Pizza"
    ) {

        container.innerHTML += `
            <p>
                Nenhum produto encontrado.
            </p>
        `;
    }
}


// =====================================================
// FILTRO
// =====================================================

function filtrarPDV(categoria) {

    categoriaSelecionada =
        categoria;

    mostrarProdutosPDV();
}


// =====================================================
// ADICIONAR PRODUTO
// =====================================================

function adicionarProdutoPDV(indice) {

    const produto =
        produtosPDV[indice];

    if (!produto) return;


    if (
        !produtoDisponivelPDV(
            produto.nome
        )
    ) {

        alert(
            "🔴 Este produto está esgotado."
        );

        return;
    }


    const existente =
        pedidoPDV.find(
            item =>
                item.nome === produto.nome &&
                !item.personalizado
        );


    if (existente) {

        existente.quantidade++;

    } else {

        pedidoPDV.push({

            nome:
                produto.nome,

            preco:
                produto.preco,

            quantidade:
                1,

            personalizado:
                false
        });
    }

    atualizarPedidoPDV();
}


// =====================================================
// AUMENTAR
// =====================================================

function aumentarProdutoPDV(indice) {

    if (!pedidoPDV[indice]) return;

    if (
        !pedidoPDV[indice].personalizado &&
        !produtoDisponivelPDV(
            pedidoPDV[indice].nome
        )
    ) {

        alert(
            "🔴 Este produto está esgotado."
        );

        return;
    }

    pedidoPDV[indice].quantidade++;

    atualizarPedidoPDV();
}


// =====================================================
// DIMINUIR
// =====================================================

function diminuirProdutoPDV(indice) {

    if (!pedidoPDV[indice]) return;

    pedidoPDV[indice].quantidade--;

    if (
        pedidoPDV[indice].quantidade <= 0
    ) {

        pedidoPDV.splice(indice, 1);
    }

    atualizarPedidoPDV();
}


// =====================================================
// REMOVER
// =====================================================

function removerProdutoPDV(indice) {

    if (!pedidoPDV[indice]) return;

    pedidoPDV.splice(indice, 1);

    atualizarPedidoPDV();
}


// =====================================================
// ATUALIZAR PEDIDO
// =====================================================

function atualizarPedidoPDV() {

    const container =
        document.getElementById(
            "pedidoPDV"
        );

    const totalElemento =
        document.getElementById(
            "totalPDV"
        );

    if (!container) return;

    container.innerHTML = "";

    let total = 0;


    pedidoPDV.forEach(
        (item, indice) => {

            const subtotal =
                item.preco *
                item.quantidade;

            total += subtotal;


            let detalhes = "";

            if (
                item.personalizado &&
                item.detalhes
            ) {

                detalhes = `
                    <small>
                        ${item.detalhes}
                    </small>
                `;
            }


            container.innerHTML += `

                <div class="itemPedidoPDV">

                    <strong>
                        ${item.nome}
                    </strong>

                    ${detalhes}

                    <p>
                        ${dinheiroPDV(subtotal)}
                    </p>

                    <button
                        onclick="diminuirProdutoPDV(${indice})">
                        ➖
                    </button>

                    <strong>
                        ${item.quantidade}
                    </strong>

                    <button
                        onclick="aumentarProdutoPDV(${indice})">
                        ➕
                    </button>

                    <button
                        onclick="removerProdutoPDV(${indice})">
                        🗑️
                    </button>

                </div>
            `;
        }
    );


    if (pedidoPDV.length === 0) {

        container.innerHTML = `
            <p>
                🛒 Nenhum produto no pedido.
            </p>
        `;
    }


    if (totalElemento) {

        totalElemento.textContent =
            dinheiroPDV(total);
    }


    calcularTrocoPDV();
}


// =====================================================
// LIMPAR
// =====================================================

function limparPDV() {

    pedidoPDV = [];

    atualizarPedidoPDV();
}


// =====================================================
// MONTAGEM DA PIZZA
// =====================================================

function abrirMontagemPizza() {

    if (
        !produtoDisponivelPDV("Pizza")
    ) {

        alert(
            "🔴 Pizza está marcada como esgotada."
        );

        return;
    }


    let textoTamanhos =
        "🍕 ESCOLHA O TAMANHO\n\n";

    tamanhosPizza.forEach(
        (tamanho, indice) => {

            textoTamanhos +=
                `${indice + 1} - ` +
                `${tamanho.nome} ` +
                `(${tamanho.pedacos} pedaços / ` +
                `${tamanho.sabores} sabor(es))\n`;
        }
    );


    const tamanhoEscolhido =
        prompt(textoTamanhos);

    if (!tamanhoEscolhido) return;


    const tamanho =
        tamanhosPizza[
            Number(tamanhoEscolhido) - 1
        ];


    if (!tamanho) {

        alert(
            "Tamanho inválido."
        );

        return;
    }


    let textoSabores =
        "🍕 ESCOLHA OS SABORES\n\n";

    saboresPizza.forEach(
        (sabor, indice) => {

            const disponivel =
                produtoDisponivelPDV(
                    "Pizza - " +
                    sabor.nome
                );

            textoSabores +=
                `${indice + 1} - ` +
                `${sabor.nome} - ` +
                `${dinheiroPDV(sabor.preco)}`;

            if (!disponivel) {

                textoSabores +=
                    " 🔴 ESGOTADO";
            }

            textoSabores += "\n";
        }
    );


    const saboresEscolhidos = [];


    for (
        let i = 0;
        i < tamanho.sabores;
        i++
    ) {

        const numero =
            prompt(
                textoSabores +
                `\nEscolha o sabor ${i + 1} de ${tamanho.sabores}:`
            );

        if (!numero) return;


        const sabor =
            saboresPizza[
                Number(numero) - 1
            ];


        if (!sabor) {

            alert(
                "Sabor inválido."
            );

            i--;

            continue;
        }


        if (
            !produtoDisponivelPDV(
                "Pizza - " +
                sabor.nome
            )
        ) {

            alert(
                "🔴 Esse sabor está esgotado."
            );

            i--;

            continue;
        }


        saboresEscolhidos.push(
            sabor
        );
    }


    let precoPizza =
        Math.max(
            ...saboresEscolhidos.map(
                sabor => sabor.preco
            )
        );


    // =================================================
    // BORDA
    // =================================================

    let textoBordas =
        "🧀 ESCOLHA A BORDA\n\n";

    bordasPizza.forEach(
        (borda, indice) => {

            const disponivel =
                produtoDisponivelPDV(
                    "Borda - " +
                    borda.nome
                );

            textoBordas +=
                `${indice + 1} - ` +
                `${borda.nome}`;

            if (borda.preco > 0) {

                textoBordas +=
                    ` (+${dinheiroPDV(borda.preco)})`;
            }

            if (!disponivel) {

                textoBordas +=
                    " 🔴 ESGOTADO";
            }

            textoBordas += "\n";
        }
    );


    const bordaEscolhida =
        prompt(textoBordas);

    if (!bordaEscolhida) return;


    const borda =
        bordasPizza[
            Number(bordaEscolhida) - 1
        ];


    if (!borda) {

        alert(
            "Borda inválida."
        );

        return;
    }


    if (
        !produtoDisponivelPDV(
            "Borda - " +
            borda.nome
        )
    ) {

        alert(
            "🔴 Essa borda está esgotada."
        );

        return;
    }


    precoPizza +=
        borda.preco;


    // =================================================
    // ADICIONAIS
    // =================================================

    let textoComplementos =
        "➕ ADICIONAIS\n\n";

    textoComplementos +=
        "Digite os números separados por vírgula.\n";

    textoComplementos +=
        "Digite 0 para nenhum adicional.\n\n";


    complementosPizza.forEach(
        (item, indice) => {

            const disponivel =
                produtoDisponivelPDV(
                    "Adicional - " +
                    item.nome
                );

            textoComplementos +=
                `${indice + 1} - ` +
                `${item.nome} ` +
                `(+${dinheiroPDV(item.preco)})`;

            if (!disponivel) {

                textoComplementos +=
                    " 🔴 ESGOTADO";
            }

            textoComplementos += "\n";
        }
    );


    const complementosEscolhidos =
        prompt(textoComplementos);


    const adicionais = [];


    if (
        complementosEscolhidos &&
        complementosEscolhidos.trim() !== "0"
    ) {

        const numeros =
            complementosEscolhidos
                .split(",")
                .map(
                    numero =>
                        Number(
                            numero.trim()
                        )
                );


        numeros.forEach(
            numero => {

                const adicional =
                    complementosPizza[
                        numero - 1
                    ];

                if (!adicional) return;


                if (
                    !produtoDisponivelPDV(
                        "Adicional - " +
                        adicional.nome
                    )
                ) {

                    return;
                }


                adicionais.push(
                    adicional
                );

                precoPizza +=
                    adicional.preco;
            }
        );
    }


    // =================================================
    // DESCRIÇÃO
    // =================================================

    const nomesSabores =
        saboresEscolhidos
            .map(
                sabor =>
                    sabor.nome
            )
            .join(" + ");


    const nomesAdicionais =
        adicionais.length > 0
        ? adicionais
            .map(
                item =>
                    item.nome
            )
            .join(", ")
        : "Nenhum";


    // =================================================
    // ADICIONAR
    // =================================================

    pedidoPDV.push({

        nome:
            `🍕 Pizza ${tamanho.nome}`,

        preco:
            precoPizza,

        quantidade:
            1,

        personalizado:
            true,

        detalhes:
            `Sabores: ${nomesSabores}<br>` +
            `Borda: ${borda.nome}<br>` +
            `Adicionais: ${nomesAdicionais}`
    });


    atualizarPedidoPDV();


    alert(
        "🍕 Pizza adicionada!\n\n" +
        `Tamanho: ${tamanho.nome}\n` +
        `Sabores: ${nomesSabores}\n` +
        `Borda: ${borda.nome}\n` +
        `Total: ${dinheiroPDV(precoPizza)}`
    );
}


// =====================================================
// FINALIZAR PDV
// =====================================================

function finalizarPDV() {

    if (
        pedidoPDV.length === 0
    ) {

        alert(
            "🛒 Adicione pelo menos um produto."
        );

        return;
    }


    const total =
        pedidoPDV.reduce(
            (soma, item) =>
                soma +
                item.preco *
                item.quantidade,
            0
        );


    alert(
        "Pedido pronto para finalizar!\n\n" +
        "Total: " +
        dinheiroPDV(total)
    );
}


// =====================================================
// TROCO
// =====================================================

function calcularTrocoPDV() {

    const totalElemento =
        document.getElementById(
            "totalPDV"
        );

    const valorPagoElemento =
        document.getElementById(
            "valorPagoPDV"
        );

    const trocoElemento =
        document.getElementById(
            "trocoPDV"
        );


    if (
        !totalElemento ||
        !valorPagoElemento ||
        !trocoElemento
    ) {
        return;
    }


    const total =
        pedidoPDV.reduce(
            (soma, item) =>
                soma +
                item.preco *
                item.quantidade,
            0
        );


    const valorPago =
        Number(
            valorPagoElemento.value
        ) || 0;


    const troco =
        valorPago - total;


    if (troco < 0) {

        trocoElemento.value =
            "Falta " +
            dinheiroPDV(
                Math.abs(troco)
            );

    } else {

        trocoElemento.value =
            dinheiroPDV(troco);
    }
}


// =====================================================
// FINALIZAR VENDA
// =====================================================

function finalizarVendaPDV() {

    if (
        pedidoPDV.length === 0
    ) {

        alert(
            "🛒 O pedido está vazio."
        );

        return;
    }


    const cliente =
        document
            .getElementById(
                "clientePDV"
            )
            ?.value
            .trim();


    const telefone =
        document
            .getElementById(
                "telefonePDV"
            )
            ?.value
            .trim();


    const tipoPedido =
        document
            .getElementById(
                "tipoPedidoPDV"
            )
            ?.value;


    const endereco =
        document
            .getElementById(
                "enderecoPDV"
            )
            ?.value
            .trim();


    const pagamento =
        document
            .getElementById(
                "pagamentoPDV"
            )
            ?.value;


    const total =
        pedidoPDV.reduce(
            (soma, item) =>
                soma +
                item.preco *
                item.quantidade,
            0
        );


    if (!cliente) {

        alert(
            "Informe o nome do cliente."
        );

        return;
    }


    if (!pagamento) {

        alert(
            "Selecione a forma de pagamento."
        );

        return;
    }


    if (
        tipoPedido === "delivery" &&
        !endereco
    ) {

        alert(
            "Informe o endereço para entrega."
        );

        return;
    }


    const valorPago =
        Number(
            document
                .getElementById(
                    "valorPagoPDV"
                )
                ?.value
        ) || 0;


    let troco = 0;


    if (
        pagamento
            .toLowerCase()
            .includes("dinheiro")
    ) {

        if (
            valorPago < total
        ) {

            alert(
                "O valor recebido é menor que o total."
            );

            return;
        }


        troco =
            valorPago - total;
    }


    let resumo =
        "🧾 VENDA FINALIZADA\n\n";


    resumo +=
        "Cliente: " +
        cliente +
        "\n";


    if (telefone) {

        resumo +=
            "Telefone: " +
            telefone +
            "\n";
    }


    resumo +=
        "Pedido: " +
        tipoPedido +
        "\n";


    if (endereco) {

        resumo +=
            "Endereço: " +
            endereco +
            "\n";
    }


    resumo +=
        "\nPRODUTOS:\n";


    pedidoPDV.forEach(
        item => {

            resumo +=
                `${item.quantidade}x ` +
                `${item.nome} - ` +
                `${dinheiroPDV(
                    item.preco *
                    item.quantidade
                )}\n`;

            if (
                item.personalizado &&
                item.detalhes
            ) {

                resumo +=
                    item.detalhes
                        .replace(
                            /<br>/g,
                            "\n"
                        ) +
                    "\n";
            }
        }
    );


    resumo +=
        "\nTOTAL: " +
        dinheiroPDV(total);


    resumo +=
        "\nPagamento: " +
        pagamento;


    if (
        pagamento
            .toLowerCase()
            .includes("dinheiro")
    ) {

        resumo +=
            "\nValor recebido: " +
            dinheiroPDV(
                valorPago
            );

        resumo +=
            "\nTroco: " +
            dinheiroPDV(
                troco
            );
    }


    alert(resumo);


    // =================================================
    // HISTÓRICO
    // =================================================

    const vendas =
        JSON.parse(
            localStorage.getItem(
                "vendasPDV"
            ) || "[]"
        );


    vendas.push({

        id:
            Date.now(),

        data:
            new Date()
                .toLocaleString(
                    "pt-BR"
                ),

        cliente,

        telefone,

        tipoPedido,

        endereco,

        pagamento,

        total,

        itens:
            JSON.parse(
                JSON.stringify(
                    pedidoPDV
                )
            )
    });


    localStorage.setItem(
        "vendasPDV",
        JSON.stringify(
            vendas
        )
    );


    pedidoPDV = [];

    atualizarPedidoPDV();


    [
        "clientePDV",
        "telefonePDV",
        "enderecoPDV",
        "valorPagoPDV"
    ].forEach(
        id => {

            const campo =
                document.getElementById(
                    id
                );

            if (campo) {
                campo.value = "";
            }
        }
    );


    const trocoElemento =
        document.getElementById(
            "trocoPDV"
        );


    if (trocoElemento) {
        trocoElemento.value = "";
    }


    alert(
        "✅ Venda registrada com sucesso!"
    );
}


// =====================================================
// INICIALIZAÇÃO
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const busca =
            document.getElementById(
                "buscaPDV"
            );


        if (busca) {

            busca.addEventListener(
                "input",
                mostrarProdutosPDV
            );
        }


        const valorPago =
            document.getElementById(
                "valorPagoPDV"
            );


        if (valorPago) {

            valorPago.addEventListener(
                "input",
                calcularTrocoPDV
            );
        }


        const pagamento =
            document.getElementById(
                "pagamentoPDV"
            );


        if (pagamento) {

            pagamento.addEventListener(
                "change",
                calcularTrocoPDV
            );
        }


        mostrarProdutosPDV();

        atualizarPedidoPDV();
    }
);