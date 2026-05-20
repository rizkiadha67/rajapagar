import React, { useState } from 'react';
import { Calendar, User, Search, ChevronRight, BookOpen } from 'lucide-react';

export default function Blog({ data, navigateTo }) {
  const allPosts = data.posts || [];
  const [searchQuery, setSearchQuery] = useState('');

  // Client-side search filtering for blazing speed UX
  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Page Banner Header */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Edukasi &amp; Blog</h1>
          <div className="breadcrumbs">
            <a href="/" onClick={(e) => { e.preventDefault(); }}>Beranda</a> &gt; Blog &amp; Artikel
          </div>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5' }}>
        <div className="container">
          
          {/* Search and Head Description Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '30px',
            alignItems: 'center',
            marginBottom: '40px',
            backgroundColor: '#FFFFFF',
            padding: '24px 30px',
            borderRadius: '12px',
            border: '1.5px solid #F0E6C5',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
          }}>
            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(220,165,74,0.1)',
                color: '#DCA54A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.4rem', color: '#0F172A', fontWeight: 'bold', margin: 0 }}>Portal Edukasi Rajapagar</h2>
                <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                  Temukan rujukan, tips memilih besi berkualitas, serta silsilah desain las estetis.
                </p>
              </div>
            </div>

            {/* Keyword Search Input Bar */}
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Cari artikel edukasi..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ borderColor: '#F0E6C5' }}
              />
              <Search className="search-icon" size={18} style={{ color: '#DCA54A' }} />
            </div>
          </div>

          {/* Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-card" style={{ border: '1.5px solid #F0E6C5' }}>
                  
                  {/* Card Thumbnail */}
                  <div className="blog-image-wrapper">
                    {post.image ? (
                      <img src={post.image} alt={post.title} />
                    ) : (
                      <img 
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'><rect width='400' height='200' fill='%230F172A'/><text x='50%'' y='50%' fill='%23DCA54A' font-family='sans-serif' font-size='20' text-anchor='middle'>RajaPagar</text></svg>" 
                        alt={post.title} 
                      />
                    )}
                  </div>

                  {/* Card Content details */}
                  <div className="blog-content">
                    <div className="blog-meta">
                      <div className="blog-meta-item">
                        <Calendar size={14} style={{ color: '#DCA54A' }} />
                        <span>{post.date}</span>
                      </div>
                      <div className="blog-meta-item">
                        <User size={14} style={{ color: '#DCA54A' }} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="blog-card-title" style={{ fontSize: '1.25rem' }}>
                      <a href={`/blog/${post.slug}`} onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${post.slug}`); }}>
                        {post.title}
                      </a>
                    </h3>
                    
                    <p className="blog-card-desc" style={{ fontSize: '0.9rem', color: '#555' }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="blog-card-footer">
                      <a 
                        href={`/blog/${post.slug}`} 
                        onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${post.slug}`); }}
                        className="service-link"
                        style={{ fontSize: '0.85rem' }}
                      >
                        <span>Baca Selengkapnya</span>
                        <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          ) : (
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '60px 20px',
              textAlign: 'center',
              border: '1.5px solid #F0E6C5'
            }}>
              <h3 style={{ color: '#666', fontSize: '1.2rem', marginBottom: '8px' }}>Tidak ada artikel ditemukan</h3>
              <p style={{ color: '#999', fontSize: '0.95rem', margin: 0 }}>
                Coba cari kata kunci lain seperti "pagar", "kanopi", atau "tralis".
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
