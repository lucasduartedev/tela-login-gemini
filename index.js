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
});
