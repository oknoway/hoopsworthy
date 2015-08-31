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

    <div class="entry-meta">
      <?php hoopsworthy_posted_on(); ?>
    </div><!-- .entry-meta -->
  </header><!-- .entry-header -->

  <div class="entry-media">
    
      <?php // images
      if ( get_field( 'instagram_url' ) )

        echo apply_filters( 'the_content', get_field( 'instagram_url' ) );

      // video
      if ( get_field( 'video_embed_url' ) )

        echo apply_filters( 'the_content', get_field( 'video_embed_url' ) );

      ?>
  </div>

  <div class="entry-content">
    <?php the_content(); ?>
  </div><!-- .entry-content -->

  <footer class="entry-footer">
    <?php hoopsworthy_entry_footer(); ?>
  </footer><!-- .entry-footer -->
</article><!-- #post-## -->

