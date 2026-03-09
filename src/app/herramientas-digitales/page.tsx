import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import { Vote, BarChart, Lightbulb, Globe, Handshake } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Herramientas Digitales",
  description:
    "Herramientas para consultas, encuestas, iniciativas y encuentros nacionales.",
};

const herramientas = [
  {
    title: "Consulta",
    description:
      "Plataforma para realizar consultas populares digitales sobre temas de interés comunitario.",
    status: "Próximamente",
    Icon: Vote,
  },
  {
    title: "Encuesta",
    description:
      "Herramienta de encuestas para recoger opiniones, necesidades y propuestas de la comunidad.",
    status: "Próximamente",
    Icon: BarChart,
  },
  {
    title: "Iniciativas",
    description:
      "Espacio para presentar, discutir y apoyar iniciativas ciudadanas de manera colectiva.",
    status: "Próximamente",
    Icon: Lightbulb,
  },
  {
    title: "Encuentro Nacional Virtual",
    description:
      "Plataforma para encuentros nacionales en línea, conectando asambleas de todo el país.",
    status: "Próximamente",
    Icon: Globe,
  },
  {
    title: "Encuentro Nacional Presencial",
    description:
      "Coordinación logística para encuentros presenciales a nivel regional y nacional.",
    status: "Próximamente",
    Icon: Handshake,
  },
];

export default function HerramientasDigitalesPage() {
  return (
    <>
      <SectionHero
        title="Herramientas Digitales"
        description="Tecnología al servicio de la participación. Consulta, debate y decide desde cualquier lugar."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {herramientas.map(({ title, description, status, Icon }) => (
            <div
              key={title}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {description}
              </p>
              <span className="mt-4 inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
