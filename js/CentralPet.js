/* =========================================================
   CENTRAL PET
   SPA + TAILWIND + LUCIDE
========================================================= */


/* =========================================================
   USUÁRIO INICIAL
========================================================= */

const INITIAL_USER = {

    id: 1,

    nome: 'Maria Silva',

    email: 'maria.silva@email.com',

    telefone: '(14) 99876-5432',

    cidade: 'Ourinhos - SP',

    tipo: 'usuario',

    foto: ''

};


/* =========================================================
   ESTADO
========================================================= */

const state = {

    currentPage: 'adotar',


    userProfile: {
        ...INITIAL_USER
    },


    filtroEspecie: 'todos',


    doacaoState: {

        step: 1,

        tipo: 'uma-vez',

        valor: 50,

        destino: 'alimentacao',

        pagamento: 'pix'

    },


    /*
     * Categorias:
     * Cão
     * Gato
     * Outros
     *
     * Em "Outros" entram apenas exemplos de
     * animais domésticos ou espécies cuja manutenção
     * como animal de companhia deve observar as regras
     * e a origem legal aplicáveis.
     */

    pets: [

        /* =========================
           CÃES
        ========================= */

        {

            id: 1,

            nome: 'Thor',

            especie: 'Cão',

            categoria: 'Cão',

            raca: 'Vira-lata (SRD)',

            idade: '2 anos',

            porte: 'Médio',

            vacinado: true,

            castrado: true,

            situacaoLegal: 'Animal doméstico',

            foto:
                'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',

            desc:
                'Thor é extremamente carinhoso, ativo e se dá muito bem com crianças e outros animais.'

        },


        {

            id: 2,

            nome: 'Bob',

            especie: 'Cão',

            categoria: 'Cão',

            raca: 'Golden Retriever Mix',

            idade: '3 anos',

            porte: 'Grande',

            vacinado: true,

            castrado: false,

            situacaoLegal: 'Animal doméstico',

            foto:
                'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',

            desc:
                'Muito brincalhão e protetor. Precisa de uma casa com espaço para atividades.'

        },


        /* =========================
           GATOS
        ========================= */

        {

            id: 3,

            nome: 'Luna',

            especie: 'Gato',

            categoria: 'Gato',

            raca: 'Siamês',

            idade: '1 ano',

            porte: 'Pequeno',

            vacinado: true,

            castrado: true,

            situacaoLegal: 'Animal doméstico',

            foto:
                'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',

            desc:
                'Luna é calma, dócil, adora carinho e se adapta perfeitamente a apartamentos.'

        },


        {

            id: 4,

            nome: 'Mia',

            especie: 'Gato',

            categoria: 'Gato',

            raca: 'Persa Mix',

            idade: '6 meses',

            porte: 'Pequeno',

            vacinado: false,

            castrado: false,

            situacaoLegal: 'Animal doméstico',

            foto:
                'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',

            desc:
                'Filhote resgatada, muito sociável e cheia de energia.'

        },


        /* =========================
           OUTROS
        ========================= */

        {

            id: 5,

            nome: 'Pipoca',

            especie: 'Coelho',

            categoria: 'Outros',

            raca: 'Mini Lop',

            idade: '1 ano',

            porte: 'Pequeno',

            vacinado: false,

            castrado: false,

            situacaoLegal: 'Animal doméstico',

            foto:
                'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',

            desc:
                'Pipoca é tranquila, curiosa e precisa de ambiente seguro para explorar.'

        },


        {

            id: 6,

            nome: 'Amendoim',

            especie: 'Porquinho-da-índia',

            categoria: 'Outros',

            raca: 'Cobaia',

            idade: '8 meses',

            porte: 'Pequeno',

            vacinado: false,

            castrado: false,

            situacaoLegal: 'Animal doméstico',

            foto:
                'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',

            desc:
                'Amendoim é dócil, sociável e gosta de ambientes tranquilos.'

        },


        {

            id: 7,

            nome: 'Nino',

            especie: 'Chinchila',

            categoria: 'Outros',

            raca: 'Chinchilla',

            idade: '2 anos',

            porte: 'Pequeno',

            vacinado: false,

            castrado: false,

            situacaoLegal: 'Necessária origem legal e reprodução em cativeiro',

            foto:
                'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',

            desc:
                'Nino precisa de ambiente fresco e cuidados específicos para a espécie.'

        },


        {

            id: 8,

            nome: 'Mel',

            especie: 'Calopsita',

            categoria: 'Outros',

            raca: 'Nymphicus hollandicus',

            idade: '1 ano',

            porte: 'Pequeno',

            vacinado: false,

            castrado: false,

            situacaoLegal: 'Ave considerada doméstica pelo Ibama',

            foto:
                'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=800&q=80',

            desc:
                'Mel é uma ave sociável e precisa de espaço adequado, alimentação e cuidados.'

        },


        {

            id: 9,

            nome: 'Lilo',

            especie: 'Canário',

            categoria: 'Outros',

            raca: 'Canário-do-reino',

            idade: '2 anos',

            porte: 'Pequeno',

            vacinado: false,

            castrado: false,

            situacaoLegal: 'Ave doméstica',

            foto:
                'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80',

            desc:
                'Lilo é tranquilo e precisa de recinto adequado e cuidados diários.'

        },


        {

            id: 10,

            nome: 'Tico',

            especie: 'Periquito-australiano',

            categoria: 'Outros',

            raca: 'Melopsittacus undulatus',

            idade: '1 ano',

            porte: 'Pequeno',

            vacinado: false,

            castrado: false,

            situacaoLegal: 'Ave doméstica',

            foto:
                'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',

            desc:
                'Tico é ativo, curioso e precisa de um espaço adequado para voar e brincar.'

        }

    ],


    denuncias: [

        {

            id: 101,

            tipo: 'Maus Tratos / Abuso',

            urgencia: 'Alta',

            status: 'Em análise',

            endereco: 'Rua das Flores, 123 - Centro',

            data: '25/04/2026',

            descricao:
                'Cachorro mantido acorrentado sem abrigo do sol e sem água.',

            anonimo: false

        }

    ],


    mensagens: [

        {

            id: 1,

            conversaId: 1001,

            remetente: {

                id: 20,

                nome: 'Órgão de Proteção Animal'

            },

            destinatario: {

                id: 1,

                nome: 'Maria Silva'

            },

            assunto: 'Retorno sobre sua denúncia',

            conteudo:
                'Olá, Maria.\n\nRecebemos sua denúncia e ela foi encaminhada para análise da equipe responsável. Caso sejam necessárias informações adicionais, entraremos em contato por esta conversa.',

            data: '01/09/2026 10:32',

            lida: false,

            tipo: 'recebida',

            anexos: []

        },


        {

            id: 2,

            conversaId: 1002,

            remetente: {

                id: 1,

                nome: 'Maria Silva'

            },

            destinatario: {

                id: 20,

                nome: 'Órgão de Proteção Animal'

            },

            assunto: 'Informação complementar',

            conteudo:
                'Gostaria de complementar uma informação sobre a denúncia registrada anteriormente.',

            data: '31/08/2026 17:18',

            lida: true,

            tipo: 'enviada',

            anexos: []

        },


        {

            id: 3,

            conversaId: 1003,

            remetente: {

                id: 30,

                nome: 'Abrigo Esperança'

            },

            destinatario: {

                id: 1,

                nome: 'Maria Silva'

            },

            assunto: 'Interesse na adoção',

            conteudo:
                'Recebemos seu interesse em um dos animais disponíveis. Podemos conversar sobre o processo de adoção.',

            data: '30/08/2026 14:20',

            lida: true,

            tipo: 'recebida',

            anexos: []

        }

    ]

};


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        configurarEventosGlobais();

        carregarRota();

        renderizarSidebar();

        renderizarPagina();

        atualizarInformacoesUsuario();

        atualizarIcones();

    }
);


/* =========================================================
   LUCIDE
========================================================= */

function atualizarIcones() {

    if (
        window.lucide &&
        typeof window.lucide.createIcons === 'function'
    ) {

        window.lucide.createIcons();

    }

}


/* =========================================================
   EVENTOS
========================================================= */

function configurarEventosGlobais() {


    document
        .getElementById(
            'btn-menu-mobile'
        )
        ?.addEventListener(
            'click',
            abrirMenuMobile
        );


    document
        .getElementById(
            'btn-fechar-menu'
        )
        ?.addEventListener(
            'click',
            fecharMenuMobile
        );


    document
        .getElementById(
            'mobile-overlay'
        )
        ?.addEventListener(
            'click',
            fecharMenuMobile
        );


    document
        .getElementById(
            'logo-button'
        )
        ?.addEventListener(
            'click',
            () => navegarPara('adotar')
        );


    document.addEventListener(
        'click',
        tratarCliqueGlobal
    );


    window.addEventListener(
        'hashchange',
        () => {

            carregarRota();

            renderizarSidebar();

            renderizarPagina();

            atualizarInformacoesUsuario();

            atualizarIcones();

        }
    );


    document.addEventListener(
        'change',
        tratarChangeGlobal
    );


    document.addEventListener(
        'keydown',
        event => {

            if (
                event.key === 'Escape'
            ) {

                fecharTodosDropdowns();

                fecharModal();

            }

        }
    );

}


/* =========================================================
   CLIQUES GLOBAIS
========================================================= */

function tratarCliqueGlobal(
    event
) {


    /* ROTA */

    const rota =
        event.target.closest(
            '[data-route]'
        );


    if (rota) {

        navegarPara(
            rota.dataset.route
        );

        return;

    }


    /* DROPDOWN */

    const dropdownButton =
        event.target.closest(
            '[data-dropdown-button]'
        );


    if (
        dropdownButton
    ) {

        abrirOuFecharDropdown(
            dropdownButton.dataset.dropdownButton
        );

        return;

    }


    /* OPÇÃO */

    const dropdownOption =
        event.target.closest(
            '[data-dropdown-option]'
        );


    if (
        dropdownOption
    ) {

        selecionarDropdown(
            dropdownOption.dataset.dropdownOption,
            dropdownOption.dataset.value,
            dropdownOption.dataset.label
        );

        return;

    }


    /* FORA DO DROPDOWN */

    if (
        !event.target.closest(
            '[data-dropdown]'
        )
    ) {

        fecharTodosDropdowns();

    }


    /* MODAL */

    if (
        event.target.id ===
        'modal-container'
    ) {

        fecharModal();

    }

}


/* =========================================================
   CHANGE GLOBAL
========================================================= */

function tratarChangeGlobal(
    event
) {

    if (
        event.target.id ===
        'foto-perfil'
    ) {

        alterarFotoPerfil(
            event.target.files[0]
        );

    }

}


/* =========================================================
   ROTAS
========================================================= */

const paginasValidas = [

    'adotar',

    'denunciar',

    'doar',

    'entrada',

    'enviados',

    'perfil',

    'triagem',

    'gerenciar-doacoes'

];


function carregarRota() {

    const rota =
        location.hash.replace(
            /^#\/?/,
            ''
        );


    state.currentPage =

        rota &&
        paginasValidas.includes(
            rota
        ) &&
        podeAcessarPagina(
            rota
        )

            ? rota

            : 'adotar';

}


function navegarPara(
    pagina
) {

    if (
        !paginasValidas.includes(
            pagina
        )
    ) {

        pagina =
            'adotar';

    }


    if (
        !podeAcessarPagina(
            pagina
        )
    ) {

        mostrarAviso(
            'Área restrita',
            'Essa área está disponível somente para órgãos legais.'
        );

        return;

    }


    state.currentPage =
        pagina;


    const hash =
        `#/${pagina}`;


    if (
        location.hash !== hash
    ) {

        location.hash =
            `/${pagina}`;

    } else {

        renderizarSidebar();

        renderizarPagina();

        atualizarIcones();

    }


    fecharMenuMobile();

}


function podeAcessarPagina(
    pagina
) {

    return (

        ![
            'triagem',
            'gerenciar-doacoes'
        ].includes(
            pagina
        )

        ||

        state.userProfile.tipo ===
        'orgao'

    );

}


/* =========================================================
   SIDEBAR
========================================================= */

