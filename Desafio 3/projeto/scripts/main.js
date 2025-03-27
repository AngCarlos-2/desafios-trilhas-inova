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

    /*const textBox = document.getElementsByClassName("caixadetexto");

    textBox.addEventListener("input", () => {
        const textBoxValue = textBox.value.trim();

        if (textBoxValue.length > 0) {
            emailError.style.display = "none"; 
            emailInput.style.borderColor = ""; 
        } else {
            emailError.style.display = "block"; 
            emailInput.style.borderColor = "red"; 
        }
    })*/
});


