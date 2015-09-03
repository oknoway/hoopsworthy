<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package hoopsworthy
 */

if ( ! function_exists( 'the_posts_navigation' ) ) :
/**
 * Display navigation to next/previous set of posts when applicable.
 *
 * @todo Remove this function when WordPress 4.3 is released.
 */
function the_posts_navigation() {
  // Don't print empty markup if there's only one page.
  if ( $GLOBALS[ 'wp_query' ]->max_num_pages < 2 ) {
    return;
  }
  ?>
  <nav class="navigation posts-navigation" role="navigation">
    <h2 class="screen-reader-text"><?php esc_html_e( 'Posts navigation', 'hoopsworthy' ); ?></h2>
    <div class="nav-links">

      <?php if ( get_next_posts_link() ) : ?>
      <div class="nav-previous"><?php next_posts_link( esc_html__( 'Older posts', 'hoopsworthy' ) ); ?></div>
      <?php endif; ?>

      <?php if ( get_previous_posts_link() ) : ?>
      <div class="nav-next"><?php previous_posts_link( esc_html__( 'Newer posts', 'hoopsworthy' ) ); ?></div>
      <?php endif; ?>

    </div><!-- .nav-links -->
  </nav><!-- .navigation -->
  <?php
}
endif;

if ( ! function_exists( 'the_post_navigation' ) ) :
/**
 * Display navigation to next/previous post when applicable.
 *
 * @todo Remove this function when WordPress 4.3 is released.
 */
function the_post_navigation() {
  // Don't print empty markup if there's nowhere to navigate.
  $previous = ( is_attachment() ) ? get_post( get_post()->post_parent ) : get_adjacent_post( false, '', true );
  $next     = get_adjacent_post( false, '', false );

  if ( ! $next && ! $previous ) {
    return;
  }
  ?>
  <nav class="navigation post-navigation" role="navigation">
    <h2 class="screen-reader-text"><?php esc_html_e( 'Post navigation', 'hoopsworthy' ); ?></h2>
    <div class="nav-links">
      <?php
        previous_post_link( '<div class="nav-previous">%link</div>', '%title' );
        next_post_link( '<div class="nav-next">%link</div>', '%title' );
      ?>
    </div><!-- .nav-links -->
  </nav><!-- .navigation -->
  <?php
}
endif;

if ( ! function_exists( 'hoopsworthy_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function hoopsworthy_posted_on() {
  $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
  if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
    $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
  }

  $time_string = sprintf( $time_string,
    esc_attr( get_the_date( 'c' ) ),
    esc_html( get_the_date() ),
    esc_attr( get_the_modified_date( 'c' ) ),
    esc_html( get_the_modified_date() )
  );

  $posted_on = sprintf(
    esc_html_x( 'Posted on %s', 'post date', 'hoopsworthy' ),
    '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
  );

  $byline = sprintf(
    esc_html_x( 'by %s', 'post author', 'hoopsworthy' ),
    '<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
  );

  echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

}
endif;

if ( ! function_exists( 'hoopsworthy_entry_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function hoopsworthy_entry_footer() {
  // Hide category and tag text for pages.
  if ( 'post' == get_post_type() ) {
    /* translators: used between list items, there is a space after the comma */
    $categories_list = get_the_category_list( esc_html__( ', ', 'hoopsworthy' ) );
    if ( $categories_list ) {
      printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'hoopsworthy' ) . '</span>', $categories_list ); // WPCS: XSS OK.
    }

    /* translators: used between list items, there is a space after the comma */
    $tags_list = get_the_tag_list( '', esc_html__( ', ', 'hoopsworthy' ) );
    if ( $tags_list ) {
      printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'hoopsworthy' ) . '</span>', $tags_list ); // WPCS: XSS OK.
    }
  }

  if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
    echo '<span class="comments-link">';
    comments_popup_link( esc_html__( 'Leave a comment', 'hoopsworthy' ), esc_html__( '1 Comment', 'hoopsworthy' ), esc_html__( '% Comments', 'hoopsworthy' ) );
    echo '</span>';
  }

  edit_post_link( esc_html__( 'Edit', 'hoopsworthy' ), '<span class="edit-link">', '</span>' );
}
endif;


if ( ! function_exists( 'just_one_tag' ) ) :
/**
 * Just one tag.
 */
function just_one_tag() {
  // Hide category and tag text for pages.
  if ( 'post' == get_post_type() ) {

    $tags = get_the_tags();

    if ( $tags ) {
      
      echo '<a href="' . esc_url( get_tag_link( $tags[0]->term_id ) ) . '" class="tag-link">' . esc_html__( $tags[0]->name, 'hoopsworthy' ) . '</a>';
      
    }
  }

}
endif;

if ( ! function_exists( 'hoopsworthy_archive_title' ) ) :
/**
 * Since we use archive.php in place of home.php, we need to filter get_the_archive_title
 *
 * @param string $title Optional.
 */
  function hoopsworthy_archive_title( $title ) {

    if ( is_home() || is_front_page() )
      return false;
  }
endif;

add_filter( 'get_the_archive_title', 'hoopsworthy_archive_title' );