function renderizarSidebar() {

    const nav =
        document.getElementById(
            'sidebar-nav'
        );


    const action =
        document.getElementById(
            'sidebar-action-container'
        );


    const naoLidas =
        contarMensagensNaoLidas();


    action.innerHTML = `

        <button
            type="button"
            onclick="abrirModalEmail()"

            class="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-pet-red
                px-4
                py-3
                text-[13px]
                font-black
                text-white
                shadow-md

                transition-all
                duration-200

                hover:-translate-y-0.5
                hover:bg-red-700
                hover:shadow-lg

                active:scale-[0.98]
            "
        >

            <i
                data-lucide="pen-line"
                class="h-4 w-4"
            ></i>

            ${
                state.userProfile.tipo ===
                'orgao'
                    ? 'Nova mensagem'
                    : 'Escrever'
            }

        </button>

    `;


    let html = `

        <div class="mb-6">

            <p
                class="
                    mb-2
                    px-2.5
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.08em]
                    text-gray-400
                "
            >
                Principal
            </p>


            ${criarBotaoMenu(
                'adotar',
                'heart-handshake',
                'Adotar'
            )}


            ${criarBotaoMenu(
                'denunciar',
                'triangle-alert',
                'Denunciar'
            )}


            ${criarBotaoMenu(
                'doar',
                'hand-heart',
                'Doações'
            )}

        </div>


        <div class="mb-6">

            <p
                class="
                    mb-2
                    px-2.5
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.08em]
                    text-gray-400
                "
            >
                Mensagens
            </p>


            ${criarBotaoMenu(
                'entrada',
                'inbox',
                'Caixa de entrada',
                naoLidas || ''
            )}


            ${criarBotaoMenu(
                'enviados',
                'send',
                'Enviados'
            )}

        </div>

    `;


    if (
        state.userProfile.tipo ===
        'orgao'
    ) {

        html += `

            <div class="mb-6">

                <p
                    class="
                        mb-2
                        px-2.5
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.08em]
                        text-gray-400
                    "
                >
                    Atendimento
                </p>


                ${criarBotaoMenu(
                    'triagem',
                    'list-filter',
                    'Triagem',
                    contarPendenciasTriagem(),
                    true
                )}


                ${criarBotaoMenu(
                    'gerenciar-doacoes',
                    'package-check',
                    'Gerenciar doações'
                )}

            </div>

        `;

    }


    nav.innerHTML =
        html;


    atualizarIcones();

}


function criarBotaoMenu(
    rota,
    icone,
    nome,
    contador = '',
    alerta = false
) {

    const ativo =
        state.currentPage ===
        rota;


    return `

        <button
            type="button"
            data-route="${rota}"

            class="
                group
                mb-1
                flex
                w-full
                items-center
                gap-2.5
                rounded-xl
                border-0
                px-3
                py-2.5
                text-left
                text-[13px]

                transition-all
                duration-200

                ${
                    ativo
                        ? 'bg-[#FFEFE5] font-black text-pet-red'
                        : 'text-gray-600 hover:translate-x-1 hover:bg-[#FFF3EC] hover:text-pet-red'
                }

                active:scale-[0.99]
            "
        >

            <span
                class="
                    flex
                    h-[18px]
                    w-[18px]
                    min-w-[18px]
                    items-center
                    justify-center

                    transition-transform
                    duration-200

                    ${
                        ativo
                            ? 'scale-110'
                            : 'group-hover:scale-110'
                    }
                "
            >

                <i
                    data-lucide="${icone}"
                    class="h-[18px] w-[18px]"
                ></i>

            </span>


            <span
                class="min-w-0 flex-1"
            >
                ${nome}
            </span>


            ${
                contador

                    ? `

                        <span
                            class="
                                min-w-6
                                rounded-full
                                px-2
                                py-0.5
                                text-center
                                text-[10px]
                                font-black

                                ${
                                    alerta
                                        ? 'bg-red-100 text-red-700'
                                        : 'bg-gray-100 text-gray-500'
                                }
                            "
                        >
                            ${contador}
                        </span>

                    `

                    : ''
            }

        </button>

    `;

}


function contarMensagensNaoLidas() {

    return state.mensagens.filter(

        mensagem =>
            mensagem.tipo ===
            'recebida' &&
            !mensagem.lida

    ).length;

}


function contarPendenciasTriagem() {

    return state.denuncias.filter(

        denuncia =>
            denuncia.status !==
            'Resolvida'

    ).length;

}


/* =========================================================
   INFORMAÇÕES USUÁRIO
========================================================= */

function atualizarInformacoesUsuario() {

    const usuario =
        state.userProfile;


    const nome =
        document.getElementById(
            'sidebar-user-name'
        );


    const cargo =
        document.getElementById(
            'sidebar-user-role'
        );


    if (nome) {

        nome.textContent =
            usuario.nome;

    }


    if (cargo) {

        cargo.textContent =

            usuario.tipo ===
            'orgao'

                ? 'Órgão legal'

                : 'Usuária';

    }


    atualizarAvatar(
        'sidebar-avatar'
    );


    atualizarIcones();

}


function atualizarAvatar(
    id
) {

    const elemento =
        document.getElementById(
            id
        );


    if (!elemento) {
        return;
    }


    if (
        state.userProfile.foto
    ) {

        elemento.innerHTML = `

            <img
                src="${state.userProfile.foto}"
                alt="Foto de perfil"

                class="
                    h-full
                    w-full
                    object-cover

                    transition-transform
                    duration-300

                    hover:scale-110
                "
            >

        `;

    } else {

        elemento.textContent =
            obterIniciais(
                state.userProfile.nome
            );

    }

}


/* =========================================================
   RENDERIZAÇÃO DA PÁGINA
========================================================= */

function renderizarPagina() {

    const main =
        document.getElementById(
            'conteudo'
        );


    switch (
        state.currentPage
    ) {

        case 'adotar':

            atualizarCabecalho(
                'Adotar',
                'Encontre um animal esperando por um novo lar.'
            );

            main.innerHTML =
                renderVitrineAdocao();

            break;


        case 'denunciar':

            atualizarCabecalho(
                'Denunciar',
                'Acompanhe suas denúncias e registre uma nova ocorrência.'
            );

            main.innerHTML =
                renderDenuncias();

            break;


        case 'doar':

            atualizarCabecalho(
                'Doações',
                'Contribua para a proteção e o bem-estar dos animais.'
            );

            main.innerHTML =
                renderWizardDoacao();

            break;


        case 'entrada':

            atualizarCabecalho(
                'Caixa de entrada',
                'Mensagens e respostas recebidas.'
            );

            main.innerHTML =
                renderCaixaEntrada();

            break;


        case 'enviados':

            atualizarCabecalho(
                'Enviados',
                'Mensagens que você enviou.'
            );

            main.innerHTML =
                renderEnviados();

            break;


        case 'perfil':

            atualizarCabecalho(
                'Meu perfil',
                'Gerencie suas informações pessoais.'
            );

            main.innerHTML =
                renderPerfilUsuario();

            break;


        case 'triagem':

            atualizarCabecalho(
                'Triagem',
                'Organize as denúncias por prioridade e andamento.'
            );

            main.innerHTML =
                renderTriagem();

            break;


        case 'gerenciar-doacoes':

            atualizarCabecalho(
                'Gerenciar doações',
                'Acompanhe campanhas e recursos recebidos.'
            );

            main.innerHTML =
                renderGerenciarDoacoes();

            break;


        default:

            state.currentPage =
                'adotar';

            renderizarPagina();

            return;

    }


    atualizarIcones();

}


function atualizarCabecalho(
    titulo,
    subtitulo
) {

    document.getElementById(
        'page-title'
    ).textContent =
        titulo;


    document.getElementById(
        'page-subtitle'
    ).textContent =
        subtitulo;


    document.getElementById(
        'breadcrumb'
    ).textContent =

        state.userProfile.tipo ===
        'orgao'

            ? 'Central Pet · Área do órgão'

            : 'Central Pet';

}


/* =========================================================
   ADOÇÃO
========================================================= */

