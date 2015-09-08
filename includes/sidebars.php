<?php
/**
 *  Register Sidebars.
 *
 * @package WordPress
 * @subpackage hoopsworthy Music News
 */


/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function hoopsworthy_widgets_init() {
  register_sidebar( array(
    'name'          => esc_html__( 'Header', 'hoopsworthy' ),
    'id'            => 'header',
    'description'   => '',
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget'  => '</div>',
    'before_title'  => '<h5 class="widget-title">',
    'after_title'   => '</h5>',
  ) );
  
  register_sidebar( array(
    'name'          => esc_html__( 'Footer', 'hoopsworthy' ),
    'id'            => 'footer',
    'description'   => '',
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget'  => '</div>',
    'before_title'  => '<h5 class="widget-title">',
    'after_title'   => '</h5>',
  ) );
  
  register_sidebar( array(
    'name'          => esc_html__( 'Home', 'hoopsworthy' ),
    'id'            => 'home-sidebar',
    'description'   => 'On the home page, for Twitter Timeline only.',
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget'  => '</div>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );
  
  register_sidebar( array(
    'name'          => esc_html__( 'Posts Sidebar', 'hoopsworthy' ),
    'id'            => 'sidebar',
    'description'   => '',
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget'  => '</div>',
    'before_title'  => '<h5 class="widget-title">',
    'after_title'   => '</h5>',
  ) );
}
add_action( 'widgets_init', 'hoopsworthy_widgets_init' );
