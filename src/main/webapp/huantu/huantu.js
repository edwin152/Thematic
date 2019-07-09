// 地图标签
let markers = [{
    content: "上海华旭大厦",
    title: "上海华旭大厦",
    imageOffset: {
        width: 0,
        height: 3
    },
    position: {
        lng: 121.482498,
        lat: 31.239711
    },
    isSelect: false
}, {
    content: "上海银行大厦",
    title: "上海银行大厦",
    imageOffset: {
        width: 0,
        height: 3
    },
    position: {
        lng: 121.511197,
        lat: 31.245565
    },
    isSelect: false
}, {
    content: "上海招商局大厦",
    title: "上海招商局大厦",
    imageOffset: {
        width: 0,
        height: 3
    },
    position: {
        lng: 121.515601,
        lat: 31.243237
    },
    isSelect: false
}, {
    content: "上海歌斐中心",
    title: "上海歌斐中心",
    imageOffset: {
        width: 0,
        height: 3
    },
    position: {
        lng: 121.488634,
        lat: 31.203419
    },
    isSelect: false
}, {
    content: "上海白玉兰广场",
    title: "上海白玉兰广场",
    imageOffset: {
        width: 0,
        height: 3
    },
    position: {
        lng: 121.504774,
        lat: 31.254569
    },
    isSelect: false
}, {
    content: "上海雅居乐广场",
    title: "上海雅居乐广场",
    imageOffset: {
        width: 0,
        height: 3
    },
    position: {
        lng: 121.479608,
        lat: 31.241942
    },
    isSelect: false
}, {
    content: "上海震旦国际大楼",
    title: "上海震旦国际大楼",
    imageOffset: {
        width: 0,
        height: 3
    },
    position: {
        lng: 121.506166,
        lat: 31.240324
    },
    isSelect: false
}];

window.onload = function () {
    let iframe = window.frames["map_frame"];
    iframe.setMarkers(markers);
    openSwiper();
};

function openSwiper() {
    new Swiper('#swiper_top_info', {
        loop: true,
        autoplay: 7000,
        pagination: '#swiper_position',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
    });
}