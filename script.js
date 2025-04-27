const form = document.getElementById('surveyForm');
const container = document.getElementById('mainContainer');

form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Impede o envio tradicional

    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/xzzrzwpj', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            container.innerHTML = `
                <div style="text-align: center;">
                    <img src="file.png" alt="Logotipo Academia Força e Saúde" style="max-width: 300px; height: auto; margin-bottom: 20px;">
                    <h2>Nós da Academia Força & Saúde Agradecemos sua colaboração!</h2>
                </div>
            `;
        } else {
            alert('Ocorreu um erro ao enviar. Tente novamente.');
        }
    } catch (error) {
        alert('Erro de conexão. Tente mais tarde.');
        console.error(error);
    }
});

