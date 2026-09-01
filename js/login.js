<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  // --- INJEÇÃO DE ESTILOS VISUAIS VIA JS ---
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }
    @keyframes fadeInSlide {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .shake-card { animation: shake 0.4s ease-in-out; }
    .input-sucesso { border-color: #2e7d32 !important; box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.15) !important; }
    .erro-feedback {
      color: #e53935;
      font-size: 0.75rem;
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
      animation: fadeInSlide 0.3s ease forwards;
    }
    .password-wrapper { position: relative; width: 100%; }
    .toggle-password {
      position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; color: #777;
      padding: 0; display: flex; align-items: center; justify-content: center;
    }
    .btn-spinner {
      display: inline-block; width: 16px; height: 16px;
      border: 2px solid rgba(255,255,255,0.3); border-radius: 50%;
      border-top-color: #fff; animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .toast-success {
      position: fixed; top: 20px; right: 20px;
      background: #0600A9; color: #fff; padding: 14px 24px;
      border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      font-size: 0.9rem; font-weight: 500; z-index: 9999;
      animation: fadeInSlide 0.4s ease forwards;
    }
  `;
  document.head.appendChild(style);

  // --- ELEMENTOS E ÍCONES SVG ---
  const form = document.querySelector('.login-form');
  const card = document.querySelector('.login-card');
  const emailInput = document.querySelector('#user-email');
  const senhaInput = document.querySelector('#senha');
  const salvarSenhaCheckbox = document.querySelector('#salvarSenha');
  const submitBtn = document.querySelector('#confirmarLogin');

  const iconEyeOpen = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  const iconEyeClosed = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  const iconError = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e53935" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  // --- BOTÃO DE EXIBIR/OCULTAR SENHA ---
  const wrapper = document.createElement('div');
  wrapper.className = 'password-wrapper';
  senhaInput.parentNode.insertBefore(wrapper, senhaInput);
  wrapper.appendChild(senhaInput);

  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'toggle-password';
  toggleBtn.setAttribute('aria-label', 'Alternar visibilidade da senha');
  toggleBtn.innerHTML = iconEyeOpen;
  wrapper.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    const isPassword = senhaInput.type === 'password';
    senhaInput.type = isPassword ? 'text' : 'password';
    toggleBtn.innerHTML = isPassword ? iconEyeClosed : iconEyeOpen;
  });

  // --- PERSISTÊNCIA DE E-MAIL ---
  const emailSalvo = localStorage.getItem('centralpet_email');
  if (emailSalvo) {
    emailInput.value = emailSalvo;
    salvarSenhaCheckbox.checked = true;
  }

  // --- GERENCIAMENTO DE ERROS ---
  const mostrarErro = (elemento, mensagem) => {
    removerErro(elemento);
    const container = elemento.closest('.form-group') || elemento.parentElement;
    
    const msgErro = document.createElement('small');
    msgErro.className = 'erro-feedback';
    msgErro.innerHTML = `${iconError} <span>${mensagem}</span>`;

    elemento.classList.add('input-erro');
    elemento.classList.remove('input-sucesso');
    container.appendChild(msgErro);
  };

  const removerErro = (elemento) => {
    const container = elemento.closest('.form-group') || elemento.parentElement;
    const msgExistente = container.querySelector('.erro-feedback');
    if (msgExistente) msgExistente.remove();
    elemento.classList.remove('input-erro');
  };

  const marcarSucesso = (elemento) => {
    removerErro(elemento);
    elemento.classList.add('input-sucesso');
  };

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  [emailInput, senhaInput].forEach(input => {
    input.addEventListener('input', () => removerErro(input));
  });

  // --- SUBMISSÃO ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valido = true;

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    if (!validarEmail(email)) {
      mostrarErro(emailInput, 'Insira um e-mail válido.');
      valido = false;
    } else { marcarSucesso(emailInput); }

    if (!senha) {
      mostrarErro(senhaInput, 'Digite sua senha.');
      valido = false;
    } else if (senha.length < 6) {
      mostrarErro(senhaInput, 'A senha deve conter pelo menos 6 caracteres.');
      valido = false;
    } else { marcarSucesso(senhaInput); }

    if (!valido) {
      card.classList.remove('shake-card');
      void card.offsetWidth;
      card.classList.add('shake-card');
      return;
    }

    if (salvarSenhaCheckbox.checked) {
      localStorage.setItem('centralpet_email', email);
    } else {
      localStorage.removeItem('centralpet_email');
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="btn-spinner"></span> Entrando...`;

    setTimeout(() => {
      const toast = document.createElement('div');
      toast.className = 'toast-success';
      toast.innerText = 'Bem-vindo de volta ao Central Pet!';
      document.body.appendChild(toast);

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Confirmar';
        toast.remove();
      }, 2000);
    }, 1000);
  });
