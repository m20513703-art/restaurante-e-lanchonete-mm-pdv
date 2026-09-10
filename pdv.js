/* ==========================================================
   RESTAURANTE LANCHONETE MM
   PDV / ÁREA ADMINISTRATIVA
   ========================================================== */

const SENHA_PDV = "1234";

const CHAVE_PRODUTOS = "produtosMM";

let produtos = [];



/* ==========================================================
   CARREGAR PRODUTOS
   ========================================================== */

function carregarProdutos() {

    try {

        const dados =
            localStorage.getItem(CHAVE_PRODUTOS);

        produtos = dados
            ? JSON.parse(dados)
            : [];

        if (!Array.isArray(produtos)) {
            produtos = [];
        }

    } catch (erro) {

        console.error(
            "Erro ao carregar produtos:",
            erro
        );

        produtos = [];

    }

}



/* ==========================================================
   SALVAR PRODUTOS
   ========================================================== */

function salvarProdutos() {

    localStorage.setItem(
        CHAVE_PRODUTOS,
        JSON.stringify(produtos)
    );

}



/* ==========================================================
   INICIAR
   ========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarProdutos();

        const autorizado =
            sessionStorage.getItem(
                "pdvAutorizado"
            );

        if (autorizado === "true") {

            mostrarPDV();

        } else {

            mostrarLogin();

        }

    }
);



/* ==========================================================
   LOGIN
   ========================================================== */

function entrarPDV() {

    const campo =
        document.getElementById("senhaPDV");

    const mensagem =
        document.getElementById(
            "mensagemLogin"
        );


    const senha =
        campo.value.trim();


    if (senha === SENHA_PDV) {

        sessionStorage.setItem(
            "pdvAutorizado",
            "true"
        );

        mensagem.textContent = "";

        mostrarPDV();

    } else {

        mensagem.textContent =
            "❌ Senha incorreta.";

        campo.value = "";

        campo.focus();

    }

}



/* ==========================================================
   MOSTRAR LOGIN
   ========================================================== */

function mostrarLogin() {

    const login =
        document.getElementById(
            "telaLogin"
        );

    const sistema =
        document.getElementById(
            "sistemaPDV"
        );


    if (login) {
        login.style.display = "flex";
    }


    if (sistema) {
        sistema.style.display = "none";
    }

}



/* ==========================================================
   MOSTRAR PDV
   ========================================================== */

function mostrarPDV() {

    const login =
        document.getElementById(
            "telaLogin"
        );

    const sistema =
        document.getElementById(
            "sistemaPDV"
        );


    if (login) {
        login.style.display = "none";
    }


    if (sistema) {
        sistema.style.display = "block";
    }


    listarProdutos();

}



/* ==========================================================
   SAIR
   ========================================================== */

function sairPDV() {

    sessionStorage.removeItem(
        "pdvAutorizado"
    );

    window.location.href =
        "index.html";

}



/* ==========================================================
   ABRIR CADASTRO
   ========================================================== */

function abrirCadastro() {

    document.getElementById(
        "produtoId"
    ).value = "";

    document.getElementById(
        "produtoNome"
    ).value = "";

    document.getElementById(
        "produtoCategoria"
    ).value = "";

    document.getElementById(
        "produtoPreco"
    ).value = "";

    document.getElementById(
        "produtoDescricao"
    ).value = "";

    document.getElementById(
        "produtoDisponivel"
    ).checked = true;


    document.getElementById(
        "tituloModal"
    ).textContent =
        "➕ Novo Produto";


    document.getElementById(
        "modalProduto"
    ).style.display = "flex";



    setTimeout(function () {

        document.getElementById(
            "produtoNome"
        ).focus();

    }, 100);

}



/* ==========================================================
   FECHAR CADASTRO
   ========================================================== */

function fecharCadastro() {

    document.getElementById(
        "modalProduto"
    ).style.display = "none";

}



/* ==========================================================
   SALVAR PRODUTO
   ========================================================== */