function renderVitrineAdocao() {

    let pets;


    if (
        state.filtroEspecie ===
        'todos'
    ) {

        pets =
            state.pets;

    } else {

        pets =
            state.pets.filter(
                pet =>
                    pet.categoria ===
                    state.filtroEspecie
            );

    }


    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >


            <div class="mb-6">

                <h2
                    class="text-2xl font-black text-gray-900 md:text-[25px]"
                >
                    Encontre seu novo amigo
                </h2>


                <p
                    class="mt-1.5 text-[13px] text-gray-500"
                >
                    Encontre animais de diferentes espécies para adoção responsável.
                </p>

            </div>


            <!-- FILTROS -->

            <div
                class="
                    mb-4
                    rounded-2xl
                    border
                    border-[#E4B99E]/40
                    bg-white
                    p-5
                    shadow-sm

                    transition-all
                    duration-200

                    hover:shadow-md
                "
            >

                <div
                    class="
                        flex
                        flex-col
                        gap-4

                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >

                    <div>

                        <p
                            class="text-xs font-black text-gray-800"
                        >
                            Encontre por espécie
                        </p>


                        <p
                            class="mt-1 text-[11px] text-gray-500"
                        >
                            Escolha uma categoria para filtrar os animais.
                        </p>

                    </div>


                    <div
                        class="
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        ${botaoFiltro(
                            'todos',
                            `Todos (${state.pets.length})`,
                            'paw-print'
                        )}


                        ${botaoFiltro(
                            'Cão',
                            `Cães (${contarPetsPorCategoria('Cão')})`,
                            'paw-print'
                        )}


                        ${botaoFiltro(
                            'Gato',
                            `Gatos (${contarPetsPorCategoria('Gato')})`,
                            'paw-print'
                        )}


                        ${botaoFiltro(
                            'Outros',
                            `Outros (${contarPetsPorCategoria('Outros')})`,
                            'sparkles'
                        )}

                    </div>

                </div>


                <div
                    class="
                        mt-4
                        flex
                        gap-3
                        rounded-xl
                        border
                        border-blue-100
                        bg-blue-50
                        p-4
                    "
                >

                    <i
                        data-lucide="info"
                        class="
                            mt-0.5
                            h-4
                            w-4
                            min-w-4
                            text-pet-blue
                        "
                    ></i>


                    <p
                        class="
                            text-[11px]
                            leading-5
                            text-blue-800
                        "
                    >
                        A categoria “Outros” reúne exemplos de animais domésticos
                        e espécies que possuem regras específicas. A Central Pet
                        deve aceitar apenas animais com origem legal e condições
                        adequadas para adoção.
                    </p>

                </div>

            </div>


            <!-- CADASTRAR -->

            <div
                class="
                    mb-6
                    flex
                    justify-end
                "
            >

                <button
                    type="button"
                    onclick="abrirModalCadastrarPet()"

                    class="
                        group
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-pet-blue
                        px-4
                        py-2.5
                        text-xs
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-blue-800
                        hover:shadow-lg

                        active:scale-95
                    "
                >

                    <i
                        data-lucide="plus"
                        class="
                            h-4
                            w-4

                            transition-transform
                            duration-200

                            group-hover:rotate-90
                        "
                    ></i>

                    Cadastrar animal

                </button>

            </div>


            ${
                pets.length

                    ? `

                        <div
                            class="
                                grid
                                gap-6

                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                            "
                        >

                            ${pets
                                .map(
                                    renderPetCard
                                )
                                .join('')
                            }

                        </div>

                    `

                    : `

                        <div
                            class="
                                rounded-2xl
                                border
                                border-[#E4B99E]/40
                                bg-white
                                p-12
                                text-center
                                shadow-sm
                            "
                        >

                            <i
                                data-lucide="paw-print"
                                class="
                                    mx-auto
                                    h-10
                                    w-10
                                    text-gray-300
                                "
                            ></i>


                            <h3
                                class="mt-4 text-lg font-black"
                            >
                                Nenhum animal encontrado
                            </h3>


                            <p
                                class="mt-2 text-xs text-gray-500"
                            >
                                Não há animais cadastrados nessa categoria.
                            </p>

                        </div>

                    `
            }

        </div>

    `;

}


function contarPetsPorCategoria(
    categoria
) {

    return state.pets.filter(
        pet =>
            pet.categoria ===
            categoria
    ).length;

}


function botaoFiltro(
    filtro,
    texto,
    icone
) {

    const ativo =
        state.filtroEspecie ===
        filtro;


    return `

        <button
            type="button"
            onclick="filtrarEspecie('${filtro}')"

            class="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-2
                text-xs
                font-black

                transition-all
                duration-200

                ${
                    ativo

                        ? `
                            bg-pet-orange
                            text-white
                            shadow-md
                            -translate-y-0.5
                        `

                        : `
                            bg-gray-100
                            text-gray-600

                            hover:-translate-y-0.5
                            hover:bg-orange-50
                            hover:text-pet-orange
                        `
                }

                active:scale-95
            "
        >

            <i
                data-lucide="${icone}"
                class="h-4 w-4"
            ></i>

            ${texto}

        </button>

    `;

}


function renderPetCard(
    pet
) {

    return `

        <article
            class="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[#E4B99E]/40
                bg-white
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <div
                class="
                    relative
                    h-48
                    overflow-hidden
                    bg-gray-100
                "
            >

                <img
                    src="${pet.foto}"

                    alt="Foto de ${escaparHTML(pet.nome)}"

                    class="
                        h-full
                        w-full
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                    "
                >


                <span
                    class="
                        absolute
                        right-3
                        top-3
                        rounded-full
                        bg-white/95
                        px-3
                        py-1
                        text-[10px]
                        font-black
                        shadow-sm
                    "
                >
                    ${escaparHTML(
                        pet.especie
                    )}
                </span>

            </div>


            <div class="p-4">


                <div
                    class="
                        flex
                        items-center
                        justify-between
                        gap-2
                    "
                >

                    <h3
                        class="text-lg font-black text-gray-900"
                    >
                        ${escaparHTML(
                            pet.nome
                        )}
                    </h3>


                    <span
                        class="
                            rounded-full
                            bg-orange-100
                            px-2
                            py-1
                            text-[10px]
                            font-black
                            text-orange-700
                        "
                    >
                        ${escaparHTML(
                            pet.idade
                        )}
                    </span>

                </div>


                <p
                    class="mt-1 text-xs text-gray-500"
                >
                    ${escaparHTML(
                        pet.raca
                    )}
                </p>


                <p
                    class="
                        mt-3
                        text-xs
                        leading-5
                        text-gray-600
                    "
                >
                    ${escaparHTML(
                        pet.desc
                    )}
                </p>


                <div
                    class="
                        mt-3
                        flex
                        flex-wrap
                        gap-1.5
                    "
                >

                    <span
                        class="
                            rounded-lg
                            bg-gray-100
                            px-2
                            py-1
                            text-[10px]
                            text-gray-600
                        "
                    >
                        Porte:
                        ${escaparHTML(
                            pet.porte
                        )}
                    </span>


                    ${
                        pet.vacinado

                            ? `

                                <span
                                    class="
                                        flex
                                        items-center
                                        gap-1
                                        rounded-lg
                                        bg-green-100
                                        px-2
                                        py-1
                                        text-[10px]
                                        font-bold
                                        text-green-700
                                    "
                                >

                                    <i
                                        data-lucide="syringe"
                                        class="h-3 w-3"
                                    ></i>

                                    Vacinado

                                </span>

                            `

                            : ''
                    }


                    ${
                        pet.castrado

                            ? `

                                <span
                                    class="
                                        flex
                                        items-center
                                        gap-1
                                        rounded-lg
                                        bg-blue-100
                                        px-2
                                        py-1
                                        text-[10px]
                                        font-bold
                                        text-blue-700
                                    "
                                >

                                    <i
                                        data-lucide="shield-check"
                                        class="h-3 w-3"
                                    ></i>

                                    Castrado

                                </span>

                            `

                            : ''
                    }


                    <span
                        class="
                            flex
                            items-center
                            gap-1
                            rounded-lg
                            bg-gray-100
                            px-2
                            py-1
                            text-[10px]
                            font-bold
                            text-gray-600
                        "
                    >

                        <i
                            data-lucide="shield"
                            class="h-3 w-3"
                        ></i>

                        Origem legal

                    </span>

                </div>


                <button
                    type="button"
                    onclick="abrirDetalhesPet(${pet.id})"

                    class="
                        group/button
                        mt-4
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-pet-orange
                        px-4
                        py-2.5
                        text-xs
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-orange-500
                        hover:shadow-lg

                        active:scale-[0.98]
                    "
                >

                    Quero conhecer
                    ${escaparHTML(
                        pet.nome
                    )}


                    <i
                        data-lucide="arrow-right"

                        class="
                            h-4
                            w-4

                            transition-transform
                            duration-200

                            group-hover/button:translate-x-1
                        "
                    ></i>

                </button>

            </div>

        </article>

    `;

}


function filtrarEspecie(
    filtro
) {

    state.filtroEspecie =
        filtro;

    renderizarPagina();

    atualizarIcones();

}


/* =========================================================
   MODAL PET
========================================================= */

function abrirDetalhesPet(
    id
) {

    const pet =
        state.pets.find(
            item =>
                item.id === id
        );


    if (!pet) {
        return;
    }


    abrirModal(

        `Detalhes de ${escaparHTML(pet.nome)}`,

        `

        <div class="space-y-5">

            <img
                src="${pet.foto}"
                alt="Foto de ${escaparHTML(pet.nome)}"

                class="
                    h-64
                    w-full
                    rounded-xl
                    object-cover
                "
            >


            <div>

                <div
                    class="
                        flex
                        items-center
                        justify-between
                        gap-4
                    "
                >

                    <h3
                        class="text-2xl font-black"
                    >
                        ${escaparHTML(
                            pet.nome
                        )}
                    </h3>


                    <div
                        class="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-orange-50
                            text-pet-orange
                        "
                    >

                        <i
                            data-lucide="paw-print"
                            class="h-5 w-5"
                        ></i>

                    </div>

                </div>


                <p
                    class="mt-1 text-xs text-gray-500"
                >

                    ${escaparHTML(
                        pet.especie
                    )}

                    ·

                    ${escaparHTML(
                        pet.raca
                    )}

                    ·

                    ${escaparHTML(
                        pet.idade
                    )}

                </p>

            </div>


            <p
                class="
                    text-sm
                    leading-6
                    text-gray-600
                "
            >
                ${escaparHTML(
                    pet.desc
                )}
            </p>


            <div
                class="grid grid-cols-2 gap-3"
            >

                <div
                    class="
                        rounded-xl
                        bg-gray-50
                        p-4

                        transition-all
                        duration-200

                        hover:bg-gray-100
                    "
                >

                    <p
                        class="
                            text-[10px]
                            font-black
                            uppercase
                            text-gray-400
                        "
                    >
                        Porte
                    </p>


                    <p
                        class="mt-1 text-sm font-black"
                    >
                        ${escaparHTML(
                            pet.porte
                        )}
                    </p>

                </div>


                <div
                    class="
                        rounded-xl
                        bg-gray-50
                        p-4

                        transition-all
                        duration-200

                        hover:bg-gray-100
                    "
                >

                    <p
                        class="
                            text-[10px]
                            font-black
                            uppercase
                            text-gray-400
                        "
                    >
                        Situação
                    </p>


                    <p
                        class="
                            mt-1
                            text-xs
                            font-black
                            text-gray-700
                        "
                    >
                        ${escaparHTML(
                            pet.situacaoLegal
                        )}
                    </p>

                </div>

            </div>


            <div
                class="
                    rounded-xl
                    border
                    border-blue-100
                    bg-blue-50
                    p-4
                "
            >

                <div
                    class="flex gap-3"
                >

                    <i
                        data-lucide="shield-check"
                        class="
                            mt-0.5
                            h-5
                            w-5
                            min-w-5
                            text-pet-blue
                        "
                    ></i>


                    <p
                        class="
                            text-xs
                            leading-5
                            text-blue-800
                        "
                    >
                        A adoção deve ocorrer somente quando a situação
                        do animal e sua origem estiverem de acordo com
                        as exigências legais aplicáveis.
                    </p>

                </div>

            </div>


            <button
                type="button"

                onclick="
                    fecharModal();

                    abrirModalEmail({
                        destinatario: 'Abrigo / responsável por ${escaparJS(pet.nome)}',
                        assunto: 'Interesse na adoção de ${escaparJS(pet.nome)}'
                    });
                "

                class="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-pet-blue
                    px-4
                    py-3
                    text-xs
                    font-black
                    text-white

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:bg-blue-800
                    hover:shadow-lg

                    active:scale-95
                "
            >

                <i
                    data-lucide="message-circle"
                    class="h-4 w-4"
                ></i>

                Entrar em contato para adoção

            </button>

        </div>

        `
    );


    atualizarIcones();

}


/* =========================================================
   DENÚNCIAS
========================================================= */

function renderDenuncias() {

    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >

            <div
                class="
                    mb-6
                    flex
                    flex-col
                    gap-4

                    md:flex-row
                    md:items-end
                    md:justify-between
                "
            >

                <div>

                    <h2
                        class="text-2xl font-black text-gray-900"
                    >
                        Minhas denúncias
                    </h2>


                    <p
                        class="mt-1.5 text-[13px] text-gray-500"
                    >
                        Acompanhe o andamento das denúncias realizadas.
                    </p>

                </div>


                <button
                    type="button"
                    onclick="abrirModalDenuncia()"

                    class="
                        group
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-pet-red
                        px-5
                        py-3
                        text-xs
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-red-700
                        hover:shadow-lg

                        active:scale-95
                    "
                >

                    <i
                        data-lucide="plus"
                        class="
                            h-4
                            w-4

                            transition-transform
                            duration-200

                            group-hover:rotate-90
                        "
                    ></i>

                    Nova denúncia

                </button>

            </div>


            <div class="space-y-4">

                ${
                    state.denuncias.length

                        ? state.denuncias
                            .map(
                                renderDenunciaCard
                            )
                            .join('')

                        : `

                            <div
                                class="
                                    rounded-2xl
                                    border
                                    border-[#E4B99E]/40
                                    bg-white
                                    p-10
                                    text-center
                                    shadow-sm
                                "
                            >

                                <i
                                    data-lucide="clipboard-x"
                                    class="
                                        mx-auto
                                        h-9
                                        w-9
                                        text-gray-300
                                    "
                                ></i>

                                <h3
                                    class="mt-4 text-lg font-black"
                                >
                                    Nenhuma denúncia registrada
                                </h3>

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

        <article
            class="
                rounded-2xl
                border
                border-[#E4B99E]/40
                bg-white
                p-5
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-lg
            "
        >

            <div
                class="
                    flex
                    flex-col
                    gap-4

                    md:flex-row
                    md:items-start
                    md:justify-between
                "
            >

                <div>

                    <span
                        class="
                            text-[10px]
                            font-black
                            text-gray-400
                        "
                    >
                        PROTOCOLO #${denuncia.id}
                    </span>


                    <h3
                        class="
                            mt-1
                            text-base
                            font-black
                            text-gray-900
                        "
                    >
                        ${escaparHTML(
                            denuncia.tipo
                        )}
                    </h3>


                    <p
                        class="
                            mt-1
                            flex
                            items-center
                            gap-1
                            text-xs
                            text-gray-500
                        "
                    >

                        <i
                            data-lucide="map-pin"
                            class="h-3 w-3"
                        ></i>

                        ${escaparHTML(
                            denuncia.endereco
                        )}

                    </p>


                    <p
                        class="
                            mt-1
                            flex
                            items-center
                            gap-1
                            text-xs
                            text-gray-400
                        "
                    >

                        <i
                            data-lucide="calendar-days"
                            class="h-3 w-3"
                        ></i>

                        Registrada em
                        ${escaparHTML(
                            denuncia.data
                        )}

                    </p>

                </div>


                <div
                    class="flex flex-wrap gap-2"
                >

                    <span
                        class="${
                            denuncia.urgencia ===
                            'Alta'

                                ? 'rounded-full bg-red-100 px-3 py-1 text-[10px] font-black text-red-700'

                                : denuncia.urgencia ===
                                  'Média'

                                    ? 'rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black text-amber-700'

                                    : 'rounded-full bg-green-100 px-3 py-1 text-[10px] font-black text-green-700'
                        }"
                    >
                        ${escaparHTML(
                            denuncia.urgencia
                        )}
                    </span>


                    <span
                        class="
                            rounded-full
                            bg-slate-100
                            px-3
                            py-1
                            text-[10px]
                            font-black
                            text-slate-600
                        "
                    >
                        ${escaparHTML(
                            denuncia.status
                        )}
                    </span>

                </div>

            </div>


            <p
                class="
                    mt-4
                    rounded-xl
                    bg-gray-50
                    p-4
                    text-xs
                    leading-6
                    text-gray-600
                "
            >
                ${escaparHTML(
                    denuncia.descricao
                )}
            </p>


            <div
                class="
                    mt-4
                    flex
                    flex-col
                    gap-3
                    border-t
                    pt-3

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >

                <span
                    class="
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        font-black
                        text-gray-500
                    "
                >

                    <i
                        data-lucide="${
                            denuncia.anonimo
                                ? 'lock-keyhole'
                                : 'user'
                        }"
                        class="h-3.5 w-3.5"
                    ></i>

                    ${
                        denuncia.anonimo
                            ? 'Denúncia anônima'
                            : 'Denúncia identificada'
                    }

                </span>


                <button
                    type="button"
                    onclick="abrirDetalhesDenuncia(${denuncia.id})"

                    class="
                        group
                        flex
                        items-center
                        gap-1
                        text-xs
                        font-black
                        text-pet-blue

                        transition-all
                        duration-200

                        hover:translate-x-1
                    "
                >

                    Ver detalhes

                    <i
                        data-lucide="chevron-right"
                        class="
                            h-3.5
                            w-3.5

                            transition-transform
                            duration-200

                            group-hover:translate-x-1
                        "
                    ></i>

                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   DROPDOWN PERSONALIZADO
========================================================= */

function criarDropdown({

    id,

    valor,

    opcoes,

    placeholder = 'Selecione...'

}) {

    const selecionada =
        opcoes.find(
            opcao =>
                String(opcao.value) ===
                String(valor)
        );


    const textoAtual =
        selecionada
            ? selecionada.label
            : placeholder;


    return `

        <div
            data-dropdown="${id}"
            class="relative"
        >


            <button
                type="button"

                data-dropdown-button="${id}"

                class="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-3
                    py-3
                    text-left
                    text-xs
                    text-gray-700

                    transition-all
                    duration-200

                    hover:border-gray-400

                    focus:outline-none

                    active:scale-[0.995]
                "
            >

                <span
                    data-dropdown-label="${id}"
                    class="truncate"
                >
                    ${escaparHTML(
                        textoAtual
                    )}
                </span>


                <i
                    data-lucide="chevron-down"

                    class="
                        h-4
                        w-4
                        shrink-0
                        text-gray-500

                        transition-transform
                        duration-200
                    "
                ></i>

            </button>


            <div
                id="dropdown-menu-${id}"

                class="
                    absolute
                    left-0
                    right-0
                    top-full
                    z-[120]
                    mt-2
                    hidden
                    max-h-60
                    overflow-y-auto
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    p-1.5
                    shadow-xl

                    opacity-0
                    translate-y-[-4px]

                    transition-all
                    duration-150
                "
            >

                ${
                    opcoes
                        .map(
                            opcao => `

                                <button
                                    type="button"

                                    data-dropdown-option="${id}"

                                    data-value="${escaparHTML(
                                        opcao.value
                                    )}"

                                    data-label="${escaparHTML(
                                        opcao.label
                                    )}"

                                    class="
                                        group
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        gap-2
                                        rounded-lg
                                        px-3
                                        py-2.5
                                        text-left
                                        text-xs

                                        transition-all
                                        duration-150

                                        ${
                                            String(
                                                opcao.value
                                            ) ===
                                            String(
                                                valor
                                            )

                                                ? 'bg-[#FFEFE5] font-black text-pet-red'

                                                : 'text-gray-600 hover:bg-gray-50 hover:text-pet-red'
                                        }

                                        active:scale-[0.99]
                                    "
                                >

                                    <span>
                                        ${escaparHTML(
                                            opcao.label
                                        )}
                                    </span>


                                    ${
                                        String(
                                            opcao.value
                                        ) ===
                                        String(
                                            valor
                                        )

                                            ? `
                                                <i
                                                    data-lucide="check"
                                                    class="h-4 w-4"
                                                ></i>
                                            `

                                            : ''
                                    }

                                </button>

                            `
                        )
                        .join('')
                }

            </div>


            <input
                type="hidden"
                id="${id}"
                value="${escaparHTML(
                    valor || ''
                )}"
            >

        </div>

    `;

}


