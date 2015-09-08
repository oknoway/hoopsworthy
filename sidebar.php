<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package hoopsworthy
 */

if ( ! is_active_sidebar( 'Sidebar' ) ) {
  return;
}
?>

<div id="secondary" class="widget-area" role="complementary">
  <?php dynamic_sidebar( 'Sidebar' ); ?>
</div><!-- #secondary -->
