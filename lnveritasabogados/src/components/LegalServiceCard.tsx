import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

type Props = {
  title: string;
  Icon: LucideIcon;
  items: string[];
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

      <ul className="mt-5 space-y-2.5 list-none text-[13px] leading-relaxed text-[#333] font-sans">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-[2px] text-veritas-red">
              <Check size={16} strokeWidth={2.2} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

