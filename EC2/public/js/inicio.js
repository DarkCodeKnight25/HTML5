$(document).ready(function(){
    $("movile-menu").on("click",function(){
        $(this).toggleClass("is-active");
        $(".nav-items").toggleClass("active");
    });

    $("#search-icon").click(function(){
        $(this).toggleClass("active");
    });
});