import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2,
  Compass,
  MessageSquare,
  Globe
} from 'lucide-react';

export default function Contact({ data }) {
  const contact = data.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Pagar Besi & Pagar Otomatis',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Mohon isi kolom Nama dan Nomor Telepon Anda.');
      return;
    }

    const waText = `Halo Rajapagar.id, saya ingin mengajukan estimasi harga:
- *Nama*: ${formData.name}
- *No. HP/WA*: ${formData.phone}
- *Layanan*: ${formData.service}
- *Keterangan Proyek*: ${formData.message || 'Survey lokasi pengukuran gratis'}`;

    const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(waText)}`;
    
    setIsSent(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSent(false);
    }, 1500);
  };

  // Location Compass Blueprint SVG
  const locationCAD = (
    <svg viewBox="0 0 500 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0B0F19' }}>
      <defs>
        <pattern id="contactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220,165,74,0.04)" strokeWidth="0.75"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contactGrid)" />
      
      {/* Compass circles */}
      <circle cx="250" cy="200" r="120" fill="none" stroke="#DCA54A" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
      <circle cx="250" cy="200" r="140" fill="none" stroke="#DCA54A" strokeWidth="1.5" opacity="0.2" />
      <circle cx="250" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

      {/* Compass axes */}
      <line x1="50" y1="200" x2="450" y2="200" stroke="rgba(220,165,74,0.2)" strokeWidth="1" />
      <line x1="250" y1="20" x2="250" y2="380" stroke="rgba(220,165,74,0.2)" strokeWidth="1" />

      {/* Outer borders */}
      <rect x="15" y="15" width="470" height="370" fill="none" stroke="#DCA54A" strokeWidth="1.5" opacity="0.25" />

      {/* Coordinates markers */}
      <text x="260" y="35" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">N 0° 0' 0"</text>
      <text x="260" y="375" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">S 180° 0' 0"</text>
      <text x="400" y="195" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">E 90° 0' 0"</text>
      <text x="20" y="195" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">W 270° 0' 0"</text>

      {/* Target Radar crosshair */}
      <g transform="translate(250, 200)">
        <polygon points="0,-15 12,0 0,15 -12,0" fill="none" stroke="#DCA54A" strokeWidth="2" />
        <circle cx="0" cy="0" r="4" fill="#25D366" />
        
        {/* Radar pulses */}
        <circle cx="0" cy="0" r="25" fill="none" stroke="#DCA54A" strokeWidth="1" opacity="0.6">
          <animate attributeName="r" values="5;45" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Technical location details */}
      <g transform="translate(30, 45)">
        <rect width="180" height="75" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
        <rect x="3" y="3" width="174" height="69" fill="none" stroke="rgba(220,165,74,0.3)" strokeWidth="0.5" />
        <text x="12" y="20" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">HEADQUARTERS ANCHOR</text>
        <text x="12" y="35" fill="#FFFFFF" fontSize="8" fontFamily="monospace">LAT: -6.229156 S</text>
        <text x="12" y="48" fill="#FFFFFF" fontSize="8" fontFamily="monospace">LONG: 106.816492 E</text>
        <text x="12" y="60" fill="#25D366" fontSize="8" fontFamily="monospace" fontWeight="bold">RADAR: active_scan</text>
      </g>

      <g transform="translate(290, 310)">
        <rect width="180" height="50" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
        <text x="10" y="20" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">SURVEY COVERAGE</text>
        <text x="10" y="35" fill="#FFFFFF" fontSize="8" fontFamily="monospace">AREA: JABODETABEK REGION</text>
      </g>

      {/* Corner Ticks */}
      <path d="M 15 25 h 15 M 15 15 v 15 M 485 25 h -15 M 485 15 v 15 M 15 375 h 15 M 15 385 v -15 M 485 375 h -15 M 485 385 v -15" stroke="#DCA54A" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );

  return (
    <div>
      {/* Page Banner Header with Premium Overlays */}
      <section className="page-banner" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,165,74,0.1) 0%, transparent 70%)',
          zIndex: 1
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="page-banner-title" style={{ fontSize: '3rem', fontWeight: '800' }}>Hubungi Jasa Kami</h1>
          <div className="breadcrumbs" style={{ fontSize: '0.95rem' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); }} style={{ color: '#DCA54A' }}>Beranda</a> &gt; Kontak Kami
          </div>
        </div>
      </section>

      {/* Main Form and Grid Rows */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5' }}>
        <div className="container contact-segment-grid" style={{ gap: '40px' }}>
          
          {/* LEFT COLUMN: Contact Cards & Info */}
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={14} style={{ color: '#DCA54A' }} />
              <span>Kontak Kantor Utama</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>
              {data.post?.title || "Konsultasi & Estimasi Spek Besi"}
            </h2>

            {data.post?.content && data.post.content.trim() !== '<p>Silakan edit halaman ini melalui Dashboard WordPress Admin (Pages -> Edit) untuk mengubah tulisan di sini.</p>' && data.post.content.trim() !== '' ? (
              <div 
                className="wp-editor-content"
                dangerouslySetInnerHTML={{ __html: data.post.content }}
                style={{
                  color: '#4A4A4A',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  marginBottom: '30px'
                }}
              />
            ) : (
              <p style={{ color: '#4A4A4A', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.05rem' }}>
                Punya gambar denah khusus atau coretan arsitek? Kirimkan kepada kami untuk survey lokasi pengukuran gratis se-Jabodetabek oleh tenaga las berpengalaman.
              </p>
            )}

            <div className="contact-info-list" style={{ gap: '16px' }}>
              
              <div className="contact-info-card" style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #F0E6C5', color: '#0F172A', borderRadius: '12px' }}>
                <div className="contact-info-icon" style={{ backgroundColor: 'rgba(220,165,74,0.1)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="contact-info-title" style={{ color: '#0F172A', fontWeight: '700' }}>Alamat Workshop</h4>
                  <p className="contact-info-desc" style={{ color: '#555', fontSize: '0.9rem' }}>
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="contact-info-card" style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #F0E6C5', color: '#0F172A', borderRadius: '12px' }}>
                <div className="contact-info-icon" style={{ backgroundColor: 'rgba(220,165,74,0.1)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="contact-info-title" style={{ color: '#0F172A', fontWeight: '700' }}>No. HP &amp; WhatsApp</h4>
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-info-desc" style={{ color: '#DCA54A', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {contact.whatsapp_formatted}
                  </a>
                </div>
              </div>

              <div className="contact-info-card" style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #F0E6C5', color: '#0F172A', borderRadius: '12px' }}>
                <div className="contact-info-icon" style={{ backgroundColor: 'rgba(220,165,74,0.1)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="contact-info-title" style={{ color: '#0F172A', fontWeight: '700' }}>Email Resmi</h4>
                  <a href={`mailto:${contact.email}`} className="contact-info-desc" style={{ color: '#555', wordBreak: 'break-all', fontSize: '0.9rem' }}>
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-card" style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #F0E6C5', color: '#0F172A', borderRadius: '12px' }}>
                <div className="contact-info-icon" style={{ backgroundColor: 'rgba(220,165,74,0.1)' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="contact-info-title" style={{ color: '#0F172A', fontWeight: '700' }}>Jam Operasional</h4>
                  <p className="contact-info-desc" style={{ color: '#555', fontSize: '0.9rem' }}>
                    Senin - Sabtu: 08:00 - 17:00 WIB (Minggu Libur)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: WhatsApp Form Redirector */}
          <div>
            <div className="contact-form-card" style={{ border: '2px solid #DCA54A', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <h3 className="contact-form-title" style={{ color: '#0F172A', fontWeight: '700', marginBottom: '8px' }}>
                Kirim Pesan Estimasi Harga
              </h3>
              <p style={{ color: '#666', fontSize: '0.85rem', textAlign: 'center', marginBottom: '24px' }}>
                Tulis data Anda di bawah ini untuk tersambung ke WhatsApp admin kami.
              </p>

              {isSent ? (
                <div style={{
                  padding: '40px 10px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <CheckCircle2 size={50} style={{ color: '#25D366' }} />
                  <h4 style={{ color: '#0F172A', fontWeight: 'bold' }}>Menghubungkan ke WhatsApp...</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    Harap tunggu sebentar, kami sedang mengarahkan pesan Anda ke portal chat resmi Rajapagar.id.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#0F172A', fontWeight: '600' }}>Nama Lengkap *</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control" 
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{ borderRadius: '8px' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ color: '#0F172A', fontWeight: '600' }}>No. WhatsApp/HP *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      className="form-control" 
                      placeholder="Contoh: 081234567890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      style={{ borderRadius: '8px' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ color: '#0F172A', fontWeight: '600' }}>Pilih Layanan</label>
                    <select 
                      name="service" 
                      className="form-control"
                      value={formData.service}
                      onChange={handleInputChange}
                      style={{ borderRadius: '8px' }}
                    >
                      <option value="Pagar Besi &amp; Pagar Otomatis">Pagar Besi &amp; Pagar Otomatis</option>
                      <option value="Kanopi Minimalis &amp; Carport">Kanopi Minimalis &amp; Carport</option>
                      <option value="Tralis Jendela Custom">Tralis Jendela Custom</option>
                      <option value="Tangga Besi &amp; Railing Balkon">Tangga Besi &amp; Railing Balkon</option>
                      <option value="Fabrikasi Baja / Jasa Las Lainnya">Fabrikasi Baja / Jasa Las Lainnya</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ color: '#0F172A', fontWeight: '600' }}>Keterangan Tambahan / Pesan</label>
                    <textarea 
                      name="message" 
                      className="form-control" 
                      placeholder="Contoh: Pagar minimalis ukuran lebar 4m tinggi 2m, motif garis-garis..."
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ borderRadius: '8px' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', gap: '10px', padding: '14px', borderRadius: '8px', fontSize: '1rem' }}>
                    <MessageSquare size={18} />
                    <span>Kirim &amp; Hubungkan via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* GEOGRAPHIC RADAR SURVEY MAP BLOCK */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Compass size={14} style={{ color: '#DCA54A' }} />
              <span>Radar Cakupan Layanan</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800' }}>Cakupan Survey Jabodetabek</h2>
            <p style={{ color: '#4A4A4A', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.05rem' }}>
              Kami melayani survey lokasi gratis langsung ke alamat hunian, perkantoran, ruko, maupun pergudangan komersial Anda di seluruh wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
            </p>
            <p style={{ color: '#666', marginBottom: '30px', fontSize: '0.95rem' }}>
              Teknisi ukur kami hadir dengan kelengkapan lengkap mulai dari alat ukur meteran laser digital, micrometer ketebalan logam, katalog ragam contoh bahan besi, serta album foto pola desain terpasang. Semua proses survey lapangan ini <strong>100% bebas biaya</strong> tanpa kewajiban pemesanan apa pun.
            </p>
            <a href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20tertarik%20tanya%20estimasi%20jasa%20dan%20booking%20jadwal%20survey%20lokasi`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '12px 28px', borderRadius: '8px' }}>
              Booking Jadwal Survey Gratis
            </a>
          </div>

          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            border: '2px solid #DCA54A',
            backgroundColor: '#0B0F19',
            boxShadow: '0 25px 50px -12px rgba(15,23,42,0.3)',
            minHeight: '320px'
          }}>
            {locationCAD}
          </div>
        </div>
      </section>

    </div>
  );
}
