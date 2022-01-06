/*Codigo que faz a mudança de imagens. A cada mudança, é mudado, atraves do "setAttribute", o "onclick" dos botoes que alteram as fotos, para frente ou para tras. Esse mudança
        é baseada num contador que começa no zero que é acrescido ou decrescido dependendo se a foto é mudada para frente ou para tras. Cada foto corresponde a um número de 0 até o 
        número total de fotos menos 1*/
        let contador = 0
        function MudarFotoFrente(){
            if(contador == 0){
                document.getElementById("a").src ="FotosFullHD/Tela de loguin.png"
            }
            contador = contador + 1
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Tela-de-loguin")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente1()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras1()")
        }
        function MudarFotoFrente1(){
            if(contador == 1){
                document.getElementById("a").src ="FotosFullHD/Primeiro front end.png"
            }
            contador = contador + 1
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Meu-primeiro-site-apenas-front-end-")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente2()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras2()")
        }
        function MudarFotoFrente2(){
            if(contador == 2){
                document.getElementById("a").src ="FotosFullHD/Contador de dias.png"
            }
            contador = 0
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Contador-de-dias")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras()")
        }
        function MudarFotoTras(){
            if(contador == 0){
                document.getElementById("a").src ="FotosFullHD/Primeiro front end.png"
            }
            contador = 2
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Meu-primeiro-site-apenas-front-end-")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente2()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras2()")
        }
        function MudarFotoTras2(){
            if(contador == 2){
                document.getElementById("a").src ="FotosFullHD/Tela de loguin.png"
            }
            contador = contador - 1
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Tela-de-loguin")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente1()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras1()")
        }
        function MudarFotoTras1(){
            if(contador == 1){
                document.getElementById("a").src ="FotosFullHD/Contador de dias.png"
            }
            contador = contador - 1
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Contador-de-dias")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras()")
        }
        function Bt(){
            document.getElementById("a").src ="FotosFullHD/Contador de dias.png"
            contador = 0
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Contador-de-dias")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras()")
        }
        function Bt1(){
            document.getElementById("a").src ="FotosFullHD/Tela de loguin.png"
            contador = 1
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Tela-de-loguin")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente1()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras1()")
        }
        function Bt2(){
            document.getElementById("a").src ="FotosFullHD/Primeiro front end.png"
            contador = 2
            document.getElementById("a-da-foto").setAttribute("href", "https://github.com/JuniorBandeira7/Meu-primeiro-site-apenas-front-end-")
            document.getElementById("btf").setAttribute("onclick", "MudarFotoFrente2()")
            document.getElementById("btt").setAttribute("onclick", "MudarFotoTras2()")
        }
        