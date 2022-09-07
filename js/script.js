$(function(){
    $('input[name=altura]').mask('0.00')
    $('input[name=peso]').mask('0#')
    $('input[name=idade]').mask('0#')

    $('.formulario').submit(function(){
        event.preventDefault()
        var sexo = $('input[name=sexo]').val()
        var nome = $('input[name=nome]').val()
        var peso = $('input[name=peso]').val()
        var altura = $('input[name=altura]').val()
        var idade = $('input[name=idade]').val()
        
        
        function validation(){
            if(nome == ''){
                alert('Digite seu nome')
                return false;
            }else if(sexo == ''){
                alert('Digite seu sexo')
                return false;
            }else if(idade == ''){
                alert('Digite sua idade')
                return false;
            }else if(altura == ''){
                alert('Digite sua altura')
                return false;
            }else if(peso == ''){
                alert('Digite seu peso')
                return false;
            }else{
                
                calculandoIMC()
            }
        }
        validation()
        
        function calculandoIMC(){

            if(sexo == 'm' || sexo == 'M'){
                // MASCULINO

                // Variaveis
                var idade = $('input[name=idade]').val()
                var peso = $('input[name=peso]').val()
                var altura = $('input[name=altura]').val()
                var imc = (peso / (altura * altura)).toFixed(1)
                var resultado = $('.resultado p')
                var nome = $('input[name=nome]').val()
                // ////////////

                // Verificando idade
                if(idade == 1){
                    if(imc < 14.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 18.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 19.6){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 2){
                    if(imc < 14){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 18.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 3){
                    if(imc < 13.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 18.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 4){
                    if(imc < 13.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 16.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 18){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 5){
                    if(imc < 13){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 16.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 18.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 6){
                    if(imc < 13){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17.1){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 19){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 7){
                    if(imc < 13.1){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 19.6){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 8){
                    if(imc < 13.3){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 18){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 20.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 9){
                    if(imc < 13.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 18.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 21.3){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 10){
                    if(imc < 13.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 19.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 22.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 11){
                    if(imc < 14.1){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 20){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 23.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }

                    
                }else if(idade == 12){
                    if(imc < 14.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 20.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 24.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 13){
                    if(imc < 14.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 21.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 25.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 14){
                    if(imc < 15.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 22.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 26.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 15){
                    if(imc < 16){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 23.6){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 27.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 16){
                    if(imc < 16.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 24.3){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 28.6){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 17){
                    if(imc < 16.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 24.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 29.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 18){
                    if(imc < 17.3){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 25.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 29.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade >= 19 && idade <= 64){
                    if(imc < 18.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 24.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 30){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade > 64){
                    if(imc < 20){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 30){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 35){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else{
                    alert('Digite a sua idade corretamente!!')
                    return false;
                }

                


            }else if(sexo == 'f' || sexo == 'F'){
                // FEMININO

                // Variaveis
                var idade = $('input[name=idade]').val()
                var peso = $('input[name=peso]').val()
                var altura = $('input[name=altura]').val()
                var imc = (peso / (altura * altura)).toFixed(1)
                var resultado = $('.resultado p')
                var nome = $('input[name=nome]').val()
                // ////////////

                // Verificando idade
                if(idade == 1){
                    if(imc < 13.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 19.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 2){
                    if(imc < 13.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 18.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 3){
                    if(imc < 13.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 16.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 18.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 4){
                    if(imc < 13){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 16.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 18.3){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 5){
                    if(imc < 12.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 19.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 6){
                    if(imc < 12.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 19.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 7){
                    if(imc < 12.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 17.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 20.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 8){
                    if(imc < 12.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 18.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 21.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 9){
                    if(imc < 13.1){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 19.1){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 22.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 10){
                    if(imc < 13.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 19.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 23.6){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 11){
                    if(imc < 13.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 20.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 24.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }

                    
                }else if(idade == 12){
                    if(imc < 14.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 21.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 26.1){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 13){
                    if(imc < 14.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 22.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 27.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 14){
                    if(imc < 15.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 23.6){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 28.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 15){
                    if(imc < 15.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 24.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 28.8){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 16){
                    if(imc < 16.2){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 24.6){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 29.3){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 17){
                    if(imc < 16.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 24.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 29.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade == 18){
                    if(imc < 16.4){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 25.1){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 29.7){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade >= 19 && idade <= 64){
                    if(imc < 18.5){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 24.9){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 30){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else if(idade > 64){
                    if(imc < 20){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta abaixo do peso!`)
                    }else if(imc < 30){
                        resultado.html(`${nome}, Seu IMC é ${imc} Seu peso Esta Normal, Parabens!!!!`)
                    }else if(imc < 35){
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com sobrepeso!`)
                    }else{
                        resultado.html(`${nome}, Seu IMC é ${imc} Você esta com Obesidade, Cuidado!!!`)
                    }
                }else{
                    alert('Digite a sua idade corretamente!!')
                    return false;
                }


            }else{
                alert('Digite "m" para masculino ou "f" para feminino')
                return false;
            }
        }
        
        
    })
})