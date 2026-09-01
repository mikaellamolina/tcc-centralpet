/* =========================================================
   CENTRAL PET
   Front-end / SPA
   ========================================================= */


/* =========================================================
   ESTADO DA APLICAÇÃO
   ========================================================= */

const state = {

    currentPage: "adotar",

    userProfile: {
        nome: "Maria Silva",
        email: "maria.silva@email.com",
        telefone: "(14) 99876-5432",
        cidade: "Ourinhos - SP",

        // usuario | orgao
        tipo: "usuario"
    },

    filtroEspecie: "todos",

    doacaoState: {
        step: 1,
        tipo: "uma-vez",
        valor: 50,
        destino: "alimentacao",
        pagamento: "pix"
    },

    pets: [

        {
            id: 1,
            nome: "Thor",
            especie: "Cão",
            raca: "Vira-lata (SRD)",
            idade: "2 anos",
            porte: "Médio",
            vacinado: true,
            castrado: true,
            foto: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
            desc: "Thor é extremamente carinhoso, ativo e se dá muito bem com crianças e outros animais."
        },

        {
            id: 2,
            nome: "Luna",
            especie: "Gato",
            raca: "Siamês",
            idade: "1 ano",
            porte: "Pequeno",
            vacinado: true,
            castrado: true,
            foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
            desc: "Luna é calma, dócil, adora carinho e se adapta perfeitamente em apartamentos."
        },

        {
            id: 3,
            nome: "Bob",
            especie: "Cão",
            raca: "Golden Retriever Mix",
            idade: "3 anos",
            porte: "Grande",
            vacinado: true,
            castrado: false,
            foto: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
            desc: "Muito brincalhão e protetor. Precisa de uma casa com quintal amplo."
        },

        {
            id: 4,
            nome: "Mia",
            especie: "Gato",
            raca: "Persa Mix",
            idade: "6 meses",
            porte: "Pequeno",
            vacinado: false,
            castrado: false,
            foto: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
            desc: "Filhote resgatada, muito sociável e cheia de energia."
        }

    ],

    denuncias: [

        {
            id: 101,
            tipo: "Maus Tratos / Abuso",
            urgencia: "Alta",
            status: "Em análise",
            endereco: "Rua das Flores, 123 - Centro",
            data: "25/04/2026",
            descricao: "Cachorro mantido acorrentado sem abrigo do sol e sem água.",
            anonimo: false
        }

    ]

};


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    configurarEventosGlobais();

    carregarRota();

    renderizarSidebar();

    renderizarPagina();

    atualizarInformacoesUsuario();

});


/* =========================================================
   EVENTOS GLOBAIS
   ========================================================= */

function configurarEventosGlobais() {

    document
        .getElementById("btn-menu-mobile")
        ?.addEventListener("click", abrirMenuMobile);


    document
        .getElementById("btn-fechar-menu")
        ?.addEventListener("click", fecharMenuMobile);


    document
        .getElementById("mobile-overlay")
        ?.addEventListener("click", fecharMenuMobile);


    document
        .getElementById("logo-button")
        ?.addEventListener("click", () => {

            navegarPara("adotar");

        });


    document.addEventListener("click", event => {

        const botao = event.target.closest("[data-route]");

        if (!botao) {
            return;
        }

        navegarPara(botao.dataset.route);

    });


    window.addEventListener("popstate", () => {

        carregarRota();

        renderizarPagina();

        renderizarSidebar();

    });

}


/* =========================================================
   ROTA
   ========================================================= */

function carregarRota() {

    const hash = window.location.hash.replace("#/", "");

    if (!hash) {

        state.currentPage = "adotar";

        return;
    }

    const paginasValidas = [

        "adotar",
        "denunciar",
        "doar",
        "perfil",

        "entrada",
        "enviados",
        "triagem",
        "gerenciar-doacoes"

    ];

    if (
        paginasValidas.includes(hash) &&
        podeAcessarPagina(hash)
    ) {

        state.currentPage = hash;

    } else {

        state.currentPage = "adotar";

    }

}


function navegarPara(pagina) {

    if (!podeAcessarPagina(pagina)) {

        mostrarAviso(
            "Acesso restrito",
            "Essa área está disponível somente para órgãos legais."
        );

        return;
    }

    state.currentPage = pagina;

    history.pushState(
        {},
        "",
        `#/` + pagina
    );

    renderizarPagina();

    renderizarSidebar();

    fecharMenuMobile();

}


function podeAcessarPagina(pagina) {

    const paginasOrgao = [

        "entrada",
        "enviados",
        "triagem",
        "gerenciar-doacoes"

    ];

    if (
        paginasOrgao.includes(pagina) &&
        state.userProfile.tipo !== "orgao"
    ) {

        return false;

    }

    return true;

}


/* =========================================================
   SIDEBAR
   ========================================================= */

function renderizarSidebar() {

    const nav =
        document.getElementById("sidebar-nav");

    const action =
        document.getElementById("sidebar-action-container");


    /* -------------------------------------
       BOTÃO PRINCIPAL
       ------------------------------------- */

    if (state.userProfile.tipo === "orgao") {

        action.innerHTML = `
            <button
                type="button"
                class="compose-button"
                onclick="abrirModalEmail()"
            >
                <span>✎</span>
                Nova mensagem
            </button>
        `;

    } else {

        action.innerHTML = `
            <button
                type="button"
                class="compose-button"
                onclick="abrirModalDenuncia()"
            >
                <span>✎</span>
                Escrever denúncia
            </button>
        `;

    }


    /* -------------------------------------
       MENU PRINCIPAL
       ------------------------------------- */

    let html = `

        <div class="sidebar-section">

            <p class="sidebar-section-title">
                Principal
            </p>

            ${criarBotaoMenu(
                "adotar",
                "🐾",
                "Adotar"
            )}

            ${criarBotaoMenu(
                "denunciar",
                "⚠",
                "Denunciar"
            )}

            ${criarBotaoMenu(
                "doar",
                "♥",
                "Doações"
            )}

        </div>

    `;


    /* -------------------------------------
       MENU DO ÓRGÃO
       ------------------------------------- */

    if (state.userProfile.tipo === "orgao") {

        html += `

            <div class="sidebar-section">

                <p class="sidebar-section-title">
                    Área do órgão
                </p>

                ${criarBotaoMenu(
                    "entrada",
                    "▣",
                    "Caixa de entrada",
                    "24"
                )}

                ${criarBotaoMenu(
                    "enviados",
                    "➤",
                    "Enviados"
                )}

                ${criarBotaoMenu(
                    "triagem",
                    "☷",
                    "Triagem",
                    "8",
                    true
                )}

                ${criarBotaoMenu(
                    "gerenciar-doacoes",
                    "▣",
                    "Gerenciar doações"
                )}

            </div>

        `;

    }


    nav.innerHTML = html;

}


