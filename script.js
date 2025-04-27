// script.js

const form = document.getElementById('surveyForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (Formspree já recebe normalmente)

    // Aguarda um pouquinho para garantir que o Formspree capture os dados
    setTimeout(function () {
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = '<p>Obrigado por sua participação!</p>';
        form.reset(); // Limpa o formulário
    }, 100); 
});
