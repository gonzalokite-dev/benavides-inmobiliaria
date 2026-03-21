"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export default function ServicioFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-stone-200 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-stone-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-medium text-stone-900 text-sm md:text-base">
              {faq.q}
            </span>
            <ChevronDown
              className={`shrink-0 w-5 h-5 text-stone-500 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-1 text-stone-600 text-sm md:text-base leading-relaxed border-t border-stone-100">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