/* =========================================================
   CRIAR BOTÃO DO MENU
   ========================================================= */

function criarBotaoMenu(
    rota,
    icone,
    nome,
    contador = "",
    alerta = false
) {

    const ativo =
        state.currentPage === rota
            ? "active"
            : "";

    return `

        <button
            type="button"
            data-route="${rota}"
            id="nav-${rota}"
            class="nav-btn ${ativo}"
        >

            <span class="nav-icon">
                ${icone}
            </span>

            <span>
                ${nome}
            </span>

            ${
                contador
                    ? `
                        <span
                            class="nav-count ${alerta ? "alert" : ""}"
                        >
                            ${contador}
                        </span>
                    `
                    : ""
            }

        </button>

    `;

}


/* =========================================================
   INFORMAÇÕES DO USUÁRIO
   ========================================================= */

function atualizarInformacoesUsuario() {

    const user =
        state.userProfile;

    const nome =
        user.nome || "Usuário";


    document
        .getElementById("sidebar-user-name")
        .textContent = nome;


    document
        .getElementById("sidebar-user-role")
        .textContent =
            user.tipo === "orgao"
                ? "Órgão legal"
                : "Usuária";


    const iniciais =
        obterIniciais(nome);


    document
        .getElementById("sidebar-avatar")
        .textContent = iniciais;


    document
        .getElementById("header-avatar")
        .textContent = iniciais;

}


/* =========================================================
   RENDERIZAÇÃO DAS PÁGINAS
   ========================================================= */

function renderizarPagina() {

    const main =
        document.getElementById("conteudo");


    switch (state.currentPage) {

        case "adotar":

            atualizarCabecalho(
                "Adotar",
                "Encontre um animal esperando por um novo lar."
            );

            main.innerHTML =
                renderVitrineAdocao();

            break;


        case "denunciar":

            atualizarCabecalho(
                "Denunciar",
                "Acompanhe suas denúncias e registre uma nova ocorrência."
            );

            main.innerHTML =
                renderDenuncias();

            break;


        case "doar":

            atualizarCabecalho(
                "Doações",
                "Contribua para a proteção e o bem-estar dos animais."
            );

            main.innerHTML =
                renderWizardDoacao();

            break;


        case "perfil":

            atualizarCabecalho(
                "Meu perfil",
                "Gerencie suas informações e preferências."
            );

            main.innerHTML =
                renderPerfilUsuario();

            break;


        case "entrada":

            atualizarCabecalho(
                "Caixa de entrada",
                "Denúncias e comunicações recebidas pelo órgão."
            );

            main.innerHTML =
                renderCaixaEntrada();

            break;


        case "enviados":

            atualizarCabecalho(
                "Enviados",
                "Mensagens e encaminhamentos enviados."
            );

            main.innerHTML =
                renderEnviados();

            break;


        case "triagem":

            atualizarCabecalho(
                "Triagem",
                "Organize as denúncias por prioridade e andamento."
            );

            main.innerHTML =
                renderTriagem();

            break;


        case "gerenciar-doacoes":

            atualizarCabecalho(
                "Gerenciar doações",
                "Acompanhe campanhas e recursos destinados aos animais."
            );

            main.innerHTML =
                renderGerenciarDoacoes();

            break;


        default:

            state.currentPage = "adotar";

            renderizarPagina();

    }

}


/* =========================================================
   CABEÇALHO
   ========================================================= */

function atualizarCabecalho(
    titulo,
    subtitulo
) {

    document
        .getElementById("page-title")
        .textContent = titulo;


    document
        .getElementById("page-subtitle")
        .textContent = subtitulo;


    document
        .getElementById("breadcrumb")
        .textContent =
            state.userProfile.tipo === "orgao"
                ? "Central Pet · Área do órgão"
                : "Central Pet";

}


/* =========================================================
   1. ADOÇÃO
   ========================================================= */

function renderVitrineAdocao() {

    const pets =
        state.filtroEspecie === "todos"
            ? state.pets
            : state.pets.filter(
                pet =>
                    pet.especie.toLowerCase() ===
                    state.filtroEspecie.toLowerCase()
            );


    return `

        <div class="page-wrapper">

            <div class="page-header">

                <h2>
                    Encontre seu novo amigo
                </h2>

                <p>
                    Animais disponíveis para adoção responsável.
                </p>

            </div>


            <div class="card p-5 mb-6">

                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div class="flex flex-wrap gap-2">

                        ${botaoFiltro(
                            "todos",
                            `Todos (${state.pets.length})`
                        )}

                        ${botaoFiltro(
                            "Cão",
                            "🐶 Cães"
                        )}

                        ${botaoFiltro(
                            "Gato",
                            "🐱 Gatos"
                        )}

                    </div>


                    <button
                        type="button"
                        onclick="abrirModalCadastrarPet()"
                        class="rounded-xl bg-pet-blue px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-900"
                    >
                        + Cadastrar animal
                    </button>

                </div>

            </div>


            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                ${
                    pets.length
                        ? pets.map(renderPetCard).join("")
                        : `
                            <div class="card p-8 text-center col-span-full">
                                <p class="font-bold">
                                    Nenhum animal encontrado.
                                </p>
                            </div>
                        `
                }

            </div>

        </div>

    `;

}


function botaoFiltro(
    filtro,
    texto
) {

    const ativo =
        state.filtroEspecie === filtro;


    return `

        <button
            type="button"
            onclick="filtrarEspecie('${filtro}')"
            class="
                rounded-xl
                px-4
                py-2
                text-xs
                font-bold
                transition
                ${
                    ativo
                        ? "bg-pet-orange text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
            "
        >
            ${texto}
        </button>

    `;

}


