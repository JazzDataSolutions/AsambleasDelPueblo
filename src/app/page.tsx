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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-card px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Asambleas del Pueblo
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            Construyendo democracia participativa desde la base. Un espacio para
            la organización, la reflexión y la acción colectiva.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Contacto
            </Link>
            <Link
              href="/documentos"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Ver Documentos
            </Link>
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Explora nuestras secciones
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title} {...section} />
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Únete al movimiento
          </h2>
          <p className="mt-4 text-muted">
            Conéctate con tu comunidad, participa en las asambleas y sé parte
            de la transformación. Juntos construimos el poder del pueblo.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Únete ahora
          </Link>
        </div>
      </section>
    </>
  );
}
