'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, Scale, ShieldCheck, Users, BarChart3, MapPin, Clock, User } from 'lucide-react';

const PHONE = '918 86 66 94';
const PHONE_HREF = 'tel:918866694';
const EMAIL = 'info@lngrupoveritas.es';
const EMAIL_HREF = 'mailto:info@lngrupoveritas.es';
const ADDRESS = 'Camino de Alcalá 52, 28816 Camarma de Esteruelas (Madrid)';

export default function HomePage() {
  return (
    <>
      <main className="w-full max-w-full overflow-x-hidden grid grid-cols-1 lg:grid-cols-[1fr_364px] h-auto pb-0 lg:max-w-7xl lg:mx-auto">
        <div className="flex flex-col border-r border-gray-100">
          <section className="relative overflow-x-hidden py-16 md:py-20 flex items-center border-b border-veritas-green/10">
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000"
                alt="Sede LN Grupo Veritas"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-white/75" />
            </div>

            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[140px] font-black text-veritas-green/[0.03] rotate-[-5deg] pointer-events-none select-none z-0">
              VERITAS
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="mx-0 md:ml-16 max-w-full md:max-w-[620px] bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 border-l-4 border-veritas-green shadow-xl relative z-10"
            >
              <div className="space-y-6 text-veritas-gray leading-relaxed text-[13px] font-sans font-normal">
                <p>
                  <strong className="text-veritas-green font-serif text-lg mb-2 block uppercase tracking-wider font-semibold">
                    Sobre Nosotros
                  </strong>
                  LN GRUPO VERITAS es un despacho con{' '}
                  <strong className="font-semibold text-veritas-green">más de 30 años</strong> de trayectoria
                  especializado en el asesoramiento integral de empresas y particulares. Nuestro enfoque se basa en
                  ofrecer un servicio personalizado y directo, adaptado a las necesidades específicas de cada cliente.
                  Con una cartera altamente fidelizada y un firme compromiso con el emprendimiento, utilizamos
                  herramientas avanzadas para garantizar una gestión eficiente y de máxima calidad en cada aventura
                  empresarial.
                </p>

                <p>
                  Tramitamos anualmente cerca de{' '}
                  <strong className="font-semibold text-veritas-green">100 expedientes judiciales</strong> con una{' '}
                  <strong className="font-semibold text-veritas-green">tasa de éxito del 75%</strong>, destacando por un
                  carácter conciliador y una tenacidad inquebrantable en las negociaciones. El despacho está compuesto
                  por un equipo multidisciplinar liderado por su titular junto a dos profesionales dedicados a la
                  asesoría de empresas y administración, preparados para resolver retos legales y corporativos con
                  absoluto rigor y eficacia.
                </p>

                <p className="pt-2 text-[12px] italic border-t border-gray-100">
                  Luis Ángel Zurro es licenciado por la Universidad de Deusto y máster en Asesoría Jurídica y Fiscal por
                  la Universidad Politécnica de Madrid. Tras fundar el despacho en 1993, ejerce desde 2002 en Camarma de
                  Esteruelas.
                </p>
              </div>
            </motion.div>
          </section>

          <section className="bg-veritas-cream border-b border-veritas-green/10">
            <div className="p-8 md:p-10">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="font-serif text-[20px] md:text-[22px] font-bold text-veritas-green">
                    Socios Directores
                  </h2>
                  <p className="mt-2 text-[13px] leading-relaxed text-veritas-gray max-w-[62ch]">
                    Liderazgo dual, presencia paritaria y una misma exigencia: rigor, cercanía y continuidad.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LeaderCard name="Luis Ángel Zurro" role="Socio Director" />
                <LeaderCard name="Noelia Furones" role="Socia Directora" />
              </div>
            </div>
          </section>

          <section className="bg-white grid grid-cols-1 md:grid-cols-4 p-10 gap-5">
            <HighlightCard
              href="/servicios/juridico"
              Icon={Scale}
              title="Jurídico"
              desc="Asesoramiento legal experto en todas las ramas del derecho."
            />
            <HighlightCard
              href="/servicios/fiscal"
              Icon={ShieldCheck}
              title="Fiscal"
              desc="Optimización de su carga impositiva y cumplimiento tributario."
            />
            <HighlightCard
              href="/servicios/laboral"
              Icon={Users}
              title="Laboral"
              desc="Gestión integral de recursos humanos y relaciones laborales."
            />
            <HighlightCard
              href="/servicios/contable"
              Icon={BarChart3}
              title="Contable"
              desc="Control exhaustivo de su contabilidad y finanzas corporativas."
            />
          </section>
        </div>

        <aside className="bg-white flex flex-col">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-3 lg:sticky lg:top-[160px]">
              <h2 className="font-serif text-[18px] font-bold text-veritas-green">Información Institucional</h2>

              <div className="mt-6 space-y-6 text-[13px] text-veritas-gray">
                <InfoRow
                  icon={<Phone size={18} strokeWidth={1.5} />}
                  label="Teléfono"
                  value={
                    <a className="hover:text-veritas-red transition-colors" href={PHONE_HREF}>
                      {PHONE}
                    </a>
                  }
                />
                <InfoRow
                  icon={<Mail size={18} strokeWidth={1.5} />}
                  label="Email"
                  value={
                    <a className="hover:text-veritas-red transition-colors break-words" href={EMAIL_HREF}>
                      {EMAIL}
                    </a>
                  }
                />
                <InfoRow
                  icon={<MapPin size={18} strokeWidth={1.5} />}
                  label="Dirección"
                  value={<span className="leading-relaxed">{ADDRESS}</span>}
                />
                <InfoRow
                  icon={<Clock size={18} strokeWidth={1.5} />}
                  label="Horario"
                  value={
                    <span className="flex flex-col leading-relaxed">
                      <span>Lunes a Jueves: 09:00 - 18:00</span>
                      <span>Viernes: 09:00 - 15:00</span>
                    </span>
                  }
                />
              </div>

              <Link
                href="/contacto"
                className="mt-8 inline-flex items-center justify-center bg-veritas-green text-white py-3 px-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-veritas-red transition-all duration-300 ease-in-out cursor-pointer rounded-none border border-white/10"
              >
                Solicitar una cita
              </Link>
            </div>
          </div>
        </aside>
      </main>

      {/*
      Legacy footer/banner (historical reference only).
      Cookie consent is now handled globally via <CookieConsent /> in src/app/layout.tsx.

      <footer className="w-full h-[40px] bg-white border-t border-gray-100 flex items-center px-10 justify-between text-[10px] text-[#999] pb-[76px] lg:pb-0">
        <div>&copy; 2024 Grupo Veritas - Todos los derechos reservados.</div>
        <div className="flex gap-10 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-veritas-green">
            POLÍTICAS
          </a>
          <a href="#" className="hover:text-veritas-green">
            COOKIES
          </a>
        </div>
      </footer>
      */}
    </>
  );
}

function LeaderCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.06)] overflow-hidden">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative bg-veritas-red aspect-[4/3] overflow-hidden"
      >
        <div className="absolute inset-0 grid place-items-center text-white/90">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 grid place-items-center">
              <User size={22} strokeWidth={1.5} />
            </div>
            <div className="text-[11px] tracking-[0.22em] uppercase font-sans text-white/85">Imagen próximamente</div>
          </div>
        </div>
      </motion.div>

      <div className="p-6">
        <div className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green leading-tight">
          {name}
        </div>
        <div className="mt-2 text-[11px] uppercase tracking-[0.28em] font-sans text-veritas-gray">{role}</div>
      </div>
    </div>
  );
}

function HighlightCard({
  href,
  Icon,
  title,
  desc,
}: {
  href: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group p-6 text-center bg-white border border-stone-100 rounded-none shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-md transition-all h-full flex flex-col justify-center cursor-pointer hover:border-veritas-green/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-veritas-green/30"
    >
      <div className="flex justify-center mb-4 text-[#1b3022] group-hover:text-veritas-red transition-colors">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-[14px] font-semibold text-veritas-green mb-1">{title}</h3>
      <p className="text-[11px] text-[#666] leading-relaxed">{desc}</p>
    </Link>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-veritas-green mt-0.5">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-widest font-bold text-veritas-green/70 font-sans">
          {label}
        </div>
        <div className="mt-1 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}
