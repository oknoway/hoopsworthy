<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package hoopsworthy
 */

?><!DOCTYPE html>
<!--[if IE 8]><html class="no-js lt-ie9" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 9]><html class="no-js lt-ie10" <?php language_attributes(); ?>><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta http-equiv="X-UA-Compatible" content="IE=10;IE=9;IE=8;IE=7;IE=EDGE,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  
  <meta name="apple-mobile-web-app-title" content="Hoopsworthy" />

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
  <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'hoopsworthy' ); ?></a>

  <header id="masthead" class="site-header" role="banner">
    <div class="container">
    <div class="site-branding">
      <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
      <p class="site-description"><?php bloginfo( 'description' ); ?></p>
    </div><!-- .site-branding -->
  <?php if ( ! dynamic_sidebar( 'Header' ) ) : ?>
  
    <nav id="site-navigation" class="main-navigation" role="navigation">
      <button id="menu-toggle" class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Menu', 'hoopsowrthy' ); ?></button>
      <?php wp_nav_menu( array( 'theme_location' => 'header', 'menu_id' => 'header-menu' ) ); ?>
    </nav><!-- #site-navigation -->
    
  <?php endif; ?>


    </div>
  </header><!-- #masthead -->

  <div id="content" class="site-content">

