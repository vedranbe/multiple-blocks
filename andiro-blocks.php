<?php

/**
 * Plugin Name: Multiple Blocks
 * Description: A plugin containing multiple Gutenberg blocks.
 * Version: 1.0.0
 * Author: Vedran Bejatovic
 */

// Load the plugin's JavaScript files
function enqueue_block_editor_assets()
{
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'multiple-blocks',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    // Localize script for all blocks
    wp_localize_script('multiple-blocks', 'MultipleBlocks', [
        'pluginUrl' => plugins_url('/', __FILE__),
    ]);
}
add_action('enqueue_block_editor_assets', 'enqueue_block_editor_assets');
