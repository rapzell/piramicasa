<?php
/**
 * Theme setup for Piramicasa Modern.
 */

if (!defined('ABSPATH')) {
    exit;
}

function piramicasa_modern_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('custom-spacing');
    add_editor_style('assets/editor-style.css');

    register_nav_menus([
        'primary' => __('Menu Principal', 'piramicasa-modern'),
        'footer' => __('Menu Footer', 'piramicasa-modern'),
    ]);
}
add_action('after_setup_theme', 'piramicasa_modern_setup');

function piramicasa_modern_assets(): void
{
    wp_enqueue_style(
        'piramicasa-modern-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'piramicasa-modern-style',
        get_stylesheet_uri(),
        ['piramicasa-modern-fonts'],
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'piramicasa_modern_assets');

function piramicasa_modern_editor_assets(): void
{
    wp_enqueue_style(
        'piramicasa-modern-editor-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
        [],
        null
    );
}
add_action('enqueue_block_editor_assets', 'piramicasa_modern_editor_assets');

function piramicasa_modern_register_pattern_category(): void
{
    if (function_exists('register_block_pattern_category')) {
        register_block_pattern_category(
            'piramicasa-modern',
            [
                'label' => __('Piramicasa Modern', 'piramicasa-modern'),
            ]
        );
    }
}
add_action('init', 'piramicasa_modern_register_pattern_category');

function piramicasa_modern_register_block_templates(): void
{
    $templates = [
        'page-piramides-terapeuticas' => __('Piramides Terapeuticas', 'piramicasa-modern'),
        'page-ciencia-evidencia'      => __('Ciencia y Evidencia', 'piramicasa-modern'),
        'page-sobre-nosotros'         => __('Sobre Nosotros', 'piramicasa-modern'),
        'page-contacto'               => __('Contacto', 'piramicasa-modern'),
    ];
}
add_action('init', 'piramicasa_modern_register_block_templates');
