import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  Ruler, 
  Users, 
  Hammer, 
  Milestone,
  CheckCircle,
  FileCheck,
  Cpu
} from 'lucide-react';

export default function About({ data }) {
  const contact = data.contact;

  const steps = [
    {
      num: '01',
      title: 'Survey & Pengukuran Digital',
      desc: 'Tim kami mendatangi lokasi Anda di Jabodetabek secara gratis untuk mengukur dimensi pagar, kanopi, atau tangga menggunakan laser meter digital presisi milimeter.'
    },
    {
      num: '02',
      title: 'Desain Blueprints & Rencana SPK',
      desc: 'Mendiskusikan motif desain (minimalis, klasik, industrial) serta menghitung ketebalan material hollow besi bergaransi standar SNI tebal penuh dalam SPK tertulis.'
    },
    {
      num: '03',
      title: 'Fabrikasi Presisi di Workshop',
      desc: 'Proses pemotongan baja, pengelasan keliling penuh oleh welder ahli bersertifikat BNSP, penghalusan sambungan las, hingga lapis antikarat epoxy primer zinc chromate.'
    },
    {
      num: '04',
      title: 'Pemasangan & QA Inspeksi',
      desc: 'Pengiriman barang menggunakan armada mandiri dan perakitan rapi langsung di lokasi Anda. Kami menjamin hasil akhir kokoh, bersih, bergaransi penuh 1 tahun.'
    }
  ];

  // Isometric Welder Weld-joint Blueprint SVG
  const weldJointCAD = (
    <svg viewBox="0 0 500 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0B0F19' }}>
      {/* Grid Pattern */}
      <defs>
        <pattern id="aboutGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(220, 165, 74, 0.04)" strokeWidth="0.75"/>
        </pattern>
        <pattern id="aboutDots" width="15" height="15" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.5" fill="rgba(220, 165, 74, 0.08)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#aboutGrid)" />
      <rect width="100%" height="100%" fill="url(#aboutDots)" opacity="0.6" />

      {/* Background circular highlights */}
      <circle cx="250" cy="200" r="130" fill="none" stroke="rgba(220, 165, 74, 0.12)" strokeWidth="1" strokeDasharray="5 10" />
      <circle cx="250" cy="200" r="180" fill="none" stroke="rgba(220, 165, 74, 0.06)" strokeWidth="0.5" />
      
      {/* Outer CAD Border */}
      <rect x="15" y="15" width="470" height="370" fill="none" stroke="#DCA54A" strokeWidth="1.5" opacity="0.25" />

      {/* Structural Steel Joint Weldment Detail */}
      <g transform="translate(60, 20)">
        {/* Steel hollow bar 1 (Vertical) */}
        <polygon points="120,310 180,285 180,140 120,165" fill="none" stroke="#DCA54A" strokeWidth="2.5" />
        <polygon points="125,305 175,282 175,145 125,170" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        
        {/* Mitered Join line (45 degree welding plane) */}
        <line x1="180" y1="140" x2="280" y2="100" stroke="#DCA54A" strokeWidth="3" />
        
        {/* Steel hollow bar 2 (Horizontal angle) */}
        <polygon points="180,140 280,100 320,115 220,155" fill="none" stroke="#DCA54A" strokeWidth="2.5" />
        <line x1="180" y1="140" x2="220" y2="155" stroke="#DCA54A" strokeWidth="2.5" />
        <line x1="280" y1="100" x2="220" y2="155" stroke="rgba(220,165,74,0.3)" strokeWidth="1.5" />
        
        {/* Weld bead representation (sparks/joint overlay) */}
        <path d="M 180 140 Q 230 120 280 100" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="3 3" />
        <path d="M 180 140 Q 200 148 220 155" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="3 3" />

        {/* Weld Thickness callout */}
        <circle cx="210" cy="130" r="16" fill="none" stroke="#DCA54A" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="225" y1="120" x2="310" y2="70" stroke="#DCA54A" strokeWidth="1" />
        <circle cx="310" cy="70" r="2.5" fill="#DCA54A" />
        <text x="320" y="65" fill="#DCA54A" fontSize="8" fontFamily="monospace" fontWeight="bold">FULL PENETRATION WELD</text>
        <text x="320" y="75" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace">JIS Z 3801 CERTIFIED</text>

        {/* Dimension indicator lines */}
        {/* Angle 45 degree indicator */}
        <path d="M 180 180 A 40 40 0 0 1 210 143" fill="none" stroke="#25D366" strokeWidth="1" />
        <text x="200" y="172" fill="#25D366" fontSize="9" fontFamily="monospace" fontWeight="bold">45.0°</text>

        {/* Hollow profile width dimension */}
        <line x1="120" y1="330" x2="180" y2="305" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M120 330 l5 -3 M120 330 l3 5 M180 305 l-5 3 M180 305 l-3 -5" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
        <text x="135" y="340" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace" transform="rotate(-23 135 340)">W: 80 mm</text>

        <text x="40" y="110" fill="rgba(220,165,74,0.8)" fontSize="8" fontFamily="monospace">PRIMER: ZINC CHROMATE EPOXY</text>
        <path d="M150 115 l10 30" stroke="rgba(220,165,74,0.6)" strokeWidth="1" />
      </g>

      {/* Blueprint Info Box */}
      <g transform="translate(25, 290)">
        <rect width="130" height="70" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
        <text x="10" y="18" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">WELDER CERT</text>
        <text x="10" y="33" fill="#FFFFFF" fontSize="8" fontFamily="monospace">TYPE: BNSP CLASS-I</text>
        <text x="10" y="46" fill="#FFFFFF" fontSize="8" fontFamily="monospace">GAS: ARGON PURITY</text>
        <text x="10" y="58" fill="#25D366" fontSize="8" fontFamily="monospace" fontWeight="bold">JOINT: 100% RELIABLE</text>
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
          <h1 className="page-banner-title" style={{ fontSize: '3rem', fontWeight: '800' }}>Tentang Kami</h1>
          <div className="breadcrumbs" style={{ fontSize: '0.95rem' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); }} style={{ color: '#DCA54A' }}>Beranda</a> &gt; Profil Perusahaan
          </div>
        </div>
      </section>

      {/* Main Core Description Block */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Visual Illustration */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid #DCA54A',
              boxShadow: '0 25px 50px -12px rgba(15,23,42,0.25)',
              backgroundColor: '#0B0F19'
            }}>
              {weldJointCAD}
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              right: '-15px',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '12px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              borderLeft: '4px solid #DCA54A'
            }}>
              <FileCheck size={28} style={{ color: '#DCA54A' }} />
              <div>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#DCA54A', fontFamily: 'Outfit' }}>BNSP Welder</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Jaminan Las Presisi</div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Cpu size={14} style={{ color: '#DCA54A' }} />
              <span>Profil Bengkel Las Premium</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>PT Cahaya Jaya Berkah Nusantara</h2>
            <p style={{ fontSize: '1.1rem', color: '#0F172A', lineHeight: '1.8', marginBottom: '20px', fontWeight: '500' }}>
              Melalui platform utama kami <strong>Rajapagar.id</strong>, kami hadir memberikan standar baru kemewahan, kejujuran, dan ketahanan dalam industri konstruksi logam Jabodetabek.
            </p>
            <p style={{ color: '#4A4A4A', marginBottom: '24px', lineHeight: '1.7' }}>
              Kami menolak keras praktik mengurangi ketebalan pipa hollow (besi hollow banci) demi memotong biaya. Seluruh unit pagar otomatis, kanopi kaca tempered, teralis jendela minimalis, dan tangga cafe industrial kami dirakit oleh welder berlisensi BNSP menggunakan kawat las bermutu tinggi, digerinda presisi, serta diproteksi dengan cat dasar primer epoxy zinc chromate bermerek kelas satu.
            </p>

            {data.post?.content && (
              <div 
                className="wp-editor-content"
                dangerouslySetInnerHTML={{ __html: data.post.content }}
                style={{
                  marginBottom: '28px',
                  borderLeft: '3px solid #DCA54A',
                  paddingLeft: '16px',
                  color: '#4A4A4A',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  backgroundColor: '#FAF5E5',
                  padding: '16px',
                  borderRadius: '0 12px 12px 0'
                }}
              />
            )}
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: '#DCA54A', flexShrink: 0 }}><Ruler size={20} /></div>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>Pengukuran Laser Digital</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: '#DCA54A', flexShrink: 0 }}><Hammer size={20} /></div>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>Finishing Epoxy Rapi</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: '#DCA54A', flexShrink: 0 }}><ShieldCheck size={20} /></div>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>100% Besi SNI Tebal</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: '#DCA54A', flexShrink: 0 }}><Users size={20} /></div>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>Tim Welder Lisensi</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RANCANGAN ALUR KERJA (LUXURY TIMELINE PIPELINE) */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5', borderTop: '1px solid #F0E6C5', borderBottom: '1px solid #F0E6C5' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Milestone size={14} style={{ color: '#DCA54A' }} />
              <span>Pipeline Kerja</span>
            </span>
            <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>Alur Kerja Presisi &amp; Rapi</h2>
            <p className="section-desc" style={{ color: '#64748B' }}>
              Setiap tahapan dirancang sistematis guna memastikan transparansi bahan baku dan kepuasan hasil akhir las bangunan Anda.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {steps.map((st) => (
              <div key={st.num} style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 30px',
                borderRadius: '16px',
                border: '1.5px solid #F0E6C5',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.02)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              className="why-card"
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '30px',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'rgba(220, 165, 74, 0.3)',
                  lineHeight: '1'
                }}>{st.num}</div>
                
                <h3 style={{ fontSize: '1.2rem', color: '#0F172A', marginTop: '12px', marginBottom: '14px', fontWeight: '700' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#4A4A4A', lineHeight: '1.6' }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES / MISI MEWAH */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Text Block */}
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Award size={14} style={{ color: '#DCA54A' }} />
              <span>Visi &amp; Komitmen Mutu</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800' }}>Kualitas Adalah Mahkota Reputasi</h2>
            <p style={{ color: '#4A4A4A', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.05rem' }}>
              Di PT Cahaya Jaya Berkah Nusantara, kami percaya bahwa setiap produk las besi yang dipasang adalah etalase berjalan untuk keandalan konstruksi kami.
            </p>
            <p style={{ color: '#666', marginBottom: '30px', fontSize: '0.95rem' }}>
              Oleh sebab itu, kami memiliki kebijakan kualitas yang ketat: tidak menyusupkan material hollow tipis tanpa persetujuan klien, menggunakan kawat las berspesifikasi tinggi, menyikat bersih sisa fluks las, dan membalut seluruh bagian sambungan dengan zinc chromate primer. Kami bertekad agar struktur besi bangunan Anda kokoh menghadapi panas matahari dan hujan tropis Indonesia.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(220,165,74,0.1)',
                  color: '#DCA54A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Milestone size={22} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '4px', fontWeight: '700' }}>Transparansi Rencana Anggaran (SPK)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>Semua ketebalan profil besi hollow, tipe motor otomatis, dan jenis atap kanopi ditulis transparan pada kontrak kerja tertulis sebelum perakitan dimulai.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(220,165,74,0.1)',
                  color: '#DCA54A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Zap size={22} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '4px', fontWeight: '700' }}>Integrasi Motor Otomatis Pintar</h4>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>Kami mengadopsi sistem pengunci pagar nirkabel pintar (wireless automated gates) DEA Italia kelas premium untuk kenyamanan rumah modern Anda.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Trust Block (Luxury Dark Glassmorphic Card) */}
          <div>
            <div style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '45px 40px',
              border: '2px solid #DCA54A',
              boxShadow: '0 25px 50px -12px rgba(15,23,42,0.3)',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.6rem', color: '#DCA54A', marginBottom: '20px', textAlign: 'center', fontWeight: '700' }}>Konsultasi &amp; Estimasi Harga Jasa</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '32px', textAlign: 'center', lineHeight: '1.7' }}>
                Diskusikan model pagar otomatis, kanopi tempered glass, railing tangga industrial, atau teralis anti-maling custom Anda bersama tim ahli kami gratis.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20tertarik%20tanya%20estimasi%20jasa%20dan%20jadwal%20survey%20lokasi`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%', padding: '14px', borderRadius: '8px' }}>
                  Hubungi Via WhatsApp
                </a>
                <a href="/contact" className="btn btn-secondary" style={{ width: '100%', borderColor: '#DCA54A', color: '#DCA54A', padding: '14px', borderRadius: '8px' }}>
                  Kunjungi Halaman Kontak
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
