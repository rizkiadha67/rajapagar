import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import SinglePage from './pages/SinglePage';
import Contact from './pages/Contact';

export default function App({ initialState }) {
  const [currentPath, setCurrentPath] = useState(initialState.route_path || '/');
  const [pageData, setPageData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  // Normalize site home URL for subfolder support (e.g. Laragon /agc/)
  const siteUrl = initialState.site_url;
  const siteTitle = initialState.site_title;

  // Intercept all internal page transitions to turn them into React SPA navigations
  const navigateTo = async (path) => {
    // Scroll to top instantly
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsMenuOpen(false);
    
    // Normalize path by stripping home URL or subfolder prefixes
    let relativePath = path;
    if (path.startsWith(siteUrl)) {
      relativePath = path.substr(siteUrl.length);
    }
    relativePath = '/' + relativePath.replace(/^\/+|\/+$/g, '');

    // HTML5 History Push
    const targetUrl = siteUrl + (relativePath === '/' ? '' : relativePath);
    window.history.pushState({}, '', targetUrl);
    setCurrentPath(relativePath);

    // Fetch new content via custom WP REST API route
    setIsLoading(true);
    try {
      const response = await fetch(`${siteUrl}/wp-json/rajapagar/v1/route?path=${encodeURIComponent(relativePath)}`);
      if (response.ok) {
        const data = await response.json();
        
        // Merge site info and contact details into the state payload
        const updatedData = {
          ...data,
          site_title: initialState.site_title,
          site_tagline: initialState.site_tagline,
          site_url: initialState.site_url,
          menus: initialState.menus,
          theme_colors: initialState.theme_colors,
          contact: initialState.contact,
          content_options: initialState.content_options,
          route_path: relativePath
        };
        
        setPageData(updatedData);
        
        // Update document tab title
        if (data.type === 'home') {
          document.title = `${siteTitle} – Jasa Las & Konstruksi Besi`;
        } else if (data.post && data.post.title) {
          document.title = `${data.post.title} – ${siteTitle}`;
        } else if (data.type === 'blog-index') {
          document.title = `Blog & Artikel Edukasi – ${siteTitle}`;
        } else {
          document.title = `${siteTitle}`;
        }
      } else {
        // Fallback to 404 payload on error
        setPageData({
          type: '404',
          post: null,
          posts: [],
          site_title: initialState.site_title,
          menus: initialState.menus,
          contact: initialState.contact
        });
        document.title = `Halaman Tidak Ditemukan – ${siteTitle}`;
      }
    } catch (error) {
      console.error('Error fetching page REST route:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sync browser back/forward buttons (Popstate event)
  useEffect(() => {
    const handlePopState = () => {
      // Extract pathname relative to the WordPress home URL
      const currentUrl = window.location.href;
      let relativePath = '/';
      if (currentUrl.startsWith(siteUrl)) {
        relativePath = '/' + currentUrl.substr(siteUrl.length).replace(/^\/+|\/+$/g, '');
      }
      
      // Perform SPA fetch navigation matching back path
      navigateTo(relativePath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept click on generic internal anchors to route via SPA
  useEffect(() => {
    const handleAnchorClicks = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      
      // Check if URL is internal and not an anchor scroll/whatsapp/phone
      if (href && (href.startsWith('/') || href.startsWith(siteUrl)) && !href.includes('#') && !href.includes('wa.me') && !href.includes('mailto:')) {
        e.preventDefault();
        navigateTo(href);
      }
    };

    document.addEventListener('click', handleAnchorClicks);
    return () => document.removeEventListener('click', handleAnchorClicks);
  }, []);

  // Determine which page container to mount based on payload type
  const renderActivePage = () => {
    const cleanPath = currentPath.toLowerCase().replace(/^\/+|\/+$/g, '');

    // High-priority static template routing based on URL path slug
    if (cleanPath === 'profil-kami' || cleanPath === 'about-us') {
      return <About data={pageData} />;
    } else if (cleanPath === 'layanan' || cleanPath.startsWith('layanan/')) {
      return <Services data={pageData} />;
    } else if (cleanPath === 'contact' || cleanPath === 'kontak') {
      return <Contact data={pageData} />;
    }

    switch (pageData.type) {
      case 'home':
        return <Home data={pageData} navigateTo={navigateTo} />;
      case 'page':
        return <SinglePage data={pageData} />;
      case 'post':
        return <SinglePost data={pageData} navigateTo={navigateTo} />;
      case 'blog-index':
        return <Blog data={pageData} navigateTo={navigateTo} />;
      default:
        // Handle 404
        return (
          <div className="section-padding text-center" style={{ backgroundColor: '#FAF5E5', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container">
              <h1 style={{ fontSize: '6rem', color: '#DCA54A', marginBottom: '20px' }}>404</h1>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Halaman Tidak Ditemukan</h2>
              <p style={{ color: '#666', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px auto' }}>
                Maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda.
              </p>
              <button onClick={() => navigateTo('/')} className="btn btn-primary">Kembali ke Beranda</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Interactive sticky Header */}
      <Navbar 
        siteTitle={siteTitle} 
        menus={pageData.menus} 
        currentPath={currentPath} 
        navigateTo={navigateTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        contactPhone={pageData.contact.whatsapp_formatted}
      />

      {/* Loading Overlay Spinner for SPA transitions */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #DCA54A, #D09A40)',
          zIndex: 9999,
          animation: 'pulse 1.5s infinite ease-in-out'
        }} />
      )}

      {/* Primary Page Mount Container */}
      <main className="main-content">
        {renderActivePage()}
      </main>

      {/* Premium Footer */}
      <Footer siteTitle={siteTitle} contact={pageData.contact} navigateTo={navigateTo} />

      {/* Floating Interactive WhatsApp Widget with Luxury Slide-In Support Agent */}
      <div className="wa-widget-container" style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
        {isChatOpen && (
          <div className="wa-chat-box" style={{
            width: '320px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #F0E6C5',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(15, 23, 42, 0.15)',
            overflow: 'hidden',
            fontFamily: 'Outfit, sans-serif',
            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {/* Header */}
            <div style={{
              backgroundColor: '#0F172A',
              padding: '16px 20px',
              borderBottom: '3px solid #DCA54A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative', width: '40px', height: '40px', backgroundColor: '#DCA54A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', color: '#0F172A' }}>
                  RP
                  <span style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', backgroundColor: '#25D366', borderRadius: '50%', border: '2px solid #0F172A', boxShadow: '0 0 5px #25D366' }} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#FFFFFF', lineHeight: '1.2' }}>Aditya - Rajapagar</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Technical Consultant</div>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '1.5rem', lineHeight: '1', padding: '0 5px' }}
              >
                &times;
              </button>
            </div>
            {/* Body */}
            <div style={{ padding: '20px', backgroundColor: '#FAF5E5', minHeight: '100px' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '12px 16px',
                borderRadius: '0 16px 16px 16px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                fontSize: '0.85rem',
                color: '#4A4A4A',
                lineHeight: '1.5',
                position: 'relative'
              }}>
                Halo! Selamat datang di Rajapagar.id. Ada yang bisa kami bantu mengenai pengerjaan pagar, kanopi, tralis kustom, atau survey lokasi gratis hari ini?
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '6px', textAlign: 'right' }}>Online</div>
              </div>
            </div>
            {/* Footer / CTA */}
            <div style={{ padding: '15px 20px', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
              <a 
                href={`https://wa.me/${pageData.contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20tertarik%20konsultasi%20pembuatan%20pagar/kanopi%20dan%20tanya%20estimasi%20jasa`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  setIsChatOpen(false);
                  setShowBadge(false);
                }}
                className="btn btn-whatsapp"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.002-5.08-2.83-6.913-1.827-1.83-4.283-2.836-6.902-2.837-5.4.001-9.797 4.396-9.8 9.8-.001 1.705.452 3.37 1.31 4.814l-.995 3.638 3.786-.993zm12.357-7.464c-.3-.15-1.77-.875-2.045-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.175-.3-.018-.463.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.589-.49-.51-.676-.51-.175-.001-.375-.001-.576-.001-.2 0-.525.075-.8 1.075-.275 1-.95 2.225-1.075 2.475-.125.25-.25.55 0 1.025.25.475 1.575 2.5 3.35 4.025 1.8 1.55 3.3 2.025 3.825 2.225.525.2.85.15 1.175-.175.325-.325 1.375-1.6 1.775-2.15.4-.55.8-.45 1.075-.3.275.15 1.77.875 2.075 1.025.3.15.5.225.575.35.075.125.075.725-.225 1.025z"/>
                </svg>
                <span>Mulai Chat Konsultasi</span>
              </a>
            </div>
          </div>
        )}

        {/* Floating Toggle Button */}
        <button 
          onClick={() => {
            setIsChatOpen(!isChatOpen);
            setShowBadge(false);
          }}
          className="whatsapp-floating"
          style={{
            position: 'relative',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          aria-label="Buka Chat WhatsApp"
        >
          {showBadge && (
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '18px',
              height: '18px',
              backgroundColor: '#EF4444',
              border: '2px solid #FFFFFF',
              color: '#FFFFFF',
              fontSize: '0.65rem',
              fontWeight: 'bold',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)',
              animation: 'pulse-badge 1.5s infinite alternate ease-in-out',
              lineHeight: '1'
            }}>
              1
            </span>
          )}
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.002-5.08-2.83-6.913-1.827-1.83-4.283-2.836-6.902-2.837-5.4.001-9.797 4.396-9.8 9.8-.001 1.705.452 3.37 1.31 4.814l-.995 3.638 3.786-.993zm12.357-7.464c-.3-.15-1.77-.875-2.045-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.175-.3-.018-.463.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.589-.49-.51-.676-.51-.175-.001-.375-.001-.576-.001-.2 0-.525.075-.8 1.075-.275 1-.95 2.225-1.075 2.475-.125.25-.25.55 0 1.025.25.475 1.575 2.5 3.35 4.025 1.8 1.55 3.3 2.025 3.825 2.225.525.2.85.15 1.175-.175.325-.325 1.375-1.6 1.775-2.15.4-.55.8-.45 1.075-.3.275.15 1.77.875 2.075 1.025.3.15.5.225.575.35.075.125.075.725-.225 1.025z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
