document.addEventListener('DOMContentLoaded', () => {
    const btnVoltar = document.querySelector('#btn-voltar');
    const errorActions = document.querySelector('.error-actions');

    // --- 1.NAVEGAÇÃO SEGURA DE RETORNO ---
    if (btnVoltar) {
        btnVoltar.addEventListener('click', (evento) => {
            evento.preventDefault();

            // Se houver histórico de navegação no site, volta. Se não, vai para a home.
            if (document.referrer && document.referrer.includes(window.location.host)) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    // --- 2. REDIRECIONAMENTO AUTOMÁTICO COM CONTADOR ---
    let tempoRestante = 10;

    const avisoRedirecionamento = document.createElement('p');
    avisoRedirecionamento.className = 'redirect-notice';
    avisoRedirecionamento.style.fontSize = '0.85rem';
    avisoRedirecionamento.style.color = '#666';
    avisoRedirecionamento.style.marginTop = '15px';
    avisoRedirecionamento.innerHTML = `Redirecionando para a página inicial em <strong id="contador">${tempoRestante}</strong>s...`;
    
    if (errorActions) {
        errorActions.appendChild(avisoRedirecionamento);
    }

    const contadorEl = document.querySelector('#contador');
    const timer = setInterval(() => {
        tempoRestante--;
        if (contadorEl) contadorEl.innerText = tempoRestante;

        if (tempoRestante <= 0) {
            clearInterval(timer);
            window.location.href = 'index.html';
        }
    }, 1000);
});