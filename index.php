<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Rajapagar
 * @since 1.0.0
 */

get_header();
$assets_ready = defined('RAJAPAGAR_ASSETS_READY') && RAJAPAGAR_ASSETS_READY;
?>

<?php if ($assets_ready) : ?>
    <!-- Mount point for our modern ReactJS SPA -->
    <div id="rajapagar-app"></div>
    
    <!-- 100% SEO-Friendly Crawler Fallback and Noscript Support -->
    <noscript>
<?php endif; ?>

    <div class="seo-fallback" style="padding: 40px 20px; max-width: 800px; margin: 0 auto; font-family: 'Outfit', sans-serif; line-height: 1.8; color: #333333; background-color: #FAF5E5; border-radius: 12px; margin-top: 30px; border: 1px solid #EAD8A0; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <?php if (!$assets_ready) : ?>
            <div style="background-color: #FFFBEB; border-left: 4px solid #DCA54A; padding: 15px; margin-bottom: 30px; border-radius: 4px;">
                <p style="margin: 0; font-weight: 600; color: #B45309;">💡 Mode Fallback Aktif (Assets Belum Di-build)</p>
                <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #78350F;">Tema terdeteksi baru saja dipindahkan atau belum di-build. Halaman ini berjalan dalam mode fallback HTML server yang aman dan super cepat. Untuk mengaktifkan tampilan React SPA penuh, silakan jalankan <code>npm install</code> lalu <code>npm run build</code> di direktori tema Anda.</p>
            </div>
        <?php endif; ?>

        <?php
        if ( is_singular() ) {
            // Fallback for single posts and pages
            while ( have_posts() ) {
                the_post();
                echo '<h1 style="color: #0F172A; font-size: 2.5rem; margin-bottom: 10px;">' . get_the_title() . '</h1>';
                echo '<div class="post-meta" style="color: #DCA54A; font-weight: 600; margin-bottom: 20px;">';
                echo 'Dipublikasikan pada: ' . get_the_date() . ' | Kategori: ' . get_the_category_list( ', ' );
                echo '</div>';
                
                if ( has_post_thumbnail() ) {
                    the_post_thumbnail('large', [
                        'style' => 'max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 30px; border: 1px solid #F0E6C5;'
                    ]);
                }
                
                echo '<div class="post-content" style="font-size: 1.1rem; color: #4A4A4A;">';
                the_content();
                echo '</div>';
            }
        } elseif ( is_home() || is_front_page() ) {
            // Fallback for Homepage
            echo '<h1 style="color: #0F172A; font-size: 2.8rem; margin-bottom: 15px;">Jasa Las &amp; Konstruksi Besi Terbaik - Rajapagar.id</h1>';
            echo '<p style="font-size: 1.2rem; color: #4A4A4A; margin-bottom: 30px;">';
            echo 'Rajapagar.id menyediakan jasa pembuatan dan instalasi pagar, tralis, kanopi, tangga, dan berbagai konstruksi besi &amp; stainless steel lainnya dengan kualitas terbaik dan harga kompetitif.';
            echo '</p>';
            
            echo '<h2 style="color: #0F172A; font-size: 1.8rem; margin-top: 40px; margin-bottom: 15px; border-bottom: 2px solid #DCA54A; padding-bottom: 5px;">Layanan Konstruksi Unggulan Kami:</h2>';
            echo '<ul style="padding-left: 20px; font-size: 1.1rem; color: #4A4A4A; margin-bottom: 40px;">';
            echo '<li style="margin-bottom: 10px;"><strong>Pagar Besi &amp; Pagar Otomatis</strong>: Pagar minimalis modern dengan sistem otomatis (remote control) untuk perlindungan maksimal.</li>';
            echo '<li style="margin-bottom: 10px;"><strong>Kanopi Besi &amp; Stainless Steel</strong>: Solusi perlindungan luar ruangan (carport, teras) dengan desain kokoh dan premium.</li>';
            echo '<li style="margin-bottom: 10px;"><strong>Tralis Jendela Custom</strong>: Keamanan tinggi untuk kamar tidur dan area jendela dengan motif dekoratif.</li>';
            echo '<li style="margin-bottom: 10px;"><strong>Tangga Besi Industrial</strong>: Desain estetis modern minimalis sangat ideal untuk cafe, kantor, dan hunian bertingkat.</li>';
            echo '<li style="margin-bottom: 10px;"><strong>Konstruksi Struktur Baja</strong>: Pengerjaan struktur bangunan baja berskala kecil hingga besar oleh tenaga profesional bersertifikat.</li>';
            echo '</ul>';
            
            echo '<h2 style="color: #0F172A; font-size: 1.8rem; margin-top: 40px; margin-bottom: 15px; border-bottom: 2px solid #DCA54A; padding-bottom: 5px;">Hubungi Kami (WhatsApp):</h2>';
            echo '<p style="font-size: 1.1rem; color: #4A4A4A;">Konsultasikan kebutuhan las dan konstruksi besi Anda gratis di: ';
            echo '<a href="https://wa.me/628982440404" style="color: #DCA54A; font-weight: bold; text-decoration: none;">+62 898-2440-404</a>';
            echo '</p>';
            
            echo '<h2 style="color: #0F172A; font-size: 1.8rem; margin-top: 40px; margin-bottom: 15px; border-bottom: 2px solid #DCA54A; padding-bottom: 5px;">Artikel &amp; Edukasi Terbaru:</h2>';
            $recent_posts = new WP_Query([
                'post_type'      => 'post',
                'posts_per_page' => 12,
                'post_status'    => 'publish'
            ]);
            
            if ( $recent_posts->have_posts() ) {
                echo '<div class="fallback-posts-list" style="margin-top: 20px;">';
                while ( $recent_posts->have_posts() ) {
                    $recent_posts->the_post();
                    echo '<div class="post-item" style="margin-bottom: 25px; padding: 15px; border: 1px solid #F0E6C5; border-radius: 6px; background-color: #FFFFFF;">';
                    echo '<h3 style="margin-top: 0; margin-bottom: 5px;"><a href="' . get_permalink() . '" style="color: #0F172A; text-decoration: none;">' . get_the_title() . '</a></h3>';
                    echo '<div style="color: #DCA54A; font-size: 0.9rem; margin-bottom: 10px;">Tanggal: ' . get_the_date() . '</div>';
                    echo '<p style="margin: 0; color: #4A4A4A; font-size: 0.95rem;">' . get_the_excerpt() . '</p>';
                    echo '</div>';
                }
                echo '</div>';
                wp_reset_postdata();
            } else {
                echo '<p style="color: #666;">Belum ada artikel yang dipublikasikan.</p>';
            }
        } else {
            // General Fallback for archives, searches, or categories
            if ( have_posts() ) {
                echo '<h1 style="color: #0F172A; font-size: 2.2rem; margin-bottom: 20px;">Halaman Arsip &amp; Konten</h1>';
                echo '<div class="archive-items">';
                while ( have_posts() ) {
                    the_post();
                    echo '<div class="archive-item" style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #F0E6C5;">';
                    echo '<h2 style="margin-bottom: 8px;"><a href="' . get_permalink() . '" style="color: #0F172A; text-decoration: none;">' . get_the_title() . '</a></h2>';
                    echo '<div style="color: #DCA54A; font-size: 0.9rem; margin-bottom: 10px;">Tanggal: ' . get_the_date() . '</div>';
                    the_excerpt();
                    echo '</div>';
                }
                echo '</div>';
            } else {
                echo '<h1 style="color: #0F172A; font-size: 2.2rem; margin-bottom: 20px;">Halaman Tidak Ditemukan</h1>';
                echo '<p style="font-size: 1.1rem; color: #4A4A4A;">Maaf, halaman yang Anda cari tidak tersedia di server kami.</p>';
            }
        }
        ?>
    </div>

<?php if ($assets_ready) : ?>
    </noscript>
<?php endif; ?>

<?php
get_footer();

