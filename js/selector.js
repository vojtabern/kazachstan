$(document).ready(function(){

    $("#ano").click(function(){
        $(".button").hide();
    });
    $("#ne").click(function(){
        $(".button").hide();
        $(".zmiz").hide();
    });

    $("#zlo").click(function(){
        $('.kokos').css('transform', 'scaleY(-1)');
        $('.card-body').css('transform', 'scaleY(-1)');
        $('h1').css('transform', 'scaleY(-1)');
    });
});