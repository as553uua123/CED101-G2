$(document).ready(function () {
    new TwCitySelector();
    $(".tour").click(function () {
        $("#tour").show();
        $("#mine_fav").hide();
        $("#mine_order").hide();
        $("#mine_article").hide();
        $("#mine_profile").hide();
    });
    $(".mine_fav").click(function () {
        $("#tour").hide();
        $("#mine_fav").show();
        $("#mine_order").hide();
        $("#mine_article").hide();
        $("#mine_profile").hide();
    });
    $(".mine_order").click(function () {
        $("#tour").hide();
        $("#mine_fav").hide();
        $("#mine_order").show();
        $("#mine_article").hide();
        $("#mine_profile").hide();
    });
    $(".mine_article").click(function () {
        $("#tour").hide();
        $("#mine_fav").hide();
        $("#mine_order").hide();
        $("#mine_article").show();
        $("#mine_profile").hide();
    });
    $(".mine_profile").click(function () {
        $("#tour").hide();
        $("#mine_fav").hide();
        $("#mine_order").hide();
        $("#mine_article").hide();
        $("#mine_profile").show();
    });
});
