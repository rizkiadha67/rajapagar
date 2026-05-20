<?php
/**
 * Rajapagar theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Rajapagar
 * @since 1.0.0
 */

if ( ! function_exists( 'rajapagar_setup' ) ) {
    function rajapagar_setup() {
        // Add default theme supports
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        ) );

        // Register Primary navigation menu location
        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Menu', 'rajapagar' ),
        ) );
    }
}
add_action( 'after_setup_theme', 'rajapagar_setup' );

/**
 * Format a standard WP_Post object into structured data for React consumption
 */
function rajapagar_format_post($post) {
    if (empty($post)) return null;
    $post_id = $post->ID;
    
    // Get featured image URL
    $thumbnail_url = '';
    if (has_post_thumbnail($post_id)) {
        $img = wp_get_attachment_image_src(get_post_thumbnail_id($post_id), 'large');
        if (!empty($img)) {
            $thumbnail_url = $img[0];
        }
    } else {
        // Fallback placeholder pattern
        $thumbnail_url = '';
    }

    // Get categories
    $categories = [];
    $cats = get_the_category($post_id);
    if (!empty($cats)) {
        foreach ($cats as $c) {
            $categories[] = [
                'id' => $c->term_id,
                'name' => html_entity_decode($c->name),
                'slug' => $c->slug
            ];
        }
    }

    // Get tags
    $tags = [];
    $post_tags = get_the_tags($post_id);
    if (!empty($post_tags)) {
        foreach ($post_tags as $t) {
            $tags[] = [
                'id' => $t->term_id,
                'name' => html_entity_decode($t->name),
                'slug' => $t->slug
            ];
        }
    }

    return [
        'id'        => $post_id,
        'title'     => html_entity_decode($post->post_title),
        'slug'      => $post->post_name,
        'content'   => apply_filters('the_content', $post->post_content),
        'excerpt'   => get_the_excerpt($post_id),
        'date'      => get_the_date('d M Y', $post_id),
        'date_raw'  => $post->post_date,
        'image'     => $thumbnail_url,
        'categories'=> $categories,
        'tags'      => $tags,
        'author'    => get_the_author_meta('display_name', $post->post_author)
    ];
}

/**
 * Get navigation menus compiled for SPA consumption
 */
function rajapagar_get_menu_links($location = 'primary') {
    $locations = get_nav_menu_locations();
    $menu_items = [];

    if (isset($locations[$location])) {
        $menu = wp_get_nav_menu_object($locations[$location]);
        if ($menu) {
            $items = wp_get_nav_menu_items($menu->term_id);
            if (!empty($items)) {
                foreach ($items as $item) {
                    $title = html_entity_decode($item->title);
                    $url = str_replace(home_url(), '', $item->url) ?: '/';
                    
                    // Dynamic database rewrite: Solusi -> Layanan mapping
                    if ($url === '/solusi') {
                        $url = '/layanan';
                    }
                    if ($title === 'Solusi') {
                        $title = 'Layanan';
                    }

                    $menu_items[] = [
                        'id' => $item->ID,
                        'title' => $title,
                        'url' => $url,
                        'parent' => $item->menu_item_parent
                    ];
                }
            }
        }
    }

    // Serve defaults if primary menu is unconfigured
    if (empty($menu_items)) {
        $menu_items = [
            ['id' => 1, 'title' => 'Home', 'url' => '/', 'parent' => '0'],
            ['id' => 2, 'title' => 'Tentang Kami', 'url' => '/profil-kami', 'parent' => '0'],
            ['id' => 3, 'title' => 'Layanan', 'url' => '/layanan', 'parent' => '0'],
            ['id' => 31, 'title' => 'Pagar Besi Custom & Elektrik', 'url' => '/layanan/pagar', 'parent' => '3'],
            ['id' => 32, 'title' => 'Kanopi Carport', 'url' => '/layanan/kanopi-carport', 'parent' => '3'],
            ['id' => 33, 'title' => 'Teralis Jendela', 'url' => '/layanan/teralis-jendela', 'parent' => '3'],
            ['id' => 34, 'title' => 'Tangga Mezanin', 'url' => '/layanan/tangga-mezanin', 'parent' => '3'],
            ['id' => 4, 'title' => 'Blog & Artikel', 'url' => '/blog-artikel', 'parent' => '0'],
            ['id' => 5, 'title' => 'Contact', 'url' => '/contact', 'parent' => '0'],
        ];
    }

    return $menu_items;
}

