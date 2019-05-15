$(document).ready(function () { 
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
        var carousel = $('#carouselExampleIndicators'), index = $('.carousel-item.active', carousel).index() + 1;
        $('#result').val(index);
    });

    $('#carousel').on('slid.bs.carousel', function (e) {
        var carousel = $('#carousel'), 
        index = $('.carousel-item.active', carousel).index() + 1;
        $('output[name="slidenumber"]').val(index);
        audio.pause();
        audio1.pause();
        audio2.pause();
    });

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
        return false;
    });
    
    var audio = $("#audio")[0];
    $("#play1").click(function () {
        $("#play1").css("display", "none");
        $("#play2").css("display", "block");
        audio.play();
    });$("#play2").click(function () {
        $("#play2").css("display", "none");
        $("#play1").css("display", "block");
        audio.pause();
    });
    var audio1 = $("#audio1")[0];
    $("#play3").click(function () {
        $("#play3").css("display", "none");
        $("#play4").css("display", "block");
        audio1.play();
    });
    $("#play4").click(function () {
        $("#play4").css("display", "none");
        $("#play3").css("display", "block");
        audio1.pause();
    });
    var audio2 = $("#audio2")[0];
    $("#play5").click(function () {
        $("#play5").css("display", "none");
        $("#play6").css("display", "block");
        audio2.play();
    });
    $("#play6").click(function () {
        $("#play6").css("display", "none");
        $("#play5").css("display", "block");
        audio2.pause();
    });
    $('#myCollapse').on('shown.bs.collapse', function (e) {
        $("#button-tarif1").html('СКРЫТЬ ВСЕ ТАРИФЫ');
    });
    $('#myCollapse').on('hidden.bs.collapse', function (e) {
        $("#button-tarif1").html('ПОСМОТРЕТЬ ВСЕ ТАРИФЫ');
    })
});
$(document).ready(function () {
    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        threshold: 1000,
        effect: 'fadeIn',
        visibleOnly: false,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        },
        youtubeLoader: function (element) {
            var url = 'https://www.youtube.com/embed/LpjpF51Q9B4',  
                frame = $('<iframe />')

            frame.attr('src', url)
            frame.attr('width', '100%')
            frame.attr('height', 450)
            frame.attr('frameborder', 0)
            frame.attr('allow', "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture")
            frame.attr('allowfullscreen', 'allowfullscreen');
            element.append(frame).load();
        },
    });
});
$(document).ready(function () {
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 1000) {
            $('#button-up').fadeIn(
            );
        } else {
            $('#button-up').fadeOut(
            );
        }
    });

    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

});