function salvarProduto(event) {

    event.preventDefault();


    const id =
        document.getElementById(
            "produtoId"
        ).value;


    const nome =
        document.getElementById(
            "produtoNome"
        ).value.trim();


    const categoria =
        document.getElementById(
            "produtoCategoria"
        ).value;


    const preco =
        Number(
            document.getElementById(
                "produtoPreco"
            ).value
        );


    const descricao =
        document.getElementById(
            "produtoDescricao"
        ).value.trim();


    const disponivel =
        document.getElementById(
            "produtoDisponivel"
        ).checked;



    if (!nome) {

        alert(
            "Digite o nome do produto."
        );

        return;

    }


    if (!categoria) {

        alert(
            "Selecione uma categoria."
        );

        return;

    }


    if (
        isNaN(preco) ||
        preco < 0
    ) {

        alert(
            "Digite um preço válido."
        );

        return;

    }



    /* ================= EDITAR ================= */

    if (id) {

        const indice =
            produtos.findIndex(
                produto =>
                    String(produto.id) ===
                    String(id)
            );


        if (indice !== -1) {

            produtos[indice] = {

                ...produtos[indice],

                nome: nome,

                categoria: categoria,

                preco: preco,

                descricao: descricao,

                disponivel: disponivel

            };

        }

    }



    /* ================= NOVO ================= */

    else {

        produtos.push({

            id:
                Date.now().toString(),

            nome: nome,

            categoria: categoria,

            preco: preco,

            descricao: descricao,

            disponivel: disponivel

        });

    }



    salvarProdutos();

    fecharCadastro();

    listarProdutos();


    alert(
        id
            ? "✅ Produto atualizado!"
            : "✅ Produto cadastrado!"
    );

}



/* ==========================================================
   LISTAR PRODUTOS
   ========================================================== */

function listarProdutos() {

    const lista =
        document.getElementById(
            "listaProdutos"
        );


    if (!lista) return;



    const campoBusca =
        document.getElementById(
            "campoBusca"
        );


    const filtroCategoria =
        document.getElementById(
            "filtroCategoria"
        );


    const filtroStatus =
        document.getElementById(
            "filtroStatus"
        );



    const busca =
        (
            campoBusca
                ? campoBusca.value
                : ""
        )
        .toLowerCase()
        .trim();


    const categoria =
        filtroCategoria
            ? filtroCategoria.value
            : "";


    const status =
        filtroStatus
            ? filtroStatus.value
            : "";



    const resultado =
        produtos.filter(
            function (produto) {

                const nome =
                    String(
                        produto.nome || ""
                    ).toLowerCase();


                const descricao =
                    String(
                        produto.descricao || ""
                    ).toLowerCase();


                const correspondeBusca =
                    !busca ||
                    nome.includes(busca) ||
                    descricao.includes(busca);


                const correspondeCategoria =
                    !categoria ||
                    produto.categoria === categoria;


                let correspondeStatus = true;


                if (
                    status ===
                    "disponivel"
                ) {

                    correspondeStatus =
                        produto.disponivel === true;

                }


                if (
                    status ===
                    "esgotado"
                ) {

                    correspondeStatus =
                        produto.disponivel === false;

                }


                return (
                    correspondeBusca &&
                    correspondeCategoria &&
                    correspondeStatus
                );

            }
        );



    if (resultado.length === 0) {

        lista.innerHTML = `

            <div class="sem-produtos">

                <div class="icone">
                    📦
                </div>

                <h3>
                    Nenhum produto encontrado
                </h3>

                <p>
                    Clique em "Novo Produto"
                    para cadastrar.
                </p>

            </div>

        `;

    } else {

        lista.innerHTML =
            resultado
                .map(
                    criarCardProduto
                )
                .join("");

    }


    atualizarResumo();

}



/* ==========================================================
   CRIAR CARD
   ========================================================== */