/**
 * Fetch localized initial state matching the exact server page hit
 */
function rajapagar_get_initial_data() {
    $current_uri = $_SERVER['REQUEST_URI'];
    // Remove query strings
    if (strpos($current_uri, '?') !== false) {
        $current_uri = explode('?', $current_uri)[0];
    }
    
    // Resolve clean subfolder paths in Laragon if applicable
    $home_path = str_replace(array('http://', 'https://'), '', home_url());
    $home_path_parts = explode('/', $home_path);
    array_shift($home_path_parts); // Remove domain
    $subfolder = !empty($home_path_parts) ? '/' . implode('/', $home_path_parts) : '';
    
    // Determine target route path relative to home
    $route_path = $current_uri;
    if ($subfolder && strpos($current_uri, $subfolder) === 0) {
        $route_path = substr($current_uri, strlen($subfolder));
    }
    $route_path = '/' . ltrim($route_path, '/');

    $data = [
        'site_title'   => get_bloginfo('name'),
        'site_tagline' => get_bloginfo('description'),
        'site_url'     => home_url(),
        'route_path'   => $route_path,
        'type'         => '404',
        'post'         => null,
        'posts'        => [],
        'menus'        => rajapagar_get_menu_links('primary'),
        'theme_colors' => [
            'primary' => '#DCA54A',
            'primary_hover' => '#D09A40',
            'dark_bg' => '#0F172A',
            'dark_brand' => '#141004',
            'light_bg' => '#FAF5E5',
            'body_text' => '#4A4A4A'
        ],
        'contact' => [
            'whatsapp' => get_option('rajapagar_whatsapp', '628982440404'),
            'whatsapp_formatted' => get_option('rajapagar_whatsapp_formatted', '+62 898-2440-404'),
            'email' => get_option('rajapagar_email', 'ptcahayajayaberkahnusantara@gmail.com'),
            'address' => get_option('rajapagar_address', 'PT Cahaya Jaya Berkah Nusantara, Indonesia')
        ]
    ];

    $clean_route = trim($route_path, '/');
    
    if ($clean_route === 'profil-kami' || $clean_route === 'about-us') {
        $data['type'] = 'page';
        $data['post'] = [
            'title' => 'Profil Perusahaan – Architectural Metalwork & Luxury Gates',
            'slug' => 'profil-kami',
            'content' => ''
        ];
    } elseif ($clean_route === 'solusi') {
        $data['type'] = 'page';
        $data['post'] = [
            'title' => 'Solusi Fabrikasi Besi & Premium Gates – Rajapagar.id',
            'slug' => 'solusi',
            'content' => ''
        ];
    } elseif ($clean_route === 'contact' || $clean_route === 'kontak') {
        $data['type'] = 'page';
        $data['post'] = [
            'title' => 'Hubungi Jasa Kami – Rajapagar.id',
            'slug' => 'contact',
            'content' => ''
        ];
    } elseif ( is_front_page() || is_home() ) {
        $data['type'] = 'home';
        // Get latest 12 posts
        $query = new WP_Query([
            'post_type' => 'post',
            'posts_per_page' => 12,
            'post_status' => 'publish'
        ]);
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $data['posts'][] = rajapagar_format_post(get_post());
            }
            wp_reset_postdata();
        }
    } elseif ( is_singular() ) {
        $post = get_post();
        $data['type'] = $post->post_type === 'page' ? 'page' : 'post';
        $data['post'] = rajapagar_format_post($post);

        // Fetch related posts if it's a blog post
        if ($post->post_type === 'post') {
            $categories = wp_get_post_categories($post->ID);
            if (!empty($categories)) {
                $related = new WP_Query([
                    'category__in' => $categories,
                    'post__not_in' => [$post->ID],
                    'posts_per_page' => 3,
                    'post_status' => 'publish'
                ]);
                $data['related_posts'] = [];
                if ($related->have_posts()) {
                    while ($related->have_posts()) {
                        $related->the_post();
                        $data['related_posts'][] = rajapagar_format_post(get_post());
                    }
                    wp_reset_postdata();
                }
            }
        }
    } elseif ( is_archive() || is_category() ) {
        $data['type'] = 'archive';
        while ( have_posts() ) {
            the_post();
            $data['posts'][] = rajapagar_format_post(get_post());
        }
    }

    return $data;
}

