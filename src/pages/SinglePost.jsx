import React from 'react';
import { Calendar, User, PhoneCall, ChevronRight, MapPin, Sparkles } from 'lucide-react';

export default function SinglePost({ data, navigateTo }) {
  const post = data.post;
  const relatedPosts = data.related_posts || [];
  const contact = data.contact;

  if (!post) {
    return (
      <div className="section-padding text-center" style={{ backgroundColor: '#FAF5E5', minHeight: '60vh' }}>
        <div className="container">
          <h2>Memuat Konten Artikel...</h2>
          <div className="spinner" style={{ margin: '30px auto' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Banner Header */}
      <section className="page-banner">
        <div className="container">
          <span className="section-tag" style={{ color: '#DCA54A' }}>Detail Edukasi</span>
          <h1 className="page-banner-title" style={{ fontSize: '2.2rem', lineHeight: '1.3', maxWidth: '800px', margin: '0 auto 12px auto' }}>
            {post.title}
          </h1>
          <div className="breadcrumbs">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/'); }}>Beranda</a> &gt; <a href="/blog-artikel" onClick={(e) => { e.preventDefault(); navigateTo('/blog-artikel'); }}>Blog &amp; Artikel</a> &gt; {post.title}
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5' }}>
        <div className="container blog-single-layout">
          
          {/* LEFT: Full Article Pane */}
          <article className="blog-post-body" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '40px',
            border: '1.5px solid #F0E6C5',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
          }}>
            {/* Featured Image */}
            {post.image && (
              <div className="post-featured-image" style={{ border: '1px solid #F0E6C5' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }} />
              </div>
            )}

            {/* Meta Strip */}
            <div className="post-meta-strip" style={{ borderColor: '#FAF5E5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} style={{ color: '#DCA54A' }} />
                <span>{post.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} style={{ color: '#DCA54A' }} />
                <span>Oleh: {post.author}</span>
              </div>
              {post.categories?.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#DCA54A', fontWeight: 'bold' }}>Kategori:</span>
                  <span>{post.categories.map(c => c.name).join(', ')}</span>
                </div>
              )}
            </div>

            {/* Gutenberg HTML content injection */}
            <div 
              className="post-content-area"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* RIGHT: Conversion Sidebar */}
          <aside className="sidebar">
            
            {/* Widget 1: Free Consultation call to action */}
            <div className="sidebar-widget" style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #DCA54A',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(220,165,74,0.15)',
                color: '#DCA54A',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <Sparkles size={12} />
                <span>Layanan Las Jabodetabek</span>
              </div>
              
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: '700', marginBottom: '12px', lineHeight: '1.3' }}>
                Butuh Pagar Besi atau Kanopi Awet?
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>
                Hubungi <strong>PT Cahaya Jaya Berkah Nusantara</strong> untuk pemesanan pagar minimalis modern custom bergaransi presisi 100%. Survey gratis se-Jabodetabek!
              </p>
              
              <a 
                href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20membaca%20artikel%20${encodeURIComponent(post.title)}%20dan%20tertarik%20tanya%20estimasi%20jasa`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ width: '100%', fontSize: '0.9rem', padding: '10px' }}
              >
                Tanya Spek &amp; Konsultasi
              </a>
            </div>

            {/* Widget 2: Related Educational Articles */}
            {relatedPosts.length > 0 && (
              <div className="sidebar-widget" style={{ borderColor: '#F0E6C5' }}>
                <h3 className="sidebar-widget-title" style={{ fontSize: '1.15rem', color: '#0F172A', fontWeight: '700' }}>
                  Artikel Terkait
                </h3>
                <ul className="sidebar-post-list">
                  {relatedPosts.map((rp) => (
                    <li key={rp.id} className="sidebar-post-item">
                      {rp.image && (
                        <div className="sidebar-post-thumb" style={{ border: '1px solid #F0E6C5' }}>
                          <img src={rp.image} alt={rp.title} />
                        </div>
                      )}
                      <div className="sidebar-post-info">
                        <h4 className="sidebar-post-title" style={{ fontSize: '0.9rem', margin: 0 }}>
                          <a 
                            href={`/blog/${rp.slug}`} 
                            onClick={(e) => {
                              e.preventDefault();
                              navigateTo(`/blog/${rp.slug}`);
                            }}
                            style={{ color: '#0F172A' }}
                          >
                            {rp.title}
                          </a>
                        </h4>
                        <span className="sidebar-post-date">{rp.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Widget 3: Quick Info */}
            <div className="sidebar-widget" style={{ borderColor: '#F0E6C5', padding: '24px' }}>
              <h3 className="sidebar-widget-title" style={{ fontSize: '1.15rem', color: '#0F172A', fontWeight: '700', marginBottom: '16px' }}>
                Hubungi Kami
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={16} style={{ color: '#DCA54A', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#555' }}>{contact.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PhoneCall size={16} style={{ color: '#DCA54A', flexShrink: 0 }} />
                  <a href={`tel:${contact.whatsapp_formatted.replace(/[^0-9+]/g, '')}`} style={{ fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>
                    {contact.whatsapp_formatted}
                  </a>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </section>
    </div>
  );
}
