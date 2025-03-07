const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const loginContainer = document.querySelector('.login-container');
const formInputs = document.querySelectorAll('.form-group input');
const themeLabel = document.querySelector('.theme-label');

const caixaUsuario = document.getElementById('username')
const caixaSenha = document.getElementById('password')


themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    loginContainer.classList.toggle('dark-mode');
    formInputs.forEach(input => input.classList.toggle('dark-mode'));
    
    // if (body.classList.contains('dark-mode')) {
    //     themeLabel.textContent = 'Tema Claro';
    // } else {
    //     themeLabel.textContent = 'Tema Escuro';
    // }
});
        
// Foco na caixa de usuário
let focarCaixaUsuario = () => {
    caixaUsuario.focus()
}

focarCaixaUsuario()

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simulação de validação (substitua com sua lógica real)
    if (username === 'usuario' && password === 'senha') {
        messageDiv.textContent = 'Login bem-sucedido!';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Usuário ou senha incorretos.';
        messageDiv.className = 'message error';
    }
    
    // Limpar campo senha após tentar logar
    caixaSenha.value = ''
    focarCaixaUsuario()

});