function criarCardProduto(
    produto
) {

    const disponivel =
        produto.disponivel === true;


    const statusClasse =
        disponivel
            ? "disponivel"
            : "esgotado";


    const statusTexto =
        disponivel
            ? "🟢 Disponível"
            : "🔴 Esgotado";


    const textoBotao =
        disponivel
            ? "🔴 Marcar esgotado"
            : "🟢 Disponibilizar";



    return `

        <article class="produto-card">

            <div class="produto-info">

                <div class="produto-topo">

                    <span class="categoria">
                        ${escaparHTML(
                            produto.categoria
                        )}
                    </span>

                    <span
                        class="status ${statusClasse}"
                    >
                        ${statusTexto}
                    </span>

                </div>


                <h3>
                    ${escaparHTML(
                        produto.nome
                    )}
                </h3>


                ${
                    produto.descricao
                        ? `
                            <p class="descricao">
                                ${escaparHTML(
                                    produto.descricao
                                )}
                            </p>
                        `
                        : ""
                }


                <strong class="preco">
                    ${formatarPreco(
                        produto.preco
                    )}
                </strong>

            </div>


            <div class="produto-acoes">

                <button
                    type="button"
                    class="btn-status"
                    onclick="alterarDisponibilidade('${produto.id}')"
                >
                    ${textoBotao}
                </button>


                <button
                    type="button"
                    class="btn-editar"
                    onclick="editarProduto('${produto.id}')"
                >
                    ✏️ Editar
                </button>


                <button
                    type="button"
                    class="btn-excluir"
                    onclick="excluirProduto('${produto.id}')"
                >
                    🗑️ Excluir
                </button>

            </div>

        </article>

    `;

}



/* ==========================================================
   ALTERAR DISPONIBILIDADE
   ========================================================== */

function alterarDisponibilidade(id) {

    const produto =
        produtos.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!produto) return;


    produto.disponivel =
        !produto.disponivel;


    salvarProdutos();

    listarProdutos();

}



/* ==========================================================
   EDITAR
   ========================================================== */

function editarProduto(id) {

    const produto =
        produtos.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!produto) return;


    document.getElementById(
        "produtoId"
    ).value = produto.id;


    document.getElementById(
        "produtoNome"
    ).value = produto.nome;


    document.getElementById(
        "produtoCategoria"
    ).value = produto.categoria;


    document.getElementById(
        "produtoPreco"
    ).value = produto.preco;


    document.getElementById(
        "produtoDescricao"
    ).value =
        produto.descricao || "";


    document.getElementById(
        "produtoDisponivel"
    ).checked =
        produto.disponivel === true;


    document.getElementById(
        "tituloModal"
    ).textContent =
        "✏️ Editar Produto";


    document.getElementById(
        "modalProduto"
    ).style.display =
        "flex";

}



/* ==========================================================
   EXCLUIR
   ========================================================== */

function excluirProduto(id) {

    const produto =
        produtos.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!produto) return;


    const confirmar =
        confirm(
            `Deseja excluir "${produto.nome}"?`
        );


    if (!confirmar) return;


    produtos =
        produtos.filter(
            item =>
                String(item.id) !==
                String(id)
        );


    salvarProdutos();

    listarProdutos();

}



/* ==========================================================
   RESUMO
   ========================================================== */

function atualizarResumo() {

    const total =
        produtos.length;


    const disponiveis =
        produtos.filter(
            produto =>
                produto.disponivel === true
        ).length;


    const esgotados =
        produtos.filter(
            produto =>
                produto.disponivel !== true
        ).length;



    const elementoTotal =
        document.getElementById(
            "totalProdutos"
        );


    const elementoDisponiveis =
        document.getElementById(
            "totalDisponiveis"
        );


    const elementoEsgotados =
        document.getElementById(
            "totalEsgotados"
        );


    if (elementoTotal) {
        elementoTotal.textContent =
            total;
    }


    if (elementoDisponiveis) {
        elementoDisponiveis.textContent =
            disponiveis;
    }


    if (elementoEsgotados) {
        elementoEsgotados.textContent =
            esgotados;
    }

}



/* ==========================================================
   FORMATAÇÃO DE PREÇO
   ========================================================== */

function formatarPreco(valor) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}



/* ==========================================================
   SEGURANÇA
   ========================================================== */

function escaparHTML(texto) {

    return String(
        texto ?? ""
    )
    .replace(
        /&/g,
        "&amp;"
    )
    .replace(
        /</g,
        "&lt;"
    )
    .replace(
        />/g,
        "&gt;"
    )
    .replace(
        /"/g,
        "&quot;"
    )
    .replace(
        /'/g,
        "&#039;"
    );

}



/* ==========================================================
   FECHAR MODAL CLICANDO FORA
   ========================================================== */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "modalProduto"
            );


        if (
            event.target === modal
        ) {

            fecharCadastro();

        }

    }
);