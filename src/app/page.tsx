import Link from "next/link";
import Card from "@/components/Card";
import { Document, Scale, Map, Monitor, Package, Film } from "@/components/Icons";

const sections = [
  {
    title: "Documentos",
    description:
      "Manifiesto, APS Escrito, Metodología y materiales de consulta para la organización.",
    href: "/documentos",
    icon: <Document className="h-5 w-5" />,
  },
  {
    title: "Justificación Legal",
    description:
      "Marco jurídico y herramientas legales para la participación ciudadana.",
    href: "/justificacion-legal",
    icon: <Scale className="h-5 w-5" />,
  },
  {
    title: "Diagnóstico Territorial",
    description:
      "Identificación de problemas locales y la asamblea como forma de atención.",
    href: "/diagnostico-territorial",
    icon: <Map className="h-5 w-5" />,
  },
  {
    title: "Herramientas Digitales",
    description:
      "Consultas, encuestas, iniciativas y encuentros nacionales virtuales y presenciales.",
    href: "/herramientas-digitales",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    title: "Solicitud de Equipos",
    description:
      "Solicita equipos para tu asamblea: celular, micrófonos, computadora, proyector.",
    href: "/solicitud-equipos",
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Contenidos",
    description:
      "Entrevistas, análisis de coyuntura, historia, democracia participativa y más.",
    href: "/contenidos",
    icon: <Film className="h-5 w-5" />,
  },
];

const stats = [
  { value: "32", label: "Estados" },
  { value: "500+", label: "Asambleas" },
  { value: "10k+", label: "Participantes" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-dot-pattern absolute inset-0 opacity-40" />
        <div className="bg-gradient-hero absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <img
            src="/logo-aps-crop.png"
            alt="Logo Asambleas del Pueblo Soberano"
            className="animate-fade-in-up mx-auto mb-8 h-28 w-auto sm:h-36"
          />
          <p className="animate-fade-in-up mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary" style={{ animationDelay: "80ms" }}>
            Democracia Participativa
          </p>
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl" style={{ animationDelay: "160ms" }}>
            Asambleas del Pueblo Soberano
          </h1>
          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl" style={{ animationDelay: "240ms" }}>
            Construyendo poder popular desde la base. Un espacio para la
            organización, la reflexión y la acción colectiva.
          </p>
          <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" style={{ animationDelay: "320ms" }}>
            <Link
              href="/contacto"
              className="w-full rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
            >
              Únete al Movimiento
            </Link>
            <Link
              href="/documentos"
              className="w-full rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              Ver Documentos
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up mt-16 flex items-center justify-center gap-8 sm:gap-12" style={{ animationDelay: "400ms" }}>
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Todo lo que necesitas
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Explora Nuestras Secciones
          </h2>
          <p className="mt-3 text-muted">
            Herramientas, documentos y recursos para organizar tu asamblea.
          </p>
        </div>
        <div className="stagger-children mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title} {...section} />
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Únete al Movimiento
          </h2>
          <p className="mt-4 text-lg text-muted">
            Conéctate con tu comunidad, participa en las asambleas y sé parte de
            la transformación. Juntos construimos el poder del pueblo.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contacto"
              className="w-full rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:bg-secondary-dark hover:shadow-xl focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:w-auto"
            >
              Contactar
            </Link>
            <Link
              href="/herramientas-digitales"
              className="w-full rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary sm:w-auto"
            >
              Ver Herramientas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
