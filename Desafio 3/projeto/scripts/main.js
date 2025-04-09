const dataNascField = document.getElementById("nascimento");
const sexoField = document.getElementById("sexo");
const cpfField = document.getElementById("cpf");
const telefoneField = document.getElementById("telefone");
const cepField = document.getElementById("cep");
const ruaField = document.getElementById("rua");
const cidadeField = document.getElementById("cidade");
const estadoField = document.getElementById("estado");

function cancelar() {
    alert("Inscrição cancelada");
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

    const nascimentoError = document.querySelector(".erro-nascimento");

    dataNascField.addEventListener("input", () => {
        const dataNascFieldValue = dataNascField.value.trim();
        
        if (dataNascFieldValue === "") {
            nascimentoError.style.display = "block"
            dataNascField.style.borderColor = "red";  
        } else {
            nascimentoError.style.display = "none";
            dataNascField.style.borderColor = "";
        }
    })

    const sexoError = document.querySelector(".erro-sexo");

    sexoField.addEventListener("input", () => {
        const sexoFieldValue = sexoField.value.trim();
        
        if (sexoFieldValue === "") {
            sexoError.style.display = "block"
            sexoField.style.borderColor = "red";  
        } else {
            sexoError.style.display = "none";
            sexoField.style.borderColor = "";
        }
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

function camposValidos() {
    const nome = document.getElementById("nome").value.trim();
    const nascimento = document.getElementById("nascimento").value.trim();
    const cpf = document.getElementById("cpf").value.trim().replace(/\D/g, "");
    const sexo = document.getElementById("sexo").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim().replace(/\D/g, "");
    const cep = document.getElementById("cep").value.trim().replace(/\D/g, "");
    const numero = document.getElementById("numero").value.trim();
    const id = document.getElementById("id").value.trim();
    const senha = document.getElementById("password").value.trim();
    const termos = document.querySelector(".termos__check").checked;

    const emailValido = email.endsWith("@email.com") && !/^\d+$/.test(email);
    const trilhasSelecionadas = document.querySelectorAll(".trilhas__marcar:checked").length === 1;

    if (!nome || !nascimento || !sexo || !email || !telefone || !cpf || !cep || !numero || !id || !senha) {
        alert("Preencha todos os campos obrigatórios.");
        return false;
    }

    if (!emailValido) {
        alert("Insira um e-mail válido que termine com '@email.com'.");
        return false;
    }

    if (cpf.length !== 11) {
        alert("CPF inválido. Deve conter 11 dígitos.");
        return false;
    }

    if (telefone.length !== 11) {
        alert("Telefone inválido. Deve conter 11 dígitos.");
        return false;
    }

    if (cep.length !== 8) {
        alert("CEP inválido. Deve conter 8 dígitos.");
        return false;
    }

    if (!termos) {
        alert("Você deve aceitar os Termos e Condições.");
        return false;
    }

    if (!trilhasSelecionadas) {
        alert("Você deve selecionar apenas uma trilha.");
        return false;
    }

    return true;
}

function confirmar() {
    if (camposValidos()) {
        alert("Inscrição confirmada!");
        document.getElementById("form").submit();
    }
}

function salvar() {
    if (camposValidos()) {
        const dados = {
            nome: document.getElementById("nome").value.trim(),
            nascimento: document.getElementById("nascimento").value.trim(),
            cpf: document.getElementById("cpf").value.trim(),
            sexo: document.getElementById("sexo").value.trim(),
            email: document.getElementById("email").value.trim(),
            telefone: document.getElementById("telefone").value.trim(),
            cep: document.getElementById("cep").value.trim(),
            numero: document.getElementById("numero").value.trim(),
            id: document.getElementById("id").value.trim(),
            senha: document.getElementById("password").value.trim(),
            trilha: document.querySelector(".trilhas__marcar:checked")?.value || ""
        };

        localStorage.setItem("dadosInscricao", JSON.stringify(dados));
        alert("Informações salvas com sucesso no navegador!");
    }
}


