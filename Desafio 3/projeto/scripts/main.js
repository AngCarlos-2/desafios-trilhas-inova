function cancelar() {
    alert("Inscrição cancelada");
}

function confirmar() {
    alert("Inscrição confirmada");
}

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const emailError = document.querySelector(".erro-email");

    emailError.style.display = "none"; 

    emailInput.addEventListener("input", () => {
        const emailValue = emailInput.value.trim();
        const endsWithEmailCom = emailValue.endsWith("@email.com");
        const notOnlyNumbers = !/^\d+$/.test(emailValue);
        const hasContent = emailValue.length > 0;

        if (endsWithEmailCom && notOnlyNumbers && hasContent) {
            emailError.style.display = "none"; 
            emailInput.style.borderColor = ""; 
        } else {
            emailError.style.display = "block"; 
            emailInput.style.borderColor = "red"; 
        }
    });
 
    const textBoxes = document.querySelectorAll(".caixadetexto");
    const textError = document.querySelector(".erro-geral");

    textError.style.display = "none"; 
    
    textBoxes.forEach((textBox) => {
    textBox.addEventListener("input", () => {
        const textBoxValue = textBox.value.trim();
        textBox.parentElement.appendChild(textError);

        if (textBoxValue.length > 0) {
            textError.style.display = "none"; 
            textBox.style.borderColor = ""; 
        } else if (textBoxValue.length <= 0) {
            textError.style.display = "block"; 
            textBox.style.borderColor = "red";
        }
    })
})
})


