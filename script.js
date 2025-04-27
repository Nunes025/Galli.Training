document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    const satisfaction = document.getElementById('satisfaction').value;
    const comments = document.getElementById('comments').value;

    fetch('https://script.google.com/macros/s/AKfycbx7lrJNOAXMnNGDm0gbEMUb89hPktdjiwwdcvLEBoo/dev', {
        method: 'POST',
        body: JSON.stringify({
            satisfaction: satisfaction,
            comments: comments
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            const messageDiv = document.getElementById('message');
            messageDiv.innerHTML = `<p>Obrigado por sua participação!</p>`;
            document.getElementById('surveyForm').reset();
        } else {
            alert('Erro ao enviar. Tente novamente.');
        }
    }).catch(error => {
        alert('Erro de conexão.');
        console.error(error);
    });
});
