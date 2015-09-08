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
  
  jQuery( '.delayed' ).each( function( ) {
    
    //console.log( $(this).data( 'delayed-background-image' ) );
    
    if ( jQuery( this ).is('iframe') ) {
      
      jQuery(this).attr( 'src', jQuery(this).data( 'src' ) );
      
    } else {
      
      jQuery(this).css( 'background-image', 'url(' + jQuery(this).data( 'delayed-background-image' ) + ')' );
    
    }
    
  });



  // fitvids
  
  jQuery( '.entry-content' ).fitVids();

  // Masonry
  
  /*
  jQuery( '.archive .site-main' ).masonry({
    itemSelector: '.post, .widget',
    columnWidth: '.widget:nth-of-type( 1 )',
    percentPosition: true
  });
*/

 } )( this );
