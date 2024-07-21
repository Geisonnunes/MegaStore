document.getElementById('login-btn').addEventListener('click', function () {
  const email = document.getElementById('logemail').value;
  const password = document.getElementById('logpass').value;

  if (!validateEmail(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  if (password.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  // Simula um login bem-sucedido
  alert('Login bem-sucedido!');
  resetForm('login-form');
});

document.getElementById('register-btn').addEventListener('click', function () {
  const name = document.getElementById('regname').value;
  const email = document.getElementById('regemail').value;
  const password = document.getElementById('regpass').value;

  if (name.trim() === '') {
    alert('Por favor, insira seu nome completo.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  if (password.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  // Simula um registro bem-sucedido
  alert('Registro bem-sucedido!');
  resetForm('register-form');
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function resetForm(formId) {
  document.querySelectorAll(`#${formId} input`).forEach(input => {
    input.value = '';
  });
}

// Animações de entrada e saída das páginas de login e registro
const checkbox = document.getElementById('reg-log');
checkbox.addEventListener('change', function () {
  const front = document.querySelector('.card-front');
  const back = document.querySelector('.card-back');

  if (checkbox.checked) {
    front.style.animation = 'fadeOut 0.5s forwards';
    back.style.animation = 'fadeIn 0.5s forwards';
  } else {
    back.style.animation = 'fadeOut 0.5s forwards';
    front.style.animation = 'fadeIn 0.5s forwards';
  }
});

// Adiciona animação ao aparecer e desaparecer das páginas
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
  }

  @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
  }
`;
document.head.appendChild(style);
