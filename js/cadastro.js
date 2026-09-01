document.addEventListener('DOMContentLoaded', () => {
  // --- INJEÇÃO DE ESTILOS VISUAIS E ANIMAÇÕES VIA JS ---
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
    .password-strength-container { margin-top: 6px; }
    .strength-bar-bg { height: 4px; background: #e0e0e0; border-radius: 2px; overflow: hidden; }
    .strength-bar-fill { height: 100%; width: 0%; transition: width 0.3s ease, background-color 0.3s ease; }
    .strength-text { font-size: 0.72rem; color: #666; margin-top: 3px; display: block; text-align: right; }
    .btn-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255,255,255,0.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .toast-success {
      position: fixed; top: 20px; right: 20px;
      background: #2e7d32; color: #fff; padding: 14px 24px;
      border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      font-size: 0.9rem; font-weight: 500; z-index: 9999;
      animation: fadeInSlide 0.4s ease forwards;
    }
  `;
  document.head.appendChild(style);

  // --- ELEMENTOS ---
  const form = document.querySelector('.register-form');
  const card = document.querySelector('.register-card');
  const emailInput = document.querySelector('#user-email');
  const tipoContaSelect = document.querySelector('#tipo_conta');
  const diaInput = document.querySelector('#nascimento-dia');
  const mesInput = document.querySelector('#nascimento-mes');
  const anoInput = document.querySelector('#nascimento-ano');
  const senhaInput = document.querySelector('#senha');
  const confirmaSenhaInput = document.querySelector('#confirmarSenha');
  const submitBtn = document.querySelector('#confirmarCadastro');

  const dateInputs = [diaInput, mesInput, anoInput];
  const iconError = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e53935" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  // --- MEDIDOR DE SENHA ---
  const strengthContainer = document.createElement('div');
  strengthContainer.className = 'password-strength-container';
  strengthContainer.innerHTML = `
    <div class="strength-bar-bg"><div class="strength-bar-fill" id="strengthBar"></div></div>
    <span class="strength-text" id="strengthText"></span>
  `;
  senhaInput.parentElement.appendChild(strengthContainer);

  const strengthBar = document.querySelector('#strengthBar');
  const strengthText = document.querySelector('#strengthText');

  // --- RENDERIZAR MENSAGEM DE ERRO ---
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

  // --- MÁSCARA E AUTO-TAB NAS DATAS ---
  dateInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '');
      if (input.value.length >= input.maxLength && index < dateInputs.length - 1) {
        dateInputs[index + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && input.value === '' && index > 0) {
        dateInputs[index - 1].focus();
      }
    });
  });

  // --- VALIDADOR DE IDADE (MÍNIMO 18 ANOS) ---
  const validarDataEIdade = (d, m, a) => {
    const dia = parseInt(d, 10);
    const mes = parseInt(m, 10);
    const ano = parseInt(a, 10);

    if (!d || !m || !a || isNaN(dia) || isNaN(mes) || isNaN(ano)) {
      return { valido: false, mensagem: 'Preencha a data de nascimento completa.' };
    }

    // Valida se a data existe no calendário (ex: impede 31/02)
    const dataNasc = new Date(ano, mes - 1, dia);
    if (
      dataNasc.getFullYear() !== ano ||
      dataNasc.getMonth() !== mes - 1 ||
      dataNasc.getDate() !== dia
    ) {
      return { valido: false, mensagem: 'Insira uma data válida.' };
    }

    const hoje = new Date();
    if (dataNasc > hoje) {
      return { valido: false, mensagem: 'A data não pode ser no futuro.' };
    }

    // Cálculo da idade exata
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const difMes = hoje.getMonth() - dataNasc.getMonth();

    if (difMes < 0 || (difMes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }

    if (idade < 18) {
      return { valido: false, mensagem: 'Você precisa ter pelo menos 18 anos para se cadastrar.' };
    }

    return { valido: true };
  };

  // --- AVALIADOR DE SENHA ---
  senhaInput.addEventListener('input', () => {
    const val = senhaInput.value;
    let score = 0;

    if (val.length >= 6) score += 25;
    if (/[A-Z]/.test(val)) score += 25;
    if (/[0-9]/.test(val)) score += 25;
    if (/[^A-Za-z0-9]/.test(val)) score += 25;

    strengthBar.style.width = `${score}%`;

    if (val.length === 0) {
      strengthBar.style.width = '0%';
      strengthText.innerText = '';
    } else if (score <= 25) {
      strengthBar.style.backgroundColor = '#e53935';
      strengthText.innerText = 'Senha Fraca';
    } else if (score <= 50) {
      strengthBar.style.backgroundColor = '#fb8c00';
      strengthText.innerText = 'Senha Média';
    } else {
      strengthBar.style.backgroundColor = '#2e7d32';
      strengthText.innerText = 'Senha Forte';
    }
  });

  // --- VALIDAÇÕES EM TEMPO REAL ---
  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  emailInput.addEventListener('blur', () => {
    if (emailInput.value && !validarEmail(emailInput.value.trim())) {
      mostrarErro(emailInput, 'Insira um e-mail válido.');
    } else if (emailInput.value) {
      marcarSucesso(emailInput);
    }
  });

  confirmaSenhaInput.addEventListener('input', () => {
    if (confirmaSenhaInput.value && confirmaSenhaInput.value !== senhaInput.value) {
      mostrarErro(confirmaSenhaInput, 'As senhas não coincidem.');
    } else if (confirmaSenhaInput.value) {
      marcarSucesso(confirmaSenhaInput);
    }
  });

  // --- SUBMISSÃO DO FORMULÁRIO ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valido = true;

    if (!validarEmail(emailInput.value.trim())) {
      mostrarErro(emailInput, 'Digite um e-mail válido.');
      valido = false;
    } else { marcarSucesso(emailInput); }

    if (!tipoContaSelect.value) {
      mostrarErro(tipoContaSelect, 'Selecione o tipo de conta.');
      valido = false;
    } else { marcarSucesso(tipoContaSelect); }

    // Validação de Data de Nascimento e Idade
    const resultadoData = validarDataEIdade(diaInput.value, mesInput.value, anoInput.value);
    if (!resultadoData.valido) {
      mostrarErro(diaInput, resultadoData.mensagem);
      valido = false;
    } else { 
      marcarSucesso(diaInput);
      marcarSucesso(mesInput);
      marcarSucesso(anoInput);
    }

    if (senhaInput.value.length < 6) {
      mostrarErro(senhaInput, 'A senha deve ter pelo menos 6 caracteres.');
      valido = false;
    } else { marcarSucesso(senhaInput); }

    if (confirmaSenhaInput.value !== senhaInput.value || !confirmaSenhaInput.value) {
      mostrarErro(confirmaSenhaInput, 'As senhas devem ser iguais.');
      valido = false;
    } else { marcarSucesso(confirmaSenhaInput); }

    if (!valido) {
      card.classList.remove('shake-card');
      void card.offsetWidth;
      card.classList.add('shake-card');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="btn-spinner"></span> Cadastrando...`;

    setTimeout(() => {
      const toast = document.createElement('div');
      toast.className = 'toast-success';
      toast.innerText = 'Cadastro realizado com sucesso!';
      document.body.appendChild(toast);

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = 'Confirmar';
        strengthBar.style.width = '0%';
        strengthText.innerText = '';
        document.querySelectorAll('.form-input, .form-select').forEach(i => i.classList.remove('input-sucesso'));
        toast.remove();
      }, 2000);
    }, 1200);
  });
});