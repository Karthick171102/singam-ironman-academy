import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { LinkButton, Reveal, SectionLabel } from "./ui";
import { useSite } from "../lib/preferences";

export function FAQ() {
  const { c } = useSite();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-surface-2 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionLabel index="07" tone="ink">
                  {c.faq.label}
                </SectionLabel>
                <h2 className="heading mt-6 text-[2.75rem] leading-[0.92] text-fg sm:text-6xl lg:text-[4rem]">
                  {c.faq.titleLine1}
                  <br />
                  {c.faq.titleLine2}
                  <span className="text-accent">.</span>
                </h2>
                <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-fg/55">
                  {c.faq.body}
                </p>
                <div className="mt-8">
                  <LinkButton href="#contact" variant="ink">
                    {c.faq.cta}
                  </LinkButton>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {c.faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={item.q} delay={Math.min(i, 4) * 40}>
                    <div className="border-b border-line">
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${i}`}
                          id={`faq-button-${i}`}
                          className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-mono text-[10px] text-fg/25">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={
                                isOpen
                                  ? "text-[15.5px] font-semibold tracking-tight text-fg md:text-[17px]"
                                  : "text-[15.5px] font-medium tracking-tight text-fg/75 transition-colors group-hover:text-fg md:text-[17px]"
                              }
                            >
                              {item.q}
                            </span>
                          </span>
                          <span
                            className={
                              isOpen
                                ? "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-fg text-surface"
                                : "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-fg/50 transition-colors group-hover:border-accent/50 group-hover:text-accent"
                            }
                          >
                            {isOpen ? (
                              <Minus className="h-3.5 w-3.5" />
                            ) : (
                              <Plus className="h-3.5 w-3.5" />
                            )}
                          </span>
                        </button>
                      </h3>
                      <div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        className={
                          isOpen
                            ? "grid grid-rows-[1fr] transition-all duration-300"
                            : "grid grid-rows-[0fr] transition-all duration-300"
                        }
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[62ch] pb-6 pl-8 text-[13.5px] leading-relaxed text-fg/60 md:pl-9">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