=======
document.addEventListener('DOMContentLoaded', () => {
  // --- INJEÇÃO DE ESTILOS VISUAIS VIA JS ---
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }
    @keyframes fadeInSlide {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .shake-card { animation: shake 0.4s ease-in-out; }
    .input-sucesso { border-color: #2e7d32 !important; box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.15) !important; }
    .erro-feedback {
      color: #e53935;
      font-size: 0.75rem;
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
      animation: fadeInSlide 0.3s ease forwards;
    }
    .password-wrapper { position: relative; width: 100%; }
    .toggle-password {
      position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; color: #777;
      padding: 0; display: flex; align-items: center; justify-content: center;
    }
    .btn-spinner {
      display: inline-block; width: 16px; height: 16px;
      border: 2px solid rgba(255,255,255,0.3); border-radius: 50%;
      border-top-color: #fff; animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .toast-success {
      position: fixed; top: 20px; right: 20px;
      background: #0600A9; color: #fff; padding: 14px 24px;
      border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      font-size: 0.9rem; font-weight: 500; z-index: 9999;
      animation: fadeInSlide 0.4s ease forwards;
    }
  `;
  document.head.appendChild(style);

  // --- ELEMENTOS E ÍCONES SVG ---
  const form = document.querySelector('.login-form');
  const card = document.querySelector('.login-card');
  const emailInput = document.querySelector('#user-email');
  const senhaInput = document.querySelector('#senha');
  const salvarSenhaCheckbox = document.querySelector('#salvarSenha');
  const submitBtn = document.querySelector('#confirmarLogin');

  const iconEyeOpen = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  const iconEyeClosed = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  const iconError = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e53935" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  // --- BOTÃO DE EXIBIR/OCULTAR SENHA ---
  const wrapper = document.createElement('div');
  wrapper.className = 'password-wrapper';
  senhaInput.parentNode.insertBefore(wrapper, senhaInput);
  wrapper.appendChild(senhaInput);

  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'toggle-password';
  toggleBtn.setAttribute('aria-label', 'Alternar visibilidade da senha');
  toggleBtn.innerHTML = iconEyeOpen;
  wrapper.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    const isPassword = senhaInput.type === 'password';
    senhaInput.type = isPassword ? 'text' : 'password';
    toggleBtn.innerHTML = isPassword ? iconEyeClosed : iconEyeOpen;
  });

  // --- PERSISTÊNCIA DE E-MAIL ---
  const emailSalvo = localStorage.getItem('centralpet_email');
  if (emailSalvo) {
    emailInput.value = emailSalvo;
    salvarSenhaCheckbox.checked = true;
  }

  // --- GERENCIAMENTO DE ERROS ---
  const mostrarErro = (elemento, mensagem) => {
    removerErro(elemento);
    const container = elemento.closest('.form-group') || elemento.parentElement;
    
    const msgErro = document.createElement('small');
    msgErro.className = 'erro-feedback';
    msgErro.innerHTML = `${iconError} <span>${mensagem}</span>`;

    elemento.classList.add('input-erro');
    elemento.classList.remove('input-sucesso');
    container.appendChild(msgErro);
  };

  const removerErro = (elemento) => {
    const container = elemento.closest('.form-group') || elemento.parentElement;
    const msgExistente = container.querySelector('.erro-feedback');
    if (msgExistente) msgExistente.remove();
    elemento.classList.remove('input-erro');
  };

  const marcarSucesso = (elemento) => {
    removerErro(elemento);
    elemento.classList.add('input-sucesso');
  };

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  [emailInput, senhaInput].forEach(input => {
    input.addEventListener('input', () => removerErro(input));
  });

  // --- SUBMISSÃO ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valido = true;

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    if (!validarEmail(email)) {
      mostrarErro(emailInput, 'Insira um e-mail válido.');
      valido = false;
    } else { marcarSucesso(emailInput); }

    if (!senha) {
      mostrarErro(senhaInput, 'Digite sua senha.');
      valido = false;
    } else if (senha.length < 6) {
      mostrarErro(senhaInput, 'A senha deve conter pelo menos 6 caracteres.');
      valido = false;
    } else { marcarSucesso(senhaInput); }

    if (!valido) {
      card.classList.remove('shake-card');
      void card.offsetWidth;
      card.classList.add('shake-card');
      return;
    }

    if (salvarSenhaCheckbox.checked) {
      localStorage.setItem('centralpet_email', email);
    } else {
      localStorage.removeItem('centralpet_email');
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="btn-spinner"></span> Entrando...`;

    setTimeout(() => {
      const toast = document.createElement('div');
      toast.className = 'toast-success';
      toast.innerText = 'Bem-vindo de volta ao Central Pet!';
      document.body.appendChild(toast);

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Confirmar';
        toast.remove();
      }, 2000);
    }, 1000);
  });
>>>>>>> 8eec5d50942f85572ec9306c8c0098acdd819b85
});