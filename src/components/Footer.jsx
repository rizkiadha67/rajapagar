import React from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import LogoIcon from './LogoIcon';

export default function Footer({ siteTitle, contact, navigateTo }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <footer>
      {/* Top Footer Widget Grid */}
      <div className="footer-top">
        <div className="container footer-grid">
          
          {/* Widget 1: Company Profile Info */}
          <div className="footer-widget">
            <div className="logo-link" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#FAF5E5',
                border: '2px solid #DCA54A',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#DCA54A'
              }}>
                <LogoIcon size={18} color="#DCA54A" />
              </div>
              <span className="logo-text" style={{ color: '#FFFFFF', fontSize: '1.3rem' }}>
                Raja<span style={{ color: '#DCA54A' }}>Pagar</span>
              </span>
            </div>
            <p className="footer-about-text">
              Rajapagar.id merupakan portal penyedia jasa las profesional di bawah kelolaan <strong>PT Cahaya Jaya Berkah Nusantara</strong>. 
              Kami memproduksi serta memasang pagar besi custom, tralis, kanopi, dan tangga dengan presisi tinggi.
            </p>
          </div>

          {/* Widget 2: Navigasi Layanan */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Layanan Kami</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="/layanan/pagar-otomatis" onClick={(e) => handleNavClick(e, '/layanan/pagar-otomatis')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ChevronRight size={14} style={{ color: '#DCA54A' }} />
                  <span>Pagar Besi &amp; Otomatis</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a href="/layanan/kanopi-carport" onClick={(e) => handleNavClick(e, '/layanan/kanopi-carport')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ChevronRight size={14} style={{ color: '#DCA54A' }} />
                  <span>Kanopi Carport Mewah</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a href="/layanan/teralis-jendela" onClick={(e) => handleNavClick(e, '/layanan/teralis-jendela')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ChevronRight size={14} style={{ color: '#DCA54A' }} />
                  <span>Tralis Jendela Custom</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a href="/layanan/tangga-mezanin" onClick={(e) => handleNavClick(e, '/layanan/tangga-mezanin')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ChevronRight size={14} style={{ color: '#DCA54A' }} />
                  <span>Tangga Besi Industrial</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a href="/layanan" onClick={(e) => handleNavClick(e, '/layanan')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ChevronRight size={14} style={{ color: '#DCA54A' }} />
                  <span>Semua Pilihan Jasa</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Widget 3: Quick Navigation */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Menu Cepat</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="/" onClick={(e) => handleNavClick(e, '/')}>Beranda</a>
              </li>
              <li className="footer-link-item">
                <a href="/profil-kami" onClick={(e) => handleNavClick(e, '/profil-kami')}>Tentang Kami</a>
              </li>
              <li className="footer-link-item">
                <a href="/layanan" onClick={(e) => handleNavClick(e, '/layanan')}>Layanan &amp; Jasa</a>
              </li>
              <li className="footer-link-item">
                <a href="/blog-artikel" onClick={(e) => handleNavClick(e, '/blog-artikel')}>Edukasi &amp; Blog</a>
              </li>
              <li className="footer-link-item">
                <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Kontak Kami</a>
              </li>
            </ul>
          </div>

          {/* Widget 4: Konten Hubungi */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Hubungi Kami</h3>
            <ul className="footer-links" style={{ gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: '#DCA54A', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>
                  {contact.address}
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: '#DCA54A', flexShrink: 0 }} />
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>
                  {contact.whatsapp_formatted}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: '#DCA54A', flexShrink: 0 }} />
                <a href={`mailto:${contact.email}`} style={{ fontSize: '0.9rem', color: '#CBD5E1', wordBreak: 'break-all' }}>
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© {currentYear} <strong>{siteTitle}</strong>. Semua hak cipta dilindungi undang-undang.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacy-policy" onClick={(e) => handleNavClick(e, '/privacy-policy')} style={{ color: '#64748B' }}>Kebijakan Privasi</a>
            <span style={{ color: '#334155' }}>|</span>
            <span style={{ color: '#64748B' }}>Jasa Las Professional</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
