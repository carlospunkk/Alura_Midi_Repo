function tocaSom(SeletorAudio) {
  const elemento = document.querySelector(SeletorAudio)

  // condicional para verificação tas tags corretas (erros)
  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log("o elemento não encontrado ou seletor inválido")
  }
}





//lista das classes com mesmo nome(.tecla) tags e elementos html
const ListaDeTeclas = document.querySelectorAll('.tecla')

//percorrendo a lista dos elementos com o contador i 
for (let i = 0; i <= ListaDeTeclas.length; i++) {

  const tecla = ListaDeTeclas[i] //referenciando a lista com as posições
  const instrumento = tecla.classList[1] // referenciando o som do instrumento com a classe(ativa[1]) na posição 1
  const idAudio = `#som_${instrumento}`// referenciando os IDS sons com template string 

  // ao clicar na tecla chame a função tocaSom com seu parametro
  tecla.onclick = function () {
    tocaSom(idAudio)//passando o argumento (idAudio) para o parâmetro (SeletorIdAudio)
  }

  // utilizando o método de presionar o botão chame a função tecla.classList add classe ativa 

  tecla.onkeydown = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
    //console.log(tecla)
  }

}