function renderPetCard(pet) {

    return `

        <article class="card overflow-hidden">

            <div class="relative h-48 bg-gray-100">

                <img
                    src="${pet.foto}"
                    alt="Foto de ${pet.nome}"
                    class="w-full h-full object-cover"
                >

                <span
                    class="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold"
                >
                    ${pet.especie}
                </span>

            </div>


            <div class="p-4">

                <div class="flex items-center justify-between gap-2">

                    <h3 class="font-black text-lg">
                        ${pet.nome}
                    </h3>

                    <span class="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold text-orange-700">
                        ${pet.idade}
                    </span>

                </div>


                <p class="mt-1 text-xs text-gray-500">
                    ${pet.raca}
                </p>


                <p class="mt-3 text-xs leading-5 text-gray-600">
                    ${pet.desc}
                </p>


                <div class="mt-3 flex flex-wrap gap-1">

                    <span class="rounded bg-gray-100 px-2 py-1 text-[10px]">
                        Porte: ${pet.porte}
                    </span>

                    ${
                        pet.vacinado
                            ? `
                                <span class="rounded bg-green-100 px-2 py-1 text-[10px] text-green-700">
                                    ✓ Vacinado
                                </span>
                            `
                            : ""
                    }

                    ${
                        pet.castrado
                            ? `
                                <span class="rounded bg-blue-100 px-2 py-1 text-[10px] text-blue-700">
                                    ✓ Castrado
                                </span>
                            `
                            : ""
                    }

                </div>


                <button
                    type="button"
                    onclick="abrirDetalhesPet(${pet.id})"
                    class="mt-4 w-full rounded-xl bg-pet-orange px-4 py-2.5 text-xs font-bold text-white hover:bg-orange-600"
                >
                    Quero conhecer ${pet.nome}
                </button>

            </div>

        </article>

    `;

}


function filtrarEspecie(
    especie
) {

    state.filtroEspecie =
        especie;

    renderizarPagina();

}


/* =========================================================
   2. DENÚNCIAS
   ========================================================= */

function renderDenuncias() {

    return `

        <div class="page-wrapper">

            <div class="page-header flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

                <div>

                    <h2>
                        Minhas denúncias
                    </h2>

                    <p>
                        Acompanhe o andamento das denúncias realizadas.
                    </p>

                </div>


                <button
                    type="button"
                    onclick="abrirModalDenuncia()"
                    class="rounded-xl bg-pet-red px-5 py-3 text-xs font-bold text-white hover:bg-red-700"
                >
                    + Nova denúncia
                </button>

            </div>


            <div class="space-y-4">

                ${
                    state.denuncias.length
                        ? state.denuncias
                            .map(renderDenunciaCard)
                            .join("")
                        : `
                            <div class="card p-10 text-center">

                                <h3 class="font-black text-lg">
                                    Nenhuma denúncia registrada
                                </h3>

                                <p class="mt-2 text-sm text-gray-500">
                                    Você ainda não realizou nenhuma denúncia.
                                </p>

                            </div>
                        `
                }

            </div>

        </div>

    `;

}


