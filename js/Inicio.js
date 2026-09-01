/* =========================================================
   CENTRAL PET - PÁGINA INICIAL
========================================================= */


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        inicializarLucide();

        configurarMenuMobile();

        configurarScrollHeader();

        configurarScrollSpy();

        configurarLinksSuaves();

    }
);


/* =========================================================
   LUCIDE
========================================================= */

function inicializarLucide() {

    if (
        window.lucide &&
        typeof window.lucide.createIcons === 'function'
    ) {

        window.lucide.createIcons();

    }

}


/* =========================================================
   HEADER AO ROLAR
========================================================= */

function configurarScrollHeader() {

    const header =
        document.getElementById(
            'header'
        );


    if (!header) {
        return;
    }


    function atualizarHeader() {

        if (
            window.scrollY > 20
        ) {

            header.classList.add(
                'border-gray-100',
                'shadow-sm'
            );

            header.classList.remove(
                'border-transparent'
            );

        } else {

            header.classList.remove(
                'border-gray-100',
                'shadow-sm'
            );

            header.classList.add(
                'border-transparent'
            );

        }

    }


    window.addEventListener(
        'scroll',
        atualizarHeader,
        {
            passive: true
        }
    );


    atualizarHeader();

}


/* =========================================================
   MENU MOBILE
========================================================= */

function configurarMenuMobile() {

    const botao =
        document.getElementById(
            'btn-menu'
        );


    const menu =
        document.getElementById(
            'mobile-menu'
        );


    if (
        !botao ||
        !menu
    ) {

        return;

    }


    botao.addEventListener(
        'click',
        () => {

            const estaAberto =
                !menu.classList.contains(
                    'hidden'
                );


            if (estaAberto) {

                fecharMenuMobile();

            } else {

                abrirMenuMobile();

            }

        }
    );


    document
        .querySelectorAll(
            '.mobile-link'
        )
        .forEach(
            link => {

                link.addEventListener(
                    'click',
                    fecharMenuMobile
                );

            }
        );

}


function abrirMenuMobile() {

    const menu =
        document.getElementById(
            'mobile-menu'
        );


    const botao =
        document.getElementById(
            'btn-menu'
        );


    if (!menu) {
        return;
    }


    menu.classList.remove(
        'hidden'
    );


    menu.classList.add(
        'animate-[fadeInDown_.2s_ease-out]'
    );


    if (botao) {

        botao.innerHTML = `

            <i
                data-lucide="x"
                class="h-5 w-5"
            ></i>

        `;

        inicializarLucide();

    }

}


function fecharMenuMobile() {

    const menu =
        document.getElementById(
            'mobile-menu'
        );


    const botao =
        document.getElementById(
            'btn-menu'
        );


    if (!menu) {
        return;
    }


    menu.classList.add(
        'hidden'
    );


    menu.classList.remove(
        'animate-[fadeInDown_.2s_ease-out]'
    );


    if (botao) {

        botao.innerHTML = `

            <i
                data-lucide="menu"
                class="h-5 w-5"
            ></i>

        `;

        inicializarLucide();

    }

}


/* =========================================================
   SCROLL SUAVE
========================================================= */

function configurarLinksSuaves() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        link => {

            link.addEventListener(
                'click',
                event => {

                    const destino =
                        link.getAttribute(
                            'href'
                        );


                    if (
                        !destino ||
                        destino === '#'
                    ) {

                        return;

                    }


                    const secao =
                        document.querySelector(
                            destino
                        );


                    if (!secao) {
                        return;
                    }


                    event.preventDefault();


                    secao.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                }
            );

        }
    );

}


/* =========================================================
   SCROLLSPY
========================================================= */

function configurarScrollSpy() {

    const secoes =
        document.querySelectorAll(
            'main > section[id], main#inicio > section[id]'
        );


    const links =
        document.querySelectorAll(
            '.nav-link'
        );


    if (
        !secoes.length ||
        !links.length
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const id =
                            entry.target.id;


                        links.forEach(
                            link => {

                                const ativo =
                                    link.dataset.nav ===
                                    id;


                                link.classList.toggle(
                                    'bg-[#FFEFE5]',
                                    ativo
                                );


                                link.classList.toggle(
                                    'text-pet-red',
                                    ativo
                                );


                                link.classList.toggle(
                                    'text-gray-600',
                                    !ativo
                                );

                            }
                        );

                    }
                );

            },

            {

                root: null,

                rootMargin:
                    '-20% 0px -65% 0px',

                threshold: 0

            }

        );


    secoes.forEach(
        secao => {

            observer.observe(
                secao
            );

        }
    );

}


/* =========================================================
   FECHAR MENU AO REDIMENSIONAR
========================================================= */

window.addEventListener(
    'resize',
    () => {

        if (
            window.innerWidth >=
            1024
        ) {

            fecharMenuMobile();

        }

    }
);