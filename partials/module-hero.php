<?php
/**
 * The module for displaying hero images.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package hoopsworthy
 */
  
$img_id = get_post_thumbnail_id();

$img['hero'] = wp_get_attachment_image_src( get_post_thumbnail_id(), 'hero' ); 
$img['hero-md'] = wp_get_attachment_image_src( get_post_thumbnail_id(), 'hero-md' ); 
$img['hero-sm'] = wp_get_attachment_image_src( get_post_thumbnail_id(), 'hero-sm' ); 

?>
  <figure class="hero">
    <span class="fake-img delayed" data-delayed-background-image="<?php echo $img['hero'][0]; ?>"><noscript><img src="<?php echo $img['hero'][0]; ?>" width="<?php echo $img['hero'][1]; ?>" height="<?php echo $img['hero'][2]; ?>" alt="" class="visuallyhidden" /></noscript></span>
  </figure>
