function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {                
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                //Criança  
                img.setAttribute("src", "img/bebe_menino.png")              
            } else if (idade < 21) {
                img.setAttribute("src", "img/adolescente.png")
                //Jovem
            } else if (idade < 50) {
                img.setAttribute("src", "img/homem_adulto.png")
                //Adulto
            } else {
                img.setAttribute("src", "img/idoso.png")
                //Idoso
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                img.setAttribute("src", "img/bebe_menina.png")
                //Criança                
            } else if (idade < 21) {
                img.setAttribute("src", "img/menina_adolescente.png")
                //Jovem
            } else if (idade < 50) {
                img.setAttribute("src", "img/mulher_adulta.png")
                //Adulto
            } else {
                img.setAttribute("src", "img.idosa.png")
                //Idoso
            }
        }
        res.style.textAlign = "center"      
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
    
}
