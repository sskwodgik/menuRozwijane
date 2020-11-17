$(document).ready(function(){
    $(document).on('click', '.hamburger', function(){
      $('.main-menu').toggleClass('showMenu');
    });

    $(document).on('click', '.main-menu-item a', function(e){
        e.preventDefault();
        
        $('body').fadeOut(2000, function(){
          let link = $(e.target).attr('href');
          window.location.href = link;
        })
      });
  });