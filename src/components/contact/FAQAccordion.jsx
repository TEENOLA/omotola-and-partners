import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/faq";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-hairline-light border-t border-b border-hairline-light">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base sm:text-lg text-ink">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-brass transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="text-slate text-sm leading-relaxed pb-5 pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
