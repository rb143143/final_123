$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.sticky-top').css('top', '0px');
    } else {
        $('.sticky-top').css('top', '-100px');
    }
});

setTimeout(function(){
 $('.loader_bg').fadeToggle();
 }, 5000);
    