/**
 * Enqueue scripts and styles of our React application
 */
function rajapagar_enqueue_scripts() {
    $dist_path = get_template_directory() . '/dist/';
    $dist_url  = get_template_directory_uri() . '/dist/';
    
    // Production mode: Parse manifest.json built by Vite
    $manifest_file = $dist_path . 'manifest.json';
    // Vite 5+ outputs manifest in a .vite subfolder by default
    if (!file_exists($manifest_file) && file_exists($dist_path . '.vite/manifest.json')) {
        $manifest_file = $dist_path . '.vite/manifest.json';
    }
    
    $assets_loaded = false;
    
    if (file_exists($manifest_file)) {
        $manifest = json_decode(file_get_contents($manifest_file), true);
        
        // Find JS entry and CSS entries in manifest
        $entry_key = isset($manifest['index.html']) ? 'index.html' : 'src/main.jsx';
        
        if (isset($manifest[$entry_key])) {
            $js_file = $manifest[$entry_key]['file'];
            wp_enqueue_script('rajapagar-react', $dist_url . $js_file, array(), null, true);
            $assets_loaded = true;
            
            if (isset($manifest[$entry_key]['css'])) {
                foreach ($manifest[$entry_key]['css'] as $css_file) {
                    wp_enqueue_style('rajapagar-react-css', $dist_url . $css_file, array(), array());
                }
            }
        }

        // Add module tag so ESM import styles load properly
        add_filter('script_loader_tag', function($tag, $handle, $src) {
            if ($handle === 'rajapagar-react') {
                return '<script type="module" src="' . esc_url($src) . '"></script>';
            }
            return $tag;
        }, 10, 3);
    }
    
    // Define constant to let index.php know if React assets are ready
    if (!defined('RAJAPAGAR_ASSETS_READY')) {
        define('RAJAPAGAR_ASSETS_READY', $assets_loaded);
    }

    if ($assets_loaded) {
        // Inject the pre-loaded static state block so React is immediate
        $initial_state = rajapagar_get_initial_data();
        wp_register_script('rajapagar-initial-state', '');
        wp_enqueue_script('rajapagar-initial-state');
        wp_add_inline_script('rajapagar-initial-state', 'window.rajapagar_data = ' . wp_json_encode($initial_state) . ';', 'before');
    }
}
add_action('wp_enqueue_scripts', 'rajapagar_enqueue_scripts');


/**
 * Register Custom REST API Endpoints for React SPA Dynamic Fetch
 */
add_action('rest_api_init', function () {
    // Get single route payload
    register_rest_route('rajapagar/v1', '/route', array(
        'methods' => 'GET',
        'callback' => 'rajapagar_rest_route_handler',
        'permission_callback' => '__return_true'
    ));
    
    // Get all blog posts listing with search and pagination support
    register_rest_route('rajapagar/v1', '/posts', array(
        'methods' => 'GET',
        'callback' => 'rajapagar_rest_posts_handler',
        'permission_callback' => '__return_true'
    ));
});