function abrirOuFecharDropdown(
    id
) {

    const menu =
        document.getElementById(
            `dropdown-menu-${id}`
        );


    if (!menu) {
        return;
    }


    const jaAberto =
        menu.classList.contains(
            'opacity-100'
        );


    fecharTodosDropdowns();


    if (jaAberto) {
        return;
    }


    menu.classList.remove(
        'hidden',
        'opacity-0',
        'translate-y-[-4px]'
    );


    menu.classList.add(
        'opacity-100',
        'translate-y-0'
    );


    const container =
        menu.closest(
            '[data-dropdown]'
        );


    if (container) {

        const botao =
            container.querySelector(
                '[data-dropdown-button]'
            );


        if (botao) {

            botao.classList.add(
                'border-pet-orange',
                'ring-4',
                'ring-orange-100'
            );

        }

    }


    atualizarIcones();

}


function fecharTodosDropdowns() {

    document
        .querySelectorAll(
            '[data-dropdown] [id^="dropdown-menu-"]'
        )
        .forEach(
            menu => {

                menu.classList.add(
                    'hidden',
                    'opacity-0',
                    'translate-y-[-4px]'
                );


                menu.classList.remove(
                    'opacity-100',
                    'translate-y-0'
                );


                const container =
                    menu.closest(
                        '[data-dropdown]'
                    );


                if (container) {

                    const botao =
                        container.querySelector(
                            '[data-dropdown-button]'
                        );


                    if (botao) {

                        botao.classList.remove(
                            'border-pet-orange',
                            'ring-4',
                            'ring-orange-100'
                        );

                    }

                }

            }
        );

}


function selecionarDropdown(
    id,
    valor,
    label
) {

    const input =
        document.getElementById(
            id
        );


    if (!input) {
        return;
    }


    input.value =
        valor;


    const labelElement =
        document.querySelector(
            `[data-dropdown-label="${id}"]`
        );


    if (labelElement) {

        labelElement.textContent =
            label;

    }


    fecharTodosDropdowns();


    /* =====================================================
       PERFIL
    ====================================================== */

    if (
        id ===
        'tipo-conta-dev'
    ) {

        state.userProfile.tipo =
            valor;


        if (
            !podeAcessarPagina(
                state.currentPage
            )
        ) {

            state.currentPage =
                'adotar';

            location.hash =
                '/adotar';

        }


        renderizarSidebar();

        renderizarPagina();

        atualizarInformacoesUsuario();

        atualizarIcones();

        return;

    }


    /* =====================================================
       PET - ESPÉCIE
    ====================================================== */

    if (
        id ===
        'pet-especie'
    ) {

        return;

    }


    /* =====================================================
       PET - PORTE
    ====================================================== */

    if (
        id ===
        'pet-porte'
    ) {

        return;

    }


    /* =====================================================
       DENÚNCIA
    ====================================================== */

    if (
        id ===
        'den-tipo'
    ) {

        return;

    }


    if (
        id ===
        'den-urgencia'
    ) {

        return;

    }


    /* =====================================================
       STATUS DENÚNCIA
    ====================================================== */

    if (
        id.startsWith(
            'status-denuncia-'
        )
    ) {

        const denunciaId =
            Number(
                id.replace(
                    'status-denuncia-',
                    ''
                )
            );


        atualizarStatusDenuncia(
            denunciaId,
            valor
        );

    }

}


/* =========================================================
   MODAL DENÚNCIA
========================================================= */

function abrirModalDenuncia() {

    abrirModal(

        'Nova denúncia',

        `

        <form
            id="form-denuncia"
        >


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Tipo de denúncia
                </label>


                ${
                    criarDropdown({

                        id:
                            'den-tipo',

                        valor:
                            '',

                        opcoes: [

                            {
                                value:
                                    'Maus-tratos / Abuso',

                                label:
                                    'Maus-tratos / Abuso'
                            },

                            {
                                value:
                                    'Abandono de animais',

                                label:
                                    'Abandono de animais'
                            },

                            {
                                value:
                                    'Animal em risco',

                                label:
                                    'Animal em risco'
                            },

                            {
                                value:
                                    'Negligência',

                                label:
                                    'Negligência'
                            },

                            {
                                value:
                                    'Outro',

                                label:
                                    'Outro'
                            }

                        ]

                    })
                }

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Nível de urgência
                </label>


                ${
                    criarDropdown({

                        id:
                            'den-urgencia',

                        valor:
                            'Média',

                        opcoes: [

                            {
                                value:
                                    'Baixa',

                                label:
                                    'Baixa'
                            },

                            {
                                value:
                                    'Média',

                                label:
                                    'Média'
                            },

                            {
                                value:
                                    'Alta',

                                label:
                                    'Alta'
                            }

                        ]

                    })
                }

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Local da ocorrência
                </label>


                <input
                    id="den-endereco"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-orange
                        focus:ring-4
                        focus:ring-orange-100
                    "

                    required

                    placeholder="Endereço ou ponto de referência"
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Data da ocorrência
                </label>


                <input
                    id="den-data"
                    type="date"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-orange
                        focus:ring-4
                        focus:ring-orange-100
                    "
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Descrição
                </label>


                <textarea
                    id="den-desc"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-orange
                        focus:ring-4
                        focus:ring-orange-100
                    "

                    rows="6"

                    required

                    placeholder="Descreva o que aconteceu com o máximo de detalhes possível."
                ></textarea>

            </div>


            <div class="mb-4">

                <label
                    class="
                        group
                        flex
                        cursor-pointer
                        items-start
                        gap-3
                        rounded-xl
                        bg-gray-50
                        p-4

                        transition-all
                        duration-200

                        hover:bg-orange-50
                    "
                >

                    <input
                        id="den-anonimo"
                        type="checkbox"
                        class="mt-1 accent-[#E00808]"
                    >


                    <span>

                        <strong
                            class="block text-xs"
                        >
                            Fazer denúncia anonimamente
                        </strong>


                        <small
                            class="
                                mt-1
                                block
                                text-[11px]
                                leading-5
                                text-gray-500
                            "
                        >
                            Sua escolha será preservada quando a denúncia for enviada ao backend.
                        </small>

                    </span>

                </label>

            </div>


            <div
                class="
                    flex
                    justify-end
                    gap-2
                    pt-3
                "
            >

                <button
                    type="button"
                    onclick="fecharModal()"

                    class="
                        rounded-xl
                        border
                        border-gray-200
                        px-4
                        py-3
                        text-xs
                        font-black
                        text-gray-600

                        transition-all
                        duration-200

                        hover:bg-gray-50
                        active:scale-95
                    "
                >
                    Cancelar
                </button>


                <button
                    type="submit"

                    class="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-pet-red
                        px-5
                        py-3
                        text-xs
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-red-700
                        hover:shadow-lg

                        active:scale-95
                    "
                >

                    <i
                        data-lucide="send"
                        class="h-4 w-4"
                    ></i>

                    Enviar denúncia

                </button>

            </div>


        </form>

        `
    );


    document
        .getElementById(
            'form-denuncia'
        )
        .addEventListener(
            'submit',
            enviarDenuncia
        );


    atualizarIcones();

}


function enviarDenuncia(
    event
) {

    event.preventDefault();


    const tipo =
        document.getElementById(
            'den-tipo'
        ).value;


    const urgencia =
        document.getElementById(
            'den-urgencia'
        ).value;


    if (!tipo) {

        mostrarAviso(
            'Tipo não selecionado',
            'Escolha o tipo de denúncia antes de continuar.'
        );

        return;

    }


    const denuncia = {

        id:
            Date.now(),

        tipo:

            tipo,

        urgencia:

            urgencia || 'Média',

        status:
            'Recebida',

        endereco:

            document.getElementById(
                'den-endereco'
            ).value,

        data:

            document.getElementById(
                'den-data'
            ).value ||
            'Hoje',

        descricao:

            document.getElementById(
                'den-desc'
            ).value,

        anonimo:

            document.getElementById(
                'den-anonimo'
            ).checked

    };


    state.denuncias.unshift(
        denuncia
    );


    state.mensagens.unshift({

        id:
            Date.now() + 1,

        conversaId:
            denuncia.id,

        remetente: {

            id: 1,

            nome:
                state.userProfile.nome

        },

        destinatario: {

            id: 20,

            nome:
                'Órgão de Proteção Animal'

        },

        assunto:
            `Denúncia #${denuncia.id}`,

        conteudo:
            'Denúncia registrada pelo usuário.',

        data:
            agoraFormatado(),

        lida:
            true,

        tipo:
            'enviada',

        anexos:
            []

    });


    fecharModal();


    navegarPara(
        'denunciar'
    );


    mostrarAviso(
        'Denúncia registrada',
        'Sua denúncia foi registrada. O envio para o órgão ainda é simulado nesta versão.'
    );

}


/* =========================================================
   MENSAGENS
========================================================= */

function renderCaixaEntrada() {

    const mensagens =
        state.mensagens.filter(
            mensagem =>
                mensagem.tipo ===
                'recebida'
        );


    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >

            <div
                class="
                    mb-6
                    flex
                    flex-col
                    gap-4

                    md:flex-row
                    md:items-end
                    md:justify-between
                "
            >

                <div>

                    <h2
                        class="text-2xl font-black text-gray-900"
                    >
                        Caixa de entrada
                    </h2>


                    <p
                        class="mt-1.5 text-[13px] text-gray-500"
                    >
                        Mensagens e respostas recebidas.
                    </p>

                </div>


                <button
                    type="button"
                    onclick="abrirModalEmail()"

                    class="
                        group
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-pet-red
                        px-5
                        py-3
                        text-xs
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-red-700
                        hover:shadow-lg

                        active:scale-95
                    "
                >

                    <i
                        data-lucide="pen-line"
                        class="h-4 w-4"
                    ></i>

                    Escrever

                </button>

            </div>


            <div
                class="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E4B99E]/40
                    bg-white
                    shadow-sm
                "
            >

                ${
                    mensagens.length

                        ? mensagens
                            .map(
                                renderMensagemLista
                            )
                            .join('')

                        : `

                            <div
                                class="p-10 text-center"
                            >

                                <i
                                    data-lucide="inbox"
                                    class="
                                        mx-auto
                                        h-10
                                        w-10
                                        text-gray-300
                                    "
                                ></i>

                                <h3
                                    class="mt-4 font-black"
                                >
                                    Sua caixa de entrada está vazia
                                </h3>

                            </div>

                        `
                }

            </div>

        </div>

    `;

}


function renderEnviados() {

    const mensagens =
        state.mensagens.filter(
            mensagem =>
                mensagem.tipo ===
                'enviada'
        );


    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >

            <div
                class="
                    mb-6
                    flex
                    flex-col
                    gap-4

                    md:flex-row
                    md:items-end
                    md:justify-between
                "
            >

                <div>

                    <h2
                        class="text-2xl font-black text-gray-900"
                    >
                        Enviados
                    </h2>


                    <p
                        class="mt-1.5 text-[13px] text-gray-500"
                    >
                        Mensagens que você enviou.
                    </p>

                </div>


                <button
                    type="button"
                    onclick="abrirModalEmail()"

                    class="
                        group
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-pet-blue
                        px-5
                        py-3
                        text-xs
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-blue-800
                        hover:shadow-lg

                        active:scale-95
                    "
                >

                    <i
                        data-lucide="pen-line"
                        class="h-4 w-4"
                    ></i>

                    Escrever

                </button>

            </div>


            <div
                class="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E4B99E]/40
                    bg-white
                    shadow-sm
                "
            >

                ${
                    mensagens.length

                        ? mensagens
                            .map(
                                renderMensagemLista
                            )
                            .join('')

                        : `

                            <div
                                class="
                                    p-10
                                    text-center
                                    text-xs
                                    text-gray-500
                                "
                            >
                                Você ainda não enviou mensagens.
                            </div>

                        `
                }

            </div>

        </div>

    `;

}


