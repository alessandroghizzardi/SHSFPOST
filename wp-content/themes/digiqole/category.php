<?php
   /**
    * the template for displaying archive pages.
    */
   
   $category = get_queried_object();
   $blog_sidebar = 3;
   $sidebar_class = 'col-lg-8 col-lg-4 sidebar-right';
   $cat_layout = digiqole_term_option($category->cat_ID, 'block_category_template', 'style1');
   if(isset($category->cat_ID) && digiqole_term_option($category->cat_ID, 'block_sidebar_layout', 'sidebar-right') == 'sidebar-none')
      {
         $sidebar_class = 'col-lg-12 sidebar-none';
         $blog_sidebar = 1;
      }
   get_header(); 
   get_template_part( 'template-parts/breadcrumb/breadcrumb');
 
   $permitted_title = ["style1","style4","style6",'style5', "style2", "style3"];

  if( in_array( $cat_layout,$permitted_title ) ) {
    echo '<div class="container">';  
       get_template_part( 'template-parts/blog/category/parts/category', 'title' ); 
    echo '</div>';
  }

?>

<section id="main-content" class="blog main-container" role="main">
	<div class="container">
		<div class="row">
	   <?php if($blog_sidebar == 2){
				get_sidebar();
			  }  ?>
			<div class="<?php echo esc_attr($sidebar_class);?>">
				<?php if ( have_posts() ) : ?>
               
              <?php get_template_part( 'template-parts/blog/category/layout', 'layout' ); ?>  
				  <?php get_template_part( 'template-parts/blog/paginations/pagination', 'style2' ); ?>
				<?php else : ?>
					<?php get_template_part( 'template-parts/blog/contents/content', 'none' ); ?>
				<?php endif; ?>
			</div><!-- .col-md-8 -->

         <?php if($blog_sidebar == 3){
				get_sidebar();
			  }  ?>
		</div><!-- .row -->
	</div><!-- .container -->
</section><!-- #main-content -->
<?php get_footer(); ?>