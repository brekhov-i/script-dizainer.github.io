$(document).ready(function () { 
    $(function () {
        //2. Получить элемент, к которому необходимо добавить маску
        $("#phone").mask("+7 (999) 999-99-99");
    });
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
        var carousel = $('#carouselExampleIndicators'), index = $('.carousel-item.active', carousel).index() + 1;
        $('#result').val(index);
    })
});