function renderMensagemLista(
    mensagem
) {

    const outraPessoa =

        mensagem.tipo ===
        'recebida'

            ? mensagem.remetente.nome

            : mensagem.destinatario.nome;


    return `

        <button
            type="button"

            onclick="abrirMensagem(${mensagem.id})"

            class="
                group
                flex
                w-full
                items-center
                gap-3.5
                border-0
                border-b
                border-gray-100
                px-4
                py-4
                text-left

                transition-all
                duration-200

                ${
                    mensagem.lida
                        ? 'bg-white'
                        : 'bg-[#FFFCF9]'
                }

                hover:bg-[#FFF8F3]
            "
        >

            <div
                class="
                    flex
                    h-[42px]
                    w-[42px]
                    min-w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    bg-pet-blue
                    text-[11px]
                    font-black
                    text-white

                    transition-transform
                    duration-200

                    group-hover:scale-105
                "
            >
                ${obterIniciais(
                    outraPessoa
                )}
            </div>


            <div
                class="min-w-0 flex-1"
            >

                <div
                    class="
                        flex
                        items-center
                        justify-between
                        gap-3
                    "
                >

                    <span
                        class="
                            text-[13px]
                            font-black
                            text-slate-800
                        "
                    >
                        ${escaparHTML(
                            outraPessoa
                        )}
                    </span>


                    <span
                        class="
                            shrink-0
                            text-[10px]
                            text-slate-400
                        "
                    >
                        ${escaparHTML(
                            mensagem.data
                        )}
                    </span>

                </div>


                <p
                    class="
                        mt-1
                        text-xs
                        font-bold
                        text-slate-600
                    "
                >
                    ${escaparHTML(
                        mensagem.assunto
                    )}
                </p>


                <p
                    class="
                        mt-0.5
                        overflow-hidden
                        text-ellipsis
                        whitespace-nowrap
                        text-[11px]
                        text-slate-400
                    "
                >
                    ${escaparHTML(
                        mensagem.conteudo
                            .replace(/\n/g, ' ')
                    )}
                </p>

            </div>


            ${
                mensagem.lida
                    ? ''
                    : `
                        <span
                            class="
                                h-2
                                w-2
                                min-w-[8px]
                                rounded-full
                                bg-pet-red
                            "
                        ></span>
                    `
            }

        </button>

    `;

}


function abrirMensagem(
    id
) {

    const mensagem =
        state.mensagens.find(
            item =>
                item.id === id
        );


    if (!mensagem) {
        return;
    }


    mensagem.lida =
        true;


    if (
        state.currentPage ===
        'entrada'
    ) {

        renderizarPagina();

    }


    abrirModal(

        mensagem.assunto,

        `

        <div>

            <div
                class="
                    flex
                    items-center
                    justify-between
                    gap-3
                    border-b
                    pb-4
                "
            >

                <div>

                    <p
                        class="
                            text-xs
                            font-black
                            text-gray-800
                        "
                    >
                        ${escaparHTML(
                            mensagem.remetente.nome
                        )}
                    </p>


                    <p
                        class="
                            mt-1
                            text-[10px]
                            text-gray-400
                        "
                    >
                        Para:
                        ${escaparHTML(
                            mensagem.destinatario.nome
                        )}
                    </p>

                </div>


                <span
                    class="
                        text-[10px]
                        text-gray-400
                    "
                >
                    ${escaparHTML(
                        mensagem.data
                    )}
                </span>

            </div>


            <p
                class="
                    mt-5
                    whitespace-pre-line
                    text-sm
                    leading-7
                    text-gray-600
                "
            >
                ${escaparHTML(
                    mensagem.conteudo
                )}
            </p>


            ${
                mensagem.tipo ===
                'recebida'

                    ? `

                        <button
                            type="button"

                            onclick="
                                fecharModal();

                                abrirModalEmail({
                                    destinatario: '${escaparJS(
                                        mensagem.remetente.nome
                                    )}',

                                    assunto: 'Re: ${escaparJS(
                                        mensagem.assunto
                                    )}'
                                });
                            "

                            class="
                                group
                                mt-5
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-pet-blue
                                px-5
                                py-3
                                text-xs
                                font-black
                                text-white

                                transition-all
                                duration-200

                                hover:-translate-y-0.5
                                hover:bg-blue-800
                                hover:shadow-lg

                                active:scale-95
                            "
                        >

                            <i
                                data-lucide="reply"
                                class="h-4 w-4"
                            ></i>

                            Responder

                        </button>

                    `

                    : ''
            }

        </div>

        `
    );


    atualizarIcones();

}


function abrirModalEmail(
    opcoes = {}
) {

    abrirModal(

        'Nova mensagem',

        `

        <form id="form-email">


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Para
                </label>


                <input
                    id="email-para"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    value="${escaparHTML(
                        opcoes.destinatario ||
                        'Órgão de Proteção Animal'
                    )}"

                    required
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Assunto
                </label>


                <input
                    id="email-assunto"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    value="${escaparHTML(
                        opcoes.assunto ||
                        ''
                    )}"

                    required
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Mensagem
                </label>


                <textarea
                    id="email-msg"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    rows="7"

                    required

                    placeholder="Escreva sua mensagem..."
                ></textarea>

            </div>


            <div
                class="
                    flex
                    justify-end
                    gap-2
                "
            >

                <button
                    type="button"
                    onclick="fecharModal()"

                    class="
                        rounded-xl
                        border
                        border-gray-200
                        px-4
                        py-3
                        text-xs
                        font-black
                        text-gray-600

                        transition-all
                        duration-200

                        hover:bg-gray-50
                        active:scale-95
                    "
                >
                    Cancelar
                </button>


                <button
                    type="submit"

                    class="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-pet-blue
                        px-5
                        py-3
                        text-xs
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-blue-800
                        hover:shadow-lg

                        active:scale-95
                    "
                >

                    <i
                        data-lucide="send"
                        class="h-4 w-4"
                    ></i>

                    Enviar mensagem

                </button>

            </div>

        </form>

        `
    );


    document
        .getElementById(
            'form-email'
        )
        .addEventListener(
            'submit',
            enviarMensagem
        );


    atualizarIcones();

}


function enviarMensagem(
    event
) {

    event.preventDefault();


    const id =
        Date.now();


    state.mensagens.unshift({

        id,

        conversaId:
            id,

        remetente: {

            id: 1,

            nome:
                state.userProfile.nome

        },

        destinatario: {

            id: 20,

            nome:
                document.getElementById(
                    'email-para'
                ).value

        },

        assunto:
            document.getElementById(
                'email-assunto'
            ).value,

        conteudo:
            document.getElementById(
                'email-msg'
            ).value,

        data:
            agoraFormatado(),

        lida:
            true,

        tipo:
            'enviada',

        anexos:
            []

    });


    fecharModal();


    navegarPara(
        'enviados'
    );


    mostrarAviso(
        'Mensagem enviada',
        'A mensagem foi adicionada aos Enviados. A resposta será simulada nesta versão.'
    );

}


/* =========================================================
   DOAÇÕES
========================================================= */

