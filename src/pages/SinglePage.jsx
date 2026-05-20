import React from 'react';

export default function SinglePage({ data }) {
  const post = data.post;

  if (!post) {
    return (
      <div className="section-padding text-center" style={{ backgroundColor: '#FAF5E5', minHeight: '60vh' }}>
        <div className="container">
          <h2>Memuat Halaman...</h2>
          <div className="spinner" style={{ margin: '30px auto' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title" style={{ fontSize: '2.5rem' }}>
            {post.title}
          </h1>
          <div className="breadcrumbs">
            <a href="/" onClick={(e) => { e.preventDefault(); }}>Beranda</a> &gt; {post.title}
          </div>
        </div>
      </section>

      {/* Standalone Content Wrapper */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5' }}>
        <div className="container">
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '45px',
              border: '1.5px solid #F0E6C5',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              maxWidth: '900px',
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#4A4A4A'
            }}
          >
            {/* HTML payload rendering */}
            <div 
              className="post-content-area"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
