import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Instagram,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { cn, Reveal, SectionLabel } from "./ui";
import { DotBg } from "./DotBg";
import { useSite } from "../lib/preferences";

type Enquiry = {
  name: string;
  phone: string;
  goal: string;
  timing: string;
  message: string;
};

const emptyEnquiry: Enquiry = {
  name: "",
  phone: "",
  goal: "",
  timing: "",
  message: "",
};

const fieldBase =
  "w-full border-b border-fg/20 bg-transparent py-3 text-[14px] text-fg outline-none transition-colors placeholder:text-fg/30 focus:border-fg";

export function Contact() {
  const { c, lang, contact } = useSite();
  const [form, setForm] = useState<Enquiry>(emptyEnquiry);
  const [errors, setErrors] = useState<Partial<Record<keyof Enquiry, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  function update<K extends keyof Enquiry>(key: K, value: Enquiry[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof Enquiry, string>> = {};
    if (form.name.trim().length < 2) next.name = c.contact.form.errors.name;
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim()))
      next.phone = c.contact.form.errors.phone;
    if (!form.goal) next.goal = c.contact.form.errors.goal;
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
  }

  const brand = `${c.meta.brandTop} ${c.meta.brandSub}`;
  const enquiryTitle = c.contact.form.title;

  async function copyDetails() {
    try {
      await navigator.clipboard.writeText(
        `${enquiryTitle} — ${brand}\n\n${c.contact.form.summaryName}: ${form.name}\n${c.contact.form.summaryPhone}: ${form.phone}\n${c.contact.form.summaryGoal}: ${form.goal}\n${c.contact.form.summaryTiming}: ${form.timing || c.contact.form.flexible}\n${c.contact.form.message}: ${form.message || "—"}`,
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        `${enquiryTitle} — ${brand}\n\n${c.contact.form.summaryName}: ${form.name}\n${c.contact.form.summaryPhone}: ${form.phone}\n${c.contact.form.summaryGoal}: ${form.goal}\n${c.contact.form.summaryTiming}: ${form.timing || c.contact.form.flexible}\n${c.contact.form.message}: ${form.message || "—"}`,
      )}`
    : null;

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-inverse py-24 text-inverse-fg md:py-32"
    >
      <DotBg tone="inverse" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_0%_0%,var(--hero-glow),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-inverse-accent/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: invitation + details */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="08" tone="inverse">
                {c.contact.label}
              </SectionLabel>
              <h2 className="heading mt-6 text-[3rem] leading-[0.9] sm:text-6xl lg:text-[4.6rem]">
                {c.contact.titleLine1}
                <br />
                {c.contact.titleLine2}
                <br />
                <span className="text-inverse-accent">
                  {c.contact.titleAccent}
                </span>
              </h2>
              <p
                className={cn(
                  "mt-6 max-w-md text-xl leading-snug text-inverse-fg/70 md:text-[1.45rem]",
                  lang === "ta" ? "font-tamil not-italic" : "font-serif italic",
                )}
              >
                &ldquo;{c.contact.quote}&rdquo;
              </p>
            </Reveal>

            <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-inverse-fg/10 bg-inverse-fg/10">
              <Reveal delay={60}>
                <div className="flex gap-4 bg-inverse p-5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-inverse-accent" />
                  <div>
                    <p className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-inverse-fg/50">
                      {c.contact.groundLabel}
                    </p>
                    <p className="mt-1 text-[13.5px] text-inverse-fg/80">
                      {c.contact.address}
                    </p>
                    {contact.mapsUrl ? (
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-inverse-accent hover:underline"
                      >
                        {c.contact.mapsOpen}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <p className="mt-1.5 text-[10.5px] text-inverse-fg/50">
                        {c.contact.mapsPending}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={110}>
                <div className="flex gap-4 bg-inverse p-5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-inverse-accent" />
                  <div>
                    <p className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-inverse-fg/50">
                      {c.contact.timingsLabel}
                    </p>
                    <p className="mt-1 text-[13.5px] text-inverse-fg/80">
                      {c.contact.hours}
                    </p>
                    <p className="mt-1 text-[10.5px] text-inverse-fg/50">
                      {contact.hoursVerified
                        ? c.contact.timingsVerifiedNote
                        : c.contact.timingsNote}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="flex gap-4 bg-inverse p-5">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-inverse-accent" />
                  <div>
                    <p className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-inverse-fg/50">
                      {c.contact.talkLabel}
                    </p>
                    {contact.phone ? (
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-[13.5px] text-inverse-fg/80 hover:text-inverse-accent"
                      >
                        {contact.phone}
                      </a>
                    ) : (
                      <p className="mt-1 text-[13.5px] text-inverse-fg/80">
                        {c.contact.fastestReply}
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-4">
                      <a
                        href="https://www.instagram.com/sivabalan_singam/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-inverse-accent hover:underline"
                      >
                        <Instagram className="h-3 w-3" />
                        @sivabalan_singam
                      </a>
                      {contact.email && (
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-[10px] font-semibold tracking-[0.14em] uppercase text-inverse-accent hover:underline"
                        >
                          {contact.email}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={220}>
              {(!contact.phone || !contact.mapsUrl || !contact.whatsapp) && (
                <p className="mt-4 flex items-center gap-2 text-[10px] tracking-[0.04em] text-inverse-fg/30">
                  <span className="h-1 w-1 rounded-full bg-inverse-accent/60" />
                  {c.contact.pendingNote}
                </p>
              )}
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-[1.75rem] bg-surface p-6 text-fg shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] md:p-9">
              {!submitted ? (
                <form onSubmit={onSubmit} noValidate>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {c.contact.form.title}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] text-fg/55">
                        {c.contact.form.intro}
                      </p>
                    </div>
                    <span className="hidden shrink-0 rounded-full border border-fg/15 px-3 py-1.5 text-[8.5px] font-bold tracking-[0.16em] uppercase text-fg/45 sm:block">
                      {c.contact.form.est}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                    <Field
                      label={c.contact.form.name}
                      required
                      error={errors.name}
                      htmlFor="name"
                    >
                      <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        placeholder={c.contact.form.namePlaceholder}
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={fieldBase}
                      />
                    </Field>

                    <Field
                      label={c.contact.form.phone}
                      required
                      error={errors.phone}
                      htmlFor="phone"
                    >
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder={c.contact.form.phonePlaceholder}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={fieldBase}
                      />
                    </Field>

                    <Field
                      label={c.contact.form.goal}
                      required
                      error={errors.goal}
                      htmlFor="goal"
                    >
                      <div className="relative">
                        <select
                          id="goal"
                          name="goal"
                          value={form.goal}
                          onChange={(e) => update("goal", e.target.value)}
                          className={`${fieldBase} appearance-none pr-8 ${
                            form.goal ? "text-fg" : "text-fg/50"
                          }`}
                        >
                          <option value="">
                            {c.contact.form.goalPlaceholder}
                          </option>
                          {c.contact.goals.map((goal) => (
                            <option key={goal} value={goal}>
                              {goal}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-1 bottom-4 h-4 w-4 text-fg/55" />
                      </div>
                    </Field>

                    <Field
                      label={c.contact.form.timing}
                      htmlFor="timing"
                    >
                      <div className="relative">
                        <select
                          id="timing"
                          name="timing"
                          value={form.timing}
                          onChange={(e) => update("timing", e.target.value)}
                          className={`${fieldBase} appearance-none pr-8 ${
                            form.timing ? "text-fg" : "text-fg/50"
                          }`}
                        >
                          <option value="">
                            {c.contact.form.timingPlaceholder}
                          </option>
                          {c.contact.form.timingOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-1 bottom-4 h-4 w-4 text-fg/55" />
                      </div>
                    </Field>

                    <div className="sm:col-span-2">
                      <Field
                        label={c.contact.form.message}
                        htmlFor="message"
                      >
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          placeholder={c.contact.form.messagePlaceholder}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className={`${fieldBase} resize-none`}
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[34ch] text-[10.5px] leading-relaxed text-fg/55">
                      {c.contact.form.privacy}
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-fg px-7 py-4 text-[10.5px] font-bold tracking-[0.16em] uppercase text-surface transition-colors hover:bg-accent hover:text-on-accent"
                    >
                      {c.contact.form.submit}
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex min-h-[420px] flex-col justify-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-fg text-surface">
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                    {c.contact.form.successThanks}{" "}
                    {form.name.trim().split(" ")[0]}.
                  </h3>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-fg/60">
                    {c.contact.form.successBody}
                  </p>

                  <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-2xl border border-fg/10 bg-fg/5 p-5 text-[12.5px] sm:grid-cols-2">
                    <div>
                      <dt className="text-[9px] font-semibold tracking-[0.16em] uppercase text-fg/50">
                        {c.contact.form.summaryGoal}
                      </dt>
                      <dd className="mt-0.5 font-medium">{form.goal}</dd>
                    </div>
                    <div>
                      <dt className="text-[9px] font-semibold tracking-[0.16em] uppercase text-fg/50">
                        {c.contact.form.summaryTiming}
                      </dt>
                      <dd className="mt-0.5 font-medium">
                        {form.timing || c.contact.form.flexible}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[9px] font-semibold tracking-[0.16em] uppercase text-fg/50">
                        {c.contact.form.summaryPhone}
                      </dt>
                      <dd className="mt-0.5 font-medium">{form.phone}</dd>
                    </div>
                    <div>
                      <dt className="text-[9px] font-semibold tracking-[0.16em] uppercase text-fg/50">
                        {c.contact.form.summaryName}
                      </dt>
                      <dd className="mt-0.5 font-medium">{form.name}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <a
                      href={
                        whatsappHref ??
                        "https://www.instagram.com/sivabalan_singam/"
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-[10px] font-bold tracking-[0.14em] uppercase text-surface transition-colors hover:bg-accent hover:text-on-accent"
                    >
                      {whatsappHref ? (
                        <MessageCircle className="h-3.5 w-3.5" />
                      ) : (
                        <Instagram className="h-3.5 w-3.5" />
                      )}
                      {whatsappHref
                        ? c.contact.form.whatsapp
                        : c.contact.form.dm}
                    </a>
                    <button
                      type="button"
                      onClick={copyDetails}
                      className="inline-flex items-center gap-2 rounded-full border border-fg/20 px-5 py-3 text-[10px] font-bold tracking-[0.14em] uppercase text-fg/70 transition-colors hover:border-fg hover:text-fg"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copied ? c.contact.form.copied : c.contact.form.copy}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(emptyEnquiry);
                        setSubmitted(false);
                      }}
                      className="inline-flex items-center gap-1.5 px-2 py-3 text-[10px] font-semibold tracking-[0.12em] uppercase text-fg/55 hover:text-fg"
                    >
                      {c.contact.form.newEnquiry}
                    </button>
                  </div>

                  <p className="mt-5 border-t border-fg/10 pt-4 text-[10px] leading-relaxed text-fg/50">
                    {c.contact.form.demoNote}
                  </p>
                  <p aria-live="polite" className="sr-only">
                    {copied ? c.contact.form.copied : ""}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-[9.5px] font-bold tracking-[0.18em] uppercase text-fg/45"
      >
        {label}
        {required && <span className="text-ember">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p role="alert" className="mt-1.5 text-[10.5px] font-medium text-ember">
          {error}
        </p>
      )}
    </div>
  );
}
