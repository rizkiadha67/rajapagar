import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Compass, 
  CheckCircle,
  MessageSquare,
  Wrench,
  Sparkles,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import LogoIcon from '../components/LogoIcon';

export default function Services({ data }) {
  const contact = data.contact;

  // Determine active route slug
  const currentPath = (data.route_path || '').toLowerCase().replace(/^\/+|\/+$/g, '');
  const isSingle = currentPath.startsWith('layanan/');
  
  // Normalize sub-menu URL slugs to solution IDs
  let activeSlug = null;
  if (isSingle) {
    const rawSlug = currentPath.replace('layanan/', '');
    if (rawSlug === 'pagar-otomatis' || rawSlug === 'pagar') activeSlug = 'pagar';
    else if (rawSlug === 'kanopi-carport' || rawSlug === 'kanopi') activeSlug = 'kanopi';
    else if (rawSlug === 'teralis-jendela' || rawSlug === 'teralis') activeSlug = 'tralis';
    else if (rawSlug === 'tangga-mezanin' || rawSlug === 'tangga') activeSlug = 'tangga';
    else activeSlug = rawSlug;
  }

  // Premium Detailed CAD blueprints
  const cadServicesSVGs = {
    pagar: (
      <svg viewBox="0 0 500 350" width="100%" height="280" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0B0F19' }}>
        <defs>
          <pattern id="cadGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(220,165,74,0.05)" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <circle cx="250" cy="175" r="110" fill="none" stroke="rgba(220, 165, 74, 0.1)" strokeWidth="1" strokeDasharray="5 5" />
        
        {/* Detailed gate line frame */}
        <g transform="translate(40, 40)">
          <rect x="20" y="30" width="380" height="200" fill="none" stroke="#DCA54A" strokeWidth="2.5" />
          <rect x="25" y="35" width="370" height="190" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          {/* Vertical pickets */}
          <line x1="60" y1="30" x2="60" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="100" y1="30" x2="100" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="140" y1="30" x2="140" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="180" y1="30" x2="180" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="220" y1="30" x2="220" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="260" y1="30" x2="260" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="300" y1="30" x2="300" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="340" y1="30" x2="340" y2="230" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="380" y1="30" x2="380" y2="230" stroke="#DCA54A" strokeWidth="1.2" />

          {/* Motor track gear */}
          <line x1="10" y1="210" x2="410" y2="210" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Dimension indicators */}
          <line x1="20" y1="250" x2="400" y2="250" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <text x="190" y="262" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace">L: 4500 mm</text>
          
          <line x1="5" y1="30" x2="5" y2="230" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <text x="-35" y="135" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace" transform="rotate(-90 -35 135)">H: 2200 mm</text>
        </g>
        
        <text x="25" y="325" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">ENGINEERING DETAIL: CUSTOM STEEL FENCE – SNI GRADE HOLLOW</text>
        <text x="400" y="325" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">SCALE 1:25</text>
      </svg>
    ),
    kanopi: (
      <svg viewBox="0 0 500 350" width="100%" height="280" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0B0F19' }}>
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <circle cx="250" cy="175" r="110" fill="none" stroke="rgba(220, 165, 74, 0.1)" strokeWidth="1" strokeDasharray="5 5" />
        
        {/* Isometric canopy structural blueprint */}
        <g transform="translate(60, 40)">
          {/* Supporting poles */}
          <line x1="40" y1="220" x2="40" y2="80" stroke="#DCA54A" strokeWidth="3" />
          <line x1="160" y1="180" x2="160" y2="55" stroke="rgba(220,165,74,0.5)" strokeWidth="2" />
          
          {/* Main frame plate */}
          <polygon points="20,70 280,20 340,70 80,120" fill="none" stroke="#DCA54A" strokeWidth="2.5" />
          <polygon points="25,72 275,25 330,72 80,115" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          
          {/* Purlins */}
          <line x1="85" y1="60" x2="145" y2="110" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="150" y1="45" x2="210" y2="95" stroke="#DCA54A" strokeWidth="1.2" />
          <line x1="215" y1="30" x2="275" y2="80" stroke="#DCA54A" strokeWidth="1.2" />

          {/* Dimension texts */}
          <text x="140" y="140" fill="#25D366" fontSize="9" fontFamily="monospace" fontWeight="bold">TEMPERED GLASS 10MM</text>
        </g>

        <text x="25" y="325" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">ENGINEERING DETAIL: CARPORT GLASS CANOPY</text>
        <text x="400" y="325" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">SCALE 1:30</text>
      </svg>
    ),
    tralis: (
      <svg viewBox="0 0 500 350" width="100%" height="280" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0B0F19' }}>
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <circle cx="250" cy="175" r="110" fill="none" stroke="rgba(220, 165, 74, 0.1)" strokeWidth="1" strokeDasharray="5 5" />
        
        {/* Geometric window grill blueprint */}
        <g transform="translate(150, 40)">
          <rect x="0" y="0" width="200" height="230" fill="none" stroke="#DCA54A" strokeWidth="3" />
          <rect x="6" y="6" width="188" height="218" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          
          {/* Horizontal lines */}
          <line x1="0" y1="58" x2="200" y2="58" stroke="#DCA54A" strokeWidth="1.5" />
          <line x1="0" y1="115" x2="200" y2="115" stroke="#DCA54A" strokeWidth="1.5" />
          <line x1="0" y1="172" x2="200" y2="172" stroke="#DCA54A" strokeWidth="1.5" />
          
          {/* Diamonds */}
          <polygon points="100,0 150,58 100,115 50,58" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
          <polygon points="100,115 150,172 100,230 50,172" fill="none" stroke="#DCA54A" strokeWidth="1.5" />
          
          <text x="10" y="248" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">W: 1000 mm</text>
          <text x="-35" y="125" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" transform="rotate(-90 -35 125)">H: 1200 mm</text>
        </g>

        <text x="25" y="325" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">ENGINEERING DETAIL: SECURITY WINDOW GRILLES</text>
        <text x="400" y="325" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">SCALE 1:15</text>
      </svg>
    ),
    tangga: (
      <svg viewBox="0 0 500 350" width="100%" height="280" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#0B0F19' }}>
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <circle cx="250" cy="175" r="110" fill="none" stroke="rgba(220, 165, 74, 0.1)" strokeWidth="1" strokeDasharray="5 5" />
        
        {/* Floating mezzanine stair blueprint */}
        <g transform="translate(60, 40)">
          {/* Main structure steel girder */}
          <path d="M 30 220 L 110 220 L 110 180 L 190 180 L 190 140 L 270 140 L 270 100 L 350 100 L 350 60 L 410 60" fill="none" stroke="#DCA54A" strokeWidth="4.5" />
          
          {/* Wooden planks */}
          <rect x="25" y="215" width="85" height="5" fill="#FFFFFF" opacity="0.8" />
          <rect x="105" y="175" width="85" height="5" fill="#FFFFFF" opacity="0.8" />
          <rect x="185" y="135" width="85" height="5" fill="#FFFFFF" opacity="0.8" />
          <rect x="265" y="95" width="85" height="5" fill="#FFFFFF" opacity="0.8" />
          <rect x="345" y="55" width="85" height="5" fill="#FFFFFF" opacity="0.8" />

          {/* Dimension and labels */}
          <text x="180" y="200" fill="#25D366" fontSize="9" fontFamily="monospace" fontWeight="bold">STRUCTURAL WF 150 BEAM</text>
        </g>

        <text x="25" y="325" fill="#DCA54A" fontSize="9" fontFamily="monospace" fontWeight="bold">ENGINEERING DETAIL: STEEL STRINGER MEZZANINE STAIR</text>
        <text x="400" y="325" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">SCALE 1:20</text>
      </svg>
    )
  };

  const solutions = [
    {
      id: 'pagar',
      title: 'Pagar Besi Custom & Pagar Elektrik',
      desc: 'Kami memfabrikasi pagar besi custom dengan standar kualitas bahan yang tidak kami kompromikan. Setiap unit menggunakan hollow galvanis SNI berketebalan asli — bukan hollow tipis pasaran. Finishing dilapis cat epoxy primer zinc chromate sebagai perlindungan karat pertama, dilanjutkan cat duco oven berkualitas tinggi untuk daya tahan warna jangka panjang. Tersedia opsi tambahan motor penggerak elektrik (dinamo geser/ayun) untuk kemudahan akses kendaraan.',
      materials: ['Besi Hollow Galvanis SNI Ketebalan Asli 1.6mm (40x80, 50x100)', 'Cat Epoxy Primer Zinc Chromate + Duco Oven Premium', 'Opsi Motor Elektrik Geser/Ayun (bukan produksi sendiri — instalasi)', 'Aksen Kayu WPC / GRC Plank Motif Kayu Tahan Cuaca'],
      benefits: 'Pagar kokoh jangka panjang dengan estetika premium — bahan jujur, las keliling penuh, tidak ada hollow banci atau pengurangan material.',
      price: 'Mulai Rp 450rb/m²',
      cad: cadServicesSVGs.pagar,
      meta_title: 'Premium Custom Steel Fence & Electric Gate',
      meta_specs: [
        'Frame Utama: Hollow Galvanis 40x80mm SNI, Tebal Dinding 1.6mm Asli (Bukan Banci)',
        'Picket Bar: Hollow Galvanis 20x40mm SNI, Tebal 1.2mm, Las Keliling Penuh',
        'Proteksi Karat: Epoxy Primer Zinc Chromate 2 Lapis + Cat Duco Oven',
        'Opsi Elektrik: Instalasi Dinamo Motor Geser/Ayun (Merk Pilihan Klien)'
      ]
    },
    {
      id: 'kanopi',
      title: 'Kanopi Minimalis & Pelindung Carport',
      desc: 'Solusi atap pelindung area luar rumah (carport, teras samping, balkon) dari curah hujan ekstrem dan paparan panas terik matahari. Kami mendesain kanopi berkerangka hollow besi solid dengan ragam jenis penutup atap berdaya tahan tinggi dan meredam suara gemuruh hujan.',
      materials: ['Atap Alderon Double Wall (Sangat sejuk & peredam bising)', 'Atap Solarflat (Transparan mirip kaca, anti-pecah)', 'Atap Kaca Tempered (Premium estetis modern)', 'Atap Spandek Pasir (Bujet hemat awet)'],
      benefits: 'Menghadirkan kesan teduh berestetika modern pada fasad hunian serta melindungi kendaraan Anda dari kerusakan cuaca.',
      price: 'Mulai Rp 380rb/m2',
      cad: cadServicesSVGs.kanopi,
      meta_title: 'Structural Steel Canopy & Carport Systems',
      meta_specs: [
        'Frame Beam: Hollow Galvanis 50x100mm SNI Tebal 1.6mm/1.8mm Asli',
        'Support Pillars: WF 150 Structural Steel / Hollow Ganda 100x100mm',
        'Roof Panel Options: Tempered Glass 10mm / Solarflat Solid 3mm Polycarbonate',
        'Sound Dampening: Rubber Sealing & Structural Buffer Gaskets'
      ]
    },
    {
      id: 'tralis',
      title: 'Tralis Jendela & Pintu Pengaman Kamar',
      desc: 'Tralis jendela custom didesain presisi milimeter demi milimeter untuk melindungi celah ventilasi jendela rawan penyusupan. Dengan desain pengunci tersembunyi, besi padat (nako/hollow tebal) yang tidak mudah digergaji atau dibengkokkan secara paksa, namun tetap mempertahankan sirkulasi angin segar.',
      materials: ['Besi Nako Padat Polos / Ulir (12mm, 16mm)', 'Besi Hollow Stall Tebal SNI', 'Cat Pelapis Duco Tahan Pudar', 'Engsel Pintu Kasa Nyamuk Magnetik Baja'],
      benefits: 'Memberikan ketenangan tidur keluarga di malam hari dengan proteksi jendela kamar yang kokoh dan elegan.',
      price: 'Mulai Rp 250rb/lubang',
      cad: cadServicesSVGs.tralis,
      meta_title: 'Architectural Window Grilles & Safety Screens',
      meta_specs: [
        'Grille Material: Solid Square Nako Iron 16mm (Anti-Cut & Anti-Bend)',
        'Outer Frame: Solid Steel Flat Bar 3mm or Hollow Stall 20x20mm',
        'Security Features: Internal Hidden Lock System & Dual Hinge Screws',
        'Painting Coating: Premium Polyurethane Duco Spray Gloss/Matte Finish'
      ]
    },
    {
      id: 'tangga',
      title: 'Tangga Besi Industrial & Railing Balkon',
      desc: 'Pembuatan tangga rebah rebung, tangga monyet, tangga layang, serta tangga putar hemat ruang untuk akses mezanin atau lantai atas. Sangat disukai oleh pengelola cafe berkonsep industrial, ruko, perkantoran modern, dan rumah minimalis. Dipadukan dengan railing tangga minimalis handrail kayu jati atau plat cutting laser bermotif.',
      materials: ['Plat Bordes Anti-Slip (Ketebalan 2mm - 3mm)', 'Handrail Kayu Kamper / Jati Oven / Besi Hollow', 'Besi WF (Wide Flange) / UNP untuk Struktur Utama', 'Plat Besi Perforated / Laser Cutting Motif'],
      benefits: 'Menghubungkan mobilitas antar lantai secara kokoh berestetika industrial modern yang memukau mata pengunjung.',
      price: 'Hubungi Kami (Survey Gratis)',
      cad: cadServicesSVGs.tangga,
      meta_title: 'Industrial Mezzanine Stairs & Laser-Cut Railings',
      meta_specs: [
        'Main Girder: Wide Flange WF 150 / Heavy Duty UNP 100 Steel Channel',
        'Step Treads: Teak Wood Solid Block 4cm / Anti-Slip Plat Bordes 3.0mm',
        'Railing Handrail: Solid Java Teak / Steel Hollow 40x60mm Matte Finish',
        'Load Rating: Tested for Static Loads of up to 450kg/m2'
      ]
    }
  ];

  // Render Single Service Showroom
  if (isSingle && activeSlug) {
    const sol = solutions.find(s => s.id === activeSlug);
    
    // Fallback if slug is not found
    if (!sol) {
      return (
        <div className="section-padding text-center" style={{ backgroundColor: '#FAF5E5', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyCenter: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', color: '#0F172A', marginBottom: '20px' }}>Layanan Tidak Ditemukan</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>Maaf, kategori layanan spesifik yang Anda cari belum tersedia.</p>
            <a href="/layanan" className="btn btn-primary">Lihat Semua Layanan</a>
          </div>
        </div>
      );
    }

    // Dynamic State for Single Service Interactive Quote Widget
    const [calcWidth, setCalcWidth] = useState(4);
    const [calcHeight, setCalcHeight] = useState(2);
    
    const calculateQuote = () => {
      const area = calcWidth * calcHeight;
      let minRate = 450000;
      let maxRate = 850000;

      if (sol.id === 'kanopi') {
        minRate = 380000;
        maxRate = 750000;
      } else if (sol.id === 'tralis') {
        minRate = 250000;
        maxRate = 450000;
      } else if (sol.id === 'tangga') {
        minRate = 950000;
        maxRate = 1850000;
      }

      return {
        min: Math.round(area * minRate),
        max: Math.round(area * maxRate),
        unit: sol.id === 'tralis' ? 'lubang' : 'm2'
      };
    };

    const quote = calculateQuote();
    
    const formatIDR = (num) => {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
    };

    const handleSendWA = () => {
      const waText = `Halo Rajapagar.id, saya tertarik berkonsultasi mengenai layanan spesifik:
*${sol.title}*
- *Lencana Spek*: Menengah Keatas / Luxury
- *Lebar/Unit*: ${calcWidth} m
- *Tinggi*: ${calcHeight} m
- *Volume*: ${calcWidth * calcHeight}
- *Estimasi Anggaran*: ${formatIDR(quote.min)} s/d ${formatIDR(quote.max)}
- *Keinginan*: Booking jadwal Survey lokasi digital gratis se-Jabodetabek.`;
      
      window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(waText)}`, '_blank');
    };

    return (
      <div>
        {/* Page Banner Header */}
        <section className="page-banner">
          <div className="container">
            <h1 className="page-banner-title" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{sol.title}</h1>
            <div className="breadcrumbs">
              <a href="/" style={{ color: '#DCA54A' }}>Beranda</a> &gt; <a href="/layanan" style={{ color: '#DCA54A' }}>Layanan</a> &gt; Detail Jasa
            </div>
          </div>
        </section>

        {/* Showroom Main Body */}
        <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'flex-start' }}>
            
            {/* Left: Detailed CAD Blueprint View */}
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Compass size={14} style={{ color: '#DCA54A' }} />
                <span>{sol.meta_title}</span>
              </span>
              <h2 className="section-title" style={{ fontSize: '2rem', fontWeight: '800', marginTop: '10px' }}>Spesifikasi Teknis Gambar CAD</h2>
              
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid #DCA54A',
                backgroundColor: '#0B0F19',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                marginBottom: '30px'
              }}>
                {sol.cad}
              </div>

              {/* Specs Lists */}
              <div style={{
                backgroundColor: '#FAF5E5',
                border: '1.5px solid #F0E6C5',
                borderRadius: '16px',
                padding: '30px'
              }}>
                <h4 style={{ fontSize: '1.1rem', color: '#0F172A', fontWeight: '700', marginBottom: '16px', borderBottom: '1px solid rgba(220,165,74,0.2)', paddingBottom: '8px' }}>
                  Standar Fabrikasi Kelas Menengah-Atas:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {sol.meta_specs.map((spec, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#0F172A', lineHeight: '1.5' }}>
                      <CheckCircle size={16} style={{ color: '#25D366', marginTop: '2px', flexShrink: 0 }} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Detailed Description & Specific Quote Sliders */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: '700', marginBottom: '16px' }}>Deskripsi Jasa Konstruksi</h3>
              <p style={{ color: '#4A4A4A', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.05rem' }}>
                {sol.desc}
              </p>

              {/* Interactive Dynamic Calibrator */}
              <div style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '35px',
                border: '2px solid #DCA54A',
                boxShadow: '0 20px 45px rgba(15,23,42,0.15)'
              }}>
                <h4 style={{ fontSize: '1.3rem', color: '#DCA54A', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>
                  Kalkulator Estimasi Biaya
                </h4>
                <p style={{ color: '#94A3B8', fontSize: '0.8rem', textAlign: 'center', marginBottom: '24px' }}>
                  Sesuaikan perkiraan lebar &amp; tinggi unit besi untuk menghitung kisaran anggaran riil.
                </p>

                {/* Slider Width */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                    <span style={{ color: '#94A3B8' }}>{sol.id === 'tralis' ? 'Jumlah Unit' : 'Lebar Struktur'}</span>
                    <strong style={{ color: '#DCA54A' }}>{calcWidth} {sol.id === 'tralis' ? 'Lubang' : 'Meter'}</strong>
                  </div>
                  <input 
                    type="range" 
                    min={sol.id === 'tralis' ? "1" : "2"} 
                    max={sol.id === 'tralis' ? "20" : "15"} 
                    step="1"
                    value={calcWidth} 
                    onChange={(e) => setCalcWidth(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#DCA54A' }}
                  />
                </div>

                {/* Slider Height */}
                {sol.id !== 'tralis' && (
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyBetween: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                      <span style={{ color: '#94A3B8' }}>Tinggi Struktur</span>
                      <strong style={{ color: '#DCA54A' }}>{calcHeight} Meter</strong>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="6" 
                      step="0.5"
                      value={calcHeight} 
                      onChange={(e) => setCalcHeight(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#DCA54A' }}
                    />
                  </div>
                )}

                {/* Dynamic Calculated Output Block */}
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(220,165,74,0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  marginBottom: '24px'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Estimasi Rentang Anggaran</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', fontFamily: 'Outfit' }}>
                    {formatIDR(quote.min)} – {formatIDR(quote.max)}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#25D366', marginTop: '6px' }}>
                    *Harga mengikat include besi SNI tebal, cat primer &amp; jasa welder.
                  </div>
                </div>

                <button 
                  onClick={handleSendWA} 
                  className="btn btn-whatsapp" 
                  style={{ width: '100%', padding: '12px 20px', borderRadius: '8px', fontSize: '0.95rem' }}
                >
                  <MessageSquare size={16} />
                  <span>Kirim Estimasi &amp; Jadwalkan Survey</span>
                </button>
              </div>

              <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-start' }}>
                <a href="/layanan" className="btn btn-secondary" style={{ borderColor: '#DCA54A', color: '#DCA54A', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>Kembali Ke Semua Layanan</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }

  // Render Layanan Directory View
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
          <h1 className="page-banner-title" style={{ fontSize: '3rem', fontWeight: '800' }}>Layanan Kami</h1>
          <div className="breadcrumbs" style={{ fontSize: '0.95rem' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); }} style={{ color: '#DCA54A' }}>Beranda</a> &gt; Layanan
          </div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <LogoIcon size={14} color="#DCA54A" />
              <span>Daftar Layanan Konstruksi</span>
            </span>
            <h2 className="section-title center" style={{ fontSize: '2.6rem', fontWeight: '800' }}>
              {data.post?.title || "Pilihan Jasa Fabrikasi Besi & Baja"}
            </h2>

            {data.post?.content && data.post.content.trim() !== '<p>Silakan edit halaman ini melalui Dashboard WordPress Admin (Pages -> Edit) untuk mengubah tulisan di sini.</p>' && data.post.content.trim() !== '' ? (
              <div 
                className="wp-editor-content"
                dangerouslySetInnerHTML={{ __html: data.post.content }}
                style={{
                  color: '#4A4A4A',
                  maxWidth: '850px',
                  margin: '20px auto 0 auto',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  textAlign: 'center'
                }}
              />
            ) : (
              <p className="section-desc" style={{ color: '#64748B' }}>
                Kami memproduksi konstruksi logam berkualitas tinggi dengan hitungan ketebalan material yang jujur, pengelasan keliling penuh, dan ketepatan finishing.
              </p>
            )}
          </div>

          {/* Solutions Detailed Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '40px' }}>
            {solutions.map((sol) => (
              <div 
                key={sol.id} 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #E2E8F0',
                  padding: '40px',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.03)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '40px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="portfolio-card"
              >
                {/* Left Side: Text Details */}
                <div>
                  <h3 style={{ fontSize: '1.6rem', color: '#0F172A', marginBottom: '16px', fontWeight: '700' }}>
                    {sol.title}
                  </h3>
                  <p style={{ color: '#4A4A4A', lineHeight: '1.7', marginBottom: '24px', fontSize: '1.05rem' }}>
                    {sol.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '30px' }}>
                    
                    {/* Material Details Column */}
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: '#DCA54A', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Layers size={16} />
                        <span>Pilihan Material:</span>
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {sol.materials.map((m, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#555' }}>
                            <CheckCircle size={14} style={{ color: '#25D366', flexShrink: 0 }} />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefit Details Column */}
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: '#0F172A', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <ShieldCheck size={16} style={{ color: '#DCA54A' }} />
                        <span>Benefit Utama:</span>
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.6', backgroundColor: '#FAF5E5', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #DCA54A' }}>
                        {sol.benefits}
                      </p>
                    </div>

                  </div>

                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <a 
                        href={`https://wa.me/${contact.whatsapp}?text=Halo%20Rajapagar.id,%20saya%20tertarik%20tanya%20estimasi%20jasa%20${encodeURIComponent(sol.title)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-whatsapp"
                        style={{ borderRadius: '8px', padding: '12px 24px' }}
                      >
                        Konsultasikan &amp; Survey Gratis
                      </a>
                      <a 
                        href={`/layanan/${sol.id === 'tralis' ? 'teralis-jendela' : sol.id === 'tangga' ? 'tangga-mezanin' : sol.id === 'kanopi' ? 'kanopi-carport' : 'pagar-otomatis'}`}
                        className="btn btn-secondary"
                        style={{ borderRadius: '8px', padding: '12px 20px', borderColor: '#DCA54A', color: '#DCA54A' }}
                      >
                        <span>Lihat Showroom CAD</span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#DCA54A', backgroundColor: '#0F172A', padding: '6px 16px', borderRadius: '20px', fontFamily: 'Outfit' }}>
                      {sol.price}
                    </span>
                  </div>
                </div>

                {/* Right Side: CAD blueprint illustration */}
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid #DCA54A',
                  backgroundColor: '#0B0F19',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '220px'
                }}>
                  {sol.cad}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* METODE ESTIMASI & KETEBALAN BESI */}
      <section className="section-padding" style={{ backgroundColor: '#FAF5E5', borderTop: '1px solid #F0E6C5', borderBottom: '1px solid #F0E6C5' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Compass size={14} style={{ color: '#DCA54A' }} />
              <span>Panduan Konsumen</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800' }}>Awas Tipuan Besi Hollow Banci!</h2>
            <p style={{ color: '#4A4A4A', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.05rem' }}>
              Banyak bengkel las menawarkan harga di bawah standar pasar, namun memakai material besi hollow yang memiliki ketebalan "banci" (misal hollow tertulis tebal 1.2mm namun ketebalan riilnya hanya 0.6mm-0.8mm). Pagar yang tipis ini mudah meot, keropos, bolong saat dilas, dan berkarat parah dalam hitungan bulan.
            </p>
            <p style={{ color: '#666', marginBottom: '24px', fontSize: '0.95rem' }}>
              <strong>Komitmen Mutu Rajapagar.id:</strong> Semua ketebalan besi hollow kami tulis jujur di dalam SPK resmi. Kami menyediakan jangka sorong digital saat pengantaran barang sehingga Anda dapat menguji ketebalan lubang pipa hollow secara langsung di lokasi.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#DCA54A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0 }}>
                <Compass size={20} style={{ margin: 'auto' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#0F172A', fontWeight: 'bold' }}>Jangka Sorong Kalibrasi</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Teknisi lapangan kami selalu membawa jangka sorong digital saat survey untuk memberikan edukasi ketebalan material logam kepada Anda.</p>
              </div>
            </div>
          </div>

          {/* Right Cards (Premium Specs Box) */}
          <div style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '45px 40px',
            border: '2px solid #DCA54A',
            boxShadow: '0 25px 50px -12px rgba(15,23,42,0.3)'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: '#DCA54A', marginBottom: '24px', borderBottom: '1px solid rgba(220,165,74,0.2)', paddingBottom: '12px', fontWeight: '700' }}>Rujukan Spek &amp; Ketebalan:</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: '#DCA54A', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '4px' }}>Besi Hollow Minimalis Pagar:</strong> 
                  Tebal plat 1.2mm - 1.4mm asli (Rekomendasi awet pagar rumah tinggal).
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: '#DCA54A', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '4px' }}>Besi Hollow Industrial Cafe:</strong> 
                  Tebal plat 1.4mm - 1.6mm asli (Kuat menahan beban mobilitas tinggi).
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: '#DCA54A', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '4px' }}>Kerangka Utama Kanopi Mewah:</strong> 
                  Tebal 1.6mm - 1.8mm asli (Anti melengkung akibat benturan angin/hujan lebat).
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