function rajapagar_rest_route_handler($request) {
    $path = $request->get_param('path');
    if (empty($path)) {
        return new WP_Error('no_path', 'No path provided', array('status' => 400));
    }

    // Resolve URL path to WordPress query
    $url = home_url($path);
    $post_id = url_to_postid($url);
    
    // Check if it is the homepage
    if ($path === '/' || $path === '') {
        $recent = new WP_Query([
            'post_type' => 'post',
            'posts_per_page' => 12,
            'post_status' => 'publish'
        ]);
        $posts = [];
        if ($recent->have_posts()) {
            while ($recent->have_posts()) {
                $recent->the_post();
                $posts[] = rajapagar_format_post(get_post());
            }
            wp_reset_postdata();
        }
        return [
            'type' => 'home',
            'posts' => $posts,
            'post' => null
        ];
    }
    
    // Check if it is a specific singular page/post
    if ($post_id > 0) {
        $post = get_post($post_id);
        $formatted = rajapagar_format_post($post);
        
        $payload = [
            'type' => $post->post_type === 'page' ? 'page' : 'post',
            'post' => $formatted,
            'posts' => []
        ];
        
        if ($post->post_type === 'post') {
            $categories = wp_get_post_categories($post->ID);
            if (!empty($categories)) {
                $related = new WP_Query([
                    'category__in' => $categories,
                    'post__not_in' => [$post->ID],
                    'posts_per_page' => 3,
                    'post_status' => 'publish'
                ]);
                $payload['related_posts'] = [];
                if ($related->have_posts()) {
                    while ($related->have_posts()) {
                        $related->the_post();
                        $payload['related_posts'][] = rajapagar_format_post(get_post());
                    }
                    wp_reset_postdata();
                }
            }
        }
        return $payload;
    }

    // Check if path represents category or standard custom router (e.g. /blog-artikel, /profil-kami, /solusi)
    $clean_path = trim($path, '/');
    if ($clean_path === 'blog-artikel') {
        $query = new WP_Query([
            'post_type' => 'post',
            'posts_per_page' => 12,
            'post_status' => 'publish'
        ]);
        $posts = [];
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $posts[] = rajapagar_format_post(get_post());
            }
            wp_reset_postdata();
        }
        return [
            'type' => 'blog-index',
            'posts' => $posts,
            'post' => [
                'title' => 'Blog & Artikel Edukasi Las & Pagar',
                'content' => '<p>Temukan tips, trik, tren desain pagar, dan panduan memilih konstruksi besi berkualitas tinggi dari ahlinya di Rajapagar.id.</p>'
            ]
        ];
    }

    // High-priority clean path mocks to ensure pages mount instantly on fresh installs
    if ($clean_path === 'profil-kami' || $clean_path === 'about-us') {
        return [
            'type' => 'page',
            'post' => [
                'title' => 'Profil Perusahaan – Architectural Metalwork & Luxury Gates',
                'slug' => 'profil-kami',
                'content' => ''
            ],
            'posts' => []
        ];
    }
    if ($clean_path === 'solusi') {
        return [
            'type' => 'page',
            'post' => [
                'title' => 'Solusi Fabrikasi Besi & Premium Gates – Rajapagar.id',
                'slug' => 'solusi',
                'content' => ''
            ],
            'posts' => []
        ];
    }
    if ($clean_path === 'contact' || $clean_path === 'kontak') {
        return [
            'type' => 'page',
            'post' => [
                'title' => 'Hubungi Jasa Kami – Rajapagar.id',
                'slug' => 'contact',
                'content' => ''
            ],
            'posts' => []
        ];
    }

    // Fallback search or custom matching in case custom slug maps to standard WP page
    // (This acts as a safety backup for pages that might not resolve via url_to_postid)
    $slug = basename($clean_path);
    $page = get_page_by_path($slug);
    if ($page) {
        return [
            'type' => 'page',
            'post' => rajapagar_format_post($page),
            'posts' => []
        ];
    }

    // If not found, return 404
    return [
        'type' => '404',
        'post' => null,
        'posts' => []
    ];
}

