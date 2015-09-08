<?php
/**
 *  Utility functions.
 *
 * @package WordPress
 * @subpackage Hoopsworthy
 */


if ( ! function_exists( 'get_all_the_terms' ) ):

  /**
   * Get a list of all terms across all taxonomies
   *
   * @param $post (object or ID)
   *
   * @return array of terms
   *
   * @since 0.1.0
   */
  function get_all_the_terms( $post = 0 ) {
    
    $post = get_post( $post );
    
    if ( !$post )
      return false;

    $taxonomies = get_object_taxonomies( $post->post_type, 'objects' );
    
    $output = array();
    
    foreach ( $taxonomies as $taxonomy_slug => $taxonomy ) :
      
      $terms = get_the_terms( $post->ID, $taxonomy_slug );
      
      if ( !empty( $terms ) ) :
        
        foreach ( $terms as $term ) :
          
          $output[] = $term->name;
          
        endforeach;
        
      endif;
      
    endforeach;
    
    return $output;
  }

endif; // get_all_the_terms

if ( ! function_exists( 'get_page_id_by_slug' ) ) :

  /**
   * Quick way to get a page ID from a slug
   *
   * @param $slug
   *
   * @return int
   *
   * @since 0.1.0
   */

  function get_page_id_by_slug( $slug ) {
    $page = get_page_by_path( $slug );
    
    $id = ( !empty($page ) ) ? $page->ID : null;
    
    return $id;
  }
  
endif; // get_page_id_by_slug


if ( ! function_exists( 'get_the_slug' ) ) :

  /**
   * Quick way to get a slug from a post object
   *
   * @param $post
   *
   * @return string
   *
   * @since 0.1.0
   */

  function get_the_slug( $post ) {
    
    if ( $post == null )
      global $post;
    
    $slug = basename( get_permalink( $post ) );

    do_action('before_slug', $slug);

    $slug = apply_filters('slug_filter', $slug);

    do_action('after_slug', $slug);
    
    return $slug;
  }
  
endif; // get_the_slug


if ( ! function_exists( 'bg_img_styles' ) ) :
  /**
   * Get a block of responsive background image styles, scoped to the post id.
   *
   * @param $id - post id
   *
   * @param $sizes - array of registered image sizes as strings, passed directly to get_attachment_sizes
   *
   * @return string
   *
   * @since 0.1.0
   */

  function bg_img_styles( $id, $sizes ) {
  
    // get images
    $images = get_attachment_sizes( get_post_thumbnail_id( $id ), $sizes );

    // determine largest size available
    $widths = wp_list_pluck( $images, '1' );
    $biggest = array_search( max( $widths ), $widths );
  
    $style = '<style>' . "\n";

    foreach ( $images as $size=>$image ) :
    
      $media_feature = ( $size == $biggest ) ? 'min-width' : 'max-width';
    
      $style .= '@media screen and (' . $media_feature . ':' . $images[ $size ][1] . 'px) {' . "\n";

      $style .= '#post-' . $id . ' { background-image:url(' . $images[ $size ][0] . '); }' . "\n";

      $style .= '}' . "\n";

    endforeach;

    $style .= '</style>' . "\n";
    
    return $style;

  }
endif; // bg_img_styles
