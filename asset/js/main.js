$(document).ready(function() {
    $("#side_bar_toggle").click(function() {
        $(".side_menu_backdrop").show();
        $(".side_menu").show();
    });

    $(".side_menu_backdrop").click(function() {
        $(".side_menu_backdrop").hide();
        $(".side_menu").hide();
    });

    // $(document).mouseup(function(e) {
    //     var container = $(".side_menu_active");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         container.hide();
    //         $(".side_menu_backdrop").hide();
    //     }
    // });
});
