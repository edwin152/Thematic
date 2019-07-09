$("#header").load("_header.html");

$("#qrCodeAnchor").hover(function () {

    $('#qrCode').removeClass('hide');

}, function () {

    $('#qrCode').addClass('hide');
});

$(".header .city-pull-down").click(function (event) {
    $('.city-pull-down .arrow-icon').toggle();
    $(".header .city-pull-down .city-select").stop(true).slideToggle();
    if (window.event) {
        window.event.cancelBubble = true;
    } else {
        event.stopPropagation();
    }
});

$('.btn-search').click(function () {

    let strHref = $('#public_form_search').attr('action');
    let strSearch = document.getElementById("kw-search").value;
    strHref = strHref.replace(/.html/, "");
    if (strHref.substr(strHref.length - 1, 1) === '/') {
        strHref = strHref.substring(0, strHref.length - 1);
    }
    if (strSearch) {
        strHref += "?kw=" + encodeURIComponent(document.getElementById("kw-search").value);
    }
    window.location.href = strHref + '';
});

//回车搜索
$("body").delegate("#kw-search", "keyup", function (e) {
    if (e.keyCode === 13) {
        $(".btn-search").click();
        return false;
    }
});

$(window).scroll(function () {
    pageScroll();
});

function pageScroll() {
    let scroll = $(window).scrollTop();
    if (scroll < 40) {
        $('.header').addClass('headerPosition');
        $('#siteMapID').removeClass('hide');
    } else {
        $('.header').removeClass('headerPosition');
        $('#siteMapID').addClass('hide');
    }
}