/**
* Hoopsworthy
* http://www.hoopsworthy.com
*
* Copyright (c) 2015 Nate Bedortha @ OK/No Way
*/

 ( function( window, undefined ) {
  'use strict';

  /**
   * MQ Class
   */
  if( Modernizr.mq( 'only all' ) ) {
    jQuery( 'html' ).addClass( 'mq' );
  } else {
    jQuery( 'html' ).addClass( 'no-mq' );
  }

  /**
   * Lazy Loading
   */
  
  var loadDelayediFrame = function( el ) {
    
    var src = jQuery( el ).data( 'src' );
  
    jQuery( el ).attr( 'src', src );
  }
  
  var loadDelayedImg = function( el ) {

    var bgImg = jQuery( el ).data( 'delayed-background-image' );

    jQuery( el ).css( 'background-image', 'url(' + bgImg + ')' );
  }
  
  
  jQuery( '.delayed' ).each( function( ) {
    
    var el = jQuery( this );
    
    if ( jQuery( this ).is('iframe') ) {
      
      setTimeout( loadDelayediFrame( el ), 50 );
      
    } else {
      
      setTimeout( loadDelayedImg( el ), 50 );
    
    }
  });


  // fitvids
  
  jQuery( '.entry-content, .entry-media' ).fitVids();

  // Masonry
  
  /*
  jQuery( '.archive .site-main' ).masonry({
    itemSelector: '.post, .widget',
    columnWidth: '.widget:nth-of-type( 1 )',
    percentPosition: true
  });
*/

 } )( this );
