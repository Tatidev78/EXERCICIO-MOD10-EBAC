$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#telefone, #cpf, #cep').on('input', function () { 
        this.value = this.value.replace(/\D/g, ''); 
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome:{
                required: "Por favor, insira seu nome completo"
            },
        email:{
            required:"Por favor insira seu e-mail.",
            email:"Por favor, insira um endereço de e-mail"
        },
        telefone:{
            required: "Por favor, insira seu telefone."
        },
        endereco:{
            required:"Por favor, insira seu endereço completo."
        },
        cep:{
            required: "Por favor, insira seu CEP."
        },
        cpf:{
            required:"'Por favor, insira seu CPF."
        }
     },

    submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
    },

    invalidHandler: function (event, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
    }

   
    });