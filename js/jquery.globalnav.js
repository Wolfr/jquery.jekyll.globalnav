/*
  jquery.globalnav
  Provides a way to show a global navigation in an HTML prototype
*/

$(document).ready(function() {

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
  
  // The jwerty jquery plugin is required
  jwerty.key('ctrl+m', function () {
    toggleGlobalNav();
  });

});