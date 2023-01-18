function tocaSom(IdElementoAudio) {
  document.querySelector(IdElementoAudio).play()

}

//lista das  classes e elementos html
const ListaDeTeclas = document.querySelectorAll('.tecla')


//percorrendo a lista dos elementos com o contador i
for (let i = 0; i <= ListaDeTeclas.length; i++) {

  const tecla = ListaDeTeclas[i] //referenciando a lista com as posições
  const instrumento = tecla.classList[1] // referenciando tecla e a lista classlist[1] com as posições

  const idAudio = `#som_${instrumento}`// referenciando os sons com template string 

  //console.log(idAudio)
  tecla.onclick = function () {
    tocaSom(idAudio)//passando o argumento audio
  };
}

