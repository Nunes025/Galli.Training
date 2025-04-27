const form = document.getElementById('surveyForm');
const container = document.querySelector('.container'); // pega a div principal

form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Impede o envio normal

    const formData = new FormData(form);

    try {
        const response = await fetch('SEU_ENDPOINT_AQUI', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Depois do envio, muda completamente o conteúdo da tela
            container.innerHTML = `
                <img src="file.png" alt="Logotipo Academia Força e Saúde" style="max-width: 300px; height: auto; display: block; margin: 0 auto 20px;">
                <h2 style="text-align: center;">Nós da Academia Força & Saúde Agradecemos sua colaboração!</h2>
            `;
        } else {
            alert('Ocorreu um erro. Tente novamente.');
        }
    } catch (error) {
        alert('Erro de conexão. Tente mais tarde.');
        console.error('Erro:', error);
    }
});
