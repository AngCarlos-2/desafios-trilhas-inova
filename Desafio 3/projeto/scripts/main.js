const cpfField = document.getElementById("cpf");
const telefoneField = document.getElementById("telefone");
const cepField =document.getElementById("cep");
const ruaField =document.getElementById("rua");
const cidadeField =document.getElementById("cidade");
const estadoField =document.getElementById("estado");

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

    cpfField.addEventListener("input", () => {
        const cpfValue = cpfField.value.trim().replace(/\D/g, "");
        const cpfError = document.querySelector(".erro-cpf")

        cpfError.style.display = 'none';
        
        if (cpfValue.length === 11 && /^\d+$/.test(cpfValue)) {
            cpfError.style.display = "none";
            cpfField.style.borderColor = "";
        } else {
            cpfError.style.display = "block";
            cpfField.style.borderColor = "red";
        }
    })

    telefoneField.addEventListener("input", () => {
        const telefoneValue = telefoneField.value.trim().replace(/\D/g, "");
        const telefoneError = document.querySelector(".erro-telefone")

        telefoneError.style.display = 'none';

        if (telefoneValue.length == 11) {
            telefoneError.style.display = "none";
            telefoneField.style.borderColor = "";
        } else {
            telefoneError.style.display = "block";
            telefoneField.style.borderColor = "red";
        }
    })

    cepField.addEventListener("input", () => {
        const cepValue = cepField.value.trim().replace(/\D/g, "");
        const cepError = document.querySelector(".erro-cep");

        cepError.style.display = 'none';

        if (cepValue.length == 8) {
            cepError.style.display = "none";
            cepField.style.borderColor = "";
            ruaField.style.cursor = 'allowed';
            cidadeField.style.cursor = 'allowed';
            estadoField.style.cursor = 'allowed';
            ruaField.style.backgroundColor = 'white';
            cidadeField.style.backgroundColor = 'white';
            estadoField.style.backgroundColor = 'white';
            ruaField.style.opacity = '100%';
            cidadeField.style.opacity = '100%';
            estadoField.style.opacity = '100%';
        } else {
            cepError.style.display = "block";
            cepField.style.borderColor = "red";
            ruaField.style.cursor = 'not-allowed';
            cidadeField.style.cursor = 'not-allowed';
            estadoField.style.cursor = 'not-allowed';
            ruaField.style.backgroundColor = '#E7E5E4';
            cidadeField.style.backgroundColor = '#E7E5E4';
            estadoField.style.backgroundColor = '#E7E5E4;';
            ruaField.style.opacity = '50%';
            cidadeField.style.opacity = '50%';
            estadoField.style.opacity = '50%';
        }
    })
})


