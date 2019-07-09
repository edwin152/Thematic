$("#footer").load("_footer.html");

let last_data_sn = "0";

function tagClick(v) {
    let data_sn = v.getAttribute("data-sn");
    $(".flink-item-" + last_data_sn).addClass("hide");
    $(".flink-item-" + data_sn).removeClass("hide");
    $("#ftitle-" + last_data_sn).removeClass("current");
    $("#ftitle-" + data_sn).addClass("current");
    last_data_sn = data_sn;
}