function renderWizardDoacao() {

    const s =
        state.doacaoState;


    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >

            <div class="mb-6">

                <h2
                    class="
                        text-2xl
                        font-black
                        text-gray-900
                    "
                >
                    Apoie a causa animal
                </h2>


                <p
                    class="
                        mt-1.5
                        text-[13px]
                        text-gray-500
                    "
                >
                    Escolha como deseja contribuir.
                </p>

            </div>


            <div
                class="
                    rounded-2xl
                    border
                    border-[#E4B99E]/40
                    bg-white
                    p-5
                    shadow-sm

                    md:p-6
                "
            >

                <div
                    class="
                        mb-8
                        flex
                        items-center
                    "
                >

                    ${
                        [1,2,3,4]
                            .map(
                                (
                                    numero,
                                    indice
                                ) => `

                                    ${
                                        indice
                                            ? '<div class="h-px flex-1 bg-gray-200"></div>'
                                            : ''
                                    }

                                    ${renderStep(
                                        numero,
                                        [
                                            'Valor',
                                            'Dados',
                                            'Pagamento',
                                            'Finalização'
                                        ][indice]
                                    )}

                                `
                            )
                            .join('')
                    }

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
        state.doacaoState.step >=
        numero;


    return `

        <div
            class="flex flex-col items-center"
        >

            <div
                class="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-xs
                    font-black

                    transition-all
                    duration-300

                    ${
                        ativo
                            ? 'bg-pet-red text-white scale-105 shadow-md'
                            : 'bg-gray-200 text-gray-400'
                    }
                "
            >

                ${
                    state.doacaoState.step >
                    numero

                        ? `
                            <i
                                data-lucide="check"
                                class="h-4 w-4"
                            ></i>
                        `

                        : numero
                }

            </div>


            <span
                class="
                    mt-1
                    text-[10px]
                    font-black

                    ${
                        ativo
                            ? 'text-pet-red'
                            : 'text-gray-400'
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


    if (
        s.step === 1
    ) {

        return `

            <div class="space-y-6">


                <div>

                    <label
                        class="
                            mb-2
                            block
                            text-xs
                            font-black
                            text-gray-700
                        "
                    >
                        Tipo de doação
                    </label>


                    <div
                        class="
                            grid
                            grid-cols-2
                            gap-2
                        "
                    >

                        ${botaoTipoDoacao(
                            'uma-vez',
                            'Uma vez',
                            'gift'
                        )}


                        ${botaoTipoDoacao(
                            'mensal',
                            'Mensal',
                            'refresh-cw'
                        )}

                    </div>

                </div>


                <div>

                    <label
                        class="
                            mb-2
                            block
                            text-xs
                            font-black
                            text-gray-700
                        "
                    >
                        Valor
                    </label>


                    <div
                        class="
                            grid
                            grid-cols-2
                            gap-2
                            sm:grid-cols-5
                        "
                    >

                        ${
                            [15,30,50,100,200]
                                .map(
                                    valor => `

                                        <button
                                            type="button"

                                            onclick="setValorDoacao(${valor})"

                                            class="
                                                rounded-xl
                                                border
                                                px-3
                                                py-3
                                                text-xs
                                                font-black

                                                transition-all
                                                duration-200

                                                ${
                                                    s.valor ===
                                                    valor

                                                        ? 'border-pet-red bg-pet-red text-white shadow-md -translate-y-0.5'

                                                        : 'border-gray-200 text-gray-600 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50'
                                                }

                                                active:scale-95
                                            "
                                        >

                                            R$ ${valor}

                                        </button>

                                    `
                                )
                                .join('')
                        }

                    </div>


                    <input
                        type="number"
                        min="1"
                        placeholder="Outro valor"

                        class="
                            mt-3
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-3
                            py-3
                            text-xs
                            outline-none

                            transition-all
                            duration-200

                            focus:border-pet-red
                            focus:ring-4
                            focus:ring-red-100
                        "

                        onchange="
                            setValorDoacao(
                                Number(this.value)
                            )
                        "
                    >

                </div>


                <div>

                    <label
                        class="
                            mb-2
                            block
                            text-xs
                            font-black
                            text-gray-700
                        "
                    >
                        Destino
                    </label>


                    <div
                        class="
                            grid
                            gap-3
                            sm:grid-cols-2
                        "
                    >

                        ${botaoDestino(
                            'alimentacao',
                            'Alimentação',
                            'Ração e alimentos.',
                            'utensils'
                        )}


                        ${botaoDestino(
                            'saude',
                            'Saúde',
                            'Cuidados veterinários.',
                            'heart-pulse'
                        )}


                        ${botaoDestino(
                            'resgate',
                            'Resgate',
                            'Operações de resgate.',
                            'shield'
                        )}


                        ${botaoDestino(
                            'abrigo',
                            'Abrigo',
                            'Infraestrutura.',
                            'house'
                        )}

                    </div>

                </div>


                <button
                    type="button"
                    onclick="avancarDoacao(2)"

                    class="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-pet-red
                        px-4
                        py-3
                        text-sm
                        font-black
                        text-white

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-red-700
                        hover:shadow-lg

                        active:scale-95
                    "
                >

                    Continuar

                    <i
                        data-lucide="arrow-right"
                        class="
                            h-4
                            w-4

                            transition-transform
                            duration-200

                            group-hover:translate-x-1
                        "
                    ></i>

                </button>

            </div>

        `;

    }


    if (
        s.step === 2
    ) {

        return `

            <div class="space-y-5">


                <div>

                    <label
                        class="
                            mb-2
                            block
                            text-xs
                            font-black
                            text-gray-700
                        "
                    >
                        Nome
                    </label>


                    <input
                        class="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-3
                            py-3
                            text-xs
                            outline-none

                            transition-all
                            duration-200

                            focus:border-pet-red
                            focus:ring-4
                            focus:ring-red-100
                        "

                        value="${escaparHTML(
                            state.userProfile.nome
                        )}"
                    >

                </div>


                <div>

                    <label
                        class="
                            mb-2
                            block
                            text-xs
                            font-black
                            text-gray-700
                        "
                    >
                        E-mail
                    </label>


                    <input
                        type="email"

                        class="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-3
                            py-3
                            text-xs
                            outline-none

                            transition-all
                            duration-200

                            focus:border-pet-red
                            focus:ring-4
                            focus:ring-red-100
                        "

                        value="${escaparHTML(
                            state.userProfile.email
                        )}"
                    >

                </div>


                <div>

                    <label
                        class="
                            mb-2
                            block
                            text-xs
                            font-black
                            text-gray-700
                        "
                    >
                        CPF
                    </label>


                    <input

                        class="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-3
                            py-3
                            text-xs
                            outline-none

                            transition-all
                            duration-200

                            focus:border-pet-red
                            focus:ring-4
                            focus:ring-red-100
                        "

                        placeholder="000.000.000-00"
                    >

                </div>


                <div class="flex gap-2">

                    <button
                        type="button"
                        onclick="avancarDoacao(1)"

                        class="
                            group
                            flex
                            w-1/3
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-gray-200
                            px-4
                            py-3
                            text-xs
                            font-black

                            transition-all
                            duration-200

                            hover:bg-gray-50

                            active:scale-95
                        "
                    >

                        <i
                            data-lucide="arrow-left"
                            class="h-4 w-4"
                        ></i>

                        Voltar

                    </button>


                    <button
                        type="button"
                        onclick="avancarDoacao(3)"

                        class="
                            group
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-pet-red
                            px-4
                            py-3
                            text-xs
                            font-black
                            text-white

                            transition-all
                            duration-200

                            hover:-translate-y-0.5
                            hover:bg-red-700
                            hover:shadow-lg

                            active:scale-95
                        "
                    >

                        Continuar

                        <i
                            data-lucide="arrow-right"
                            class="
                                h-4
                                w-4

                                transition-transform
                                duration-200

                                group-hover:translate-x-1
                            "
                        ></i>

                    </button>

                </div>

            </div>

        `;

    }


    if (
        s.step === 3
    ) {

        return `

            <div class="space-y-5">

                <h3
                    class="font-black text-gray-900"
                >
                    Forma de pagamento
                </h3>


                <div
                    class="
                        grid
                        grid-cols-3
                        gap-2
                    "
                >

                    ${botaoPagamento(
                        'pix',
                        'PIX',
                        'qr-code'
                    )}


                    ${botaoPagamento(
                        'cartao',
                        'Cartão',
                        'credit-card'
                    )}


                    ${botaoPagamento(
                        'boleto',
                        'Boleto',
                        'file-text'
                    )}

                </div>


                <div
                    class="
                        rounded-xl
                        bg-gray-50
                        p-6
                        text-center
                    "
                >

                    <p
                        class="text-sm font-black"
                    >
                        ${
                            s.pagamento ===
                            'pix'
                                ? 'PIX'
                                : 'Pagamento'
                        }
                    </p>


                    <div
                        class="
                            mx-auto
                            mt-4
                            flex
                            h-32
                            w-32
                            items-center
                            justify-center
                            border
                            bg-white
                            text-gray-400
                        "
                    >

                        <i
                            data-lucide="qr-code"
                            class="h-16 w-16"
                        ></i>

                    </div>


                    <p
                        class="
                            mt-3
                            text-[10px]
                            text-gray-500
                        "
                    >
                        pagamento@centralpet.org
                    </p>

                </div>


                <div class="flex gap-2">

                    <button
                        type="button"
                        onclick="avancarDoacao(2)"

                        class="
                            group
                            flex
                            w-1/3
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-gray-200
                            px-4
                            py-3
                            text-xs
                            font-black

                            transition-all
                            duration-200

                            hover:bg-gray-50

                            active:scale-95
                        "
                    >

                        <i
                            data-lucide="arrow-left"
                            class="h-4 w-4"
                        ></i>

                        Voltar

                    </button>


                    <button
                        type="button"
                        onclick="avancarDoacao(4)"

                        class="
                            group
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-pet-red
                            px-4
                            py-3
                            text-xs
                            font-black
                            text-white

                            transition-all
                            duration-200

                            hover:-translate-y-0.5
                            hover:bg-red-700
                            hover:shadow-lg

                            active:scale-95
                        "
                    >

                        <i
                            data-lucide="circle-check"
                            class="h-4 w-4"
                        ></i>

                        Confirmar

                    </button>

                </div>

            </div>

        `;

    }


    return `

        <div
            class="py-10 text-center"
        >

            <div
                class="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                    text-green-600

                    transition-transform
                    duration-300

                    hover:scale-110
                "
            >

                <i
                    data-lucide="circle-check"
                    class="h-8 w-8"
                ></i>

            </div>


            <h3
                class="
                    mt-5
                    text-xl
                    font-black
                "
            >
                Obrigado pela sua contribuição!
            </h3>


            <p
                class="
                    mx-auto
                    mt-2
                    max-w-md
                    text-sm
                    text-gray-500
                "
            >
                Esta doação de R$ ${s.valor} foi registrada somente para demonstração.
            </p>


            <button
                type="button"
                onclick="resetarDoacao()"

                class="
                    group
                    mx-auto
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-pet-orange
                    px-5
                    py-3
                    text-xs
                    font-black
                    text-white

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:bg-orange-500
                    hover:shadow-lg

                    active:scale-95
                "
            >

                <i
                    data-lucide="refresh-cw"

                    class="
                        h-4
                        w-4

                        transition-transform
                        duration-500

                        group-hover:rotate-180
                    "
                ></i>

                Fazer outra doação

            </button>

        </div>

    `;

}


function botaoTipoDoacao(
    tipo,
    texto,
    icone
) {

    const ativo =
        state.doacaoState.tipo ===
        tipo;


    return `

        <button
            type="button"
            onclick="setTipoDoacao('${tipo}')"

            class="
                group
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                px-4
                py-3
                text-xs
                font-black

                transition-all
                duration-200

                ${
                    ativo
                        ? 'border-pet-orange bg-orange-50 text-pet-orange shadow-sm -translate-y-0.5'
                        : 'border-gray-200 text-gray-600 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50'
                }

                active:scale-95
            "
        >

            <i
                data-lucide="${icone}"
                class="h-4 w-4"
            ></i>

            ${texto}

        </button>

    `;

}


function botaoDestino(
    destino,
    titulo,
    descricao,
    icone
) {

    const ativo =
        state.doacaoState.destino ===
        destino;


    return `

        <button
            type="button"
            onclick="setDestinoDoacao('${destino}')"

            class="
                group
                flex
                gap-3
                rounded-xl
                border-2
                p-4
                text-left

                transition-all
                duration-200

                ${
                    ativo
                        ? 'border-pet-red bg-red-50 -translate-y-0.5 shadow-sm'
                        : 'border-gray-100 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50/40'
                }

                active:scale-[0.98]
            "
        >

            <div
                class="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-100

                    transition-transform
                    duration-200

                    group-hover:scale-110
                "
            >

                <i
                    data-lucide="${icone}"
                    class="h-4 w-4"
                ></i>

            </div>


            <div>

                <strong
                    class="block text-xs"
                >
                    ${titulo}
                </strong>


                <span
                    class="
                        mt-1
                        block
                        text-[11px]
                        text-gray-500
                    "
                >
                    ${descricao}
                </span>

            </div>

        </button>

    `;

}


function botaoPagamento(
    pagamento,
    texto,
    icone
) {

    const ativo =
        state.doacaoState.pagamento ===
        pagamento;


    return `

        <button
            type="button"
            onclick="setPagamentoDoacao('${pagamento}')"

            class="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                p-3
                text-xs
                font-black

                transition-all
                duration-200

                ${
                    ativo
                        ? 'border-pet-red bg-red-50 text-red-700 -translate-y-0.5 shadow-sm'
                        : 'border-gray-200 text-gray-600 hover:-translate-y-0.5 hover:bg-gray-50'
                }

                active:scale-95
            "
        >

            <i
                data-lucide="${icone}"
                class="
                    h-5
                    w-5

                    transition-transform
                    duration-200

                    group-hover:scale-110
                "
            ></i>

            ${texto}

        </button>

    `;

}


function setTipoDoacao(
    tipo
) {

    state.doacaoState.tipo =
        tipo;

    renderizarPagina();

    atualizarIcones();

}


function setValorDoacao(
    valor
) {

    if (
        valor &&
        valor > 0
    ) {

        state.doacaoState.valor =
            valor;

        renderizarPagina();

        atualizarIcones();

    }

}


function setDestinoDoacao(
    destino
) {

    state.doacaoState.destino =
        destino;

    renderizarPagina();

    atualizarIcones();

}


function setPagamentoDoacao(
    pagamento
) {

    state.doacaoState.pagamento =
        pagamento;

    renderizarPagina();

    atualizarIcones();

}


function avancarDoacao(
    step
) {

    state.doacaoState.step =
        step;

    renderizarPagina();

    atualizarIcones();

}


function resetarDoacao() {

    state.doacaoState = {

        step: 1,

        tipo: 'uma-vez',

        valor: 50,

        destino: 'alimentacao',

        pagamento: 'pix'

    };


    renderizarPagina();

    atualizarIcones();

}


/* =========================================================
   PERFIL
========================================================= */

function renderPerfilUsuario() {

    const usuario =
        state.userProfile;


    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >

            <div class="mb-6">

                <h2
                    class="text-2xl font-black text-gray-900"
                >
                    Meu perfil
                </h2>


                <p
                    class="
                        mt-1.5
                        text-[13px]
                        text-gray-500
                    "
                >
                    Gerencie suas informações pessoais e foto.
                </p>

            </div>


            <div
                class="
                    grid
                    gap-6
                    lg:grid-cols-[260px_1fr]
                "
            >


                <!-- FOTO -->

                <section
                    class="
                        rounded-2xl
                        border
                        border-[#E4B99E]/40
                        bg-white
                        p-6
                        shadow-sm

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:shadow-lg
                    "
                >

                    <div
                        class="
                            flex
                            flex-col
                            items-center
                            text-center
                        "
                    >

                        <div
                            class="relative"
                        >

                            <div
                                id="perfil-avatar-preview"

                                class="
                                    flex
                                    h-24
                                    w-24
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-full
                                    bg-pet-blue
                                    text-2xl
                                    font-black
                                    text-white
                                    shadow-md

                                    transition-all
                                    duration-300

                                    hover:scale-105
                                "
                            >

                                ${
                                    usuario.foto

                                        ? `

                                            <img
                                                src="${usuario.foto}"
                                                alt="Foto de perfil"

                                                class="
                                                    h-full
                                                    w-full
                                                    object-cover

                                                    transition-transform
                                                    duration-500

                                                    hover:scale-110
                                                "
                                            >

                                        `

                                        : obterIniciais(
                                            usuario.nome
                                        )
                                }

                            </div>


                            <label
                                for="foto-perfil"

                                class="
                                    group
                                    absolute
                                    bottom-0
                                    right-0
                                    flex
                                    h-9
                                    w-9
                                    cursor-pointer
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-pet-orange
                                    text-white
                                    shadow-md

                                    transition-all
                                    duration-200

                                    hover:scale-110
                                    hover:bg-orange-500

                                    active:scale-95
                                "
                            >

                                <i
                                    data-lucide="camera"
                                    class="h-4 w-4"
                                ></i>

                            </label>


                            <input
                                id="foto-perfil"
                                type="file"
                                accept="image/*"
                                class="hidden"
                            >

                        </div>


                        <h3
                            class="mt-4 font-black"
                        >
                            ${escaparHTML(
                                usuario.nome
                            )}
                        </h3>


                        <p
                            class="
                                mt-1
                                text-xs
                                text-gray-500
                            "
                        >
                            ${
                                usuario.tipo ===
                                'orgao'

                                    ? 'Órgão legal'

                                    : 'Usuária'
                            }
                        </p>

                    </div>

                </section>


                <!-- DADOS -->

                <section
                    class="
                        rounded-2xl
                        border
                        border-[#E4B99E]/40
                        bg-white
                        p-6
                        shadow-sm
                    "
                >

                    <form
                        id="perfil-form"
                    >


                        <div class="mb-4">

                            <label
                                class="
                                    mb-2
                                    block
                                    text-xs
                                    font-black
                                    text-gray-700
                                "
                            >
                                Nome
                            </label>


                            <input
                                id="perfil-nome"

                                class="
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    px-3
                                    py-3
                                    text-xs
                                    outline-none

                                    transition-all
                                    duration-200

                                    focus:border-pet-blue
                                    focus:ring-4
                                    focus:ring-blue-100
                                "

                                value="${escaparHTML(
                                    usuario.nome
                                )}"

                                required
                            >

                        </div>


                        <div class="mb-4">

                            <label
                                class="
                                    mb-2
                                    block
                                    text-xs
                                    font-black
                                    text-gray-700
                                "
                            >
                                E-mail
                            </label>


                            <input
                                id="perfil-email"
                                type="email"

                                class="
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    px-3
                                    py-3
                                    text-xs
                                    outline-none

                                    transition-all
                                    duration-200

                                    focus:border-pet-blue
                                    focus:ring-4
                                    focus:ring-blue-100
                                "

                                value="${escaparHTML(
                                    usuario.email
                                )}"

                                required
                            >

                        </div>


                        <div class="mb-4">

                            <label
                                class="
                                    mb-2
                                    block
                                    text-xs
                                    font-black
                                    text-gray-700
                                "
                            >
                                Telefone
                            </label>


                            <input
                                id="perfil-telefone"

                                class="
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    px-3
                                    py-3
                                    text-xs
                                    outline-none

                                    transition-all
                                    duration-200

                                    focus:border-pet-blue
                                    focus:ring-4
                                    focus:ring-blue-100
                                "

                                value="${escaparHTML(
                                    usuario.telefone
                                )}"
                            >

                        </div>


                        <div class="mb-4">

                            <label
                                class="
                                    mb-2
                                    block
                                    text-xs
                                    font-black
                                    text-gray-700
                                "
                            >
                                Cidade
                            </label>


                            <input
                                id="perfil-cidade"

                                class="
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    px-3
                                    py-3
                                    text-xs
                                    outline-none

                                    transition-all
                                    duration-200

                                    focus:border-pet-blue
                                    focus:ring-4
                                    focus:ring-blue-100
                                "

                                value="${escaparHTML(
                                    usuario.cidade
                                )}"
                            >

                        </div>


                        <button
                            type="submit"

                            class="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-pet-blue
                                px-5
                                py-3
                                text-xs
                                font-black
                                text-white

                                transition-all
                                duration-200

                                hover:-translate-y-0.5
                                hover:bg-blue-800
                                hover:shadow-lg

                                active:scale-95
                            "
                        >

                            <i
                                data-lucide="save"
                                class="h-4 w-4"
                            ></i>

                            Salvar alterações

                        </button>

                    </form>


                    <!-- TIPO DA CONTA -->

                    <div
                        class="
                            mt-8
                            border-t
                            pt-6
                        "
                    >

                        <p
                            class="
                                text-[10px]
                                font-black
                                uppercase
                                tracking-wider
                                text-gray-400
                            "
                        >
                            Teste do protótipo
                        </p>


                        <p
                            class="
                                mt-2
                                text-xs
                                leading-5
                                text-gray-500
                            "
                        >
                            No projeto real, o tipo da conta virá do login.
                            Aqui serve apenas para demonstrar os dois perfis.
                        </p>


                        ${
                            criarDropdown({

                                id:
                                    'tipo-conta-dev',

                                valor:
                                    usuario.tipo,

                                opcoes: [

                                    {
                                        value:
                                            'usuario',

                                        label:
                                            'Usuário comum'
                                    },

                                    {
                                        value:
                                            'orgao',

                                        label:
                                            'Órgão legal'
                                    }

                                ]

                            })
                        }

                    </div>


                    <!-- SAIR -->

                    <div
                        class="
                            mt-6
                            border-t
                            pt-6
                        "
                    >

                        <button
                            type="button"
                            onclick="realizarLogout()"

                            class="
                                group
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-red-200
                                bg-red-50
                                px-4
                                py-3
                                text-xs
                                font-black
                                text-red-600

                                transition-all
                                duration-200

                                hover:bg-red-100

                                active:scale-[0.98]
                            "
                        >

                            <i
                                data-lucide="log-out"
                                class="
                                    h-4
                                    w-4

                                    transition-transform
                                    duration-200

                                    group-hover:translate-x-1
                                "
                            ></i>

                            Sair da conta

                        </button>

                    </div>

                </section>

            </div>

        </div>

    `;

}


