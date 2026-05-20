import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import LogoIcon from './LogoIcon';

export default function Navbar({ 
  siteTitle, 
  menus, 
  currentPath, 
  navigateTo, 
  isMenuOpen, 
  setIsMenuOpen,
  contactPhone 
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor page scroll position to apply dynamic background blur transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parse flat menu structure to hierarchical parent-child relationships
  const parentItems = menus.filter(item => item.parent === '0' || item.parent === 0);
  const getChildren = (parentId) => {
    return menus.filter(item => String(item.parent) === String(parentId));
  };

  // Check if a link item points to the active route
  const isActive = (url) => {
    if (url === '/' && currentPath === '/') return true;
    if (url !== '/' && currentPath.startsWith(url)) return true;
    return false;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo and Name with Custom Crown & Fence Vector */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/'); }} className="logo-link">
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#0F172A',
            border: '2px solid #DCA54A',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#DCA54A'
          }}>
            <LogoIcon size={24} color="#DCA54A" />
          </div>
          <span className="logo-text">
            Raja<span>Pagar</span>
          </span>
        </a>

        {/* Desktop Navigation Links with Sub-menu Dropdowns */}
        <nav>
          <ul className="nav-links">
            {parentItems.map((parent) => {
              const children = getChildren(parent.id);
              const hasChildren = children.length > 0;
              
              return (
                <li 
                  key={parent.id} 
                  className={`nav-item ${hasChildren ? 'has-dropdown' : ''} ${isActive(parent.url) ? 'active' : ''}`}
                  style={{ position: 'relative' }}
                >
                  <a 
                    href={parent.url} 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(parent.url);
                    }}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    <span>{parent.title}</span>
                    {hasChildren && <span style={{ fontSize: '0.6rem', opacity: '0.7', transition: 'transform 0.3s' }}>▼</span>}
                  </a>

                  {hasChildren && (
                    <ul className="dropdown-menu">
                      {children.map((child) => (
                        <li key={child.id} className="dropdown-item">
                          <a 
                            href={child.url} 
                            onClick={(e) => {
                              e.preventDefault();
                              navigateTo(child.url);
                            }}
                          >
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Calls-to-action */}
        <div className="nav-cta">
          <a 
            href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#0F172A'
            }}
          >
            <PhoneCall size={16} style={{ color: '#DCA54A' }} />
            <span>{contactPhone}</span>
          </a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            Hubungi Jasa Kami
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="mobile-toggle"
          aria-label={isMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-links">
            {parentItems.map((parent) => {
              const children = getChildren(parent.id);
              const hasChildren = children.length > 0;

              return (
                <li key={parent.id} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <a 
                    href={parent.url} 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(parent.url);
                    }}
                    className={`mobile-nav-item ${isActive(parent.url) ? 'active' : ''}`}
                    style={{ width: '100%' }}
                  >
                    {parent.title}
                  </a>
                  
                  {hasChildren && (
                    <ul className="mobile-submenu" style={{ listStyle: 'none', paddingLeft: '20px', margin: '5px 0 15px 0', borderLeft: '2px solid rgba(220,165,74,0.3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {children.map((child) => (
                        <li key={child.id}>
                          <a 
                            href={child.url} 
                            onClick={(e) => {
                              e.preventDefault();
                              navigateTo(child.url);
                            }}
                            style={{ fontSize: '0.95rem', color: '#64748B', display: 'block', padding: '4px 0', fontWeight: '500' }}
                          >
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-cta">
            <a 
              href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '12px',
                backgroundColor: '#FAF5E5',
                borderRadius: '8px',
                color: '#0F172A',
                border: '1px solid #F0E6C5'
              }}
            >
              <PhoneCall size={18} style={{ color: '#DCA54A' }} />
              <span>{contactPhone}</span>
            </a>
            <a 
              href="/contact" 
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/contact');
              }} 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '12px' }}
            >
              Hubungi Jasa Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
