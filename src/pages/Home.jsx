import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Wrench, 
  ChevronRight, 
  Calendar, 
  User, 
  CheckCircle2, 
  ArrowRight,
  FlameKindling,
  Calculator,
  MessageSquare,
  Star,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function Home({ data, navigateTo }) {
  const latestPosts = data.posts?.slice(0, 3) || [];
  const contact = data.contact;

  // Interactive Live Price Estimator state variables
  const [estService, setEstService] = useState('pagar');
  const [estWidth, setEstWidth] = useState(4);
  const [estHeight, setEstHeight] = useState(2);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  // Recalculate price estimation ranges whenever service or sliders change
  useEffect(() => {
    let min = 0;
    let max = 0;

    if (estService === 'pagar') {
      const area = estWidth * estHeight;
      min = area * 450000;
      max = area * 850000;
    } else if (estService === 'kanopi') {
      const area = estWidth * estHeight;
      min = area * 380000;
      max = area * 780000;
    } else if (estService === 'tralis') {
      // Width represents number of windows for tralis
      min = estWidth * 250000;
      max = estWidth * 450000;
    } else if (estService === 'tangga') {
      // Width represents height/run in meters
      min = estWidth * 1200000;
      max = estWidth * 2400000;
    }

    setPriceMin(min);
    setPriceMax(max);
  }, [estService, estWidth, estHeight]);

  const formatRupiah = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Generate WhatsApp consult redirection with calculated quote data
  const handleQuoteRedirect = () => {
    const serviceLabel = {
      pagar: 'Pagar Besi Custom & Elektrik (SNI Grade)',
      kanopi: 'Kanopi Rumah & Carport',
      tralis: 'Tralis Jendela Pengaman',
      tangga: 'Tangga Besi Industrial & Balkon'
    }[estService];

    const specs = estService === 'tralis' 
      ? `- Jumlah Lubang Jendela: ${estWidth} Unit`
      : estService === 'tangga'
      ? `- Panjang/Tinggi Tangga: ${estWidth} Meter`
      : `- Dimensi: Lebar ${estWidth}m x Tinggi ${estHeight}m (Total ${estWidth * estHeight} m2)`;

    const text = `Halo Rajapagar.id, saya tertarik untuk melakukan survey gratis dan pemesanan jasa las. Berikut estimasi hitungan saya dari website:
- *Jasa*: ${serviceLabel}
${specs}
- *Estimasi Kisaran*: ${formatRupiah(priceMin)} s/d ${formatRupiah(priceMax)}

Mohon infokan jadwal survey lokasi terdekat untuk pengukuran presisi. Terima kasih.`;

    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Premium Architectural CAD Wireframe SVGs
  const cadHeroSVG = (
    <svg viewBox="0 0 500 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0B0F19' }}>
      {/* Blueprint Grid Lines */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 165, 74, 0.05)" strokeWidth="1"/>
        </pattern>
        <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.75" fill="rgba(220, 165, 74, 0.1)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#dotGrid)" opacity="0.7" />

      {/* Radial High-Tech Glow */}
      <circle cx="250" cy="200" r="160" fill="none" stroke="rgba(220, 165, 74, 0.15)" strokeWidth="1" strokeDasharray="10 15" />
      <circle cx="250" cy="200" r="220" fill="none" stroke="rgba(220, 165, 74, 0.08)" strokeWidth="0.5" />

      {/* Blueprint Drawing Border */}
      <rect x="15" y="15" width="470" height="370" fill="none" stroke="#DCA54A" strokeWidth="1.5" opacity="0.3" />
      
      {/* Structural Automated Sliding Gate Wireframe (Isometric representation) */}
      <g transform="translate(40, -10)">
        {/* Foundation line */}
        <line x1="50" y1="310" x2="380" y2="230" stroke="rgba(220,165,74,0.3)" strokeWidth="2" strokeDasharray="5 5" />
        
        {/* Left concrete column */}
        <line x1="80" y1="300" x2="80" y2="120" stroke="#DCA54A" strokeWidth="2.5" />
        <line x1="105" y1="290" x2="105" y2="115" stroke="rgba(220,165,74,0.5)" strokeWidth="1.5" />
        <line x1="80" y1="120" x2="105" y2="115" stroke="#DCA54A" strokeWidth="2" />
        {/* Column Hatching */}
        <path d="M80 150 l25 -5 M80 180 l25 -5 M80 210 l25 -5 M80 240 l25 -5 M80 270 l25 -5" stroke="rgba(220,165,74,0.2)" strokeWidth="1" />

        {/* Right concrete column */}
        <line x1="330" y1="240" x2="330" y2="60" stroke="#DCA54A" strokeWidth="2.5" />
        <line x1="355" y1="230" x2="355" y2="55" stroke="rgba(220,165,74,0.5)" strokeWidth="1.5" />
        <line x1="330" y1="60" x2="355" y2="55" stroke="#DCA54A" strokeWidth="2" />
        <path d="M330 90 l25 -5 M330 120 l25 -5 M330 150 l25 -5 M330 180 l25 -5 M330 210 l25 -5" stroke="rgba(220,165,74,0.2)" strokeWidth="1" />

        {/* Sliding Gate Main Frame (Steel Hollow) */}
        <polygon points="120,280 310,235 310,95 120,140" fill="none" stroke="#DCA54A" strokeWidth="3" />
        <polygon points="125,275 305,232 305,100 125,143" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Vertical Pickets (Hollow bars) */}
        <line x1="140" y1="275" x2="140" y2="135" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="160" y1="270" x2="160" y2="130" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="180" y1="265" x2="180" y2="125" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="200" y1="260" x2="200" y2="120" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="220" y1="255" x2="220" y2="115" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="240" y1="250" x2="240" y2="110" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="260" y1="245" x2="260" y2="105" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="280" y1="240" x2="280" y2="100" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="300" y1="235" x2="300" y2="95" stroke="#DCA54A" strokeWidth="1.5" />

        {/* Modern Wood/Laser-cut Accent middle block */}
        <polygon points="120,210 310,165 310,145 120,190" fill="rgba(220,165,74,0.15)" stroke="#DCA54A" strokeWidth="1.5" />
        <path d="M125 200 l10 -15 M150 195 l10 -15 M175 190 l10 -15 M200 185 l10 -15 M225 180 l10 -15 M250 175 l10 -15 M275 170 l10 -15 M300 165 l5 -8" stroke="rgba(220,165,74,0.5)" strokeWidth="1" />

        {/* Gate Sliding track, rollers, and gear motor */}
        <line x1="100" y1="285" x2="360" y2="223" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="150" cy="274" r="5" fill="none" stroke="#DCA54A" strokeWidth="2" />
        <circle cx="280" cy="243" r="5" fill="none" stroke="#DCA54A" strokeWidth="2" />
        
        {/* Sliding Motor Box Graphic */}
        <polygon points="320,232 345,226 345,200 320,206" fill="#0B0F19" stroke="#DCA54A" strokeWidth="1.5" />
        <line x1="320" y1="206" x2="345" y2="200" stroke="#DCA54A" strokeWidth="1" />
        
        {/* Dimension indicator lines */}
        {/* Height indicator */}
        <line x1="60" y1="300" x2="60" y2="120" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M60 300 l-3-5 M60 300 l3-5 M60 120 l-3 5 M60 120 l3 5" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
        <text x="45" y="210" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace" transform="rotate(-90 45 210)">H: 2200 mm</text>

        {/* Width indicator */}
        <line x1="120" y1="305" x2="310" y2="260" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M120 305 l5 -3 M120 305 l3 5 M310 260 l-5 3 M310 260 l-3 -5" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
        <text x="180" y="295" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace" transform="rotate(-13 180 295)">W: 4500 mm</text>

        {/* Technical annotation labels */}
        <text x="325" y="190" fill="#DCA54A" fontSize="8" fontFamily="monospace" fontWeight="bold">OPSI: ELECTRIC ACTUATOR</text>
        <path d="M330 195 l-5 12" stroke="#DCA54A" strokeWidth="1" />

        <text x="135" y="75" fill="rgba(220,165,74,0.8)" fontSize="8" fontFamily="monospace">STEEL FRAME: HOLLOW 40x80 SNI</text>
        <path d="M180 80 l10 25" stroke="rgba(220,165,74,0.6)" strokeWidth="1" />
      </g>

      {/* Drawing Title Box block */}
      <g transform="translate(340, 310)">
        <rect width="140" height="70" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
        <rect x="3" y="3" width="134" height="64" fill="none" stroke="#DCA54A" strokeWidth="0.5" opacity="0.5" />
        <text x="10" y="20" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">CLIENT: RAJAPAGAR</text>
        <text x="10" y="35" fill="#FFFFFF" fontSize="8" fontFamily="monospace">DWG: FENCE_CUSTOM_SNI</text>
        <text x="10" y="48" fill="#FFFFFF" fontSize="8" fontFamily="monospace">SCALE: 1:25 [METRIC]</text>
        <text x="10" y="60" fill="#25D366" fontSize="8" fontFamily="monospace" fontWeight="bold">STATUS: APPROVED</text>
      </g>

      {/* Decorative Blueprint ticks */}
      <path d="M 15 25 h 15 M 15 15 v 15 M 485 25 h -15 M 485 15 v 15 M 15 375 h 15 M 15 385 v -15 M 485 375 h -15 M 485 385 v -15" stroke="#DCA54A" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );

  const cadServicesSVGs = {
    pagar: (
      <svg viewBox="0 0 400 250" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0F172A' }}>
        <rect width="100%" height="100%" fill="none" stroke="rgba(220,165,74,0.1)" strokeWidth="1" />
        {/* Isometric fence panels blueprint */}
        <path d="M 50 150 L 150 100 L 250 150 L 350 100" fill="none" stroke="rgba(220, 165, 74, 0.2)" strokeWidth="2" strokeDasharray="3 3" />
        {/* Gate panels */}
        <polygon points="60,190 200,140 200,60 60,110" fill="none" stroke="#DCA54A" strokeWidth="2.5" />
        {/* Vertical pickets */}
        <line x1="80" y1="183" x2="80" y2="103" stroke="#DCA54A" strokeWidth="1" />
        <line x1="100" y1="176" x2="100" y2="96" stroke="#DCA54A" strokeWidth="1" />
        <line x1="120" y1="169" x2="120" y2="89" stroke="#DCA54A" strokeWidth="1" />
        <line x1="140" y1="162" x2="140" y2="82" stroke="#DCA54A" strokeWidth="1" />
        <line x1="160" y1="155" x2="160" y2="75" stroke="#DCA54A" strokeWidth="1" />
        <line x1="180" y1="147" x2="180" y2="67" stroke="#DCA54A" strokeWidth="1" />
        {/* Text */}
        <text x="70" y="220" fill="#FFFFFF" fontSize="9" fontFamily="monospace" opacity="0.6">AUTOMATIC SLIDING FENCE</text>
        <text x="260" y="50" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">HOLLOW 40x80 SNI</text>
        <line x1="250" y1="52" x2="180" y2="80" stroke="#DCA54A" strokeWidth="0.5" />
      </svg>
    ),
    kanopi: (
      <svg viewBox="0 0 400 250" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0F172A' }}>
        <rect width="100%" height="100%" fill="none" stroke="rgba(220,165,74,0.1)" strokeWidth="1" />
        {/* Isometric canopy carport structure */}
        <line x1="60" y1="200" x2="60" y2="100" stroke="#DCA54A" strokeWidth="3" />
        <line x1="180" y1="160" x2="180" y2="70" stroke="rgba(220,165,74,0.5)" strokeWidth="2" />
        {/* Canopy slant roof frames */}
        <polygon points="50,90 280,45 340,95 110,140" fill="none" stroke="#DCA54A" strokeWidth="2.5" />
        {/* Glass panes hatching lines */}
        <line x1="95" y1="130" x2="310" y2="87" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="140" y1="120" x2="325" y2="82" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        {/* Text */}
        <text x="70" y="220" fill="#FFFFFF" fontSize="9" fontFamily="monospace" opacity="0.6">CANTILEVERED STEEL CANOPY</text>
        <text x="280" y="160" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">TEMPERED GLASS 10MM</text>
      </svg>
    ),
    tralis: (
      <svg viewBox="0 0 400 250" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0F172A' }}>
        <rect width="100%" height="100%" fill="none" stroke="rgba(220,165,74,0.1)" strokeWidth="1" />
        {/* Modern Geometric Window Grille design */}
        <rect x="120" y="30" width="160" height="180" fill="none" stroke="#DCA54A" strokeWidth="3" />
        {/* Inner geometric grids */}
        <path d="M 120 75 L 280 75 M 120 120 L 280 120 M 120 165 L 280 165" stroke="#DCA54A" strokeWidth="1.5" />
        {/* Diamond motifs in hollow lines */}
        <polygon points="200,30 240,75 200,120 160,75" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
        <polygon points="200,120 240,165 200,210 160,165" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
        {/* Text */}
        <text x="70" y="235" fill="#FFFFFF" fontSize="9" fontFamily="monospace" opacity="0.6">GEOMETRIC SECURITY WINDOW GRILLE</text>
        <text x="15" y="50" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">SOLID STEEL NAKO 16MM</text>
      </svg>
    ),
    tangga: (
      <svg viewBox="0 0 400 250" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0F172A' }}>
        <rect width="100%" height="100%" fill="none" stroke="rgba(220,165,74,0.1)" strokeWidth="1" />
        {/* Floating zig zag stair structural drawing */}
        <path d="M 50 200 L 110 200 L 110 165 L 170 165 L 170 130 L 230 130 L 230 95 L 290 95 L 290 60 L 350 60" fill="none" stroke="#DCA54A" strokeWidth="4" />
        {/* Stair steps wood deck representation */}
        <polygon points="100,200 120,195 120,200 100,205" fill="#DCA54A" />
        <polygon points="160,165 180,160 180,165 160,170" fill="#DCA54A" />
        <polygon points="220,130 240,125 240,130 220,135" fill="#DCA54A" />
        <polygon points="280,95 300,90 300,95 280,100" fill="#DCA54A" />
        {/* Railing bar */}
        <path d="M 50 120 L 350 -10" fill="none" stroke="rgba(220,165,74,0.5)" strokeWidth="2.5" />
        {/* Vertical banisters */}
        <line x1="110" y1="165" x2="110" y2="92" stroke="#DCA54A" strokeWidth="1" />
        <line x1="170" y1="130" x2="170" y2="67" stroke="#DCA54A" strokeWidth="1" />
        <line x1="230" y1="95" x2="230" y2="40" stroke="#DCA54A" strokeWidth="1" />
        <line x1="290" y1="60" x2="290" y2="15" stroke="#DCA54A" strokeWidth="1" />
        {/* Text */}
        <text x="70" y="225" fill="#FFFFFF" fontSize="9" fontFamily="monospace" opacity="0.6">FLOATING FLOATED STAIRS DESIGN</text>
        <text x="240" y="160" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">SOLID TEAK WOOD STEPS</text>
      </svg>
    )
  };

  // mockup project portfolio data
  const mainPortfolio = [
    {
      id: 1,
      title: 'Automatic Gate Cluster BSD',
      location: 'BSD City, Tangerang',
      specs: 'Hollow Galvanis 50x100 SNI, Mesin DEA Italia',
      tag: 'Pagar Pintu Otomatis',
      image: 'https://images.unsplash.com/photo-1621293954908-907141467fc7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Kanopi Kaca Tempered Menteng',
      location: 'Menteng, Jakarta Pusat',
      specs: 'Double Frame Hollow 40x80, Tempered Glass 10mm',
      tag: 'Kanopi Premium',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Railing Tangga Mezanin Senopati',
      location: 'Kebayoran Baru, Jakarta Selatan',
      specs: 'WF 150 Structure, Step Kayu Jati, Railing Sleek Gold',
      tag: 'Tangga & Railing',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Tralis Minimalis Laser Cutting',
      location: 'Kemang, Jakarta Selatan',
      specs: 'Solid Nako 16mm, Frame Border Plat 3mm',
      tag: 'Tralis Keamanan',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // test testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Bpk. H. Rinaldi',
      role: 'Pemilik Rumah Tinggal',
      location: 'BSD Foresta',
      avatarText: 'HR',
      comment: 'Survey gratisnya beneran, langsung dibawain alat ukur digital dan jangka sorong buat cek ketebalan hollow besinya di depan saya. Pagar minimalis otomatis saya sangat presisi, jalannya mulus banget dan las-lasannya rapi. Sangat puas dengan hasil kerjanya!'
    },
    {
      id: 2,
      name: 'Ibu Stefanie L.',
      role: 'Arsitek & Desainer Interior',
      location: 'Kebayoran Baru',
      avatarText: 'SL',
      comment: 'Sudah 3 kali kerja sama dengan tim Rajapagar untuk proyek kanopi tempered glass dan tangga besi industrial cafe. Spek material sangat konsisten, tidak ada tipu-tipu tebal hollow banci. Penyelesaian finishing epoxy primer zinc chromate nya luar biasa bersih.'
    },
    {
      id: 3,
      name: 'Bpk. Hendrawan',
      role: 'Pengelola Ruko Komersial',
      location: 'Gading Serpong',
      avatarText: 'HW',
      comment: 'Sangat responsif dan komunikatif di WhatsApp. Rancangan SPK ditulis transparan dengan spek material SNI detail. Pemasangan rolling gate dan tangga darurat kelar tepat waktu sebelum masa sewa berjalan. Rekomendasi utama jasa las Jabodetabek!'
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative' }}>
        {/* Golden Glowing High-tech circles on background */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,165,74,0.08) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,165,74,0.06) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div className="container hero-grid" style={{ position: 'relative', zIndex: 3 }}>
          
          {/* Left Text Block */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(220, 165, 74, 0.15)',
              padding: '8px 18px',
              borderRadius: '30px',
              color: '#DCA54A',
              fontWeight: '700',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '28px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              border: '1px solid rgba(220,165,74,0.2)'
            }}>
              <FlameKindling size={14} className="sparkle-animation" style={{ color: '#DCA54A' }} />
              <span>JASA WELDER AHLI &amp; FABRIKASI LOGAM SNI</span>
            </div>
            
            <h1 className="hero-title" style={{ fontSize: '3.6rem', fontWeight: '900', letterSpacing: '-1.5px', marginBottom: '24px' }}>
              Konstruksi Besi Kokoh, Estetis &amp; <span style={{
                background: 'linear-gradient(to right, #DCA54A, #F0E6C5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline'
              }}>Bergaransi</span>
            </h1>
            
            <p className="hero-desc" style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#CBD5E1', marginBottom: '36px', fontWeight: '300' }}>
              Rajapagar.id mengerjakan pagar besi custom, kanopi tempered glass minimalis, tralis jendela anti-maling, dan tangga industrial — dengan jaminan bahan hollow SNI ketebalan asli, las keliling penuh, tanpa pengurangan material.
            </p>
            
            <div className="hero-actions">
              <a 
                href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20tertarik%20konsultasi%20pembuatan%20pagar/kanopi`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp" 
                style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '8px' }}
              >
                <span>Tanya Jasa &amp; Survey Gratis</span>
                <ArrowUpRight size={18} />
              </a>
              <a 
                href="#estimator-widget" 
                className="btn btn-secondary" 
                style={{ color: '#FFFFFF', borderColor: '#DCA54A', padding: '14px 32px', fontSize: '1rem', borderRadius: '8px' }}
              >
                <Calculator size={18} style={{ color: '#DCA54A' }} />
                <span>Hitung Estimasi Harga</span>
              </a>
            </div>

            {/* Core Trust Badges */}
            <div className="hero-badge-container" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="hero-badge">
                <span className="hero-badge-number" style={{ textShadow: '0 0 10px rgba(220,165,74,0.3)' }}>12+</span>
                <span className="hero-badge-text" style={{ color: '#94A3B8' }}>Tahun<br />Pengalaman</span>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
              <div className="hero-badge">
                <span className="hero-badge-number" style={{ textShadow: '0 0 10px rgba(220,165,74,0.3)' }}>1,500+</span>
                <span className="hero-badge-text" style={{ color: '#94A3B8' }}>Proyek<br />Terselesaikan</span>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
              <div className="hero-badge">
                <span className="hero-badge-number" style={{ textShadow: '0 0 10px rgba(220,165,74,0.3)' }}>100%</span>
                <span className="hero-badge-text" style={{ color: '#94A3B8' }}>Bahan Logam<br />Standar SNI</span>
              </div>
            </div>
          </div>

          {/* Right Detailed Blueprints Vector Graphic */}
          <div className="hero-graphic" style={{ position: 'relative' }}>
            <div className="hero-graphic-bg" style={{ borderColor: 'rgba(220,165,74,0.3)', borderRadius: '16px' }} />
            <div className="hero-image-wrapper" style={{
              borderRadius: '16px',
              border: '2px solid #DCA54A',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), var(--shadow-gold)',
              overflow: 'hidden'
            }}>
              {cadHeroSVG}
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section className="section-padding why-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Star size={14} fill="#DCA54A" style={{ color: '#DCA54A' }} />
              <span>Mengapa Memilih Kami</span>
            </span>
            <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>Keunggulan Fabrikasi Rajapagar</h2>
            <p className="section-desc" style={{ color: '#64748B' }}>
              Kami berkomitmen menghasilkan konstruksi berbahan besi hollow dan stainless steel bermutu tinggi demi perlindungan serta keindahan hunian Anda.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
              <div className="why-icon" style={{ backgroundColor: 'rgba(220, 165, 74, 0.1)', borderRadius: '10px' }}>
                <ShieldCheck size={30} />
              </div>
              <h3 className="why-card-title" style={{ fontWeight: '700', color: '#0F172A' }}>Tenaga Las Welder Bersertifikat</h3>
              <p className="why-card-desc" style={{ color: '#4A4A4A', lineHeight: '1.6' }}>
                Pekerjaan dikerjakan oleh teknisi ahli berlisensi kompetensi las (welder certification), menjamin hasil sambungan besi yang rapi, solid, anti patah dan mulus digerinda.
              </p>
            </div>
            
            <div className="why-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
              <div className="why-icon" style={{ backgroundColor: 'rgba(220, 165, 74, 0.1)', borderRadius: '10px' }}>
                <Award size={30} />
              </div>
              <h3 className="why-card-title" style={{ fontWeight: '700', color: '#0F172A' }}>Jaminan Ketebalan Besi SNI</h3>
              <p className="why-card-desc" style={{ color: '#4A4A4A', lineHeight: '1.6' }}>
                Kami menolak penggunaan besi hollow tipis ("banci"). Semua pipa, siku, dan plat baja kami datangkan dengan ketebalan penuh standar SNI yang lolos uji jangka sorong digital.
              </p>
            </div>
            
            <div className="why-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
              <div className="why-icon" style={{ backgroundColor: 'rgba(220, 165, 74, 0.1)', borderRadius: '10px' }}>
                <Sparkles size={30} />
              </div>
              <h3 className="why-card-title" style={{ fontWeight: '700', color: '#0F172A' }}>Estimasi Jujur &amp; Rinci (SPK)</h3>
              <p className="why-card-desc" style={{ color: '#4A4A4A', lineHeight: '1.6' }}>
                Setiap rancangan biaya dihitung transparan per meter persegi, dituangkan dalam SPK tertulis resmi. Bebas biaya survey lokasi pengukuran dan konsultasi desain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE LIVE QUOTATION ESTIMATOR */}
      <section id="estimator-widget" className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Calculator size={14} style={{ color: '#DCA54A' }} />
              <span>Simulasi Anggaran</span>
            </span>
            <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>Kalkulator Estimasi Harga Jasa</h2>
            <p className="section-desc" style={{ color: '#64748B' }}>
              Sesuaikan jenis layanan dan geser ukuran dimensi di bawah untuk menghitung taksiran transparan seketika.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(15,23,42,0.15)',
            border: '2px solid #DCA54A',
            marginTop: '20px'
          }}>
            
            {/* Left Column: Form Controls */}
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#DCA54A', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} />
                <span>Langkah 1: Tentukan Dimensi</span>
              </h3>

              {/* Service Select */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label" style={{ color: '#94A3B8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Pilih Jasa Konstruksi:</label>
                <select 
                  className="form-control" 
                  value={estService} 
                  onChange={(e) => {
                    setEstService(e.target.value);
                    // Reset defaults based on type
                    if (e.target.value === 'tralis') {
                      setEstWidth(4); // Acts as number of windows
                    } else if (e.target.value === 'tangga') {
                      setEstWidth(3); // Acts as length in meters
                    } else {
                      setEstWidth(4);
                      setEstHeight(2);
                    }
                  }}
                  style={{
                    backgroundColor: '#1E293B',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(220,165,74,0.3)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}
                >
                  <option value="pagar">Pagar Besi &amp; Pagar Otomatis (Rp 450rb - Rp 850rb / m2)</option>
                  <option value="kanopi">Kanopi Rumah &amp; Carport (Rp 380rb - Rp 780rb / m2)</option>
                  <option value="tralis">Tralis Jendela Pengaman (Rp 250rb - Rp 450rb / lubang)</option>
                  <option value="tangga">Tangga Besi Industrial &amp; Mezanin (Rp 1.2jt - Rp 2.4jt / meter)</option>
                </select>
              </div>

              {/* Width/Unit Slider */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label className="form-label" style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
                    {estService === 'tralis' 
                      ? 'Jumlah Jendela (Unit):' 
                      : estService === 'tangga'
                      ? 'Tinggi / Panjang Tangga (Meter):'
                      : 'Lebar Struktur (Meter):'}
                  </label>
                  <span style={{ color: '#DCA54A', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    {estWidth} {estService === 'tralis' ? 'Lubang' : 'Meter'}
                  </span>
                </div>
                <input 
                  type="range" 
                  min={estService === 'tralis' ? 1 : estService === 'tangga' ? 1 : 2} 
                  max={estService === 'tralis' ? 12 : estService === 'tangga' ? 10 : 15} 
                  step="1"
                  value={estWidth} 
                  onChange={(e) => setEstWidth(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#DCA54A', cursor: 'pointer' }}
                />
              </div>

              {/* Height Slider (Hide for Tralis & Tangga) */}
              {estService !== 'tralis' && estService !== 'tangga' && (
                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label className="form-label" style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Tinggi Struktur (Meter):</label>
                    <span style={{ color: '#DCA54A', fontWeight: 'bold', fontFamily: 'monospace' }}>{estHeight} Meter</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="6" 
                    step="0.5"
                    value={estHeight} 
                    onChange={(e) => setEstHeight(parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: '#DCA54A', cursor: 'pointer' }}
                  />
                </div>
              )}
            </div>

            {/* Right Column: Dynamic Price Summary Card */}
            <div style={{
              backgroundColor: '#1E293B',
              borderRadius: '16px',
              padding: '30px',
              border: '1px solid rgba(220,165,74,0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <span style={{
                color: '#DCA54A',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 'bold',
                marginBottom: '8px',
                display: 'block'
              }}>Taksiran Rentang Biaya Jasa:</span>
              
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#FFFFFF',
                lineHeight: '1.2',
                marginBottom: '8px',
                letterSpacing: '-1px'
              }}>
                {formatRupiah(priceMin)}
              </div>
              <div style={{
                color: '#94A3B8',
                fontSize: '1rem',
                marginBottom: '20px',
                fontWeight: 'bold'
              }}>
                s/d {formatRupiah(priceMax)}
              </div>

              <div style={{
                fontSize: '0.85rem',
                color: '#94A3B8',
                lineHeight: '1.6',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '16px',
                marginBottom: '24px'
              }}>
                *Catatan: Harga di atas sudah termasuk material SNI tebal penuh, perakitan di workshop las, cat primer antikarat, pengiriman armada, dan biaya pemasangan di Jabodetabek.
              </div>

              <button 
                onClick={handleQuoteRedirect}
                className="btn btn-whatsapp" 
                style={{ width: '100%', gap: '10px', padding: '14px', borderRadius: '8px', fontSize: '1rem' }}
              >
                <MessageSquare size={18} />
                <span>Konsultasikan Hasil Ke WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LAYANAN SHOWCASE (UPGRADED CAD BLUEPRINTS) */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5', borderBottom: '1px solid #F0E6C5' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Wrench size={14} style={{ color: '#DCA54A' }} />
              <span>Solusi Fabrikasi Besi</span>
            </span>
            <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>Layanan Konstruksi Unggulan</h2>
            <p className="section-desc" style={{ color: '#64748B' }}>
              Dukungan lengkap cetak biru struktur modern untuk bangunan perumahan minimalis maupun kompleks bisnis komersial.
            </p>
          </div>

          <div className="services-grid">
            
            {/* Card 1: Pagar Besi */}
            <div className="service-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
              <div className="service-image-wrapper" style={{ height: '170px' }}>
                {cadServicesSVGs.pagar}
                <div className="service-overlay">
                  <span className="service-card-tag">Paling Populer</span>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-card-title" style={{ fontWeight: '700', fontSize: '1.25rem', color: '#0F172A' }}>Pagar Besi Custom &amp; Elektrik</h3>
                <p className="service-card-desc" style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Fabrikasi pagar besi hollow galvanis SNI ketebalan asli 1.6mm — las keliling penuh, tidak ada pengurangan material. Opsi motor elektrik geser/ayun tersedia atas permintaan.
                </p>
                <div className="service-card-footer" style={{ borderColor: '#F0E6C5' }}>
                  <a 
                    href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20ingin%20tanya%20estimasi%20Pagar%20Besi%20Custom%20dan%20kualitas%20bahan%20hollow%20SNI`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    <span>Konsultasi Jasa</span>
                    <ArrowRight size={16} />
                  </a>
                  <span className="service-price-tag" style={{ backgroundColor: '#FAF5E5' }}>Rp 450k - 850k/m²</span>
                </div>
              </div>
            </div>

            {/* Card 2: Kanopi */}
            <div className="service-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
              <div className="service-image-wrapper" style={{ height: '170px' }}>
                {cadServicesSVGs.kanopi}
                <div className="service-overlay">
                  <span className="service-card-tag">Eksterior Mewah</span>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-card-title" style={{ fontWeight: '700', fontSize: '1.25rem', color: '#0F172A' }}>Kanopi Rumah &amp; Carport</h3>
                <p className="service-card-desc" style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Rangka atap pelindung hollow tebal antikarat dengan pilihan penutup premium berdaya tahan panas tinggi seperti Alderon Double Deck, Tempered Glass, dan Solarflat.
                </p>
                <div className="service-card-footer" style={{ borderColor: '#F0E6C5' }}>
                  <a 
                    href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20ingin%20tanya%20mengenai%20Kanopi%20Rumah`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    <span>Konsultasi Jasa</span>
                    <ArrowRight size={16} />
                  </a>
                  <span className="service-price-tag" style={{ backgroundColor: '#FAF5E5' }}>Rp 380k - 780k/m2</span>
                </div>
              </div>
            </div>

            {/* Card 3: Tralis */}
            <div className="service-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
              <div className="service-image-wrapper" style={{ height: '170px' }}>
                {cadServicesSVGs.tralis}
                <div className="service-overlay">
                  <span className="service-card-tag">Keamanan Kamar</span>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-card-title" style={{ fontWeight: '700', fontSize: '1.25rem', color: '#0F172A' }}>Tralis Jendela Custom</h3>
                <p className="service-card-desc" style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Pengaman teralis ventilasi jendela anti maling berdiameter besi nako padat (12mm-16mm) dengan struktur bracket tertanam kuat, rapi, dan menambah estetika.
                </p>
                <div className="service-card-footer" style={{ borderColor: '#F0E6C5' }}>
                  <a 
                    href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20ingin%20tanya%20mengenai%20Tralis%20Jendela`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    <span>Konsultasi Jasa</span>
                    <ArrowRight size={16} />
                  </a>
                  <span className="service-price-tag" style={{ backgroundColor: '#FAF5E5' }}>Rp 250k - 450k/lubang</span>
                </div>
              </div>
            </div>

            {/* Card 4: Tangga */}
            <div className="service-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
              <div className="service-image-wrapper" style={{ height: '170px' }}>
                {cadServicesSVGs.tangga}
                <div className="service-overlay">
                  <span className="service-card-tag">Gaya Industrial</span>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-card-title" style={{ fontWeight: '700', fontSize: '1.25rem', color: '#0F172A' }}>Tangga Besi &amp; Balkon</h3>
                <p className="service-card-desc" style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Tangga putar hemat ruang, tangga mezanin cafe, tangga layang berstruktur WF kokoh dikombinasikan dengan alas pijakan kayu jati solid atau plat bordes.
                </p>
                <div className="service-card-footer" style={{ borderColor: '#F0E6C5' }}>
                  <a 
                    href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20ingin%20tanya%20mengenai%20Tangga%20Besi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    <span>Konsultasi Jasa</span>
                    <ArrowRight size={16} />
                  </a>
                  <span className="service-price-tag" style={{ backgroundColor: '#FAF5E5' }}>Rp 1.2M - 2.4M/meter</span>
                </div>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <a href="/solusi" onClick={(e) => { e.preventDefault(); navigateTo('/solusi'); }} className="btn btn-secondary" style={{ borderRadius: '8px' }}>
              <span>Eksplorasi Seluruh Jasa Fabrikasi</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SHOWCASE */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Award size={14} style={{ color: '#DCA54A' }} />
              <span>Portofolio Karya</span>
            </span>
            <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>Galeri Proyek Terbaru Kami</h2>
            <p className="section-desc" style={{ color: '#64748B' }}>
              Beberapa dokumentasi penyelesaian perakitan di workshop las dan instalasi rapi langsung di lokasi rumah pelanggan.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginTop: '20px'
          }}>
            {mainPortfolio.map((port) => (
              <div key={port.id} style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                border: '1.5px solid rgba(220,165,74,0.1)'
              }}
              className="portfolio-card"
              >
                <div style={{ height: '200px', backgroundColor: '#1E293B', overflow: 'hidden', position: 'relative' }}>
                  <img src={port.image} alt={port.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: '#DCA54A',
                    color: '#FFFFFF',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    textTransform: 'uppercase'
                  }}>{port.tag}</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#DCA54A', marginBottom: '4px' }}>{port.title}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block', marginBottom: '8px' }}>📍 {port.location}</span>
                  <p style={{ fontSize: '0.8rem', color: '#CBD5E1', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '8px', margin: 0 }}>
                    <strong>Spek:</strong> {port.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PT CAHAYA JAYA BERKAH NUSANTARA SEGMENT */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5', borderBottom: '1px solid #F0E6C5' }}>
        <div className="container about-segment-grid">
          
          {/* Visual Block */}
          <div className="about-segment-visual">
            <div className="about-segment-image-container" style={{ borderRadius: '16px', borderColor: '#FFFFFF', borderWidth: '4px' }}>
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                alt="Fabrication Workshop PT Cahaya Jaya Berkah Nusantara" 
              />
            </div>
            
            <div className="about-segment-floating-card" style={{ borderRadius: '12px', borderLeftColor: '#DCA54A' }}>
              <div className="about-floating-title">100% Presisi</div>
              <div className="about-floating-desc">Kami memastikan pengukuran di lokasi milimeter demi milimeter sebelum dipasang.</div>
            </div>
          </div>

          {/* Text Block */}
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Layers size={14} style={{ color: '#DCA54A' }} />
              <span>Profil Perusahaan</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800' }}>PT Cahaya Jaya Berkah Nusantara</h2>
            
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4A4A4A', marginBottom: '20px' }}>
              Sebagai entitas profesional resmi di bidang pengerjaan konstruksi baja berat, struktur besi, dan pengelasan logam, kami mengoperasikan portal utama <strong>Rajapagar.id</strong> dengan komitmen memberikan jaminan kualitas terbaik di kelasnya. 
            </p>
            <p style={{ color: '#555', marginBottom: '24px', fontSize: '0.95rem' }}>
              Kami memadukan peralatan las inverter generasi terbaru, tenaga welder bersertifikat keahlian konstruksi, serta formula pelapis cat dasar primer epoxy zinc chromate antikarat bermerek unggulan. Hasil akhir pengerjaan kami dijamin kokoh, berpenampilan rapi, dan berumur panjang menahan cuaca hujan tropis Indonesia.
            </p>

            <ul className="about-segment-list">
              <li className="about-segment-item">
                <CheckCircle2 className="about-item-icon" size={20} style={{ color: '#25D366' }} />
                <span className="about-item-text" style={{ color: '#0F172A', fontWeight: '600' }}>Ketebalan material hollow ditulis jujur dalam SPK resmi.</span>
              </li>
              <li className="about-segment-item">
                <CheckCircle2 className="about-item-icon" size={20} style={{ color: '#25D366' }} />
                <span className="about-item-text" style={{ color: '#0F172A', fontWeight: '600' }}>Pengerjaan sambungan las keliling penuh, anti bolong &amp; karat.</span>
              </li>
              <li className="about-segment-item">
                <CheckCircle2 className="about-item-icon" size={20} style={{ color: '#25D366' }} />
                <span className="about-item-text" style={{ color: '#0F172A', fontWeight: '600' }}>Pengiriman &amp; pemasangan tepat waktu oleh tim spesialis.</span>
              </li>
            </ul>

            <a href="/profil-kami" onClick={(e) => { e.preventDefault(); navigateTo('/profil-kami'); }} className="btn btn-primary" style={{ borderRadius: '8px', padding: '12px 28px' }}>
              Pelajari Profil Perusahaan
            </a>
          </div>

        </div>
      </section>

      {/* 7. GLASSMORPHIC TESTIMONIALS SLIDER */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MessageSquare size={14} style={{ color: '#DCA54A' }} />
              <span>Ulasan Pelanggan</span>
            </span>
            <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>Apa Kata Klien Rajapagar?</h2>
            <p className="section-desc" style={{ color: '#64748B' }}>
              Ulasan asli dari pemilik rumah tinggal dan mitra arsitek arsitektur profesional di wilayah Jabodetabek.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '20px'
          }}>
            {testimonials.map((test) => (
              <div key={test.id} style={{
                backgroundColor: '#FAF5E5',
                border: '1.5px solid #F0E6C5',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className="testimonial-card"
              >
                <div>
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#DCA54A' }}>
                    <Star size={16} fill="#DCA54A" />
                    <Star size={16} fill="#DCA54A" />
                    <Star size={16} fill="#DCA54A" />
                    <Star size={16} fill="#DCA54A" />
                    <Star size={16} fill="#DCA54A" />
                  </div>
                  
                  <p style={{ fontStyle: 'italic', color: '#4A4A4A', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '24px' }}>
                    "{test.comment}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#0F172A',
                    color: '#DCA54A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    border: '1px solid #DCA54A'
                  }}>
                    {test.avatarText}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#0F172A', margin: 0 }}>{test.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{test.role} • <strong>{test.location}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LATEST BLOG POSTS GRID */}
      {latestPosts.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: '#FAF5E5' }}>
          <div className="container">
            <div className="text-center">
              <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} style={{ color: '#DCA54A' }} />
                <span>Tips &amp; Edukasi</span>
              </span>
              <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>Artikel &amp; Edukasi Terkini</h2>
              <p className="section-desc" style={{ color: '#64748B' }}>
                Rujukan informasi mengenai material las, tips merawat logam anti karat, dan panduan memilih motif arsitektur terbaru.
              </p>
            </div>

            <div className="blog-grid">
              {latestPosts.map((post) => (
                <article key={post.id} className="blog-card" style={{ border: '1px solid #F0E6C5', borderRadius: '16px' }}>
                  <div className="blog-image-wrapper" style={{ height: '180px' }}>
                    {post.image ? (
                      <img src={post.image} alt={post.title} />
                    ) : (
                      <img 
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'><rect width='400' height='200' fill='%230F172A'/><text x='50%'' y='50%' fill='%23DCA54A' font-family='sans-serif' font-size='20' text-anchor='middle'>RajaPagar</text></svg>" 
                        alt={post.title} 
                      />
                    )}
                  </div>
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
                    
                    <h3 className="blog-card-title" style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0F172A' }}>
                      <a href={`/blog/${post.slug}`} onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${post.slug}`); }}>
                        {post.title}
                      </a>
                    </h3>
                    
                    <p className="blog-card-desc" style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.6' }}>{post.excerpt}</p>
                    
                    <div className="blog-card-footer" style={{ borderColor: '#E2E8F0', paddingTop: '12px' }}>
                      <a 
                        href={`/blog/${post.slug}`} 
                        onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${post.slug}`); }}
                        className="service-link"
                        style={{ fontSize: '0.8rem' }}
                      >
                        <span>Baca Selengkapnya</span>
                        <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
              <a href="/blog-artikel" onClick={(e) => { e.preventDefault(); navigateTo('/blog-artikel'); }} className="btn btn-secondary" style={{ borderRadius: '8px' }}>
                Lihat Seluruh Artikel Blog
              </a>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
