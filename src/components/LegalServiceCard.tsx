'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { titleToSlug } from '../content/services';

export type LegalServiceItem = string | { label: string; href: string };

type Props = {
  title: string;
  Icon: LucideIcon;
  items: LegalServiceItem[];
  className?: string;
};

export default function LegalServiceCard({ title, Icon, items, className }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={[
        'bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow',
        'p-6 md:p-7',
        className ?? '',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
            {title}
          </h3>
          <div className="mt-1 h-[2px] w-10 bg-veritas-red/80 rounded" />
        </div>
        <div className="text-[#1b3022]/80">
          <Icon size={22} strokeWidth={1.6} />
        </div>
      </div>

      <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
        {items.map((item) => {
          const label = typeof item === 'string' ? item : item.label;
          const href = typeof item === 'string' ? undefined : item.href;
          const key = href ?? titleToSlug(label);

          return (
            <li key={key}>
              {href ? (
                <Link
                  href={href}
                  className="group flex items-center justify-between gap-4 py-3 px-4 rounded-md hover:bg-stone-100/50 transition-all duration-200"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    {label}
                  </span>
                  <ChevronRight
                    size={16}
                    className="shrink-0 text-[#8b4c39] transition-colors duration-200 group-hover:text-[#a03621]"
                  />
                </Link>
              ) : (
                <div className="flex items-center justify-between gap-4 py-3 px-4 rounded-md text-stone-500">
                  <span>{label}</span>
                  <ChevronRight size={16} className="shrink-0 text-[#8b4c39]/30" />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

