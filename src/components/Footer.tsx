import Link from "next/link";
import { YouTube, Facebook, Instagram, TikTok, WhatsApp } from "@/components/Icons";

const socialLinks = [
  { label: "YouTube", href: "#", Icon: YouTube },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "TikTok", href: "#", Icon: TikTok },
  { label: "WhatsApp", href: "#", Icon: WhatsApp },
];

const footerSections = [
  {
    title: "Documentos",
    links: [
      { label: "Manifiesto", href: "/documentos#manifiesto" },
      { label: "APS Escrito", href: "/documentos#aps" },
      { label: "Metodología", href: "/documentos#metodologia" },
      { label: "Materiales de Consulta", href: "/documentos/materiales" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Justificación Legal", href: "/justificacion-legal" },
      { label: "Herramientas Jurídicas", href: "/justificacion-legal/herramientas-juridicas" },
    ],
  },
  {
    title: "Herramientas",
    links: [
      { label: "Herramientas Digitales", href: "/herramientas-digitales" },
      { label: "Solicitud de Equipos", href: "/solicitud-equipos" },
      { label: "Diagnóstico Territorial", href: "/diagnostico-territorial" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { label: "Contenidos", href: "/contenidos" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top: Brand + Social */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-aps.jpg" alt="" className="h-10 w-auto" aria-hidden="true" />
            <div>
              <p className="text-lg font-bold tracking-tight text-primary">
                Asambleas del Pueblo Soberano
              </p>
              <p className="mt-1 text-sm text-muted">
                Democracia participativa desde la base.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-light">
            Asambleas del Pueblo Soberano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
