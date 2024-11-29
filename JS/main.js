    $(document).ready(function(){

        $('#carousel-imagens').slick({
            autoplay:true
        });

        $('.menu-hamburguer').click(function(){
            $('nav').slideToggle();
        });

        $('#telefone').mask('(00) 00000-0000');

        $('form').validate({
            rules:{
                nome:{
                    required: true
                },
                email:{
                    required: true,
                    email: true
                },
                telefone:{
                    required: true
                },
                veiculoInteresse:{
                    required: true
                },
                mensagem:{
                    required: true
                },
            },
            messages: {
                nome: 'Por favor, insira seu nome'
            },
            submitHandler: function(form){
                console.log(form);
            },
            invalidHandler: function (evento, validator){
                let camposIncorretos = validator.numberOfInvalids();
                if (camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }
        });

            $('.lista-veiculos button').click(function(){
                const destino =$('#contato');
                const nomeveiculo =$(this).parent().find('h3').text();

                $('veiculo-interesse').val(nomeveiculo);
            
                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000);
            
            
    });


