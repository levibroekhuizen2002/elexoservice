import Link from "next/link";

export default function Home() {
  return (
      <div className="font-sans text-gray-800 bg-[#fcf9f2] min-h-screen overflow-x-hidden">

        {/* HEADER - Strakker afgewerkt */}
        <header className="bg-[#fcf9f2] py-4 px-6 lg:px-12 flex justify-between items-center sticky top-0 z-50 border-b border-gray-200/80 shadow-sm">
          <div className="flex items-center">
            <Link href="/">
              <img src="/images/logo.webp" alt="Elox Service" className="h-10 lg:h-12 object-contain" />
            </Link>
          </div>

          {/* Navigatie (verborgen op mobiel, brede spatiëring op desktop) */}
          <nav className="hidden lg:flex items-center space-x-10 text-[13px] font-extrabold text-[#1a2f24] tracking-wide">
            <Link href="#doen" className="hover:text-[#115e3b] transition-colors">WAT DOEN WIJ?</Link>
            <Link href="#waarom" className="hover:text-[#115e3b] transition-colors">WAAROM ELOX?</Link>
            <Link href="#werkwijze" className="hover:text-[#115e3b] transition-colors">HOE WIJ TE WERK GAAN</Link>
            <Link href="#klant" className="text-[#115e3b] hover:text-green-900 transition-colors">KLANT AAN HET WOORD</Link>
          </nav>

          {/* Rechterkant: Telefoon + Knop */}
          <div className="flex items-center space-x-5 lg:space-x-8">
            <a href="tel:+31857605170" className="hidden sm:flex text-[15px] font-bold items-center text-gray-800 hover:text-[#fdb813] transition-colors tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#fdb813]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +31857605170
            </a>
            <Link href="/serviceaanvragen/" className="bg-[#115e3b] text-white px-7 py-3 rounded-md text-[13px] font-extrabold uppercase tracking-wider hover:bg-[#0c442a] transition-colors shadow-sm">
              SERVICE NU
            </Link>
          </div>
        </header>

        {/* HERO: ZWARTE BALK */}
        <section className="bg-[#111111] text-white pt-16 pb-48 px-6 text-center flex flex-col items-center">
          <div className="flex items-center justify-center space-x-6 mb-8 w-full max-w-4xl">
            <div className="h-[1px] bg-gray-600 flex-grow"></div>
            <h1 className="text-2xl md:text-4xl font-bold whitespace-nowrap tracking-wide">Service & onderhoud voor elektrische bezorgvoertuigen</h1>
            <div className="h-[1px] bg-gray-600 flex-grow"></div>
          </div>
          <div className="flex space-x-4">
            <Link href="/serviceaanvragen" className="bg-[#115e3b] text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider hover:bg-green-800 transition-colors">
              SERVICE AANVRAGEN
            </Link>
            <Link href="/servicemodellen" className="border border-white text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              INFORMATIE OVER SERVICEMODELLEN
            </Link>
          </div>
        </section>

        {/* HERO: BEIGE SECTIE + GROENE BALK */}
        <section className="bg-[#fcf9f2] px-6 relative z-10 pb-20">
          <div className="max-w-6xl mx-auto relative pt-12">

            {/* FOTO MONTEUR (Absolute positionering zodat hij echt over alles heen hangt) */}
            <div className="absolute top-0 left-0 w-[45%] h-full pointer-events-none z-30 transform -translate-y-48 flex justify-center md:justify-start">
              <img src="/images/foto1.webp" alt="Monteur Elox" className="h-[750px] w-auto object-contain object-bottom drop-shadow-2xl pointer-events-auto" />
            </div>

            <div className="flex flex-col md:flex-row items-end pb-16">
              <div className="w-full md:w-5/12"></div>

              {/* TEKST & TELLERS */}
              <div className="w-full md:w-7/12 md:pl-10 text-center md:text-center flex flex-col justify-center relative z-20">
                <p className="text-[#115e3b] font-medium text-xs mb-3">Altijd doorbezorgen — binnen 24 uur in behandeling met mobiele service op locatie.</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#115e3b] mb-4 leading-tight mx-auto max-w-lg">
                  Service & onderhoud voor elektrische bezorgvoertuigen
                </h2>
                <div className="h-[2px] bg-[#115e3b] w-full max-w-lg mx-auto mb-6"></div>

                <p className="text-gray-600 text-[13px] mb-2 max-w-lg mx-auto leading-relaxed">
                  Wij ondersteunen bezorgbedrijven met (spoed)reparaties, preventief onderhoud en veilige laadoplossingen.
                </p>
                <p className="text-gray-600 text-[13px] mb-10 max-w-lg mx-auto leading-relaxed">
                  Met meer dan 20 jaar ervaring en 35.000+ serviceverzoeken staat jouw vloot nooit stil.
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 max-w-lg mx-auto w-full">
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 text-[#fdb813]">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8C0 3.58 3.58 0 8 0H32V6H8C6.9 6 6 6.9 6 8V32H0V8Z" />
                      </svg>
                    </div>
                    <div className="bg-[#fcf9f2] border border-gray-200 shadow-sm rounded-lg w-32 h-32 flex items-center justify-center relative z-10">
                      <p className="text-xl font-bold leading-tight text-center text-gray-900">24 uur<br/>service</p>
                    </div>
                  </div>

                  <div className="flex-grow w-full">
                    <div className="flex items-center gap-4 mb-6 mt-4">
                      <div className="h-[1px] bg-gray-300 flex-grow"></div>
                      <span className="text-[#115e3b] font-bold text-lg">Onze ervaring</span>
                      <div className="h-[1px] bg-gray-300 flex-grow"></div>
                    </div>
                    <div className="flex justify-between text-center px-2">
                      <div>
                        <span className="text-3xl font-bold block text-gray-800 mb-1">3761</span>
                        <span className="text-xs text-gray-500">Voertuigen</span>
                      </div>
                      <div>
                        <span className="text-3xl font-bold block text-gray-800 mb-1">35000</span>
                        <span className="text-xs text-gray-500">Servicetickets</span>
                      </div>
                      <div>
                        <span className="text-3xl font-bold block text-gray-800 mb-1">20</span>
                        <span className="text-xs text-gray-500">Jaar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GROENE TERUGBEL BALK BINNEN DE CONTAINER */}
            <div className="bg-[#115e3b] text-white py-12 px-8 md:px-12 relative overflow-hidden mt-8 z-10 rounded-sm">
              <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMTAiIGZpbGw9IiM0ZDhhNjgiLz48cmVjdCB4PSI1IiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiBmaWxsPSIjNGQ4YTY4Ii8+PHJlY3QgeD0iMTAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNGQ4YTY4Ii8+PHJlY3QgeD0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjUiIGZpbGw9IiM0ZDhhNjgiLz48L3N2Zz4=')] opacity-50 z-0"></div>
              <div className="flex flex-col md:flex-row justify-end items-center gap-8 relative z-20 md:pl-[35%]">
                <div className="w-full md:w-auto">
                  <h3 className="text-3xl font-bold mb-2">Wij bellen je terug</h3>
                  <p className="text-green-100 text-sm">Laat je mobiele nummer achter; we reageren <strong>binnen 1 werkdag.</strong></p>
                </div>
                <form className="flex flex-col w-full md:w-auto gap-2">
                  <label className="text-xs text-green-100 flex items-center gap-2"><span className="text-base border border-green-100/50 rounded px-1">📱</span> Jouw mobiele nummer</label>
                  <div className="flex gap-2">
                    <input type="tel" placeholder="(+316) 35005512" className="px-4 py-3 rounded w-full md:w-64 bg-white text-gray-900 text-sm focus:outline-none placeholder-gray-400 border border-transparent focus:border-green-300" required />
                    <button type="submit" className="bg-white text-gray-900 px-6 py-3 rounded font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap shadow-sm">Bel mij terug</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIE 1: WAAROM BEDRIJVEN KIEZEN */}
        <section id="waarom" className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/images/foto2.jpg" alt="E-Cargobike voor New York Pizza" className="rounded-2xl shadow-md w-full object-cover" />
          </div>
          <div>
            <h4 className="text-[#115e3b] font-bold text-sm mb-2">Waarom bedrijven kiezen voor Elox Service</h4>
            <h2 className="text-4xl font-bold text-[#115e3b] mb-6 leading-tight">Specialisten in service voor e-bikes, e-cargo's en e-scooters — dagelijks door heel Nederland</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Wij ondersteunen bezorgbedrijven met (spoed)reparaties, preventief onderhoud en veilige laadoplossingen voor elektrische bezorgvoertuigen. Ons team werkt volledig mobiel en komt naar jouw locatie voor snelle, professionele en duurzame service.
            </p>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Met meer dan 20 jaar ervaring in de bezorgindustrie en 35.000+ afgeronde serviceverzoeken kennen wij elk voertuig, elk merk en elk probleem. Onze monteurs voorkomen stilstand, verlengen de levensduur van accu's en zorgen dat jouw vloot maximaal inzetbaar blijft — zelfs tijdens piekuren.
            </p>
            <Link href="/werkwijze" className="bg-[#115e3b] text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-900 inline-block transition-colors">
              LEES MEER OVER ONZE WERKWIJZE
            </Link>
          </div>
        </section>

        {/* SECTIE 2: DIT IS WAT WIJ DOEN */}
        <section id="doen" className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="order-2 md:order-1">
            <h4 className="text-[#115e3b] font-bold text-sm mb-2">Onze diensten</h4>
            <h2 className="text-4xl font-bold text-[#115e3b] mb-6 leading-tight">Dit is wat wij dagelijks voor bezorgbedrijven doen</h2>
            <p className="text-[#115e3b] mb-8 text-sm leading-relaxed">
              Wij houden elektrische bezorgvoertuigen — e-bikes, e-cargo's en e-scooters — veilig, inzetbaar en in topconditie.<br/>
              Van spoedreparaties tot preventief onderhoud en laadoplossingen: wij zorgen dat jouw vloot blijft draaien, 7 dagen per week.
            </p>
            <ul className="space-y-4 text-gray-600 text-sm font-medium">
              <li className="flex items-center gap-4"><span className="bg-[#419c41] text-white w-6 h-6 flex items-center justify-center rounded font-bold text-xs">1.</span> Spoedservice binnen 24 uur</li>
              <li className="flex items-center gap-4"><span className="bg-[#419c41] text-white w-6 h-6 flex items-center justify-center rounded font-bold text-xs">2.</span> Mobiele service voor e-bikes, e-cargo's en e-scooters</li>
              <li className="flex items-center gap-4"><span className="bg-[#419c41] text-white w-6 h-6 flex items-center justify-center rounded font-bold text-xs">3.</span> Preventief onderhoud op locatie</li>
              <li className="flex items-center gap-4"><span className="bg-[#419c41] text-white w-6 h-6 flex items-center justify-center rounded font-bold text-xs">4.</span> Accu-check, diagnose en veilige laadoplossingen</li>
              <li className="flex items-center gap-4"><span className="bg-[#419c41] text-white w-6 h-6 flex items-center justify-center rounded font-bold text-xs">5.</span> Montage van Track & Trace en fleet-hardware</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img src="/images/foto3.jpeg" alt="Scooter in straat" className="rounded-2xl shadow-md w-full object-cover h-[500px]" />
          </div>
        </section>

        {/* SECTIE 3: WAAROM VERTROUWEN OP ELOX */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="text-[#115e3b] font-bold text-sm mb-2">Onze voordelen</h4>
            <h2 className="text-4xl font-bold text-[#115e3b] mb-6 leading-tight">Waarom bezorgbedrijven vertrouwen op Elox Service</h2>
            <p className="text-[#115e3b] mb-6 text-sm leading-relaxed">
              Wij zorgen dat jouw elektrische bezorgvoertuigen — e-bikes, e-cargo's en e-scooters altijd inzetbaar blijven.
            </p>
            <p className="text-[#115e3b] mb-8 text-sm leading-relaxed">
              Met bewezen expertise, snelle responstijden en mobiele service leveren wij de meest complete oplossing in Nederland.
            </p>
            <Link href="/werkwijze" className="bg-[#115e3b] text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-900 inline-block transition-colors">
              LEES MEER OVER ONZE WERKWIJZE
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#fcf9f2] p-8 rounded-xl shadow-sm border border-gray-200 relative">
              <div className="absolute -top-1 -left-1 text-[#fdb813]"><svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor"><path d="M0 8C0 3.58 3.58 0 8 0H32V6H8C6.9 6 6 6.9 6 8V32H0V8Z"/></svg></div>
              <span className="text-4xl font-bold text-[#115e3b] block mb-2">01.</span>
              <h3 className="font-bold text-lg mb-3 text-gray-900">Razendsnelle service</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Jouw vloot staat nooit lang stil — wij plannen direct in en komen naar je toe</p>
            </div>
            <div className="bg-[#fcf9f2] p-8 rounded-xl shadow-sm border border-gray-200 relative">
              <div className="absolute -top-1 -left-1 text-[#fdb813]"><svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor"><path d="M0 8C0 3.58 3.58 0 8 0H32V6H8C6.9 6 6 6.9 6 8V32H0V8Z"/></svg></div>
              <span className="text-4xl font-bold text-[#115e3b] block mb-2">02.</span>
              <h3 className="font-bold text-lg mb-3 text-gray-900">Mobiele monteurs door heel Nederland</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Onze servicewagens komen naar jouw locatie, volledig uitgerust voor elke reparatie.</p>
            </div>
            <div className="bg-[#fcf9f2] p-8 rounded-xl shadow-sm border border-gray-200 relative">
              <div className="absolute -top-1 -left-1 text-[#fdb813]"><svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor"><path d="M0 8C0 3.58 3.58 0 8 0H32V6H8C6.9 6 6 6.9 6 8V32H0V8Z"/></svg></div>
              <span className="text-4xl font-bold text-[#115e3b] block mb-2">03.</span>
              <h3 className="font-bold text-lg mb-3 text-gray-900">20+ jaar ervaring</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Onze expertise zorgt voor nauwkeurige diagnose én duurzame reparatie</p>
            </div>
            <div className="bg-[#fcf9f2] p-8 rounded-xl shadow-sm border border-gray-200 relative">
              <div className="absolute -top-1 -left-1 text-[#fdb813]"><svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor"><path d="M0 8C0 3.58 3.58 0 8 0H32V6H8C6.9 6 6 6.9 6 8V32H0V8Z"/></svg></div>
              <span className="text-4xl font-bold text-[#115e3b] block mb-2">04.</span>
              <h3 className="font-bold text-lg mb-3 text-gray-900">Volledige ontzorging</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Eén partner voor alles wat jouw bezorgvoertuigen nodig hebben.</p>
            </div>
          </div>
        </section>

        {/* SECTIE 4: TIMELINE - HOE WIJ TE WERK GAAN */}
        <section id="werkwijze" className="py-24 px-6 relative overflow-hidden bg-[#fcf9f2]">
          <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
            <h4 className="text-[#115e3b] font-bold text-sm mb-2">Hoe wij te werk gaan</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#115e3b] mb-4">Altijd doorbezorgen met onze premium service</h2>
            <p className="text-[#115e3b] text-sm font-medium">We houden elektrische bezorgvoertuigen 7 dagen per week rijdend — met snelle diagnose, mobiele monteurs en service op locatie door heel Nederland.</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#d78a48]"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
              <div className="w-full md:w-[45%] bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-right relative z-10">
                <span className="text-[#d78a48] font-bold text-2xl block mb-2">01.</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serviceverzoek indienen</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Je meldt een storing of onderhoudsverzoek in via ons formulier. Voeg foto's toe en beschrijf kort het probleem. Ons systeem koppelt dit direct aan je voertuig en debiteurnummer voor snelle verwerking.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#115e3b] rounded-full z-20 border-4 border-[#fcf9f2]"></div>
              <div className="w-full md:w-[45%] mt-8 md:mt-0 relative z-10 bg-white p-4 shadow-sm border border-gray-100">
                <img src="/images/foto4.jpeg" alt="Serviceverzoek indienen" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
              <div className="w-full md:w-[45%] order-2 md:order-1 mt-8 md:mt-0 relative z-10 bg-white p-4 shadow-sm border border-gray-100">
                <img src="/images/foto5.jpeg" alt="Diagnose en planning" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#115e3b] rounded-full z-20 border-4 border-[#fcf9f2]"></div>
              <div className="w-full md:w-[45%] order-1 md:order-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left relative z-10">
                <span className="text-[#d78a48] font-bold text-2xl block mb-2">02.</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnose & planning (&#60;24uur)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Wij beoordelen de urgentie en plannen direct een monteur in — op locatie.<br/>Bij spoed (binnen 24u) gaat je verzoek naar ons prioriteitsteam.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
              <div className="w-full md:w-[45%] bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-right relative z-10">
                <span className="text-[#d78a48] font-bold text-2xl block mb-2">03.</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Uitvoering op locatie</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Onze mobiele monteur komt naar je bedrijf of bezorglocatie. Reparaties worden direct uitgevoerd waar mogelijk. Dankzij onze bus-voorraad fixen we 90% van de issues ter plekke.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#115e3b] rounded-full z-20 border-4 border-[#fcf9f2]"></div>
              <div className="w-full md:w-[45%] mt-8 md:mt-0 relative z-10 bg-white p-4 shadow-sm border border-gray-100">
                <img src="/images/foto6.jpeg" alt="Uitvoering op locatie" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center justify-between relative w-full">
              <div className="w-full md:w-[45%] order-2 md:order-1 mt-8 md:mt-0 relative z-10 bg-white p-4 shadow-sm border border-gray-100">
                <img src="/images/foto7.jpeg" alt="Afronding en rapportage" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#115e3b] rounded-full z-20 border-4 border-[#fcf9f2]"></div>
              <div className="w-full md:w-[45%] order-1 md:order-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left relative z-10">
                <span className="text-[#d78a48] font-bold text-2xl block mb-2">04.</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Afronding & rapportage</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Je ontvangt een digitale werkbon met duidelijke kosten en advies voor preventief onderhoud.<br/>Wij werken transparant, snel en zonder verrassingen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIE 5: TESTIMONIALS & KLANTEN */}
        <section id="klant" className="py-20 px-6 bg-[#fcf9f2] text-center border-t border-gray-200">
          <h4 className="text-[#115e3b] font-bold text-xs tracking-wider uppercase mb-2">Testimonials</h4>
          <h2 className="text-4xl font-bold mb-4 text-[#111]">De ervaring van onze klant</h2>
          <p className="text-gray-600 mb-16 text-sm">Onze klanten vertrouwen op snelle service, vakmanschap en maximale inzetbaarheid van hun bezorgvoertuigen.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-left shadow-sm flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full mr-4 bg-gray-200 flex items-center justify-center text-gray-400">G</div>
                <div>
                  <h4 className="font-bold text-gray-900">Greg</h4>
                  <p className="text-xs text-gray-500 mb-1">Operations Manager</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-grow leading-relaxed">
                Elox Service houdt onze volledige vloot draaiende. Dankzij hun mobiele service staan onze e-bikes en e-cargo's vrijwel nooit stil. Reparaties worden snel en professioneel uitgevoerd, vaak nog dezelfde dag. De communicatie is helder, afspraken worden nagekomen en hun rapportages geven ons eindelijk inzicht in onderhoud en kosten. Absoluut een partner waar je op kunt bouwen.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-left shadow-sm flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full mr-4 bg-gray-200 flex items-center justify-center text-gray-400">J</div>
                <div>
                  <h4 className="font-bold text-gray-900">Joost</h4>
                  <p className="text-xs text-gray-500 mb-1">Bedrijfsleider</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-grow leading-relaxed">
                We werken nu ruim een jaar met Elox Service en het verschil is enorm. Storingen worden binnen 24 uur opgepakt en preventief onderhoud scheelt ons elke maand tientallen stilstaande ritten. Hun monteurs zijn vakbekwaam, vriendelijk en denken altijd in oplossingen. Dankzij Elox is onze bezorgoperatie merkbaar efficiënter geworden.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-left shadow-sm flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full mr-4 bg-gray-200 flex items-center justify-center text-gray-400">L</div>
                <div>
                  <h4 className="font-bold text-gray-900">Luca</h4>
                  <p className="text-xs text-gray-500 mb-1">Bezorger</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-grow leading-relaxed">
                Als er iets met mijn bezorgfiets is, komt Elox meestal dezelfde dag langs. Ze fixen alles supersnel en leggen ook uit wat het probleem was. Mijn fiets rijdt beter, voelt veiliger en ik heb veel minder gedoe tijdens het werk.
              </p>
            </div>
          </div>

          <div className="inline-block bg-[#115e3b] text-white font-bold text-[10px] px-3 py-1.5 mb-8 uppercase tracking-widest rounded-sm">
            Volledige ontzorging van full service tot aan het leveren van elektrische bezorgvoertuigen in de lease
          </div>
          <h3 className="text-2xl font-bold mb-8">Onze klanten in beeld</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="/images/foto8.jpg" alt="Vloot Elox 1" className="w-full h-64 object-cover rounded shadow-sm" />
            <img src="/images/foto9.jpg" alt="Vloot Elox 2" className="w-full h-64 object-cover rounded shadow-sm" />
            <img src="/images/foto10.jpg" alt="Vloot Elox 3" className="w-full h-64 object-cover rounded shadow-sm" />
          </div>
        </section>

        {/* SECTIE 6: SERVICEMODELLEN E-CARGOBIKE */}
        <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-[#fcf9f2]">
          <h2 className="text-2xl font-bold mb-2">Servicemodellen E-Cargobike</h2>
          <p className="text-gray-500 text-xs mb-4">Kies het servicemodel dat past bij jouw bezorgoperatie</p>
          <h3 className="text-xl font-bold text-[#115e3b] mb-6">Van basis-support tot premium service met maximale uptime — Elox zorgt dat jouw bezorgvoertuigen blijven rijden.</h3>

          <p className="text-xs text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Onze servicemodellen zijn ontwikkeld op basis van 20+ jaar ervaring in de bezorgindustrie.<br/>
            Of je nu een enkele e-bike hebt of een volledig wagenpark beheert: met de servicelicentie profiteer je van 24/7 ondersteuning, ingebouwde track & trace, voorkeursservice en een verlengde garantie.<br/><br/>
            Zo blijft jouw voertuig inzetbaar wanneer het ertoe doet — tijdens piekuren, drukke avonden en onverwachte storingen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-end mt-12">
            {/* TABEL 1 */}
            <div className="bg-white border border-gray-200 shadow-sm flex flex-col h-full">
              <h4 className="font-bold py-4 text-lg">Geen</h4>
              <div className="bg-[#125432] text-white py-6 relative overflow-hidden">
                <div className="absolute top-2 -right-6 bg-[#419c41] text-white text-[10px] font-bold py-1 px-8 rotate-45">BASE</div>
                <p className="text-4xl font-bold">€ 0,-</p>
              </div>
              <ul className="text-xs text-gray-600 flex flex-col">
                <li className="py-4 border-b border-gray-100">Geen 24/7 service</li>
                <li className="py-4 border-b border-gray-100">Service op afroep, per werkbon</li>
                <li className="py-4 border-b border-gray-100">Voor standaard reparaties en onderhoud</li>
                <li className="py-4 border-b border-gray-100">Reactietijd obv planning en regio</li>
                <li className="py-4">Geen vaste voordelen of korting op onderdelen</li>
              </ul>
            </div>

            {/* TABEL 2 */}
            <div className="bg-white border-2 border-[#125432] shadow-lg flex flex-col h-[105%] relative z-10">
              <h4 className="font-bold py-4 text-lg">Servicelicentie</h4>
              <div className="bg-[#125432] text-white py-6 relative overflow-hidden">
                <div className="absolute top-2 -right-6 bg-[#fdb813] text-black text-[10px] font-bold py-1 px-8 rotate-45">FAVO</div>
                <p className="text-4xl font-bold flex justify-center items-end gap-1">€ 18,99</p>
                <p className="text-xs font-normal mt-1">per maand</p>
              </div>
              <ul className="text-xs text-gray-600 flex flex-col flex-grow">
                <li className="py-4 border-b border-gray-100">24/7 service</li>
                <li className="py-4 border-b border-gray-100">Ingebouwde track & trace</li>
                <li className="py-4 border-b border-gray-100">5% korting op onderdelen & arbeid</li>
                <li className="py-4 border-b border-gray-100">Voorrang tijdens piekuren</li>
                <li className="py-4 border-b border-gray-100">Verlengde garantie</li>
                <li className="py-4 border-b border-gray-100">Mobiele service op locatie in heel Nederland</li>
              </ul>
              <div className="p-6">
                <button className="bg-[#125432] text-white px-8 py-3 rounded font-bold text-xs hover:bg-green-800 transition-colors">VRAAG AAN</button>
              </div>
            </div>

            {/* TABEL 3 */}
            <div className="bg-white border border-gray-200 shadow-sm flex flex-col h-full">
              <h4 className="font-bold py-4 text-lg">Servicecontract</h4>
              <div className="bg-[#125432] text-white py-6 relative overflow-hidden">
                <div className="absolute top-2 -right-6 bg-[#d78a48] text-white text-[10px] font-bold py-1 px-8 rotate-45">FULL</div>
                <p className="text-4xl font-bold">€ 59,95</p>
                <p className="text-xs font-normal mt-1">per maand</p>
              </div>
              <ul className="text-xs text-gray-600 flex flex-col flex-grow">
                <li className="py-4 border-b border-gray-100">24/7 service</li>
                <li className="py-4 border-b border-gray-100">Ingebouwde track & trace</li>
                <li className="py-4 border-b border-gray-100">10% korting op onderdelen, voorrij en arbeid</li>
                <li className="py-4 border-b border-gray-100">Vervangend voertuig bij langdurige reparatie</li>
                <li className="py-4 border-b border-gray-100">Extra lange garantie periode</li>
                <li className="py-4 border-b border-gray-100">Korting op nieuwe voertuigen</li>
              </ul>
              <div className="p-6">
                <button className="bg-[#125432] text-white px-8 py-3 rounded font-bold text-xs hover:bg-green-800 transition-colors">VRAAG AAN</button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIE 7: FAQ & FORMULIER */}
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 bg-[#fcf9f2]">
          <div>
            <h2 className="text-xl font-bold mb-8 text-gray-900">Meest gestelde vragen</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h4 className="font-bold text-sm text-[#115e3b]">Hoe snel kunnen jullie langskomen bij een storing?</h4>
                  <span className="text-gray-400">^</span>
                </div>
                <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                  In 95% van de gevallen komen we binnen 24 uur langs. Bij spoed kunnen we vaak dezelfde dag een monteur op locatie sturen, afhankelijk van regio en beschikbaarheid. Onze mobiele servicewagens zijn volledig uitgerust om direct ter plekke te herstellen.
                </p>
              </div>
              <div className="border-b border-gray-200 py-4 flex justify-between items-center cursor-pointer">
                <h4 className="font-bold text-sm text-gray-800">Wat moet ik klaarzetten voordat de monteur komt?</h4>
                <span className="text-gray-400">v</span>
              </div>
              <div className="border-b border-gray-200 py-4 flex justify-between items-center cursor-pointer">
                <h4 className="font-bold text-sm text-gray-800">Doen jullie ook preventief onderhoud?</h4>
                <span className="text-gray-400">v</span>
              </div>
              <div className="border-b border-gray-200 py-4 flex justify-between items-center cursor-pointer">
                <h4 className="font-bold text-sm text-gray-800">Wat als de fiets niet meer ter plekke te repareren is?</h4>
                <span className="text-gray-400">v</span>
              </div>
              <div className="border-b border-gray-200 py-4 flex justify-between items-center cursor-pointer">
                <h4 className="font-bold text-sm text-gray-800">Repareren jullie alle merken en modellen?</h4>
                <span className="text-gray-400">v</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gray-400 text-xs mb-2">Informatieaanvragen</h4>
            <h2 className="text-xl font-bold mb-4">Heb je een vraag of storing? Neem direct contact op</h2>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Onze service-experts staan 7 dagen per week klaar voor alle vragen over reparaties, onderhoud, onderdelen of storingen op locatie.<br/><br/>
              Vul het formulier in en wij nemen binnen enkele uren contact met je op.
            </p>
            <p className="text-xs text-gray-500 mb-6 flex items-center gap-2">
              <span>↳</span> Hoe duidelijker je vraag, hoe sneller we je kunnen helpen.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#115e3b] mb-1">Uw naam*</label>
                  <input type="text" placeholder="Uw naam" className="w-full border border-green-300 p-3 rounded text-sm focus:outline-none focus:border-green-600 bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#115e3b] mb-1">Uw e-mailadres*</label>
                  <input type="email" placeholder="uw@bedrijf.nl" className="w-full border border-green-300 p-3 rounded text-sm focus:outline-none focus:border-green-600 bg-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#115e3b] mb-1">Uw telefoonnummer</label>
                  <input type="tel" placeholder="+31 6 12345678" className="w-full border border-green-300 p-3 rounded text-sm focus:outline-none focus:border-green-600 bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#115e3b] mb-1">Uw bedrijfsnaam</label>
                  <input type="text" placeholder="Uw bedrijfsnaam" className="w-full border border-green-300 p-3 rounded text-sm focus:outline-none focus:border-green-600 bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#115e3b] mb-1">Uw bericht*</label>
                <textarea placeholder="Beschrijf kort uw vraag of storing" rows={4} className="w-full border border-green-300 p-3 rounded text-sm focus:outline-none focus:border-green-600 resize-none bg-white"></textarea>
              </div>
              <button className="bg-[#115e3b] text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider hover:bg-green-800 transition-colors">Verstuur bericht</button>
            </form>
          </div>
        </section>

        {/* MAP ONDER FORMULIER (Placeholder) */}
        <section className="w-full max-w-6xl mx-auto px-6 mb-16">
          <div className="w-full h-80 bg-gray-200 rounded-xl relative overflow-hidden border border-gray-300 flex items-center justify-center">
            <div className="text-gray-400 font-bold tracking-widest">[ GOOGLE MAPS ]</div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img src="/images/logo.webp" className="h-16 bg-white/80 p-2 rounded shadow-md object-contain" alt="Elox Logo Map" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#1a5b3a] text-white py-12 px-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
          <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMTAiIGZpbGw9IiM0ZDhhNjgiLz48cmVjdCB4PSI1IiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiBmaWxsPSIjNGQ4YTY4Ii8+PHJlY3QgeD0iMTAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNGQ4YTY4Ii8+PHJlY3QgeD0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjUiIGZpbGw9IiM0ZDhhNjgiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Klaar om samen te werken?</h2>
              <p className="text-sm font-bold">WhatsApp ons</p>
            </div>
            <div className="text-xs text-green-100 text-left md:text-right space-y-2">
              <p>Talmastraat 11, 3864 DE Nijkerkerveen</p>
              <p>KVK 94460523 NL866785802B01</p>
              <p>© 2024 Elox Service. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>

      </div>
  );
}