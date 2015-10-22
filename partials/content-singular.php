<?php
/**
 * Template part for displaying single posts.
 *
 * @package hoopsworthy
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
    
    
    <?php if ( get_field( 'subhead' ) ) : ?>
      <h5 class="entry-subhead"><?php the_field( 'subhead' ); ?></h5>
    <?php endif; ?>
    
    <div class="entry-meta">
      <?php the_tags( '<ul class="post-tags"><li>', '</li><li>', '</li></ul>' ); ?>
      <?php hoopsworthy_posted_on(); ?>
    </div><!-- .entry-meta -->
  </header><!-- .entry-header -->

  <div class="entry-media">
    
      <?php // images
      if ( get_field( 'instagram_url' ) ) :
        
        echo wp_oembed_get( get_field( 'instagram_url' ) );

      // video
      elseif ( get_field( 'video_embed_url' ) ) :
        

        echo wp_oembed_get( get_field( 'video_embed_url' ) );

        
        // featured image
      elseif( has_post_thumbnail() ) :
        
        get_template_part( 'partials/module', 'hero' );
      endif;

      ?>
  </div>

  <div class="entry-content">
    <?php the_content(); ?>
  </div><!-- .entry-content -->

  <footer class="entry-footer">
    <?php just_one_tag(); ?>
  </footer><!-- .entry-footer -->
</article><!-- #post-## -->

