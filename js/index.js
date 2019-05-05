$(document).ready(function () { 
    $(function () {
        //2. Получить элемент, к которому необходимо добавить маску
        $("#phone").mask("+7 (999) 999-99-99");
    });
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
        var carousel = $('#carouselExampleIndicators'), index = $('.carousel-item.active', carousel).index() + 1;
        $('#result').val(index);
    })
    $('#carousel').on('slid.bs.carousel', function (e) {
        var carousel = $('#carousel'), index = $('.carousel-item.active', carousel).index() + 1;
        $('output[name="slidenumber"]').val(index);
    })
});