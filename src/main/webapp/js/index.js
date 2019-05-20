window.onload = function() {
	initData(a);

	if (a.topImage.length > 1){
        new Swiper('#swiper_top', {
            loop: false, //循环 最后面一个往后面滑动会滑到第一个
            autoplay: 4000,
            //指示器
            pagination: '#swiper_top_position',
            paginationClickable: true,
            autoplayDisableOnInteraction: false
        });
    }else{
        new Swiper('#swiper_top', {
            loop: false, //循环 最后面一个往后面滑动会滑到第一个
            autoplay: 4000,
            //指示器
            autoplayDisableOnInteraction: false
        });
    }

	var mySwiper = new Swiper('#swiper01', {
		loop: false, //循环 最后面一个往后面滑动会滑到第一个
		// autoplay: 4000,
		autoplayDisableOnInteraction: false,
		onSlideChangeStart: function(swiper) {
			$(".swiper-contrast").children(".fl").removeClass("current");
			$(".swiper-contrast").children(".fl").eq(swiper.realIndex).addClass("current");
		}
	});
	new Swiper('#swiper02', {
		loop: false, //循环 最后面一个往后面滑动会滑到第一个
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper_position002',
		paginationClickable: true,
	});
	new Swiper('#swiper_map_box', {
		loop: false, //循环 最后面一个往后面滑动会滑到第一个
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper_position_map',
		paginationClickable: true,
		direction: 'vertical'
	});

	$(".swiper-contrast .fl").click(function() {
		$(".swiper-contrast").children(".fl").removeClass("current");
		var index = $(this).index();
		console.log(index)
		mySwiper.slideTo(index + 1, 1000, false);
		$(".swiper-contrast").children(".fl").eq(index).addClass("current");
	});

	var timeqrCode = null;

	$("#qrCodeAnchor").hover(function() {
		$("#qrCode").show();
	}, function() {
		timeqrCode = setTimeout(function() {
			$("#qrCode").hide();
		}, 100);
	});

	$("#qrCode").hover(function() {
		clearTimeout(timeqrCode);
		$("#qrCode").show();
	}, function() {
		$("#qrCode").hide();
	});

	var timeWx = null;
	$(".item_wx").hover(function() {
		$(".item_wx_detail_box").show();
	}, function() {
		timeWx = setTimeout(function() {
			$(".item_wx_detail_box").hide();
		}, 100);
	});

	$(".item_wx_detail_box").hover(function() {
		clearTimeout(timeWx);
		$(".item_wx_detail_box").show();
	}, function() {
		$(".item_wx_detail_box").hide();
	});

	var timePhone = null;
	$(".item_phone").hover(function() {
		$(".item_phone_detail_box").show();
	}, function() {
		timePhone = setTimeout(function() {
			$(".item_phone_detail_box").hide();
		}, 100);
	});

	$(".item_phone_detail_box").hover(function() {
		clearTimeout(timePhone);
		$(".item_phone_detail_box").show();
	}, function() {
		$(".item_phone_detail_box").hide();
	});

	// 设置地图标签
	var markers = [{
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
			isSelect: true
		},{
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
		},{
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
		},{
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
		},{
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
		},{
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
		},{
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
		}
	];
	var iframe = window.frames["map_frame"];
	iframe.setMarkers(markers);
};

function initData(res) {
	//头部banner
	var banner_list = res.topImage;
	for(var i = 0, len = banner_list.length; i < len; i++) {
		if(!banner_list.hasOwnProperty(i)) continue;

		var content = document.getElementById("swiper_top1");
		var div = creElement("div", "swiper-slide", "");
		var img = creElement("img", "", "");
		img.setAttribute("src", banner_list[i].imageUrl);
		img.setAttribute("alt", banner_list[i].text);
		img.setAttribute("index", i);
		img.onclick = function() {
			var p = this.getAttribute("index");
			if(banner_list[p].clickUrl) {
				window.location.href = banner_list[p].clickUrl;
			}
		};
		div.appendChild(img);
		content.appendChild(div);
	}

	// var arrSwiper002 = d.life_format;
	// for(var i = 0, len = arrSwiper002.length; i < len; i++) {
	// 	var content = document.getElementById("swiper002");
	// 	var div = creElement("div", "swiper-slide", "");
	// 	var img = creElement("img", "", "");
	// 	img.setAttribute("src", arrSwiper002[i].img_url);
	// 	img.setAttribute("index", i);
	// 	img.onclick = function() {
	// 		var posi = this.getAttribute("index");
	// 		if(arrSwiper002[posi].clickUrl.length > 0) {
	// 			window.location.href = arrSwiper002[posi].clickUrl;
	// 		}
	// 	};
	// 	div.appendChild(img);
	// 	content.appendChild(div);
	// }
}

function creElement(name, className, idName) {
	var element = document.createElement(name);
	if(className.length > 0) {
		element.setAttribute("class", className);
	}
	if(idName.length > 0) {
		element.setAttribute("id", idName);
	}
	return element;
}