/* =========================================================
   SALVAR PERFIL
========================================================= */

document.addEventListener(
    'submit',
    event => {

        if (
            event.target.id !==
            'perfil-form'
        ) {

            return;

        }


        event.preventDefault();


        state.userProfile.nome =
            document.getElementById(
                'perfil-nome'
            ).value.trim();


        state.userProfile.email =
            document.getElementById(
                'perfil-email'
            ).value.trim();


        state.userProfile.telefone =
            document.getElementById(
                'perfil-telefone'
            ).value.trim();


        state.userProfile.cidade =
            document.getElementById(
                'perfil-cidade'
            ).value.trim();


        renderizarSidebar();

        renderizarPagina();

        atualizarInformacoesUsuario();

        atualizarIcones();


        mostrarAviso(
            'Perfil atualizado',
            'Suas informações foram atualizadas nesta sessão.'
        );

    }
);


/* =========================================================
   FOTO DO PERFIL
========================================================= */

function alterarFotoPerfil(
    arquivo
) {

    if (!arquivo) {
        return;
    }


    if (
        !arquivo.type.startsWith(
            'image/'
        )
    ) {

        mostrarAviso(
            'Arquivo inválido',
            'Selecione uma imagem para sua foto de perfil.'
        );

        return;

    }


    const leitor =
        new FileReader();


    leitor.onload =
        event => {

            state.userProfile.foto =
                event.target.result;


            atualizarInformacoesUsuario();


            const preview =
                document.getElementById(
                    'perfil-avatar-preview'
                );


            if (preview) {

                preview.innerHTML = `

                    <img
                        src="${state.userProfile.foto}"
                        alt="Foto de perfil"

                        class="
                            h-full
                            w-full
                            object-cover

                            transition-transform
                            duration-500

                            hover:scale-110
                        "
                    >

                `;

            }


            atualizarIcones();


            mostrarAviso(
                'Foto atualizada',
                'A foto foi aplicada nesta sessão do protótipo.'
            );

        };


    leitor.readAsDataURL(
        arquivo
    );

}


/* =========================================================
   LOGOUT
========================================================= */

function realizarLogout() {

    state.userProfile =
        {
            ...INITIAL_USER
        };


    state.currentPage =
        'adotar';


    location.hash =
        '/adotar';


    renderizarSidebar();

    renderizarPagina();

    atualizarInformacoesUsuario();

    atualizarIcones();


    mostrarAviso(
        'Sessão encerrada',
        'No sistema real, aqui ocorrerá o redirecionamento para o login.'
    );

}


/* =========================================================
   TRIAGEM
========================================================= */

