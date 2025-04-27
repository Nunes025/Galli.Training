document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário
    const satisfaction = document.getElementById('satisfaction').value;
    const comments = document.getElementById('comments').value;

    // Aqui você pode enviar os dados para um backend (ex: API) para armazenar
    // Para este exemplo, vamos apenas exibir uma mensagem de sucesso
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p>Obrigado por sua participação!</p>`;

    // Limpa o formulário
    document.getElementById('surveyForm').reset();
});