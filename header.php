<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package hoopsworthy
 */

?><!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
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
    <div class="site-branding">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><span class="hoopsworthy-logo"><?php echo file_get_contents( get_template_directory() . '/img/hoopsworthy_logo_tm.svg' ); ?></span></a>
      <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
      <p class="site-description">Presented by the<span>Naismith Memorial <br>Basketball Hall of Fame</span></p>
    </div><!-- .site-branding -->
    <div class="site-navigation">
      <div class="container">
      <?php if ( ! dynamic_sidebar( 'Header' ) ) : ?>
  
        <nav id="site-navigation" class="main-navigation" role="navigation">
          <button id="menu-toggle" class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Menu', 'hoopsworthy' ); ?></button>
          <?php wp_nav_menu( array( 'theme_location' => 'header', 'menu_id' => 'header-menu' ) ); ?>
        </nav><!-- #site-navigation -->
    
      <?php endif; ?>
      </div>
    </div>
  </header><!-- #masthead -->

  <div id="content" class="site-content">

