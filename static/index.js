botao = document.querySelector('#mudaHumor')
box = document.querySelector('.box') 
botao.addEventListener('click', mudarHumor)

sorrindo = true

function mudarHumor(){
    if (sorrindo == true){
        sorrindo = false
        box.innerHTML = `
        <img src="../static/img/neySorrindo.jpeg" alt="Neymar sorridente">
        <p>Neymar tá sorrindo</p>
        `
    } else {
        sorrindo = true
        box.innerHTML = `
        <img src="../static/img/neyTriste.jpeg" alt="Neymar triste">
        <p>Ney tá chorando</p>
        `        
    } 

}


