<?php
/**
 * Template part for displaying posts.
 *
 * @package hoopsworthy
 */

?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <?php the_title( sprintf( '<h1 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>
    
    <?php if ( get_field( 'subhead' ) ) : ?>
      <h5 class="entry-subhead"><?php the_field( 'subhead' ); ?></h5>
    <?php endif; ?>
    
  </header><!-- .entry-header -->

  <div class="entry-content">
    <?php
    
      // images
      if ( get_field( 'instagram_url' ) ) :
        
        remove_filter( 'the_content', 'wpautop' );
        
        echo apply_filters( 'the_content', get_field( 'instagram_url' ) );

        add_filter( 'the_content', 'wpautop' );

      // video
      elseif ( get_field( 'video_embed_url' ) ) :
        

        echo wp_oembed_get( get_field( 'video_embed_url' ) );
        

        
        // featured image
        elseif( has_post_thumbnail() ) :
          
          the_post_thumbnail();
          
        // content
        //else :
        
        /* 
        the_content( sprintf(
          wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'hoopsworthy' ), array( 'span' => array( 'class' => array() ) ) ),
          the_title( '<span class="screen-reader-text">"', '"</span>', false )
        ) );
        */
      endif;
    
    ?>
  </div><!-- .entry-content -->

  <footer class="entry-footer">
    <?php just_one_tag(); ?>
  </footer><!-- .entry-footer -->
</article><!-- #post-## -->
