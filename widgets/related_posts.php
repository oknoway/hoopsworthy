<?php 
/**
 * Related Posts Widget
 */
 
class Related_Posts extends WP_Widget {
   
  function Related_Posts() {
    $widget_ops = array( 'classname' => 'widget_related_posts', 'description' => 'Show three posts from similar taxonomies' );
    parent::__construct( 'Related_Posts', __('Related Posts', 'hoopsworthy'), $widget_ops );
  }

  public function widget( $args, $instance ) {
    // output
    extract( $args );
    
    $title = apply_filters( 'widget_title', $instance['title'] );
    
    $relatedPosts = get_related_posts();
    
    if ( empty( $relatedPosts ) || is_wp_error( $relatedPosts ) )
      return;
    
    if ( empty( $title ) )
      $title = 'Related Posts';
    
    echo $before_widget;
    
    if ( $title ) :
      echo $before_title;
      
      echo $title;
      
      echo $after_title;
      
    endif; 
    
    if ( $relatedPosts->have_posts() ) : ?>
    <ul class="related-posts">
    <?php while( $relatedPosts->have_posts() ) : $relatedPosts->the_post(); ?>
      <li class="related-post">
        
        <?php get_template_part( 'partials/content', 'related' ); ?>
  
      </li>
    <?php endwhile;
    wp_reset_postdata(); ?>
    </ul>
    <?php endif;
    
    echo $after_widget;
  }
 
  public function form( $instance ) {
    // admin form options

    $title = isset( $instance[ 'title' ] ) ? esc_attr( $instance[ 'title' ] ) : 'Related Posts';
    ?>
    <p>
      <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
      <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
    </p>
    <?php 
  }
 
  public function update( $new_instance, $old_instance ) {
    // save options
    
    $instance = array();
    $instance[ 'title' ] = strip_tags( $new_instance[ 'title' ] );
    
    return $instance;
  }
}

add_action( 'widgets_init', function() {
 register_widget( 'Related_Posts' );
});

?>