function renderDenunciaCard(
    denuncia
) {

    return `

        <article class="card p-5">

            <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>

                    <span class="text-[10px] font-bold text-gray-400">
                        PROTOCOLO #${denuncia.id}
                    </span>

                    <h3 class="mt-1 font-black text-base">
                        ${denuncia.tipo}
                    </h3>

                    <p class="mt-1 text-xs text-gray-500">
                        📍 ${denuncia.endereco}
                    </p>

                    <p class="mt-1 text-xs text-gray-400">
                        Registrada em ${denuncia.data}
                    </p>

                </div>


                <div class="flex gap-2">

                    <span class="status-badge ${
                        denuncia.urgencia === "Alta"
                            ? "status-high"
                            : denuncia.urgencia === "Média"
                                ? "status-medium"
                                : "status-low"
                    }">
                        ${denuncia.urgencia}
                    </span>

                    <span class="status-badge status-neutral">
                        ${denuncia.status}
                    </span>

                </div>

            </div>


            <p class="mt-4 rounded-xl bg-gray-50 p-4 text-xs leading-6 text-gray-600">
                ${denuncia.descricao}
            </p>


            <div class="mt-4 flex items-center justify-between border-t pt-3">

                <span class="text-[10px] font-bold text-gray-500">
                    ${
                        denuncia.anonimo
                            ? "🔒 Denúncia anônima"
                            : "👤 Denúncia identificada"
                    }
                </span>


                <button
                    type="button"
                    onclick="abrirDetalhesDenuncia(${denuncia.id})"
                    class="text-xs font-bold text-pet-blue hover:underline"
                >
                    Ver detalhes
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   MODAL DE DENÚNCIA
   ========================================================= */

function abrirModalDenuncia() {

    const modal =
        document.getElementById("modal-container");


    modal.classList.remove("hidden");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    modal.innerHTML = `

        <div class="modal-box">

            <div class="modal-header">

                <h3>
                    Nova denúncia
                </h3>

                <button
                    type="button"
                    onclick="fecharModal()"
                    class="modal-close"
                    aria-label="Fechar"
                >
                    ×
                </button>

            </div>


            <div class="modal-body">

                <form id="form-denuncia">

                    <div class="form-group">

                        <label
                            for="den-tipo"
                            class="form-label"
                        >
                            Tipo de denúncia
                        </label>

                        <select
                            id="den-tipo"
                            class="form-control"
                            required
                        >
                            <option value="">
                                Selecione...
                            </option>

                            <option>
                                Maus-tratos / Abuso
                            </option>

                            <option>
                                Abandono de animais
                            </option>

                            <option>
                                Animal em risco
                            </option>

                            <option>
                                Negligência
                            </option>

                            <option>
                                Outro
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label
                            for="den-urgencia"
                            class="form-label"
                        >
                            Nível de urgência
                        </label>

                        <select
                            id="den-urgencia"
                            class="form-control"
                            required
                        >

                            <option value="Baixa">
                                Baixa
                            </option>

                            <option value="Média">
                                Média
                            </option>

                            <option value="Alta">
                                Alta
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label
                            for="den-endereco"
                            class="form-label"
                        >
                            Local da ocorrência
                        </label>

                        <input
                            id="den-endereco"
                            type="text"
                            class="form-control"
                            placeholder="Endereço ou ponto de referência"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label
                            for="den-data"
                            class="form-label"
                        >
                            Data da ocorrência
                        </label>

                        <input
                            id="den-data"
                            type="date"
                            class="form-control"
                        >

                    </div>


                    <div class="form-group">

                        <label
                            for="den-desc"
                            class="form-label"
                        >
                            Descrição da situação
                        </label>

                        <textarea
                            id="den-desc"
                            class="form-control"
                            rows="6"
                            placeholder="Descreva o que aconteceu com o máximo de detalhes possível."
                            required
                        ></textarea>

                    </div>


                    <div class="form-group">

                        <label
                            class="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
                        >

                            <input
                                id="den-anonimo"
                                type="checkbox"
                                class="mt-1"
                            >

                            <span>

                                <strong class="block text-xs">
                                    Fazer denúncia anonimamente
                                </strong>

                                <small class="mt-1 block text-[11px] text-gray-500">
                                    Seus dados de identificação não serão vinculados à denúncia.
                                </small>

                            </span>

                        </label>

                    </div>


                    <div class="flex justify-end gap-2 pt-3">

                        <button
                            type="button"
                            onclick="fecharModal()"
                            class="rounded-xl border px-4 py-2.5 text-xs font-bold"
                        >
                            Cancelar
                        </button>


                        <button
                            type="submit"
                            class="rounded-xl bg-pet-red px-5 py-2.5 text-xs font-bold text-white"
                        >
                            Enviar denúncia
                        </button>

                    </div>

                </form>

            </div>

        </div>

    `;


    document
        .getElementById("form-denuncia")
        .addEventListener(
            "submit",
            enviarDenuncia
        );

}


function enviarDenuncia(
    event
) {

    event.preventDefault();


    const novaDenuncia = {

        id:
            Date.now(),

        tipo:
            document.getElementById("den-tipo").value,

        urgencia:
            document.getElementById("den-urgencia").value,

        status:
            "Recebida",

        endereco:
            document.getElementById("den-endereco").value,

        data:
            document.getElementById("den-data").value ||
            "Hoje",

        descricao:
            document.getElementById("den-desc").value,

        anonimo:
            document.getElementById("den-anonimo").checked

    };


    state.denuncias.unshift(
        novaDenuncia
    );


    fecharModal();

    navegarPara("denunciar");


    mostrarAviso(
        "Denúncia registrada",
        "Sua denúncia foi registrada no sistema. Neste protótipo, o envio ainda é simulado."
    );

}


/* =========================================================
   3. DOAÇÕES
   ========================================================= */

function renderWizardDoacao() {

    const stateDoacao =
        state.doacaoState;


    return `

        <div class="page-wrapper">

            <div class="page-header">

                <h2>
                    Apoie a causa animal
                </h2>

                <p>
                    Escolha como deseja contribuir.
                </p>

            </div>


            <div class="card p-6">

                <div class="mb-8 flex items-center">

                    ${renderStep(1, "Valor")}

                    <div class="h-px flex-1 bg-gray-200"></div>

                    ${renderStep(2, "Dados")}

                    <div class="h-px flex-1 bg-gray-200"></div>

                    ${renderStep(3, "Pagamento")}

                    <div class="h-px flex-1 bg-gray-200"></div>

                    ${renderStep(4, "Finalização")}

                </div>


                ${renderStepContent()}

            </div>

        </div>

    `;

}


function renderStep(
    numero,
    texto
) {

    const ativo =
        state.doacaoState.step >= numero;


    return `

        <div class="flex flex-col items-center">

            <div
                class="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-xs
                    font-bold
                    ${
                        ativo
                            ? "bg-pet-red text-white"
                            : "bg-gray-200 text-gray-400"
                    }
                "
            >
                ${numero}
            </div>

            <span
                class="
                    mt-1
                    text-[10px]
                    font-bold
                    ${
                        ativo
                            ? "text-pet-red"
                            : "text-gray-400"
                    }
                "
            >
                ${texto}
            </span>

        </div>

    `;

}


function renderStepContent() {

    const s =
        state.doacaoState;


    if (s.step === 1) {

        return `

            <div class="space-y-6">

                <div>

                    <label class="form-label">
                        Tipo de doação
                    </label>

                    <div class="grid grid-cols-2 gap-2">

                        ${botaoTipoDoacao(
                            "uma-vez",
                            "🎁 Uma vez"
                        )}

                        ${botaoTipoDoacao(
                            "mensal",
                            "🔄 Mensal"
                        )}

                    </div>

                </div>


                <div>

                    <label class="form-label">
                        Escolha um valor
                    </label>

                    <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">

                        ${
                            [15, 30, 50, 100, 200]
                                .map(valor => `
                                    <button
                                        type="button"
                                        onclick="setValorDoacao(${valor})"
                                        class="
                                            rounded-xl
                                            border
                                            px-3
                                            py-3
                                            text-xs
                                            font-bold
                                            ${
                                                s.valor === valor
                                                    ? "border-pet-red bg-pet-red text-white"
                                                    : "border-gray-200 bg-white"
                                            }
                                        "
                                    >
                                        R$ ${valor}
                                    </button>
                                `)
                                .join("")
                        }

                    </div>


                    <input
                        type="number"
                        min="1"
                        placeholder="Outro valor"
                        class="form-control mt-3"
                        onchange="setValorDoacao(Number(this.value))"
                    >

                </div>


                <div>

                    <label class="form-label">
                        Destino da doação
                    </label>

                    <div class="grid gap-3 sm:grid-cols-2">

                        ${botaoDestino(
                            "alimentacao",
                            "♡",
                            "Alimentação",
                            "Ração e alimentação."
                        )}

                        ${botaoDestino(
                            "saude",
                            "✚",
                            "Saúde",
                            "Cuidados veterinários."
                        )}

                        ${botaoDestino(
                            "resgate",
                            "🛡",
                            "Resgate",
                            "Operações de resgate."
                        )}

                        ${botaoDestino(
                            "abrigo",
                            "⌂",
                            "Abrigo",
                            "Infraestrutura."
                        )}

                    </div>

                </div>


                <div class="rounded-xl bg-red-50 p-4">

                    <strong class="text-xs text-red-700">
                        Seu impacto
                    </strong>

                    <p class="mt-1 text-xs text-red-600">
                        Uma contribuição de R$ ${s.valor} ajuda diretamente no cuidado dos animais.
                    </p>

                </div>


                <button
                    type="button"
                    onclick="avancarDoacao(2)"
                    class="w-full rounded-xl bg-pet-red px-4 py-3 text-sm font-bold text-white"
                >
                    Continuar
                </button>

            </div>

        `;

    }


    if (s.step === 2) {

        return `

            <div class="space-y-5">

                <div>

                    <label class="form-label">
                        Nome completo
                    </label>

                    <input
                        value="${state.userProfile.nome}"
                        class="form-control"
                    >

                </div>


                <div>

                    <label class="form-label">
                        E-mail
                    </label>

                    <input
                        type="email"
                        value="${state.userProfile.email}"
                        class="form-control"
                    >

                </div>


                <div>

                    <label class="form-label">
                        CPF
                    </label>

                    <input
                        type="text"
                        placeholder="000.000.000-00"
                        class="form-control"
                    >

                </div>


                <div class="flex gap-2">

                    <button
                        type="button"
                        onclick="avancarDoacao(1)"
                        class="w-1/3 rounded-xl border px-4 py-3 text-xs font-bold"
                    >
                        Voltar
                    </button>

                    <button
                        type="button"
                        onclick="avancarDoacao(3)"
                        class="flex-1 rounded-xl bg-pet-red px-4 py-3 text-xs font-bold text-white"
                    >
                        Continuar
                    </button>

                </div>

            </div>

        `;

    }


    if (s.step === 3) {

        return `

            <div class="space-y-5">

                <h3 class="font-black">
                    Forma de pagamento
                </h3>


                <div class="grid grid-cols-3 gap-2">

                    <button
                        type="button"
                        onclick="setPagamentoDoacao('pix')"
                        class="rounded-xl border p-3 text-xs font-bold ${
                            s.pagamento === "pix"
                                ? "border-pet-red bg-red-50"
                                : ""
                        }"
                    >
                        PIX
                    </button>

                    <button
                        type="button"
                        onclick="setPagamentoDoacao('cartao')"
                        class="rounded-xl border p-3 text-xs font-bold ${
                            s.pagamento === "cartao"
                                ? "border-pet-red bg-red-50"
                                : ""
                        }"
                    >
                        Cartão
                    </button>

                    <button
                        type="button"
                        onclick="setPagamentoDoacao('boleto')"
                        class="rounded-xl border p-3 text-xs font-bold ${
                            s.pagamento === "boleto"
                                ? "border-pet-red bg-red-50"
                                : ""
                        }"
                    >
                        Boleto
                    </button>

                </div>


                ${
                    s.pagamento === "pix"
                        ? `
                            <div class="rounded-xl bg-gray-50 p-6 text-center">

                                <p class="text-sm font-bold">
                                    PIX
                                </p>

                                <div class="mx-auto mt-4 flex h-32 w-32 items-center justify-center border bg-white text-5xl">
                                    QR
                                </div>

                                <p class="mt-3 text-[10px] text-gray-500">
                                    chave-pix@centralpet.org
                                </p>

                            </div>
                        `
                        : `
                            <div class="rounded-xl bg-gray-50 p-5 text-sm text-gray-500">
                                Esta etapa é somente visual neste protótipo.
                            </div>
                        `
                }


                <div class="flex gap-2">

                    <button
                        type="button"
                        onclick="avancarDoacao(2)"
                        class="w-1/3 rounded-xl border px-4 py-3 text-xs font-bold"
                    >
                        Voltar
                    </button>

                    <button
                        type="button"
                        onclick="avancarDoacao(4)"
                        class="flex-1 rounded-xl bg-pet-red px-4 py-3 text-xs font-bold text-white"
                    >
                        Confirmar
                    </button>

                </div>

            </div>

        `;

    }


    return `

        <div class="py-10 text-center">

            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                ✓
            </div>

            <h3 class="mt-5 text-xl font-black">
                Obrigado pela sua contribuição!
            </h3>

            <p class="mx-auto mt-2 max-w-md text-sm text-gray-500">
                Sua doação de R$ ${s.valor} foi registrada neste protótipo.
            </p>

            <button
                type="button"
                onclick="resetarDoacao()"
                class="mt-6 rounded-xl bg-pet-orange px-5 py-3 text-xs font-bold text-white"
            >
                Fazer outra doação
            </button>

        </div>

    `;

}


function botaoTipoDoacao(
    tipo,
    texto
) {

    const ativo =
        state.doacaoState.tipo === tipo;


    return `

        <button
            type="button"
            onclick="setTipoDoacao('${tipo}')"
            class="
                rounded-xl
                border
                px-4
                py-3
                text-xs
                font-bold
                ${
                    ativo
                        ? "border-pet-orange bg-orange-50"
                        : ""
                }
            "
        >
            ${texto}
        </button>

    `;

}


function botaoDestino(
    destino,
    icone,
    titulo,
    descricao
) {

    const ativo =
        state.doacaoState.destino === destino;


    return `

        <button
            type="button"
            onclick="setDestinoDoacao('${destino}')"
            class="
                rounded-xl
                border-2
                p-4
                text-left
                ${
                    ativo
                        ? "border-pet-red bg-red-50"
                        : "border-gray-100"
                }
            "
        >

            <strong class="text-xs">
                ${icone} ${titulo}
            </strong>

            <span class="mt-1 block text-[11px] text-gray-500">
                ${descricao}
            </span>

        </button>

    `;

}


function setTipoDoacao(
    tipo
) {

    state.doacaoState.tipo =
        tipo;

    renderizarPagina();

}


function setValorDoacao(
    valor
) {

    if (!valor || valor < 1) {
        return;
    }

    state.doacaoState.valor =
        valor;

    renderizarPagina();

}


function setDestinoDoacao(
    destino
) {

    state.doacaoState.destino =
        destino;

    renderizarPagina();

}


function setPagamentoDoacao(
    pagamento
) {

    state.doacaoState.pagamento =
        pagamento;

    renderizarPagina();

}


function avancarDoacao(
    step
) {

    state.doacaoState.step =
        step;

    renderizarPagina();

}


function resetarDoacao() {

    state.doacaoState = {

        step: 1,
        tipo: "uma-vez",
        valor: 50,
        destino: "alimentacao",
        pagamento: "pix"

    };

    renderizarPagina();

}


/* =========================================================
   4. PERFIL
   ========================================================= */

function renderPerfilUsuario() {

    const user =
        state.userProfile;


    return `

        <div class="page-wrapper">

            <div class="page-header">

                <h2>
                    Meu perfil
                </h2>

                <p>
                    Gerencie suas informações pessoais.
                </p>

            </div>


            <div class="grid gap-6 lg:grid-cols-[260px_1fr]">

                <div class="card p-6">

                    <div class="flex flex-col items-center text-center">

                        <div class="flex h-24 w-24 items-center justify-center rounded-full bg-pet-blue text-2xl font-black text-white">
                            ${obterIniciais(user.nome)}
                        </div>

                        <h3 class="mt-4 font-black">
                            ${user.nome}
                        </h3>

                        <p class="mt-1 text-xs text-gray-500">
                            ${
                                user.tipo === "orgao"
                                    ? "Órgão legal"
                                    : "Usuária"
                            }
                        </p>

                    </div>

                </div>


                <div class="card p-6">

                    <form id="perfil-form">

                        <div class="form-group">

                            <label class="form-label">
                                Nome
                            </label>

                            <input
                                id="perfil-nome"
                                class="form-control"
                                value="${user.nome}"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label class="form-label">
                                E-mail
                            </label>

                            <input
                                id="perfil-email"
                                type="email"
                                class="form-control"
                                value="${user.email}"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label class="form-label">
                                Telefone
                            </label>

                            <input
                                id="perfil-telefone"
                                class="form-control"
                                value="${user.telefone}"
                            >

                        </div>


                        <div class="form-group">

                            <label class="form-label">
                                Cidade
                            </label>

                            <input
                                id="perfil-cidade"
                                class="form-control"
                                value="${user.cidade}"
                            >

                        </div>


                        <button
                            type="submit"
                            class="rounded-xl bg-pet-blue px-5 py-3 text-xs font-bold text-white"
                        >
                            Salvar alterações
                        </button>

                    </form>


                    <!-- SOMENTE PARA DESENVOLVIMENTO -->
                    <div class="mt-8 border-t pt-6">

                        <p class="text-[10px] font-black uppercase tracking-wider text-gray-400">
                            Ambiente de desenvolvimento
                        </p>

                        <p class="mt-2 text-xs text-gray-500">
                            Use este controle somente para testar as duas interfaces durante o desenvolvimento.
                        </p>


                        <div class="mt-3">

                            <select
                                id="tipo-conta-dev"
                                class="form-control"
                            >

                                <option
                                    value="usuario"
                                    ${
                                        user.tipo === "usuario"
                                            ? "selected"
                                            : ""
                                    }
                                >
                                    Usuário comum
                                </option>

                                <option
                                    value="orgao"
                                    ${
                                        user.tipo === "orgao"
                                            ? "selected"
                                            : ""
                                    }
                                >
                                    Órgão legal
                                </option>

                            </select>

                        </div>

                    </div>


                    <div class="mt-6 border-t pt-6">

                        <button
                            type="button"
                            onclick="realizarLogout()"
                            class="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-bold text-red-600 hover:bg-red-100"
                        >
                            Sair da conta
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   EVENTO DO PERFIL
   ========================================================= */

