<?php
/**
 * Single template for BPMN diagram Custom Post Type.
 *
 * This template can be overridden by copying it to your active theme
 * as single-bpmnm.php.
 *
 * @package HA_BPMN_Manager
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>

<main id="primary" class="site-main ha-bpmn-single-container">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<article id="post-<?php the_ID(); ?>" <?php post_class( 'ha-bpmn-entry' ); ?>>
			<header class="entry-header">
				<h1 class="entry-title"><?php the_title(); ?></h1>
			</header>

			<div class="entry-content">
				<?php
				if ( post_password_required() ) {
					echo get_the_password_form(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				} else {
					// Output the multi-instance diagram container
					echo \HA_BPMN\Renderer::instance()->render_diagram( get_the_ID(), '750px', true ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				}
				?>
			</div>
		</article>
		<?php
	endwhile;
	?>
</main>

<?php
get_footer();
