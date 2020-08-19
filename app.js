$(document).ready(function () {
  $(window).scroll(function () { 
      if (window.pageYOffset >= 200) {
          $('.nav').addClass('padd');
          
      } else {
          $('.nav').removeClass('padd');
      }
  });
   
    $('img.loogo').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },400);
        
    });
    $('button.hear').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi2').offset().top -100
        },400);});

        $('.menu-1').click(function (e) { 
            e.preventDefault();
            $('.menu').removeClass('active');
            $(this).addClass('active');
            $('html').animate({
                scrollTop: 0
            },400);
        });
        
        
        $('.menu-2').click(function (e) { 
            e.preventDefault();
            $('.menu').removeClass('active');
            $(this).addClass('active');
            $('html').animate({
                scrollTop: $('.khoi2').offset().top -100
        },400);});
       
        $('.menu-3').click(function (e) { 
            e.preventDefault();
            $('.menu').removeClass('active');
            $(this).addClass('active');
            $('html').animate({
                scrollTop: $('.khoi3').offset().top -90
            },400);});
        
        $('.menu-4').click(function (e) { 
            e.preventDefault();
            $('.menu').removeClass('active');
            $(this).addClass('active');
            $('html').animate({
                scrollTop: $('.khoi5').offset().top -90
            },400);
        });
$(window).scroll(function () { 
    var VTw = window.pageYOffset
    VT1 = $('header').offset().top;
    VT2 = $('.khoi2').offset().top -120;
    VT3 = $('.khoi3').offset().top -100;
    VT5 = $('.khoi5').offset().top -100;
    if (VTw < VT2) {
        $('.menu').removeClass('active');
        $('.menu-1').addClass('active');
        
    } else if (VTw<VT3) {
        $('.menu').removeClass('active');
        $('.menu-2').addClass('active');
        
    } else if (VTw<VT5) {
        $('.menu').removeClass('active');
        $('.menu-3').addClass('active');
        
    } else {
        $('.menu').removeClass('active');
        $('.menu-4').addClass('active');
    }

    
});
        
        $('button.submit').click(function (e) { 
            e.preventDefault();
            $('.lalala').removeClass('hide');
            
        });
        $('button.clo').click(function (e) { 
            e.preventDefault();
            $('.lalala').addClass('hide');
            
        });
        $('i.icon-1').click(function (e) { 
            e.preventDefault();
            $('i.icon-2').removeClass('hide');
            $('.happi').removeClass('hide');
            $(this).addClass('hide');
            $('.flex-1').addClass('hide');

            
        });
    $('i.icon-2').click(function (e) { 
        e.preventDefault();
        
        $('.happi').addClass('flex-2');
        
    });
    $('button.motalayeranhsau').click(function (e) { 
        e.preventDefault();
      $('.lalala1').removeClass('hide');
        
    });
    $('button.clo1').click(function (e) { 
        e.preventDefault();
        $('.lalala1').addClass('hide');
    });

    $(window).scroll(function () { 
        if (window.pageYOffset > 200) {
            $('.nut-back-to-top').fadeIn(400);
        } else {
            $('.nut-back-to-top').fadeOut(400);
        }
        
    });
    $('.nut-back-to-top').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: 0
        },400);
        
    });
    $('button.submit').click(function (e) { 
        e.preventDefault();
        $('textarea').val('');
        $('input').val('');

    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('p.npa').removeClass('dolay');
            $('p.npa').addClass('len-xuong1');
        } else {
            $('p.npa').removeClass('len-xuong1');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-tron-tron').addClass('white');
            $('.khoi-tron-tron').addClass('rich');
            $('.khoi-tron-tron').addClass('dolay0');
           

        } else {
          
            $('.khoi-tron-tron').removeClass('rich');
            $('.khoi-tron-tron').removeClass('white');
            $('.khoi-tron-tron').removeClass('dolay0');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-tron-tron1').addClass('white');
            $('.khoi-tron-tron1').addClass('rich1');
            $('.khoi-tron-tron1').addClass('dolay1');

        } else {
            $('.khoi-tron-tron1').removeClass('dolay1');
            $('.khoi-tron-tron1').removeClass('rich1');
            $('.khoi-tron-tron1').removeClass('white');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-tron-tron2').addClass('white');
            $('.khoi-tron-tron2').addClass('rich2');
            $('.khoi-tron-tron2').addClass('dolay3');

        } else {
            $('.khoi-tron-tron2').removeClass('dolay3');
            $('.khoi-tron-tron2').removeClass('rich2');
            $('.khoi-tron-tron2').removeClass('white');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('p.miche').addClass('dichuyenmiche');
        } else {
            
            $('p.miche').removeClass('dichuyenmiche');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-vuong').addClass('khoi-vuong-dch');
            $('.khoi-vuong').addClass('white');
        } else {
            
            $('.khoi-vuong').removeClass('khoi-vuong-dch');
            $('.khoi-vuong').removeClass('white');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-sieu-tron1').addClass('hoover1');
            $('.khoi-sieu-tron1').addClass('white');
        } else {
            
            $('.khoi-sieu-tron1').removeClass('hoover1');
            $('.khoi-sieu-tron1').removeClass('white');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-sieu-tron2').addClass('hoover2');
            $('.khoi-sieu-tron2').addClass('white');
        } else {
            
            $('.khoi-sieu-tron2').removeClass('hoover2');
            $('.khoi-sieu-tron2').removeClass('white');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-sieu-tron3').addClass('hoover3');
            $('.khoi-sieu-tron3').addClass('white');
        } else {
            
            $('.khoi-sieu-tron3').removeClass('hoover3');
            $('.khoi-sieu-tron3').removeClass('white');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.khoi-j').addClass('khoi-jj');
            $('.khoi-j').addClass('white');
        } else {
            
            $('.khoi-j').removeClass('khoi-jj');
            $('.khoi-j').removeClass('white');
        }
    });
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.ou').addClass('leen');
          
        } else {
            
            
            $('.ou').removeClass('leen');
        }
    });
});