document.addEventListener(
    "submit",
    event => {

        if (
            event.target.id !== "perfil-form"
        ) {

            return;

        }


        event.preventDefault();


        state.userProfile.nome =
            document
                .getElementById("perfil-nome")
                .value;


        state.userProfile.email =
            document
                .getElementById("perfil-email")
                .value;


        state.userProfile.telefone =
            document
                .getElementById("perfil-telefone")
                .value;


        state.userProfile.cidade =
            document
                .getElementById("perfil-cidade")
                .value;


        const tipo =
            document.getElementById(
                "tipo-conta-dev"
            );


        if (tipo) {

            state.userProfile.tipo =
                tipo.value;

        }


        atualizarInformacoesUsuario();

        renderizarSidebar();


        mostrarAviso(
            "Perfil atualizado",
            "As informações foram atualizadas nesta sessão."
        );

    }
);


/* =========================================================
   5. ÁREA DO ÓRGÃO
   ========================================================= */

function renderCaixaEntrada() {

    return `

        <div class="page-wrapper">

            <div class="page-header">

                <h2>
                    Caixa de entrada
                </h2>

                <p>
                    Denúncias recebidas para análise.
                </p>

            </div>


            <div class="card overflow-hidden">

                ${
                    state.denuncias
                        .map(denuncia => `

                            <button
                                type="button"
                                onclick="abrirDetalhesDenuncia(${denuncia.id})"
                                class="flex w-full items-center gap-4 border-b p-5 text-left hover:bg-gray-50"
                            >

                                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-pet-red">
                                    ⚠
                                </div>


                                <div class="min-w-0 flex-1">

                                    <p class="truncate text-sm font-black">
                                        ${denuncia.tipo}
                                    </p>

                                    <p class="mt-1 text-xs text-gray-500">
                                        ${denuncia.endereco}
                                    </p>

                                    <p class="mt-1 text-[10px] text-gray-400">
                                        ${denuncia.data}
                                    </p>

                                </div>


                                <span class="status-badge ${
                                    denuncia.urgencia === "Alta"
                                        ? "status-high"
                                        : denuncia.urgencia === "Média"
                                            ? "status-medium"
                                            : "status-low"
                                }">
                                    ${denuncia.urgencia}
                                </span>

                            </button>

                        `)
                        .join("")
                }

            </div>

        </div>

    `;

}


