const moradorBtn = document.getElementById('morador-btn');
const gerenteBtn = document.getElementById('gerente-btn');
const formTitle = document.getElementById('form-title');
const formCampos = document.getElementById('formCampos');

moradorBtn.addEventListener('click', ()=>{
  moradorBtn.classList.add('active'); moradorBtn.classList.remove('inactive');
  gerenteBtn.classList.add('inactive'); gerenteBtn.classList.remove('active');
  formTitle.textContent = "Registrar Morador";
  formCampos.innerHTML = `
    <input type="text" placeholder="Nome" required>
    <input type="email" placeholder="Email" required>
    <input type="password" placeholder="Senha" required>
  `;
});

gerenteBtn.addEventListener('click', ()=>{
  gerenteBtn.classList.add('active'); gerenteBtn.classList.remove('inactive');
  moradorBtn.classList.add('inactive'); moradorBtn.classList.remove('active');
  formTitle.textContent = "Registrar Gerente";
  formCampos.innerHTML = `
    <input type="text" placeholder="Nome" required>
    <input type="email" placeholder="Email" required>
    <input type="password" placeholder="Senha" required>
    <input type="password" placeholder="Senha do gerente" required>
  `;
});

document.getElementById('register-form').addEventListener('submit', e=>{
  e.preventDefault();
  
  const campos = formCampos.querySelectorAll('input');
  const nome = campos[0].value.trim();
  const email = campos[1].value.trim();
  const senha = campos[2].value.trim();
  
  const isGerente = gerenteBtn.classList.contains('active');

  if(isGerente){
    const senhaGerente = campos[3].value.trim();
    if(senhaGerente !== "hinin"){
      alert("Senha do gerente incorreta!");
      return;
    }
    // Salvar gerente logado
    localStorage.setItem('currentUser', JSON.stringify({nome, email, tipo:'gerente'}));
    window.location.href = 'drento_gerente.html';
  } else {
    // Salvar morador logado
    localStorage.setItem('currentUser', JSON.stringify({nome, email, tipo:'morador'}));
    window.location.href = 'drento_morador.html';
  }
});


