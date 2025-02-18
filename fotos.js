'use strict';

async function Imagemm() {
    const url = `https://picsum.photos/v2/list?page=2&limit=50`;
    
    const response = await fetch(url);
    const data = await response.json();
    
   
    return data;
}

function criarImagem(link) {
    const galeria = document.getElementById('galeria');
    const novaIMG = document.createElement('img');
    novaIMG.src = link;

    galeria.appendChild(novaIMG);
}

async function preencherGaleria() {
    const fotos = await Imagemm(); 
    const galeria = document.getElementById('galeria');
    galeria.replaceChildren('');
   
    fotos.forEach(foto => criarImagem(foto.download_url));
    console.log(fotos);
}


preencherGaleria();


