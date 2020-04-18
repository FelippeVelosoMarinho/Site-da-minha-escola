$('.slider-principal').slick();

$(
    function() {
        $('.js-esconder').hide();

        $('.imagem')
            .mouseover( function() {
                $(this).children() .fadeTo('fast, 0.6');

            })
            .mouseleave( function() {
                $(this).children() .fadeTo('fast, 1');

            });
    }
);

function exibeCategoria(id) {
    $(
        function(){
            $('.grupo-imagens') .hide();
            $('#grupo' + id) .fadeIn();
            $('#Imagemzão' + id) .fadeIn();
            }
        );
}

