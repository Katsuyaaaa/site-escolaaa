document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
      botaoDeAcessibilidade.classList.toggle('rotacao-botao');
      opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

      const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
      botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })
   
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste')

    let tamanhAtualFonte = 1

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhAtualFonte}rem`
    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhAtualFonte}rem`
    })

    alternaContraste.addEventListener('click', function(){
        document.documentElement.classList.toggle('alto-contraste')
        console.log("Modo alto contraste:", document.documentElement.classList.contains('alto-contraste'))
    })

})

ScrollReveal().reveal('#inicio', { delay: 500 });