$(document).ready(function () { 
        //2. Получить элемент, к которому необходимо добавить маску
    var form = document.getElementsByClassName('contactForm'), i=0, arr=[], current;
    var phone = document.getElementsByName('phone'), i = 0, arr = [], current;
    $(phone).each(function () {
        $(phone).mask("+9 (999) 999-99-99");
        console.log(phone.length)
    });
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
        var carousel = $('#carouselExampleIndicators'), index = $('.carousel-item.active', carousel).index() + 1;
        $('#result').val(index);
    })
    $('#carousel').on('slid.bs.carousel', function (e) {
        var carousel = $('#carousel'), index = $('.carousel-item.active', carousel).index() + 1;
        $('output[name="slidenumber"]').val(index);
    })
    $(document).ready(function() {
        var margin = 100;
        $("a").click(function() {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top+margin+ "px"
            },
            {
                duration: 1600,
                easing: "swing"
            });
            return false;
        })
    })
});