function renderEnviados() {

    return `

        <div class="page-wrapper">

            <div class="page-header">

                <h2>
                    Enviados
                </h2>

                <p>
                    Mensagens e encaminhamentos enviados.
                </p>

            </div>


            <div class="card overflow-hidden">

                ${[
                    "Encaminhamento para fiscalização",
                    "Retorno de triagem",
                    "Solicitação de apoio ao abrigo"
                ]
                    .map(
                        (item, index) => `

                            <div class="flex items-center gap-4 border-b p-5 last:border-b-0">

                                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-pet-blue">
                                    ➤
                                </div>


                                <div class="flex-1">

                                    <p class="text-sm font-bold">
                                        ${item}
                                    </p>

                                    <p class="mt-1 text-xs text-gray-400">
                                        Comunicação enviada em 0${index + 1}/09/2026
                                    </p>

                                </div>

                            </div>

                        `
                    )
                    .join("")}

            </div>

        </div>

    `;

}


function renderTriagem() {

    const alta =
        state.denuncias.filter(
            item => item.urgencia === "Alta"
        );

    const media =
        state.denuncias.filter(
            item => item.urgencia === "Média"
        );

    const baixa =
        state.denuncias.filter(
            item => item.urgencia === "Baixa"
        );


    return `

        <div class="page-wrapper">

            <div class="page-header">

                <h2>
                    Triagem de denúncias
                </h2>

                <p>
                    Organize as ocorrências por prioridade.
                </p>

            </div>


            <div class="grid gap-5 xl:grid-cols-3">

                ${renderColunaTriagem(
                    "Alta prioridade",
                    alta,
                    "status-high"
                )}

                ${renderColunaTriagem(
                    "Média prioridade",
                    media,
                    "status-medium"
                )}

                ${renderColunaTriagem(
                    "Baixa prioridade",
                    baixa,
                    "status-low"
                )}

            </div>

        </div>

    `;

}


function renderColunaTriagem(
    titulo,
    denuncias,
    classe
) {

    return `

        <section class="rounded-2xl border bg-gray-50 p-4">

            <div class="mb-4 flex items-center justify-between">

                <h3 class="text-sm font-black">
                    ${titulo}
                </h3>

                <span class="status-badge ${classe}">
                    ${denuncias.length}
                </span>

            </div>


            <div class="space-y-3">

                ${
                    denuncias.length
                        ? denuncias
                            .map(
                                item => `

                                    <button
                                        type="button"
                                        onclick="abrirDetalhesDenuncia(${item.id})"
                                        class="w-full rounded-xl border bg-white p-4 text-left shadow-sm hover:shadow-md"
                                    >

                                        <p class="text-xs font-black">
                                            #${item.id}
                                        </p>

                                        <p class="mt-2 text-xs font-bold">
                                            ${item.tipo}
                                        </p>

                                        <p class="mt-1 text-[10px] text-gray-400">
                                            ${item.endereco}
                                        </p>

                                        <p class="mt-2 text-[10px] font-bold text-blue-600">
                                            ${item.status}
                                        </p>

                                    </button>

                                `
                            )
                            .join("")
                        : `
                            <div class="rounded-xl border border-dashed p-5 text-center text-xs text-gray-400">
                                Nenhuma denúncia.
                            </div>
                        `
                }

            </div>

        </section>

    `;

}


