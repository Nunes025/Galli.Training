const form = document.getElementById('surveyForm');
const container = document.getElementById('mainContainer'); // agora pego o container correto

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
                <div style="text-align: center;">
                    <img src="file.png" alt="Logotipo Academia Força e Saúde" style="max-width: 300px; height: auto; margin-bottom: 20px;">
                    <h2>Nós da Academia Força & Saúde Agradecemos sua colaboração!</h2>
                </div>
            `;
        } else {
            alert('Ocorreu um erro. Tente novamente.');
        }
    } catch (error) {
        alert('Erro de conexão. Tente mais tarde.');
        console.error('Erro:', error);
    }
});