function rajapagar_rest_posts_handler($request) {
    $search = $request->get_param('search');
    $page = intval($request->get_param('page')) ?: 1;
    $per_page = 12;

    $args = [
        'post_type' => 'post',
        'posts_per_page' => $per_page,
        'paged' => $page,
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC'
    ];

    if (!empty($search)) {
        $args['s'] = $search;
    }

    $query = new WP_Query($args);
    $posts = [];
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $posts[] = rajapagar_format_post(get_post());
        }
        wp_reset_postdata();
    }

    return [
        'posts' => $posts,
        'total_pages' => $query->max_num_pages,
        'current_page' => $page
    ];
}

/**
 * Register Custom Theme Settings Page in WP Admin
 */
function rajapagar_register_settings_menu() {
    add_menu_page(
        'Pengaturan Raja Pagar',
        'Pengaturan Tema',
        'manage_options',
        'rajapagar-settings',
        'rajapagar_settings_page_callback',
        'dashicons-admin-generic',
        99
    );
}
add_action('admin_menu', 'rajapagar_register_settings_menu');

function rajapagar_settings_page_callback() {
    if (isset($_POST['rajapagar_save_settings'])) {
        update_option('rajapagar_whatsapp', sanitize_text_field($_POST['rajapagar_whatsapp']));
        update_option('rajapagar_whatsapp_formatted', sanitize_text_field($_POST['rajapagar_whatsapp_formatted']));
        update_option('rajapagar_email', sanitize_email($_POST['rajapagar_email']));
        update_option('rajapagar_address', sanitize_textarea_field($_POST['rajapagar_address']));
        echo '<div class="updated"><p>Pengaturan Raja Pagar berhasil disimpan!</p></div>';
    }

    $whatsapp = get_option('rajapagar_whatsapp', '628982440404');
    $whatsapp_formatted = get_option('rajapagar_whatsapp_formatted', '+62 898-2440-404');
    $email = get_option('rajapagar_email', 'ptcahayajayaberkahnusantara@gmail.com');
    $address = get_option('rajapagar_address', 'PT Cahaya Jaya Berkah Nusantara, Indonesia');
    ?>
    <div class="wrap">
        <h1>Pengaturan Tema Rajapagar.id</h1>
        <form method="post" action="">
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">No. WhatsApp (Hanya Angka, diawali kode negara, misal: 62898...)</th>
                    <td><input type="text" name="rajapagar_whatsapp" value="<?php echo esc_attr($whatsapp); ?>" class="regular-text" /></td>
                </tr>
                <tr valign="top">
                    <th scope="row">No. WhatsApp Tampilan (Teks berformat, misal: +62 898-2440-404)</th>
                    <td><input type="text" name="rajapagar_whatsapp_formatted" value="<?php echo esc_attr($whatsapp_formatted); ?>" class="regular-text" /></td>
                </tr>
                <tr valign="top">
                    <th scope="row">Email Resmi Kantor</th>
                    <td><input type="email" name="rajapagar_email" value="<?php echo esc_attr($email); ?>" class="regular-text" /></td>
                </tr>
                <tr valign="top">
                    <th scope="row">Alamat Lengkap Workshop</th>
                    <td><textarea name="rajapagar_address" rows="4" cols="50" class="large-text"><?php echo esc_textarea($address); ?></textarea></td>
                </tr>
            </table>
            <input type="submit" name="rajapagar_save_settings" class="button button-primary" value="Simpan Pengaturan" />
        </form>
    </div>
    <?php
}
