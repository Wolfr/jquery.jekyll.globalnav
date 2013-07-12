/*
  jquery.globalnav
  Provides a way to show a global navigation in an HTML prototype
  Depencencies: jquery.cookie.js and jquery (from 1.x)
*/

$(function() {

  function toggleGlobalNav() {
    $('#global-nav, .page-states-menu').toggle();

    if ($('#global-nav').is(':visible')) {
      $.cookie('nav_visible_save', 'true');
      $('html').addClass('global-nav-active');
    } else {
      $.cookie('nav_visible_save', 'false');
      $('html').removeClass('global-nav-active');
    }
  }

  if ($.cookie('nav_visible_save') == "true") {
    $('#global-nav, .page-states-menu').show();
    $('html').addClass('global-nav-active');
  } else {
    $('#global-nav, .page-states-menu').hide();
    $('html').removeClass('global-nav-active');
  }
  
  // When ctrl+m is pressed toggle the nav
  map = {};
  onkeydown=onkeyup=function(e){
    e=e||event//to deal with IE
    map[e.keyCode]=e.type=='keydown'?true:false
    if(map[17]&&map[77]){//CTRL+M
      toggleGlobalNav();
    }
  }

});
