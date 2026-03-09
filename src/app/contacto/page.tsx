import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import {
  Mail,
  MessageCircle,
  YouTube,
  Facebook,
  Instagram,
  TikTok,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Asambleas del Pueblo por correo, redes sociales o grupos de WhatsApp.",
};

const channels = [
  {
    name: "Correo Oficial",
    description:
      "Escríbenos directamente al correo oficial para consultas, propuestas o colaboraciones.",
    action: "Enviar correo",
    href: "mailto:contacto@asambleasdelpueblo.org",
    Icon: Mail,
  },
  {
    name: "Grupos de WhatsApp",
    description:
      "Únete a los grupos de WhatsApp de tu región para coordinar asambleas y actividades.",
    action: "Unirse al grupo",
    href: "#",
    Icon: MessageCircle,
  },
  {
    name: "Canal de YouTube",
    description:
      "Suscríbete para ver transmisiones de asambleas, entrevistas y contenido educativo.",
    action: "Ver canal",
    href: "#",
    Icon: YouTube,
  },
  {
    name: "Facebook",
    description:
      "Síguenos en Facebook para estar al tanto de convocatorias y noticias.",
    action: "Seguir página",
    href: "#",
    Icon: Facebook,
  },
  {
    name: "Instagram",
    description:
      "Contenido visual, historias y actualizaciones de las asambleas en todo el país.",
    action: "Seguir en Instagram",
    href: "#",
    Icon: Instagram,
  },
  {
    name: "TikTok",
    description:
      "Videos cortos, retos y contenido viral sobre democracia participativa.",
    action: "Seguir en TikTok",
    href: "#",
    Icon: TikTok,
  },
];

export default function ContactoPage() {
  return (
    <>
      <SectionHero
        title="Contacto"
        description="Conéctate con Asambleas del Pueblo a través de nuestros canales oficiales."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ name, description, action, href, Icon }) => (
            <div
              key={name}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {description}
              </p>
              <a
                href={href}
                className="mt-4 inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-dark"
              >
                {action} &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="mt-16 rounded-lg border border-border bg-card p-8">
          <h2 className="text-xl font-bold text-foreground">
            Envíanos un mensaje
          </h2>
          <p className="mt-2 text-sm text-muted">
            Completa el formulario y nos pondremos en contacto contigo.
          </p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tu nombre&hellip;"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="tu@correo.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Asunto del mensaje&hellip;"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Escribe tu mensaje&hellip;"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
