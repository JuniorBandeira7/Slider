var imgs=[]
    var slider
    var imgAtual
    var maxImg
    var tmp
    var vtempo
    var vload
    var tempoTroca

    function preCarregamento(){
        var s=1
        for(var i=0;i<3;i++){
        imgs[i]=new Image()
        imgs[i].src="imgs/s"+s+".jpg"//a posição "i" do vetor recebe "src="imgs/s"+s+".jpg""
        s++
        }
    }

    function carregar(img){
        slider.style.backgroundImage="url('"+imgs[img].src+"')"//aqui chama o vetor imgs, na posição "img", recebendo o "src"
    }

    function inicia(){
        preCarregamento()
        imgAtual=0
        maxImg=imgs.length-1
        slider=document.getElementById("dvslider")
        vload=document.getElementById("dvBarra")
        carregar(imgAtual)
        tempoTroca=0
        anima()
    }

    function troca(dir){//parametro "dir" de direção. se clicar no botao de volta ele recebe -1, caso clica no avançar recebe 1
        tempoTroca=0//quando muda a imagem o tempo de mudar a foto automatico zera, seja clicando no botao, ou esperando
        imgAtual+=dir
        if(imgAtual>maxImg){
            imgAtual=0
        }else if(imgAtual<0){
            imgAtual=maxImg
        }
        carregar(imgAtual)
    }
    function anima(){
        tempoTroca++
        if(tempoTroca >= 500){
            tempoTroca=0
            troca(1)//quando zero o tempo avança um slide
        }
        vtempo=tempoTroca/5//1% de 500. a barrinha vai enchendo de 1 em 1%
        vload.style.width=vtempo+"%"
        window.requestAnimationFrame(anima)
    }
   
    window.addEventListener("load",inicia)