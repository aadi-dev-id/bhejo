$(document).ready(function() {
    $('.menu-trigger').click(function(e) {
       toggleMenu();
          
    });
    function toggleMenu() {
        var hidden = $('.left-sidebar');
        if(screen.width<589){
            if($('.left-sidebar').css('left') <= '0'){
                hidden.animate({'left': '0px'},200);
                console.log($('.top-header').width()+"-"+$('.left-sidebar').width());
                $('.top-header').css('width', 'calc(100% - 200px)');  
            }
            else{
                hidden.animate({'left': '-200px'},200);
                $('.top-header').css('width', '100%');
            }
        }
        else{
            hidden.animate({'width': 'toggle'},200);
        }
    }
    // $(window).resize(toggleMenu);
    $('.user-img').click(function(e) {
        var hidden = $('.user-detail-pop-box');
        hidden.animate({'height':"toggle"},100);    
    });
    $('.submenu-toggler').click(function(e) {
        $('.submenu-toggler').find('.submenu-list');
        $(this).find('.fa-chevron-right').first().toggleClass('rotate-270deg');
        $(this).find('.submenu-list').animate({'height': 'toggle'},'fast');   
    });
});