function renderGerenciarDoacoes() {

    return `

        <div class="page-wrapper">

            <div class="page-header">

                <h2>
                    Gerenciar doações
                </h2>

                <p>
                    Acompanhe campanhas e recursos recebidos.
                </p>

            </div>


            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                ${[
                    ["R$ 8.420", "Doações financeiras"],
                    ["214", "Itens recebidos"],
                    ["12", "Campanhas ativas"],
                    ["37", "Pedidos atendidos"]
                ]
                    .map(
                        item => `

                            <div class="card p-5">

                                <p class="text-2xl font-black">
                                    ${item[0]}
                                </p>

                                <p class="mt-1 text-xs text-gray-500">
                                    ${item[1]}
                                </p>

                            </div>

                        `
                    )
                    .join("")}

            </div>


            <div class="card mt-5 overflow-hidden">

                <div class="border-b p-5">

                    <h3 class="text-sm font-black">
                        Campanhas
                    </h3>

                </div>


                ${[
                    ["Ração de Inverno", "78%"],
                    ["Cobertores para Abrigos", "54%"],
                    ["Medicamentos", "91%"]
                ]
                    .map(
                        campanha => `

                            <div class="border-b p-5 last:border-b-0">

                                <div class="flex justify-between">

                                    <span class="text-sm font-bold">
                                        ${campanha[0]}
                                    </span>

                                    <span class="text-xs font-bold text-gray-500">
                                        ${campanha[1]}
                                    </span>

                                </div>


                                <div class="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">

                                    <div
                                        class="h-full rounded-full bg-pet-orange"
                                        style="width: ${campanha[1]}"
                                    ></div>

                                </div>

                            </div>

                        `
                    )
                    .join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   DETALHES DE PET
   ========================================================= */

function abrirDetalhesPet(
    id
) {

    const pet =
        state.pets.find(
            item => item.id === id
        );


    if (!pet) {
        return;
    }


    abrirModal(

        "Detalhes do animal",

        `

            <img
                src="${pet.foto}"
                alt="Foto de ${pet.nome}"
                class="h-64 w-full object-cover rounded-xl"
            >


            <h3 class="mt-5 text-2xl font-black">
                ${pet.nome}
            </h3>


            <p class="mt-1 text-xs text-gray-500">
                ${pet.especie} · ${pet.raca} · ${pet.idade}
            </p>


            <p class="mt-4 text-sm leading-6 text-gray-600">
                ${pet.desc}
            </p>


            <button
                type="button"
                onclick="fecharModal(); abrirModalEmail()"
                class="mt-6 w-full rounded-xl bg-pet-blue px-4 py-3 text-xs font-bold text-white"
            >
                Entrar em contato para adoção
            </button>

        `

    );

}


/* =========================================================
   CADASTRO DE PET
   ========================================================= */

function abrirModalCadastrarPet() {

    abrirModal(

        "Cadastrar animal",

        `

            <form id="form-pet">

                <div class="form-group">

                    <label class="form-label">
                        Nome
                    </label>

                    <input
                        id="pet-nome"
                        class="form-control"
                        required
                    >

                </div>


                <div class="grid grid-cols-2 gap-3">

                    <div class="form-group">

                        <label class="form-label">
                            Espécie
                        </label>

                        <select
                            id="pet-especie"
                            class="form-control"
                        >

                            <option>Cão</option>
                            <option>Gato</option>
                            <option>Outro</option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label class="form-label">
                            Porte
                        </label>

                        <select
                            id="pet-porte"
                            class="form-control"
                        >

                            <option>Pequeno</option>
                            <option>Médio</option>
                            <option>Grande</option>

                        </select>

                    </div>

                </div>


                <div class="form-group">

                    <label class="form-label">
                        Idade
                    </label>

                    <input
                        id="pet-idade"
                        class="form-control"
                        placeholder="Ex.: 2 anos"
                        required
                    >

                </div>


                <div class="form-group">

                    <label class="form-label">
                        Raça
                    </label>

                    <input
                        id="pet-raca"
                        class="form-control"
                    >

                </div>


                <div class="form-group">

                    <label class="form-label">
                        URL da imagem
                    </label>

                    <input
                        id="pet-foto"
                        class="form-control"
                        placeholder="https://..."
                    >

                </div>


                <div class="form-group">

                    <label class="form-label">
                        Descrição
                    </label>

                    <textarea
                        id="pet-desc"
                        class="form-control"
                        rows="4"
                        required
                    ></textarea>

                </div>


                <button
                    type="submit"
                    class="w-full rounded-xl bg-pet-orange px-4 py-3 text-xs font-bold text-white"
                >
                    Cadastrar animal
                </button>

            </form>

        `

    );


    document
        .getElementById("form-pet")
        .addEventListener(
            "submit",
            salvarNovoPet
        );

}


function salvarNovoPet(
    event
) {

    event.preventDefault();


    const novoPet = {

        id: Date.now(),

        nome:
            document.getElementById(
                "pet-nome"
            ).value,

        especie:
            document.getElementById(
                "pet-especie"
            ).value,

        porte:
            document.getElementById(
                "pet-porte"
            ).value,

        idade:
            document.getElementById(
                "pet-idade"
            ).value,

        raca:
            document.getElementById(
                "pet-raca"
            ).value ||
            "Não informada",

        foto:
            document.getElementById(
                "pet-foto"
            ).value ||
            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",

        vacinado: false,

        castrado: false,

        desc:
            document.getElementById(
                "pet-desc"
            ).value

    };


    state.pets.unshift(
        novoPet
    );


    fecharModal();

    renderizarPagina();

    mostrarAviso(
        "Animal cadastrado",
        "O animal foi adicionado à vitrine de adoção."
    );

}


/* =========================================================
   DETALHES DE DENÚNCIA
   ========================================================= */

function abrirDetalhesDenuncia(
    id
) {

    const denuncia =
        state.denuncias.find(
            item => item.id === id
        );


    if (!denuncia) {
        return;
    }


    abrirModal(

        `Denúncia #${denuncia.id}`,

        `

            <div class="space-y-4">

                <div>

                    <p class="text-[10px] font-bold uppercase text-gray-400">
                        Tipo
                    </p>

                    <p class="mt-1 text-sm font-bold">
                        ${denuncia.tipo}
                    </p>

                </div>


                <div>

                    <p class="text-[10px] font-bold uppercase text-gray-400">
                        Local
                    </p>

                    <p class="mt-1 text-sm">
                        ${denuncia.endereco}
                    </p>

                </div>


                <div>

                    <p class="text-[10px] font-bold uppercase text-gray-400">
                        Descrição
                    </p>

                    <p class="mt-1 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
                        ${denuncia.descricao}
                    </p>

                </div>


                <div class="grid grid-cols-2 gap-4">

                    <div>

                        <p class="text-[10px] font-bold uppercase text-gray-400">
                            Urgência
                        </p>

                        <p class="mt-1 text-sm font-bold">
                            ${denuncia.urgencia}
                        </p>

                    </div>


                    <div>

                        <p class="text-[10px] font-bold uppercase text-gray-400">
                            Status
                        </p>

                        <p class="mt-1 text-sm font-bold text-blue-600">
                            ${denuncia.status}
                        </p>

                    </div>

                </div>


                <div class="rounded-xl bg-gray-50 p-4">

                    <p class="text-xs text-gray-500">
                        ${
                            denuncia.anonimo
                                ? "Esta denúncia foi registrada anonimamente."
                                : "Esta denúncia foi registrada com identificação."
                        }
                    </p>

                </div>


                ${
                    state.userProfile.tipo === "orgao"
                        ? `
                            <div class="border-t pt-5">

                                <label class="form-label">
                                    Atualizar status
                                </label>

                                <select
                                    class="form-control"
                                    onchange="atualizarStatusDenuncia(${denuncia.id}, this.value)"
                                >

                                    <option ${
                                        denuncia.status === "Recebida"
                                            ? "selected"
                                            : ""
                                    }>
                                        Recebida
                                    </option>

                                    <option ${
                                        denuncia.status === "Em análise"
                                            ? "selected"
                                            : ""
                                    }>
                                        Em análise
                                    </option>

                                    <option ${
                                        denuncia.status === "Em atendimento"
                                            ? "selected"
                                            : ""
                                    }>
                                        Em atendimento
                                    </option>

                                    <option ${
                                        denuncia.status === "Resolvida"
                                            ? "selected"
                                            : ""
                                    }>
                                        Resolvida
                                    </option>

                                </select>

                            </div>
                        `
                        : ""
                }

            </div>

        `

    );

}


