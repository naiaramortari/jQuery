$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botaoCancelar'))

    document.querySelector('header button').addEventListener('click', function(e){

    })

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        const enderecoNovaImagem = $('imagemNova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`<div class="imagemLink">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver tamanho em imagem real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        e.preventDefault();
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('imagemNova').val('');
    })
})