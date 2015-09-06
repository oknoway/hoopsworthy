<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package hoopsworthy
 */

?>

  </div><!-- #content -->

  <footer id="colophon" class="site-footer" role="contentinfo">
    <div class="container">
      <div class="hof">
        <a href="http://www.hoopshall.com" target="_blank">www.hoopshall.com</a>
      </div>
      <nav id="footer-navigation" class="footer-navigation" role="navigation">
        <?php wp_nav_menu( array( 'theme_location' => 'footer', 'menu_id' => 'footer-menu' ) ); ?>
      </nav><!-- #site-navigation -->
      <div>
        <?php /* Newsletter Signup */ 
  
        if ( function_exists( 'gravity_form' ) ) 
          gravity_form( 'Newsletter Signup', false, false, false, '', true, -1, true ); ?>
    
        <span class="copyright">Copyright &copy;<?php echo date('Y') ?>, Basketball Hall of Fame. All rights reserved.</span>
    
        <div class="nike">
          <a href="http://www.nike.com" target="_blank"><span class="txt">Sponsored by</span><span class="icon icon-nike"><?php echo file_get_contents( get_template_directory() . '/img/logo_nike.svg' ); ?></span></a>
        </div>
      </div>
    </div>
  </footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
