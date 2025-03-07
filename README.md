# Projeto - Tela de Login usando Gemini (IA do Google)

## Prompt's

1) No primeiro prompt solicitei a IA para gerar uma página que simule uma tela de autenticação de usuário com login e senha:
- _- Crie um página WEB simples simulando uma página de login, usando apenas HTML 5, CSS 3 e Javascript._

Resultado do primeiro prompt:
<details>
    <summary>HTML</summary>
    <pre>
    
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página de Login</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="login-container">
            <h2>Login</h2>
            <form id="login-form">
                <div class="form-group">
                    <label for="username">Usuário:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">Entrar</button>
            </form>
            <div id="message" class="message"></div>
        </div>
        <script src="script.js"></script>
    </body>
    </html>

</pre>
</details>

<details>
    <summary>CSS:</summary>
    <pre>
    
    body {
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #f0f0f0;
    }

    .login-container {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
    }

    .login-container h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
    }

    .form-group input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        background-color: #007bff;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
        background-color: #0056b3;
    }

    .message {
        margin-top: 10px;
        padding: 10px;
        border-radius: 4px;
    }

    .message.success {
        background-color: #d4edda;
        color: #155724;
    }

    .message.error {
        background-color: #f8d7da;
        color: #721c24;
    }

</pre>
</details>

<details>
    <summary>Javascript:</summary>
    <pre>
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

</pre>

</details>

### Observações:
- A própria IA deixou claro que se trata de apenas uma simples, pois depende de um sistema em backend para autenticar o usuário.
- A parte do Javascript é apenas uma simulação de interação com o usuário, pois em um senário real devemos validar os dados no servidor.

<!-- 
2) No segundo prompt iremos adicionar um botão para alterar entre tema claro e escuro usando CSS:
- _- Implemente ao projeto_
 -->
