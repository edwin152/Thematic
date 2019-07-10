window.onload = function () {
    openSwiper();
};

function openSwiper() {
    new Swiper('#hit_swipe', {
        loop: true,
        autoplay: 7000,
        pagination: '#hit_swipe_indicator',
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + ' hit_indicator_bullet">' + (index + 1) + '</span>';
        }
    });
}