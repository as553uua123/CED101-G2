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
        $("#mine_profile").css({
            display: "flex",
        });
    });

    $("input").on("keyup blur", function () {
        $("label").on("keyup").addClass("active");
        // $("label").on("blur").removeClass("active");
    });
    // $(".form")
    //     .find("input, textarea")
    //     .on("keyup blur focus", function (e) {
    //         var $this = $(this),
    //             label = $this.prev("label");
    //     if (e.type === "keyup") {
    //         if ($this.val() === "") {
    //             label.removeClass("active highlight");
    //         } else {
    //             label.addClass("active highlight");
    //         }
    //     } else if (e.type === "blur") {
    //         if ($this.val() === "") {
    //             label.removeClass("active highlight");
    //         } else {
    //             label.removeClass("highlight");
    //         }
    //     } else if (e.type === "focus") {
    //         if ($this.val() === "") {
    //             label.removeClass("highlight");
    //         } else if ($this.val() !== "") {
    //             label.addClass("highlight");
    //         }
    //     }
    // });
});
