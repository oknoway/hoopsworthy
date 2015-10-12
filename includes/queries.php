<?php
/**
 * hoopsworthy Special Queries
 *
 * @package hoopsworthy
 */

if ( ! function_exists( 'home_featured_posts' ) ) :
  /**
   * Return X posts.
   *
   * @uses WP_Query
   *
   * @since 0.1.0
   */
   
  function home_featured_posts() {
    
    $home_featured_posts_args = array(
      
    );
    
    return new WP_Query( $home_featured_posts_args );

  }

endif; //home_featured_posts


if ( ! function_exists( 'get_related_posts' ) ) :
  /**
   * Get posts related by categories.
   *
   * @uses WP_Query
   *
   * @return $wp_query
   *
   * @since 0.1.0
   */
   
  function get_related_posts( ) {
    global $post;
    
    $exclude[] = $post->ID;
    
    $related_posts_args = array();
    
    /*
    $tags = get_the_terms( $post->ID, 'post_tag' );
        
    if ( $tags && ! is_wp_error( $tags ) ) : 
    
      $related_posts_args = array(
        'posts_per_page' => 3,
        'post__not_in' => $exclude,
        'meta_query' => array(
          array(
            'key' => '_thumbnail_ID',
            'value' => '',
            'compare' => '!=',
          ),
        ),
        'tax_query' => array(
          'relation' => 'OR',
          
          array(
            'taxonomy' => 'tag',
            'terms' => wp_list_pluck( $tags, 'slug' ),
          ),
          array(
            'taxonomy' => 'post_format',
            'field'    => 'slug',
            'terms'    => $post->post_format,
          )
        ),
      );


    else : 
      
      $related_posts_args = array(
        'posts_per_page' => 3,
        'post__not_in' => $exclude,
      );
      
    
    endif;
    */
    
    $related_posts_args = array(
      'posts_per_page' => 3,
      'post__not_in' => $exclude,
      'meta_query' => array(
        array(
          'key' => '_thumbnail_ID',
          'value' => '',
          'compare' => '!=',
        ),
      ),
    );
    
    
    $related_posts = new WP_Query( $related_posts_args );
    
    
    return $related_posts;
  }


endif; //get_related_posts