function renderTriagem() {

    const alta =
        state.denuncias.filter(
            denuncia =>
                denuncia.urgencia ===
                'Alta'
        );


    const media =
        state.denuncias.filter(
            denuncia =>
                denuncia.urgencia ===
                'Média'
        );


    const baixa =
        state.denuncias.filter(
            denuncia =>
                denuncia.urgencia ===
                'Baixa'
        );


    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >

            <div class="mb-6">

                <h2
                    class="
                        text-2xl
                        font-black
                        text-gray-900
                    "
                >
                    Triagem de denúncias
                </h2>


                <p
                    class="
                        mt-1.5
                        text-[13px]
                        text-gray-500
                    "
                >
                    Organize as ocorrências por prioridade.
                </p>

            </div>


            <div
                class="
                    grid
                    gap-5
                    xl:grid-cols-3
                "
            >

                ${renderColunaTriagem(
                    'Alta prioridade',
                    alta,
                    'bg-red-100 text-red-700'
                )}


                ${renderColunaTriagem(
                    'Média prioridade',
                    media,
                    'bg-amber-100 text-amber-700'
                )}


                ${renderColunaTriagem(
                    'Baixa prioridade',
                    baixa,
                    'bg-green-100 text-green-700'
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

        <section
            class="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-4

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-md
            "
        >

            <div
                class="
                    mb-4
                    flex
                    items-center
                    justify-between
                "
            >

                <h3
                    class="text-sm font-black"
                >
                    ${titulo}
                </h3>


                <span
                    class="
                        rounded-full
                        px-3
                        py-1
                        text-[10px]
                        font-black
                        ${classe}
                    "
                >
                    ${denuncias.length}
                </span>

            </div>


            <div class="space-y-3">

                ${
                    denuncias.length

                        ? denuncias
                            .map(
                                denuncia => `

                                    <button
                                        type="button"
                                        onclick="abrirDetalhesDenuncia(${denuncia.id})"

                                        class="
                                            group
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-100
                                            bg-white
                                            p-4
                                            text-left
                                            shadow-sm

                                            transition-all
                                            duration-200

                                            hover:-translate-y-0.5
                                            hover:shadow-lg

                                            active:scale-[0.99]
                                        "
                                    >

                                        <div
                                            class="
                                                flex
                                                items-center
                                                justify-between
                                                gap-3
                                            "
                                        >

                                            <span
                                                class="text-xs font-black"
                                            >
                                                #${denuncia.id}
                                            </span>


                                            <span
                                                class="
                                                    text-[10px]
                                                    font-black
                                                    text-blue-600
                                                "
                                            >
                                                ${escaparHTML(
                                                    denuncia.status
                                                )}
                                            </span>

                                        </div>


                                        <p
                                            class="
                                                mt-2
                                                text-xs
                                                font-black
                                            "
                                        >
                                            ${escaparHTML(
                                                denuncia.tipo
                                            )}
                                        </p>


                                        <p
                                            class="
                                                mt-1
                                                flex
                                                items-center
                                                gap-1
                                                text-[10px]
                                                text-gray-400
                                            "
                                        >

                                            <i
                                                data-lucide="map-pin"
                                                class="h-3 w-3"
                                            ></i>

                                            ${escaparHTML(
                                                denuncia.endereco
                                            )}

                                        </p>

                                    </button>

                                `
                            )
                            .join('')

                        : `

                            <div
                                class="
                                    rounded-xl
                                    border
                                    border-dashed
                                    p-5
                                    text-center
                                    text-xs
                                    text-gray-400
                                "
                            >
                                Nenhuma denúncia.
                            </div>

                        `
                }

            </div>

        </section>

    `;

}


/* =========================================================
   DETALHES DENÚNCIA
========================================================= */

function abrirDetalhesDenuncia(
    id
) {

    const denuncia =
        state.denuncias.find(
            item =>
                item.id === id
        );


    if (!denuncia) {
        return;
    }


    abrirModal(

        `Denúncia #${denuncia.id}`,

        `

        <div class="space-y-5">


            <div>

                <p
                    class="
                        text-[10px]
                        font-black
                        uppercase
                        text-gray-400
                    "
                >
                    Tipo
                </p>


                <p
                    class="mt-1 text-sm font-black"
                >
                    ${escaparHTML(
                        denuncia.tipo
                    )}
                </p>

            </div>


            <div>

                <p
                    class="
                        text-[10px]
                        font-black
                        uppercase
                        text-gray-400
                    "
                >
                    Local
                </p>


                <p
                    class="
                        mt-1
                        flex
                        items-center
                        gap-1
                        text-sm
                    "
                >

                    <i
                        data-lucide="map-pin"
                        class="
                            h-4
                            w-4
                            text-pet-red
                        "
                    ></i>

                    ${escaparHTML(
                        denuncia.endereco
                    )}

                </p>

            </div>


            <div>

                <p
                    class="
                        text-[10px]
                        font-black
                        uppercase
                        text-gray-400
                    "
                >
                    Descrição
                </p>


                <p
                    class="
                        mt-2
                        rounded-xl
                        bg-gray-50
                        p-4
                        text-sm
                        leading-6
                        text-gray-600
                    "
                >
                    ${escaparHTML(
                        denuncia.descricao
                    )}
                </p>

            </div>


            <div
                class="grid grid-cols-2 gap-4"
            >

                <div>

                    <p
                        class="
                            text-[10px]
                            font-black
                            uppercase
                            text-gray-400
                        "
                    >
                        Urgência
                    </p>


                    <p
                        class="
                            mt-1
                            text-sm
                            font-black
                        "
                    >
                        ${escaparHTML(
                            denuncia.urgencia
                        )}
                    </p>

                </div>


                <div>

                    <p
                        class="
                            text-[10px]
                            font-black
                            uppercase
                            text-gray-400
                        "
                    >
                        Status
                    </p>


                    <p
                        class="
                            mt-1
                            text-sm
                            font-black
                            text-blue-600
                        "
                    >
                        ${escaparHTML(
                            denuncia.status
                        )}
                    </p>

                </div>

            </div>


            ${
                state.userProfile.tipo ===
                'orgao'

                    ? `

                        <div
                            class="
                                border-t
                                pt-5
                            "
                        >

                            <label
                                class="
                                    mb-2
                                    block
                                    text-xs
                                    font-black
                                    text-gray-700
                                "
                            >
                                Atualizar status
                            </label>


                            ${
                                criarDropdown({

                                    id:
                                        `status-denuncia-${denuncia.id}`,

                                    valor:
                                        denuncia.status,

                                    opcoes: [

                                        {
                                            value:
                                                'Recebida',

                                            label:
                                                'Recebida'
                                        },

                                        {
                                            value:
                                                'Em análise',

                                            label:
                                                'Em análise'
                                        },

                                        {
                                            value:
                                                'Em atendimento',

                                            label:
                                                'Em atendimento'
                                        },

                                        {
                                            value:
                                                'Resolvida',

                                            label:
                                                'Resolvida'
                                        }

                                    ]

                                })
                            }

                        </div>

                    `

                    : ''
            }

        </div>

        `
    );


    atualizarIcones();

}


function atualizarStatusDenuncia(
    id,
    status
) {

    const denuncia =
        state.denuncias.find(
            item =>
                item.id === id
        );


    if (!denuncia) {
        return;
    }


    denuncia.status =
        status;


    fecharModal();


    renderizarSidebar();

    renderizarPagina();

    atualizarIcones();


    mostrarAviso(
        'Status atualizado',
        `A denúncia #${id} agora está como "${status}".`
    );

}


/* =========================================================
   GERENCIAR DOAÇÕES
========================================================= */

function renderGerenciarDoacoes() {

    const dados = [

        [
            'R$ 8.420',
            'Doações financeiras',
            'hand-heart'
        ],

        [
            '214',
            'Itens recebidos',
            'package'
        ],

        [
            '12',
            'Campanhas ativas',
            'megaphone'
        ],

        [
            '37',
            'Pedidos atendidos',
            'check-check'
        ]

    ];


    return `

        <div
            class="
                mx-auto
                w-full
                max-w-[1180px]
                p-4
                md:p-7
            "
        >

            <div class="mb-6">

                <h2
                    class="
                        text-2xl
                        font-black
                        text-gray-900
                    "
                >
                    Gerenciar doações
                </h2>


                <p
                    class="
                        mt-1.5
                        text-[13px]
                        text-gray-500
                    "
                >
                    Acompanhe campanhas e recursos recebidos.
                </p>

            </div>


            <div
                class="
                    grid
                    gap-5
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                ${
                    dados
                        .map(
                            item => `

                                <div
                                    class="
                                        rounded-2xl
                                        border
                                        border-[#E4B99E]/40
                                        bg-white
                                        p-5
                                        shadow-sm

                                        transition-all
                                        duration-300

                                        hover:-translate-y-1
                                        hover:shadow-xl
                                    "
                                >

                                    <div
                                        class="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-orange-50
                                            text-pet-orange
                                        "
                                    >

                                        <i
                                            data-lucide="${item[2]}"
                                            class="h-5 w-5"
                                        ></i>

                                    </div>


                                    <p
                                        class="
                                            mt-4
                                            text-2xl
                                            font-black
                                        "
                                    >
                                        ${item[0]}
                                    </p>


                                    <p
                                        class="
                                            mt-1
                                            text-xs
                                            text-gray-500
                                        "
                                    >
                                        ${item[1]}
                                    </p>

                                </div>

                            `
                        )
                        .join('')
                }

            </div>

        </div>

    `;

}


/* =========================================================
   CADASTRAR PET
========================================================= */

function abrirModalCadastrarPet() {

    abrirModal(

        'Cadastrar animal',

        `

        <form
            id="form-pet"
        >


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Nome
                </label>


                <input
                    id="pet-nome"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    required
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Espécie
                </label>


                ${
                    criarDropdown({

                        id:
                            'pet-especie',

                        valor:
                            'Cão',

                        opcoes: [

                            {
                                value:
                                    'Cão',

                                label:
                                    'Cão'
                            },

                            {
                                value:
                                    'Gato',

                                label:
                                    'Gato'
                            },

                            {
                                value:
                                    'Coelho',

                                label:
                                    'Coelho'
                            },

                            {
                                value:
                                    'Porquinho-da-índia',

                                label:
                                    'Porquinho-da-índia'
                            },

                            {
                                value:
                                    'Chinchila',

                                label:
                                    'Chinchila'
                            },

                            {
                                value:
                                    'Calopsita',

                                label:
                                    'Calopsita'
                            },

                            {
                                value:
                                    'Canário',

                                label:
                                    'Canário'
                            },

                            {
                                value:
                                    'Periquito-australiano',

                                label:
                                    'Periquito-australiano'
                            },

                            {
                                value:
                                    'Outro',

                                label:
                                    'Outro'
                            }

                        ]

                    })
                }

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Porte
                </label>


                ${
                    criarDropdown({

                        id:
                            'pet-porte',

                        valor:
                            'Pequeno',

                        opcoes: [

                            {
                                value:
                                    'Pequeno',

                                label:
                                    'Pequeno'
                            },

                            {
                                value:
                                    'Médio',

                                label:
                                    'Médio'
                            },

                            {
                                value:
                                    'Grande',

                                label:
                                    'Grande'
                            }

                        ]

                    })
                }

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Idade
                </label>


                <input
                    id="pet-idade"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    placeholder="Ex.: 2 anos"

                    required
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Raça ou variedade
                </label>


                <input
                    id="pet-raca"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    URL da imagem
                </label>


                <input
                    id="pet-foto"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    placeholder="https://..."
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Situação legal / origem
                </label>


                <input
                    id="pet-situacao-legal"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    placeholder="Ex.: Animal doméstico / origem comprovada"
                >

            </div>


            <div class="mb-4">

                <label
                    class="
                        mb-2
                        block
                        text-xs
                        font-black
                        text-gray-700
                    "
                >
                    Descrição
                </label>


                <textarea
                    id="pet-desc"

                    class="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-3
                        py-3
                        text-xs
                        outline-none

                        transition-all
                        duration-200

                        focus:border-pet-blue
                        focus:ring-4
                        focus:ring-blue-100
                    "

                    rows="4"

                    required
                ></textarea>

            </div>


            <div
                class="
                    mb-4
                    rounded-xl
                    border
                    border-blue-100
                    bg-blue-50
                    p-4
                "
            >

                <div
                    class="flex gap-3"
                >

                    <i
                        data-lucide="info"
                        class="
                            mt-0.5
                            h-4
                            w-4
                            min-w-4
                            text-pet-blue
                        "
                    ></i>


                    <p
                        class="
                            text-[11px]
                            leading-5
                            text-blue-800
                        "
                    >
                        Para animais que possuem regras específicas,
                        cadastre somente informações cuja origem e
                        manutenção estejam de acordo com a legislação aplicável.
                    </p>

                </div>

            </div>


            <button
                type="submit"

                class="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-pet-orange
                    px-4
                    py-3
                    text-xs
                    font-black
                    text-white

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:bg-orange-500
                    hover:shadow-lg

                    active:scale-95
                "
            >

                <i
                    data-lucide="plus"
                    class="
                        h-4
                        w-4

                        transition-transform
                        duration-200

                        group-hover:rotate-90
                    "
                ></i>

                Cadastrar animal

            </button>


        </form>

        `
    );


    document
        .getElementById(
            'form-pet'
        )
        .addEventListener(
            'submit',
            salvarNovoPet
        );


    atualizarIcones();

}


function salvarNovoPet(
    event
) {

    event.preventDefault();


    const especie =
        document.getElementById(
            'pet-especie'
        ).value;


    const porte =
        document.getElementById(
            'pet-porte'
        ).value;


    const categoria =
        ['Cão', 'Gato'].includes(
            especie
        )

            ? especie

            : 'Outros';


    state.pets.unshift({

        id:
            Date.now(),

        nome:
            document.getElementById(
                'pet-nome'
            ).value,

        especie:
            especie,

        categoria:
            categoria,

        porte:
            porte,

        idade:
            document.getElementById(
                'pet-idade'
            ).value,

        raca:

            document.getElementById(
                'pet-raca'
            ).value ||

            'Não informada',

        situacaoLegal:

            document.getElementById(
                'pet-situacao-legal'
            ).value ||

            'Origem informada pelo responsável',

        foto:

            document.getElementById(
                'pet-foto'
            ).value ||

            'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',

        vacinado:
            false,

        castrado:
            false,

        desc:

            document.getElementById(
                'pet-desc'
            ).value

    });


    fecharModal();


    renderizarPagina();


    atualizarIcones();


    mostrarAviso(
        'Animal cadastrado',
        'O animal foi adicionado à vitrine de adoção.'
    );

}


/* =========================================================
   MODAL
========================================================= */

function abrirModal(
    titulo,
    conteudo
) {

    const modal =
        document.getElementById(
            'modal-container'
        );


    modal.classList.remove(
        'hidden',
        'pointer-events-none',
        'opacity-0'
    );


    modal.classList.add(
        'pointer-events-auto',
        'opacity-100'
    );


    modal.setAttribute(
        'aria-hidden',
        'false'
    );


    modal.innerHTML = `

        <div
            data-modal-box

            class="
                w-full
                max-w-[600px]
                max-h-[90vh]
                overflow-visible
                rounded-2xl
                bg-white
                shadow-2xl

                opacity-0
                translate-y-3
                scale-95

                transition-all
                duration-200
            "
        >

            <div
                class="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-100
                    px-5
                    py-4
                "
            >

                <h3
                    class="
                        text-[17px]
                        font-black
                        text-gray-900
                    "
                >
                    ${titulo}
                </h3>


                <button
                    type="button"
                    onclick="fecharModal()"

                    class="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        border-0
                        bg-gray-50
                        text-gray-500

                        transition-all
                        duration-200

                        hover:bg-[#FFEFE5]
                        hover:text-pet-red

                        active:scale-90
                    "
                >

                    <i
                        data-lucide="x"
                        class="h-4 w-4"
                    ></i>

                </button>

            </div>


            <div
                class="
                    max-h-[calc(90vh-72px)]
                    overflow-y-auto
                    p-5
                "
            >

                ${conteudo}

            </div>

        </div>

    `;


    atualizarIcones();


    requestAnimationFrame(
        () => {

            const box =
                modal.querySelector(
                    '[data-modal-box]'
                );


            if (box) {

                box.classList.remove(
                    'opacity-0',
                    'translate-y-3',
                    'scale-95'
                );


                box.classList.add(
                    'opacity-100',
                    'translate-y-0',
                    'scale-100'
                );

            }

        }
    );

}


function fecharModal() {

    const modal =
        document.getElementById(
            'modal-container'
        );


    const box =
        modal.querySelector(
            '[data-modal-box]'
        );


    if (!box) {

        modal.classList.add(
            'hidden',
            'pointer-events-none',
            'opacity-0'
        );

        modal.innerHTML = '';

        return;

    }


    box.classList.remove(
        'opacity-100',
        'translate-y-0',
        'scale-100'
    );


    box.classList.add(
        'opacity-0',
        'translate-y-3',
        'scale-95'
    );


    setTimeout(
        () => {

            modal.classList.add(
                'hidden',
                'pointer-events-none',
                'opacity-0'
            );


            modal.classList.remove(
                'pointer-events-auto',
                'opacity-100'
            );


            modal.innerHTML = '';


            modal.setAttribute(
                'aria-hidden',
                'true'
            );

        },
        180
    );

}


/* =========================================================
   AVISOS
========================================================= */

function mostrarAviso(
    titulo,
    mensagem
) {

    abrirModal(

        titulo,

        `

        <div
            class="text-center"
        >

            <div
                class="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                    text-green-600

                    transition-transform
                    duration-300

                    hover:scale-110
                "
            >

                <i
                    data-lucide="circle-check"
                    class="h-6 w-6"
                ></i>

            </div>


            <p
                class="
                    mt-4
                    text-sm
                    leading-6
                    text-gray-500
                "
            >
                ${escaparHTML(
                    mensagem
                )}
            </p>


            <button
                type="button"
                onclick="fecharModal()"

                class="
                    group
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gray-900
                    px-4
                    py-3
                    text-xs
                    font-black
                    text-white

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:bg-black
                    hover:shadow-lg

                    active:scale-95
                "
            >

                <i
                    data-lucide="check"
                    class="h-4 w-4"
                ></i>

                Fechar

            </button>

        </div>

        `
    );

}


/* =========================================================
   MENU MOBILE
========================================================= */

function abrirMenuMobile() {

    const sidebar =
        document.getElementById(
            'sidebar'
        );


    const overlay =
        document.getElementById(
            'mobile-overlay'
        );


    sidebar.classList.add(
        'open'
    );


    overlay.classList.remove(
        'pointer-events-none',
        'opacity-0'
    );


    overlay.classList.add(
        'pointer-events-auto',
        'opacity-100'
    );

}


function fecharMenuMobile() {

    const sidebar =
        document.getElementById(
            'sidebar'
        );


    const overlay =
        document.getElementById(
            'mobile-overlay'
        );


    sidebar.classList.remove(
        'open'
    );


    overlay.classList.remove(
        'pointer-events-auto',
        'opacity-100'
    );


    overlay.classList.add(
        'pointer-events-none',
        'opacity-0'
    );

}


/* =========================================================
   UTILITÁRIOS
========================================================= */

function obterIniciais(
    nome
) {

    const partes =
        String(nome)
            .trim()
            .split(/\s+/)
            .filter(Boolean);


    if (
        !partes.length
    ) {

        return 'U';

    }


    if (
        partes.length === 1
    ) {

        return partes[0]
            .slice(0, 2)
            .toUpperCase();

    }


    return (

        partes[0][0] +

        partes[
            partes.length - 1
        ][0]

    ).toUpperCase();

}


function agoraFormatado() {

    const data =
        new Date();


    const zero =
        numero =>
            String(numero)
                .padStart(
                    2,
                    '0'
                );


    return `${zero(data.getDate())}/${zero(data.getMonth() + 1)}/${data.getFullYear()} ${zero(data.getHours())}:${zero(data.getMinutes())}`;

}


function escaparJS(
    valor
) {

    return String(valor)

        .replaceAll(
            '\\',
            '\\\\'
        )

        .replaceAll(
            "'",
            "\\'"
        )

        .replaceAll(
            '\n',
            '\\n'
        )

        .replaceAll(
            '\r',
            ''
        );

}


function escaparHTML(
    valor
) {

    return String(valor)

        .replaceAll(
            '&',
            '&amp;'
        )

        .replaceAll(
            '<',
            '&lt;'
        )

        .replaceAll(
            '>',
            '&gt;'
        )

        .replaceAll(
            '"',
            '&quot;'
        )

        .replaceAll(
            "'",
            '&#039;'
        );

}