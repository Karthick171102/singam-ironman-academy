import { useEffect, useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { cn } from "./ui";
import { useSite } from "../lib/preferences";

export function FloatingContact() {
  const { c, contact } = useSite();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.18 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const href = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}`
    : "https://www.instagram.com/sivabalan_singam/";
  const label = contact.whatsapp ? "WhatsApp" : c.contact.form.dm;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={`${c.meta.messageUs}: ${label}`}
      className={cn(
        "group fixed right-4 bottom-4 z-40 grid h-13 w-13 place-items-center rounded-full bg-gold text-ink shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:bg-fg hover:text-surface md:right-6 md:bottom-6 md:h-14 md:w-14",
        hidden && "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      {contact.whatsapp ? (
        <MessageCircle className="h-5 w-5" strokeWidth={2} />
      ) : (
        <Instagram className="h-5 w-5" strokeWidth={2} />
      )}
      <span className="sr-only">{label}</span>
    </a>
  );
}
