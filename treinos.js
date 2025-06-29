function buscarTreino() {
  const codigo = document.getElementById("codigoInput").value.trim()
  const resultadoDiv = document.getElementById("resultadoTreino")
  const buscarBtn = document.getElementById("buscarBtn")
  const btnText = buscarBtn.querySelector(".btn-text")
  const loadingSpinner = buscarBtn.querySelector(".loading-spinner")

  // Limpar resultado anterior
  resultadoDiv.innerHTML = ""

  if (codigo === "") {
    mostrarAlerta("Digite um código válido.", "error")
    return
  }

  // Mostrar loading
  buscarBtn.disabled = true
  btnText.style.display = "none"
  loadingSpinner.style.display = "flex"

  // Caminho até o arquivo PDF do treino
  const caminhoPDF = `./treinos/${codigo}.pdf`

  // Verificar se o PDF existe antes de abrir
  fetch(caminhoPDF, { method: "HEAD" })
    .then((response) => {
      if (response.ok) {
        // Abrir PDF em nova aba
        window.open(caminhoPDF, "_blank")
        mostrarAlerta("Treino encontrado! O PDF foi aberto em uma nova aba.", "success")

        // Limpar input
        document.getElementById("codigoInput").value = ""
      } else {
        throw new Error("PDF não encontrado")
      }
    })
    .catch((error) => {
      mostrarAlerta("Treino não encontrado. Verifique o código e tente novamente.", "error")
    })
    .finally(() => {
      // Esconder loading
      buscarBtn.disabled = false
      btnText.style.display = "inline"
      loadingSpinner.style.display = "none"
    })
}

function mostrarAlerta(mensagem, tipo) {
  const resultadoDiv = document.getElementById("resultadoTreino")

  const iconSvg =
    tipo === "success"
      ? `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
         <polyline points="22,4 12,14.01 9,11.01"></polyline>
       </svg>`
      : `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <circle cx="12" cy="12" r="10"></circle>
         <line x1="15" y1="9" x2="9" y2="15"></line>
         <line x1="9" y1="9" x2="15" y2="15"></line>
       </svg>`

  resultadoDiv.innerHTML = `
    <div class="alert alert-${tipo}">
      ${iconSvg}
      <span>${mensagem}</span>
    </div>
  `
}

// Permitir busca com Enter
document.getElementById("codigoInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buscarTreino()
  }
})

// Adicionar efeito de foco no input
document.getElementById("codigoInput").addEventListener("focus", function () {
  this.parentElement.style.transform = "scale(1.02)"
})

document.getElementById("codigoInput").addEventListener("blur", function () {
  this.parentElement.style.transform = "scale(1)"
})
