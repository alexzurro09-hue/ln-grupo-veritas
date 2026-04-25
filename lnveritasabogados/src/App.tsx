/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Search, 
  ChevronDown, 
  Scale, 
  BookOpen, 
  ShieldCheck, 
  Briefcase, 
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-veritas-red selection:text-white">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-veritas-green/10 h-[30px] hidden md:block">
        <div className="max-w-7xl mx-auto px-10 h-full flex justify-end items-center space-x-5 text-[11px] font-medium tracking-[0.05em] text-veritas-gray">
          <a href="tel:918866694" className="flex items-center hover:text-veritas-red transition-colors">
            Tel: 918866694
          </a>
          <a href="mailto:info@lngrupoveritas.es" className="flex items-center hover:text-veritas-red transition-colors">
            info@lngrupoveritas.es
          </a>
        </div>
      </div>

      {/* Main Logo Header */}
      <header className="bg-white h-[100px] flex items-center justify-center border-b border-gray-50">
        <div className="flex flex-col items-center select-none">
          <h1 className="text-3xl font-serif font-bold tracking-[0.25em] text-veritas-green uppercase">
            LN Grupo Veritas
          </h1>
          <div className="text-[10px] uppercase tracking-[0.5em] text-veritas-green/60 font-medium mt-1">
            Abogados / Asesores
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className={`bg-veritas-green text-white h-[45px] transition-all duration-300 z-50 flex items-center justify-center shadow-lg ${isScrolled ? 'sticky top-0' : ''}`}>
        <div className="max-w-7xl mx-auto w-full px-10 flex justify-center items-center h-full">
          <div className="flex items-center gap-16 font-medium uppercase text-[12px] tracking-[0.2em]">
            <NavLink href="#" active>Inicio</NavLink>
            <div className="group relative h-full flex items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
              <span className="flex items-center gap-1">Servicios <ChevronDown size={12} /></span>
              <div className="absolute top-[45px] left-1/2 -translate-x-1/2 w-64 bg-white text-veritas-green shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 border-t-2 border-veritas-red">
                <div className="flex flex-col py-2">
                  <DropdownLink href="#">Jurídico</DropdownLink>
                  <DropdownLink href="#">Fiscal</DropdownLink>
                  <DropdownLink href="#">Laboral</DropdownLink>
                  <DropdownLink href="#">Contable</DropdownLink>
                </div>
              </div>
            </div>
            <a href="#contacto" className="opacity-70 hover:opacity-100 transition-opacity">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Main Layout Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_364px] min-h-[593px]">
        {/* Left Column: Hero + Services Highlight */}
        <div className="flex flex-col border-r border-gray-100">
          {/* Hero Section */}
          <section className="relative h-[700px] overflow-hidden flex items-center border-b border-veritas-green/10">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Justice Building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-white/75"></div>
            </div>
            
            {/* Background Text Accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[140px] font-black text-veritas-green/[0.03] rotate-[-5deg] pointer-events-none select-none z-0">
              VERITAS
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="ml-10 md:ml-15 max-w-[620px] bg-white/90 backdrop-blur-md p-8 md:p-10 border-l-4 border-veritas-green shadow-xl relative z-10"
            >
              <div className="space-y-6 text-veritas-gray leading-relaxed text-[13px] font-sans">
                <p>
                  <strong className="text-veritas-green font-serif text-lg mb-2 block uppercase tracking-wider">Sobre Nosotros</strong>
                  LN GRUPO VERITAS es un despacho con más de 30 años de trayectoria especializado en el asesoramiento integral de empresas y particulares. Nuestro enfoque se basa en ofrecer un servicio personalizado y directo, adaptado a las necesidades específicas de cada cliente. Con una cartera altamente fidelizada y un firme compromiso con el emprendimiento, utilizamos herramientas avanzadas para garantizar una gestión eficiente y de máxima calidad en cada aventura empresarial.
                </p>
                
                <p>
                  Tramitamos anualmente cerca de 100 expedientes judiciales con una tasa de éxito del 75%, destacando por un carácter conciliador y una tenacidad inquebrantable en las negociaciones. El despacho está compuesto por un equipo multidisciplinar liderado por su titular junto a dos profesionales dedicados a la asesoría de empresas y administración, preparados para resolver retos legales y corporativos con absoluto rigor y eficacia.
                </p>
                
                <p className="pt-2 text-[12px] italic border-t border-gray-100">
                  Luis Ángel Zurro es licenciado por la Universidad de Deusto y máster en Asesoría Jurídica y Fiscal por la Universidad Politécnica de Madrid. Tras fundar el despacho en 1993, ejerce desde 2002 en Camarma de Esteruelas.
                </p>
              </div>
              <button className="bg-veritas-green text-white px-10 py-3.5 mt-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-veritas-red transition-all cursor-pointer shadow-md">
                Conócenos
              </button>
            </motion.div>
          </section>

          {/* Services Grid (4-column update) */}
          <section className="bg-white grid grid-cols-1 md:grid-cols-4 p-10 gap-5">
             <HighlightCard 
               emoji="⚖️"
               title="Jurídico"
               desc="Asesoramiento legal experto en todas las ramas del derecho."
             />
             <HighlightCard 
               emoji="🛡️"
               title="Fiscal"
               desc="Optimización de su carga impositiva y cumplimiento tributario."
             />
             <HighlightCard 
               emoji="💼"
               title="Laboral"
               desc="Gestión integral de recursos humanos y relaciones laborales."
             />
             <HighlightCard 
               emoji="📊"
               title="Contable"
               desc="Control exhaustivo de su contabilidad y finanzas corporativas."
             />
          </section>
        </div>

        {/* Right Column: Sidebar (Profile + Small Form) */}
        <aside className="bg-white flex flex-col">
          <div className="h-[300px] relative overflow-hidden bg-veritas-red">
            <img 
              src="https://images.unsplash.com/photo-1556157382-9793f77543c2?auto=format&fit=crop&q=80&w=400" 
              className="w-full h-full object-cover opacity-85 grayscale-[20%]"
              alt="Luis Ángel Zurro"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-veritas-red p-4 text-white">
              <div className="font-serif text-lg font-bold">Luis Ángel Zurro</div>
              <div className="text-[11px] opacity-80 uppercase tracking-widest">Socio Director</div>
            </div>
          </div>

          <div id="contacto" className="p-8 flex-grow flex flex-col gap-3">
            <h2 className="serif text-[18px] font-bold text-veritas-green">Solicite una Cita</h2>
            <p className="text-[11px] text-[#777] mb-2 leading-relaxed">Calle de la Justicia 1, 28001 Madrid</p>
            
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Nombre Completo" className="border-none border-b border-gray-300 py-2 text-[13px] outline-none bg-transparent focus:border-veritas-green transition-colors" />
              <input type="email" placeholder="Correo Electrónico" className="border-none border-b border-gray-300 py-2 text-[13px] outline-none bg-transparent focus:border-veritas-green transition-colors" />
              <textarea placeholder="Su Mensaje" className="border-none border-b border-gray-300 py-2 text-[13px] outline-none bg-transparent focus:border-veritas-green transition-colors h-[50px] resize-none"></textarea>
              <button type="submit" className="bg-veritas-green text-white py-3 px-4 mt-2 text-[11px] uppercase tracking-widest font-bold hover:bg-veritas-red transition-all cursor-pointer">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="w-full h-[40px] bg-white border-t border-gray-100 flex items-center px-10 justify-between text-[10px] text-[#999]">
        <div>&copy; 2024 Grupo Veritas - Todos los derechos reservados.</div>
        <div className="flex gap-10 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-veritas-green">POLÍTICAS</a>
          <a href="#" className="hover:text-veritas-green">COOKIES</a>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-[60px] right-10 flex flex-col gap-3 z-[100]">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-[50px] h-[50px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:brightness-110"
        >
          <span className="font-bold">W</span>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-[50px] h-[50px] rounded-full bg-veritas-green text-white flex flex-col items-center justify-center shadow-xl text-[10px] font-bold leading-[1.2]"
        >
          <span>CHAT</span>
        </motion.button>
      </div>
    </div>
  );
}

function HighlightCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="p-4 text-center border border-gray-100 transition-all hover:shadow-md h-full flex flex-col justify-center">
      <div className="text-2xl mb-2">{emoji}</div>
      <h3 className="font-serif text-[14px] font-bold text-veritas-green mb-1">{title}</h3>
      <p className="text-[11px] text-[#666] leading-relaxed">{desc}</p>
    </div>
  );
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a 
      href={href} 
      className={`px-2 h-full flex items-center text-[12px] font-medium uppercase tracking-[0.15em] transition-all duration-300 relative group
        ${active ? 'border-b border-white' : 'opacity-70 hover:opacity-100'}`}
    >
      {children}
    </a>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="px-6 py-3 text-[11px] font-medium uppercase tracking-widest hover:bg-gray-50 hover:text-veritas-red transition-all block border-b border-gray-50 last:border-0"
    >
      {children}
    </a>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="p-8 bg-white border border-gray-100 rounded-lg hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="w-16 h-16 bg-veritas-cream flex items-center justify-center rounded-lg text-veritas-green mb-8 group-hover:bg-veritas-green group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 text-veritas-green">{title}</h3>
      <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
        {description}
      </p>
      <a href="#contacto" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-veritas-red hover:tracking-[0.3em] transition-all">
        Consultar <ArrowRight size={14} className="ml-2" />
      </a>
    </motion.div>
  );
}

function ContactItem({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: string; link?: string }) {
  const content = (
    <div className="flex items-start space-x-6 group">
      <div className="text-veritas-red bg-white/10 p-3 rounded-sm group-hover:bg-white group-hover:text-veritas-green transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-bold">{title}</div>
        <div className="text-lg font-light text-veritas-cream">{value}</div>
      </div>
    </div>
  );

  return link ? <a href={link} className="block transition-transform hover:translate-x-2">{content}</a> : <div className="block">{content}</div>;
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-all">
      {icon}
    </a>
  );
}