function atualizarStatusDenuncia(
    id,
    status
) {

    const denuncia =
        state.denuncias.find(
            item => item.id === id
        );


    if (!denuncia) {
        return;
    }


    denuncia.status =
        status;


    mostrarAviso(
        "Status atualizado",
        `A denúncia #${id} agora está como "${status}".`
    );


    fecharModal();

    renderizarPagina();

}


/* =========================================================
   EMAIL / COMUNICAÇÃO
   ========================================================= */

function abrirModalEmail() {

    abrirModal(

        "Nova mensagem",

        `

            <form id="form-email">

                <div class="form-group">

                    <label class="form-label">
                        Para
                    </label>

                    <input
                        id="email-para"
                        class="form-control"
                        value="contato@centralpet.org"
                        required
                    >

                </div>


                <div class="form-group">

                    <label class="form-label">
                        Assunto
                    </label>

                    <input
                        id="email-assunto"
                        class="form-control"
                        required
                    >

                </div>


                <div class="form-group">

                    <label class="form-label">
                        Mensagem
                    </label>

                    <textarea
                        id="email-msg"
                        class="form-control"
                        rows="7"
                        required
                    ></textarea>

                </div>


                <button
                    type="submit"
                    class="w-full rounded-xl bg-pet-blue px-4 py-3 text-xs font-bold text-white"
                >
                    Enviar mensagem
                </button>

            </form>

        `

    );


    document
        .getElementById("form-email")
        .addEventListener(
            "submit",
            enviarEmail
        );

}


function enviarEmail(
    event
) {

    event.preventDefault();

    fecharModal();

    mostrarAviso(
        "Mensagem enviada",
        "O envio está simulado nesta versão do front-end."
    );

}


/* =========================================================
   MODAIS
   ========================================================= */

function abrirModal(
    titulo,
    conteudo
) {

    const modal =
        document.getElementById(
            "modal-container"
        );


    modal.classList.remove(
        "hidden"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    modal.innerHTML = `

        <div class="modal-box">

            <div class="modal-header">

                <h3>
                    ${titulo}
                </h3>

                <button
                    type="button"
                    onclick="fecharModal()"
                    class="modal-close"
                >
                    ×
                </button>

            </div>


            <div class="modal-body">

                ${conteudo}

            </div>

        </div>

    `;


    modal.addEventListener(
        "click",
        fecharAoClicarFora,
        {
            once: true
        }
    );

}


function fecharAoClicarFora(
    event
) {

    if (
        event.target.id ===
        "modal-container"
    ) {

        fecharModal();

    }

}


function fecharModal() {

    const modal =
        document.getElementById(
            "modal-container"
        );


    modal.classList.add(
        "hidden"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    modal.innerHTML = "";

}


/* =========================================================
   MOBILE
   ========================================================= */

function abrirMenuMobile() {

    document
        .getElementById("sidebar")
        .classList.add("open");


    document
        .getElementById("mobile-overlay")
        .classList.add("visible");

}


function fecharMenuMobile() {

    document
        .getElementById("sidebar")
        .classList.remove("open");


    document
        .getElementById("mobile-overlay")
        .classList.remove("visible");

}


/* =========================================================
   LOGOUT
   ========================================================= */

function realizarLogout() {

    mostrarAviso(
        "Sessão encerrada",
        "No sistema real, aqui ocorrerá o redirecionamento para o login."
    );

}


/* =========================================================
   AVISOS
   ========================================================= */

function mostrarAviso(
    titulo,
    mensagem
) {

    const modal =
        document.getElementById(
            "modal-container"
        );


    modal.classList.remove(
        "hidden"
    );


    modal.innerHTML = `

        <div class="modal-box max-w-md">

            <div class="modal-body p-6">

                <div class="flex items-start gap-4">

                    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                    </div>

                    <div>

                        <h3 class="font-black">
                            ${titulo}
                        </h3>

                        <p class="mt-2 text-sm leading-6 text-gray-500">
                            ${mensagem}
                        </p>

                    </div>

                </div>


                <button
                    type="button"
                    onclick="fecharModal()"
                    class="mt-6 w-full rounded-xl bg-gray-900 px-4 py-3 text-xs font-bold text-white"
                >
                    Fechar
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   UTILITÁRIOS
   ========================================================= */

function obterIniciais(
    nome
) {

    const partes =
        nome
            .trim()
            .split(/\s+/);

    if (!partes.length) {
        return "U";
    }

    if (partes.length === 1) {

        return partes[0]
            .slice(0, 2)
            .toUpperCase();

    }

    return (
        partes[0][0] +
        partes[partes.length - 1][0]
    ).toUpperCase();

}