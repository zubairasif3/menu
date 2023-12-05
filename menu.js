
$(".popup_menu_button").click(function(){
    if ($(this).hasClass("popup_menu_button--toggled")) {
        $(".nav_items-content-tab").removeClass("show");
        $(".nav_items-content").removeClass("active");
        $(".menu-item").removeClass("active");
        $(".mobile-back-menu").removeClass("active");
        $(".popup_menu").removeClass("item-active");
    }
    $(this).toggleClass("popup_menu_button--hoverable");
    $(this).toggleClass("popup_menu_button--toggled");
    $(".popup_menu").toggleClass("is-open");
})
$(".item_conent_ancher").click(function() {
    $(".menu-item").removeClass("active");
    $(".popup_menu").addClass("item-active");
    $(".nav_items-content").removeClass("active");
    var dataTarget = $(this).attr("data-target");
    $(dataTarget).addClass("active");
    $(".mobile-back-menu").addClass("active");
    $(".nav_items-content-tab").addClass("show");
    $($(this).closest(".menu-item")).addClass("active");
    var ancher_text = $(this).text();
    $(".mobile-back-menu .mobile_item-heading").text(ancher_text);
})
$("#back-to-menu-ancher").click(function() {
    $(".popup_menu").removeClass("item-active");
    $(".menu-item").removeClass("active");
    $(".nav_items-content").removeClass("active");
    $(".nav_items-content-tab").removeClass("show");
    $(".mobile-back-menu").removeClass("active");
})

// about staff member bio
$(".about-staff-member").click(function(){
    if ($(this).hasClass("is-expanded")) {
        $(".about-staff-content").removeClass("has-active");
        $(".about-staff-member").removeClass("is-expanded");
    }else{
        $(".about-staff-member").removeClass("is-expanded");
        $(".about-staff-content").addClass("has-active");
        $(this).addClass("is-expanded");
    }
})