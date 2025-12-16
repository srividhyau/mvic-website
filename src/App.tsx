import { Menu, X, Factory, Target, Eye, Globe, Award, TrendingUp, Users, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Competency', href: '#competency' },
    { name: 'Mission & Vision', href: '#mission' },
    { name: 'Products', href: '#products' },
    { name: 'Portfolio', href: '#manufacturing' },
    { name: 'Clientele', href: '#clientele' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    { name: "Men's Trousers", description: "Quality trousers with excellent fit and finish", image: "/images/products/trousers.png" },
    { name: "Denim", description: "Premium denim with various wash treatments", image: "/images/products/denim.jpg" },
    { name: "Pyjamas", description: "Comfortable sleepwear in natural fabrics", image: "/images/products/pyjamas.jpg" },
    { name: "Chino Shorts", description: "Versatile shorts for casual wear", image: "/images/products/shorts.png" },
  ];

  const clients = [
    { name: "Harmont & Blaine", logo: "/images/clients/harmont-blaine.png" },
    { name: "Steel & Jelly", logo: "/images/clients/steel-jelly.png" },
    { name: "Chalktalk Sports", logo: "/images/clients/chalktalk.png" },
    { name: "Bacci", logo: "/images/clients/bacci.png" },
    { name: "TATA", logo: "/images/clients/tata.png" },
    { name: "Billie the Kid", logo: "/images/clients/billie.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-yellow-400">MV INDUSTRIAL CORPORATION</div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 hover:text-yellow-400 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
            MV INDUSTRIAL CORPORATION
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Leading Garment Exporter in India since 2014
          </p>
          <a
            href="#about"
            className="inline-block bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="about" className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            ABOUT US
          </h2>
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-lg mb-6 leading-relaxed text-slate-900 text-justify">
              MV Industrial Corporation is a well established apparel manufacturing company which was founded in the year 2014. The head office is located in Electronic City, Bangalore, India.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-slate-900 text-justify">
              MVIC is one of the leading garment <strong>exporter</strong> in India specializing in manufacturing of garments using <strong>cotton, linen, viscose, Tencil, and organic fabrics</strong>.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-slate-900 text-justify">
              The factories are set in Tamil Nadu at Krishnagiri, and Aranthanki in a population free environment catering both domestic and global market. The company is now one of the fastest growing exporters creating innovative fashion statements, with top end production line completely automated using modern technologies and with hands on well trained operators.
            </p>
            <p className="text-lg font-semibold text-slate-900 text-justify">
              MVIC is always committed to quality and timely delivery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/images/aboutus/aboutus-factory.JPG"
              alt="Factory Manufacturing"
              className="rounded-lg shadow-lg w-full max-h-[500px] object-contain bg-slate-100"
            />
            <img
              src="/images/aboutus/aboutus-outer.JPG"
              alt="Manufacturing Facility"
              className="rounded-lg shadow-lg w-full max-h-[500px] object-contain bg-slate-100"
            />
          </div>
        </div>
      </section>

      <section id="competency" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-400">
            OUR COMPETENCY
          </h2>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-justify">
                As an export oriented garment manufacturer, we understand the priority of <strong className="text-yellow-400">quality product</strong> with <strong className="text-yellow-400">barrier-free delivery in time</strong>. Therefore, we are compliant with and stick to specs. We handle <strong className="text-yellow-400">orders of any size</strong>. Regardless of the number of orders, we will service with the same determination to produce quality products.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                <strong className="text-yellow-400">Flexibility</strong> has not only earned us <strong className="text-yellow-400">trust</strong>, but also <strong className="text-yellow-400">reliability</strong>. We are also always ready to meet new challenges, such as new products to be produced, new styles to be innovated, and new fabrics to be tested.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                The company travels around the world to provide <strong className="text-yellow-400">personalized customer service</strong> and understands <strong className="text-yellow-400">international fashion trends</strong>, so it excels in operations.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <img
              src="/images/competency/competency-1.png"
              alt="Manufacturing Process"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/competency/competency-2.png"
              alt="Quality Control"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/competency/competency-3.jpg"
              alt="Production Line"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/competency/competency-4.png"
              alt="Skilled Workforce"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-400 p-8 rounded-lg text-center">
              <Target className="w-16 h-16 mx-auto mb-4 text-slate-900" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">OUR MISSION</h3>
              <p className="text-lg text-slate-900">
                "To revolutionize the readymade garment industry by manufacturing creative global fashion apparels."
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg text-center">
              <Eye className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">OUR VISION</h3>
              <p className="text-lg text-white">
                "To stabilize and empower more than 1250 women in rural areas by increasing our machine strength to 1000 in next three years from now and our immediate goal being 500 machines with around 750 employees."
              </p>
            </div>

            <div className="bg-yellow-400 p-8 rounded-lg text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 text-slate-900" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">VALUE STATEMENT</h3>
              <p className="text-lg text-slate-900">
                Insisting on commitment and integrity, maintaining transparency, and making doing business in India an enjoyable and profitable experience for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-400">
            INFRASTRUCTURE
          </h2>
          <div className="mb-12">
            <p className="text-lg mb-6 leading-relaxed">
              Our manufacturing units are equipped with over <strong className="text-yellow-400">350 state-of-the-art machines</strong> including high-speed sewing machines, automated cutting systems, and quality control equipment. All our high-tech machines are imported from <strong className="text-yellow-400">Germany and Japan</strong>.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              The factories are strategically located in <strong className="text-yellow-400">Tamil Nadu at Krishnagiri and Aranthanki</strong>, built over vast land areas in pollution-free environment zones surrounded by natural greenery. Our facilities are designed and organized at par with international standards with all government-approved licenses.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We maintain a production capacity of <strong className="text-yellow-400">60,000 pieces per month</strong> with scope for expansion. Our workforce of skilled operators ensures consistent quality output while maintaining ethical labor practices.
            </p>
            <p className="text-lg font-semibold text-yellow-400">
              Our manufacturing units are fully automated to provide complete cutting-edge solutions to all our customers globally.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="/images/infrastructure/infrastructure-1.jpg"
              alt="Factory Environment"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-2.jpg"
              alt="Natural Surroundings"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-3.jpg"
              alt="Clean Environment"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-4.JPG"
              alt="Manufacturing Facility"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-5.JPG"
              alt="Production Facility"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-6.JPG"
              alt="Quality Assurance"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-7.JPG"
              alt="Packaging Process"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-8.JPG"
              alt="Final Inspection"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/infrastructure/infrastructure-9.png"
              alt="Advanced Machinery"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Environment & Location Section */}
          <div className="border-t border-slate-700 pt-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">
              Our Natural Environment
            </h3>
            <p className="text-lg mb-8 max-w-6xl mx-auto leading-relaxed text-justify">
              Our factories are nestled in serene rural landscapes, surrounded by lush greenery and natural beauty. This pristine environment ensures a <strong className="text-yellow-400">pollution-free manufacturing zone</strong>, providing our workforce with a healthy and peaceful atmosphere while maintaining our commitment to <strong className="text-yellow-400">sustainable production practices</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <img
                src="/images/environment/nature1.jpg"
                alt="Natural Surroundings"
                className="rounded-lg shadow-lg w-full aspect-square object-contain"
              />
              <img
                src="/images/environment/nature2.jpg"
                alt="Rural Landscape"
                className="rounded-lg shadow-lg w-full aspect-square object-contain"
              />
              <img
                src="/images/environment/nature3.png"
                alt="Green Environment"
                className="rounded-lg shadow-lg w-full aspect-square object-contain"
              />
              <img
                src="/images/environment/nature4.jpg"
                alt="Peaceful Setting"
                className="rounded-lg shadow-lg w-full aspect-square object-contain"
              />
              <img
                src="/images/environment/nature5.jpg"
                alt="Our Environment"
                className="rounded-lg shadow-lg w-full aspect-square object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            QUALITY & TIMELY DELIVERY
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="w-12 h-12 mb-4 text-slate-900" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Quality Commitment</h3>
              <p className="text-lg leading-relaxed text-slate-900">
                We are committed to quality by adhering to all measures of quality control at every level of the manufacturing process. We maintain a quality check for every step right from the procurement to the final production of the garments. Our quality team follows required AQLs and all protocols in order to produce fine finished garments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <TrendingUp className="w-12 h-12 mb-4 text-slate-900" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Timely Delivery</h3>
              <p className="text-lg leading-relaxed text-slate-900">
                We prove our integrity by delivering our products on time. We have developed a well defined pattern for ourselves that enables us to keep up to the time, from procurement to the final shipment. MVIC has always been consistent in its delivery which has earned the company trust from its customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-400">
            OUR SOCIAL CONTRIBUTION
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="w-12 h-12 mb-4 text-yellow-400" />
              <p className="text-lg mb-6 leading-relaxed">
                MVIC has always been an active participant in society. <strong className="text-yellow-400">Women's empowerment</strong> has always been a priority for us. Women make up 90% of the workforce. Our female employees may rest assured that their livelihoods are secure.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                As part of its social responsibility, the company has also contributed to the adjacent government schools. School children are provided with essential necessities to assist them in their studies.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                MVIC is also committed to environmental stewardship, sourcing raw materials from only environmentally friendly sources. We have played a significant role in contributing to the country's national GDP by adopting the <strong className="text-yellow-400">"Make in India"</strong> idea.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we have been developing employment possibilities in the rural area while also empowering women. We are constantly improving the villages in which our factories are located, and we have assisted women in becoming financially self-sufficient.
              </p>
            </div>
            <div>
              <img
                src="/images/competency/social.png"
                alt="Social Contribution"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            OUR PRODUCTS
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-700">
            Quality, comfort, and style is the mantra that MVIC follows for manufacturing. Our stitches, seams, cuts, and finishes are world class at par with global standards.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{product.name}</h3>
                  <p className="text-white">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-700">
              We manufacture: Men's Wear, Denim, Pajamas, Chino, Shorts, Cargo, Corduroy, and more...
            </p>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-400">
            PORTFOLIO
          </h2>
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto">
            Detailed specifications for all our product styles.
          </p>
          
          {/* Men's Trousers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-yellow-400">Men's Trousers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-yellow-400 flex justify-end h-64">
                  <img src="/images/catalogue/trouser-1.png" alt="Trouser Style 1" className="h-full object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-7163</p>
                  <p className="text-xs mb-1">Formal Trouser</p>
                  <p className="text-xs text-gray-400">Main fabric: 98% cotton 2% elastane</p>
                  <p className="text-xs text-gray-400">Light premium twill with 245 gsm</p>
                  <p className="text-xs text-gray-400">Pocket bag fabric: 60's Giza cotton with high quality print</p>
                  <p className="text-xs text-gray-400">Brand name embroidered at waist band canvas narrow fabric</p>
                  <p className="text-xs text-gray-400">Buttons engraved with brand logo using laser technique</p>
                  <p className="text-xs text-gray-400">Garment washed with enzyme silicon softener</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <img src="/images/catalogue/trouser-2.png" alt="Trouser Style 2" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-Corduroy</p>
                  <p className="text-xs mb-1">Corduroy Trouser</p>
                  <p className="text-xs text-gray-400">Textile with distinct pattern: 9 wale corduroy with stretch</p>
                  <p className="text-xs text-gray-400">Waist band adjustable with tab buttons</p>
                  <p className="text-xs text-gray-400">Chino style with coin pocket at side facing</p>
                  <p className="text-xs text-gray-400">Garment washed with softener wash</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <img src="/images/catalogue/trouser-3.png" alt="Trouser Style 3" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-Seersucker</p>
                  <p className="text-xs mb-1">Seersucker Pant</p>
                  <p className="text-xs text-gray-400">100% cotton seersucker fabric</p>
                  <p className="text-xs text-gray-400">Seersucker effect obtained using mechanical technique</p>
                  <p className="text-xs text-gray-400">Waist band with hallow double needle passage where fabric rope is passed for tie</p>
                  <p className="text-xs text-gray-400">Quality passed metal eyelets to pass through the tie fabric</p>
                  <p className="text-xs text-gray-400">Cold wash done to achieve more searing effect</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <img src="/images/catalogue/trouser-4.png" alt="Trouser Style 4" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-LINEN MIX</p>
                  <p className="text-xs mb-1">Linen Mix Trouser</p>
                  <p className="text-xs text-gray-400">Distinct product: 58% Linen / 39% Cotton / 3% Elastane</p>
                  <p className="text-xs text-gray-400">Light weight, twill stretch fabric</p>
                  <p className="text-xs text-gray-400">Gives high comfort & Luxury</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <img src="/images/catalogue/trouser-5.png" alt="Trouser Style 5" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HB-7140</p>
                  <p className="text-xs mb-1">Stripe Design Trouser</p>
                  <p className="text-xs text-gray-400">Fabric: 64% polyester 34% viscose & 2% elastane</p>
                  <p className="text-xs text-gray-400">Yarn dyed stripe design fabric</p>
                  <p className="text-xs text-gray-400">Garment washed with softener wash</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/trouser-6.png" alt="Trouser Style 6" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-BC</p>
                  <p className="text-xs mb-1">Bedford Cord Chino</p>
                  <p className="text-xs text-gray-400">Bedford Cord fabric with cotton / elastane content</p>
                  <p className="text-xs text-gray-400">Superior soft feel ensured with this cord</p>
                  <p className="text-xs text-gray-400">Garment softener wash done</p>
                  <p className="text-xs text-gray-400">2 Back pockets sewn with flap for multiple styling options</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-yellow-400">
                  <img src="/images/catalogue/trouser-7.png" alt="Trouser Style 7" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-Print Chino</p>
                  <p className="text-xs mb-1">Print Chino</p>
                  <p className="text-xs text-gray-400">Chino with all over rotary print with 3 color design</p>
                  <p className="text-xs text-gray-400">Semi-formal Trouser with Brand logo embroidered at above back welt pocket</p>
                  <p className="text-xs text-gray-400">Garment washed with silicon softener</p>
                  <p className="text-xs text-gray-400">Folding & ironing done to appeal as formal chino</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/trouser-8.png" alt="Trouser Style 8" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-7150</p>
                  <p className="text-xs mb-1">5-Pocket Stretch Pant</p>
                  <p className="text-xs text-gray-400">98% cotton 2% elastane - stretch twill 5-pocket Pant</p>
                  <p className="text-xs text-gray-400">Back 2 pockets patch applied with decorative stitch & brand logo embroidered</p>
                  <p className="text-xs text-gray-400">Front pocket bag printed with 2 color brand design</p>
                  <p className="text-xs text-gray-400">High quality, washable leather patch stitched at waist band</p>
                  <p className="text-xs text-gray-400">Shank & rivets used</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <img src="/images/catalogue/trouser-9.png" alt="Trouser Style 9" className="w-full h-64 object-contain" />
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-WNJ10</p>
                  <p className="text-xs mb-1">Print Stretch Trouser</p>
                  <p className="text-xs text-gray-400">Elasticated & adjustable waist band trouser</p>
                  <p className="text-xs text-gray-400">Fabric is all over rotary print with stretch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Denim */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-yellow-400">Denim</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/denim-1.png" alt="Denim Style 1" className="w-full h-64 object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-TD-001</p>
                  <p className="text-xs mb-1">8 Oz fabric</p>
                  <p className="text-xs text-gray-400">Enzyme wash with unique whiskering patterns</p>
                  <p className="text-xs text-gray-400">Knee & bottom parts are whiskered</p>
                  <p className="text-xs text-gray-400">Back pockets with decorative stitches</p>
                  <p className="text-xs text-gray-400">Branded label at center waist band</p>
                  <p className="text-xs text-gray-400">Quality shank & rivets</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-yellow-400 flex justify-end h-64">
                  <img src="/images/catalogue/denim-3.png" alt="Denim Style 3" className="h-full object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-RY-002</p>
                  <p className="text-xs mb-1">9 Oz Denim Fabric</p>
                  <p className="text-xs text-gray-400">Whisker with spot wash</p>
                  <p className="text-xs text-gray-400">Grinding at pocket edges for worn effect</p>
                  <p className="text-xs text-gray-400">Distance zig zag at fly for decorative</p>
                  <p className="text-xs text-gray-400">Coin pocket with specific pattern stitches</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/denim-4.png" alt="Denim Style 4" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-PL-001</p>
                  <p className="text-xs mb-1">Cotton Stretch denim fabric</p>
                  <p className="text-xs text-gray-400">Wet Process: Enzyme wash</p>
                  <p className="text-xs text-gray-400">Dry Process: Whisker, Grinding, Hand sanding</p>
                  <p className="text-xs text-gray-400">Damages created & fused / sewn for vintage look</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/denim-5.png" alt="Denim Style 5" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-PL-002</p>
                  <p className="text-xs mb-1">Cotton Stretch denim</p>
                  <p className="text-xs text-gray-400">Acid wash: De-sizing + drying + tumble dry + cooling + per-oxide wash + optical brightening + softening treatment</p>
                  <p className="text-xs text-gray-400">Light whisker effect at thigh</p>
                  <p className="text-xs text-gray-400">Softening treatment for soft touch</p>
                  <p className="text-xs text-gray-400">Tagging at side seam for mix effect</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-yellow-400">
                  <img src="/images/catalogue/denim-6.png" alt="Denim Style 6" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-PL-003</p>
                  <p className="text-xs mb-1">Loose knit denim fabric</p>
                  <p className="text-xs text-gray-400">Stone enzyme wash</p>
                  <p className="text-xs text-gray-400">Whisker + hand sanding</p>
                  <p className="text-xs text-gray-400">Mild Spot bleach</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/denim-9.png" alt="Denim Style 9" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-Bacci-001</p>
                  <p className="text-xs mb-1">100% Cotton denim fabric</p>
                  <p className="text-xs text-gray-400">Size range 6 years to 14 years</p>
                  <p className="text-xs text-gray-400">Enzyme wash, Pattern crushing, Spray, Damage, Grinding, softer wash, neutralize</p>
                  <p className="text-xs text-gray-400">Woven fabric backed with damage & zigzag stitch for styling</p>
                  <p className="text-xs text-gray-400">Heat transfer stickers fused at post finishing process</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shorts */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-yellow-400">Shorts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-yellow-400">
                  <img src="/images/catalogue/shorts-1.png" alt="Shorts Style" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-B7030</p>
                  <p className="text-xs mb-1">Cargo Shorts</p>
                  <p className="text-xs text-gray-400">Main fabric: 98% cotton 2% elastane</p>
                  <p className="text-xs text-gray-400">Textured fabric dobby design</p>
                  <p className="text-xs text-gray-400">2 Back welt pockets & 2 side Patch pockets with flap</p>
                  <p className="text-xs text-gray-400">Brand name embroidered at waist band canvas narrow fabric</p>
                  <p className="text-xs text-gray-400">Buttons engraved with brand logo using laser technique</p>
                  <p className="text-xs text-gray-400">Garment washed with enzyme silicon softener</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/shorts-2.png" alt="Shorts Style 2" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-RL-UL</p>
                  <p className="text-xs mb-1">Shorts</p>
                  <p className="text-xs text-gray-400">Fine twill cotton fabric with peach finish</p>
                  <p className="text-xs text-gray-400">Elasticated short with drawcord + metal tipping for waist adjustments</p>
                  <p className="text-xs text-gray-400">2 side pockets with 1 back welt pocket</p>
                  <p className="text-xs text-gray-400">Double needle stitches in all over seams</p>
                  <p className="text-xs text-gray-400">Enzyme softener wash</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/shorts-3.png" alt="Shorts Style 3" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-RL-Check</p>
                  <p className="text-xs mb-1">Shorts</p>
                  <p className="text-xs text-gray-400">30's twill with close construction fabric</p>
                  <p className="text-xs text-gray-400">Fabric is brushed (top layer fibers raised for soft hand feel)</p>
                  <p className="text-xs text-gray-400">High quality rubber elastic at inside waist band</p>
                  <p className="text-xs text-gray-400">Twill herring bone tape reinforcement at bottom hem</p>
                  <p className="text-xs text-gray-400">2 side pockets and 1 back pocket</p>
                  <p className="text-xs text-gray-400">Check patterns matched for better appearance & look</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-navy-900">
                  <img src="/images/catalogue/shorts-4.png" alt="Shorts Style 4" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-Boxer</p>
                  <p className="text-xs mb-1">Outer Boxer Shorts</p>
                  <p className="text-xs text-gray-400">40's poplin with double mercerized fabric to improve properties</p>
                  <p className="text-xs text-gray-400">Outer boxer with 2 side pockets</p>
                  <p className="text-xs text-gray-400">Elasticated waist band for better sizing</p>
                  <p className="text-xs text-gray-400">Brand label at fly & heat transfer label inside garment</p>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="bg-yellow-400">
                  <img src="/images/catalogue/shorts-5.png" alt="Shorts Style 5" className="w-full h-64 object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-yellow-400 mb-2">Style# MV-HBJ-B7028</p>
                  <p className="text-xs mb-1">Formal Chino Short</p>
                  <p className="text-xs text-gray-400">Cotton stretch twill fabric</p>
                  <p className="text-xs text-gray-400">Chino short with formal look</p>
                  <p className="text-xs text-gray-400">Enzyme softener wash</p>
                  <p className="text-xs text-gray-400">Narrow width fabric used at waist band & brand logo embroidered</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-yellow-400 p-8 rounded-lg text-slate-900">
            <h3 className="text-3xl font-bold mb-6 text-center">Production Capabilities</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">60K+</p>
                <p className="text-lg">Pieces/Month</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100+</p>
                <p className="text-lg">Styles</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">350+</p>
                <p className="text-lg">Machines</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-lg">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clientele" className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-slate-900">
            OUR CLIENTELE
          </h2>
          <p className="text-xl text-center mb-12 text-slate-900">
            MVIC has a strong niche position in the global apparel industry. Over the years, we have produced garments for customers all over the world, including Italy, the United States, the United Kingdom, and Spain.
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src="/images/clients/clients.png"
              alt="Our Clients"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-400">
            CONTACT US
          </h2>
          
          {/* Common Contact Details */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-yellow-400 rounded-lg shadow-xl p-8">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center space-x-4">
                  <Phone className="w-10 h-10 text-slate-900 flex-shrink-0" />
                  <a href="tel:+919840911975" className="text-2xl font-semibold text-slate-900 hover:text-slate-700 transition-colors">
                    +(91) 984 091 1975
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-10 h-10 text-slate-900 flex-shrink-0" />
                  <a href="mailto:smv@mvc.org.in" className="text-2xl font-semibold text-slate-900 hover:text-slate-700 transition-colors">
                    smv@mvc.org.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Head Office */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Head Office</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      MV Industrial Corporation
                      <br />
                      C-48, Veerasandra Industrial Estate
                      <br />
                      Electronic City
                      <br />
                      Bengaluru, PIN - 560100
                      <br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <a
                    href="https://maps.app.goo.gl/D8FWDWStdJk3SxhT7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-yellow-400 transition-colors"
                  >
                    View on Google Maps
                  </a>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://maps.app.goo.gl/D8FWDWStdJk3SxhT7')}`}
                    alt="QR Code for Head Office Location"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Factory Address */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Factory</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      MV Industrial Corporation
                      <br />
                      129/2b Kalingavaram Village
                      <br />
                      Shoolagiri Taluk, Krishnagiri District
                      <br />
                      Hosur, Krishnagiri, PIN - 635117
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <a
                    href="https://maps.app.goo.gl/U9Cpa7qZFsYVqBR27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-yellow-400 transition-colors"
                  >
                    View on Google Maps
                  </a>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://maps.app.goo.gl/U9Cpa7qZFsYVqBR27')}`}
                    alt="QR Code for Factory Location"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} MV Industrial Corporation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;