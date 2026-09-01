<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.forgot-password-form');
    const emailInput = document.querySelector('#user-email');
    const submitBtn = document.querySelector('#confirmarRecuperacao');
    const card = document.querySelector('.forgot-password-card');

    // --- 1. GERENCIAMENTO DE ERROS VISUAIS ---
    const mostrarErro = (elemento, mensagem) => {
        removerErro(elemento);
        const container = elemento.closest('.form-group') || elemento.parentElement;

        const msgErro = document.createElement('small');
        msgErro.className = 'erro-feedback';
        msgErro.style.color = '#e53935';
        msgErro.style.fontSize = '0.78rem';
        msgErro.style.marginTop = '4px';
        msgErro.style.display = 'block';
        msgErro.innerText = mensagem;

        elemento.classList.add('input-erro');
        container.appendChild(msgErro);
    };

    const removerErro = (elemento) => {
        const container = elemento.closest('.form-group') || elemento.parentElement;
        const msgExistente = container.querySelector('.erro-feedback');
        if (msgExistente) {
            msgExistente.remove();
        }
        elemento.classList.remove('input-erro');
    };

    // Limpa o erro assim que o usuário digita
    emailInput.addEventListener('input', () => removerErro(emailInput));

    // --- 2. VALIDAÇÃO DE E-MAIL ---
    const validarEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    // --- 3. FLUXO DE SUBMISSÃO ---
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        removerErro(emailInput);

        const email = emailInput.value.trim();

        // Validação
        if (!validarEmail(email)) {
            mostrarErro(emailInput, 'Insira um e-mail válido para continuar.');
            return;
        }

        // Estado Visual de Carregamento (Evita múltiplos cliques)
        submitBtn.disabled = true;
        submitBtn.innerText = 'Enviando...';

        // Simulação da requisição de recuperação
        setTimeout(() => {
            // Feedback Visual de Sucesso (Boas práticas de UX: Ocultar dados sensíveis)
            card.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 10px 0;">
          <h2 style="color: #2e7d32; font-size: 1.25rem; margin-bottom: 12px;">E-mail Enviado!</h2>
          <p style="color: #444; font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;">
            Se o endereço <strong>${email}</strong> estiver cadastrado em nossa base, você receberá um link de redefinição em instantes.
          </p>
          <div class="form-footer-link">
            <a href="login.html" class="back-link">← Voltar para o Login</a>
          </div>
        </div>
      `;
        }, 1200);
    });
=======
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.forgot-password-form');
    const emailInput = document.querySelector('#user-email');
    const submitBtn = document.querySelector('#confirmarRecuperacao');
    const card = document.querySelector('.forgot-password-card');

    // --- 1. GERENCIAMENTO DE ERROS VISUAIS ---
    const mostrarErro = (elemento, mensagem) => {
        removerErro(elemento);
        const container = elemento.closest('.form-group') || elemento.parentElement;

        const msgErro = document.createElement('small');
        msgErro.className = 'erro-feedback';
        msgErro.style.color = '#e53935';
        msgErro.style.fontSize = '0.78rem';
        msgErro.style.marginTop = '4px';
        msgErro.style.display = 'block';
        msgErro.innerText = mensagem;

        elemento.classList.add('input-erro');
        container.appendChild(msgErro);
    };

    const removerErro = (elemento) => {
        const container = elemento.closest('.form-group') || elemento.parentElement;
        const msgExistente = container.querySelector('.erro-feedback');
        if (msgExistente) {
            msgExistente.remove();
        }
        elemento.classList.remove('input-erro');
    };

    // Limpa o erro assim que o usuário digita
    emailInput.addEventListener('input', () => removerErro(emailInput));

    // --- 2. VALIDAÇÃO DE E-MAIL ---
    const validarEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    // --- 3. FLUXO DE SUBMISSÃO ---
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        removerErro(emailInput);

        const email = emailInput.value.trim();

        // Validação
        if (!validarEmail(email)) {
            mostrarErro(emailInput, 'Insira um e-mail válido para continuar.');
            return;
        }

        // Estado Visual de Carregamento (Evita múltiplos cliques)
        submitBtn.disabled = true;
        submitBtn.innerText = 'Enviando...';

        // Simulação da requisição de recuperação
        setTimeout(() => {
            // Feedback Visual de Sucesso (Boas práticas de UX: Ocultar dados sensíveis)
            card.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 10px 0;">
          <h2 style="color: #2e7d32; font-size: 1.25rem; margin-bottom: 12px;">E-mail Enviado!</h2>
          <p style="color: #444; font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;">
            Se o endereço <strong>${email}</strong> estiver cadastrado em nossa base, você receberá um link de redefinição em instantes.
          </p>
          <div class="form-footer-link">
            <a href="login.html" class="back-link">← Voltar para o Login</a>
          </div>
        </div>
      `;
        }, 1200);
    });
>>>>>>> 8eec5d50942f85572ec9306c8c0098acdd819b85
});