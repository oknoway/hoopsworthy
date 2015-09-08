<?php
/**
 * Module for displaying Twitter lists.
 *
 * @package hoopsworthy
 */

$twitter_widget_instance = array(
  'title'        => esc_html__( '#HotNow', 'hoopsworthy' ),
  'width'        => '',
  'height'       => '962',
  'widget-id'    => '640885878991228930',
  'link-color'   => '#f96e5b',
  'border-color' => 'transparent',
  'theme'        => 'light',
  'chrome'       => array(),
  'tweet-limit'  => null,
);

$twitter_widget_args = array(
  'before_widget' => '<div class="widget widget_twitter_timeline">',
  'after_widget'  => '</div>',
  'before_title'  => '<h2 class="widget-title">',
  'after_title'   => '</h2>',
);

the_widget( 'Jetpack_Twitter_Timeline_Widget', $twitter_widget_instance, $twitter_widget_args );

//add_action( 'wp_footer', array( 'Jetpack_Twitter_Timeline_Widget', 'Jetpack_Twitter_Timeline_Widget::library' ) );
