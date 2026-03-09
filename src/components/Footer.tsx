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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-accent">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted">
            Asambleas del Pueblo &mdash; Democracia participativa desde la base.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
