import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import EmptyState from "@/components/EmptyState";
import { Scale } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Herramientas Jurídicas",
  description: "Formatos, guías y herramientas legales para la participación ciudadana.",
};

const herramientas = [
  {
    title: "Formatos de Acta de Asamblea",
    description: "Plantillas para documentar formalmente los acuerdos tomados en asamblea.",
  },
  {
    title: "Guía de Derechos del Ciudadano",
    description: "Conoce tus derechos de participación, asociación y petición ante la autoridad.",
  },
  {
    title: "Marco Legal de Consulta Popular",
    description: "Legislación aplicable para la realización de consultas populares a nivel local y federal.",
  },
  {
    title: "Recursos de Amparo",
    description: "Información sobre el juicio de amparo como herramienta de defensa ciudadana.",
  },
];

export default function HerramientasJuridicasPage() {
  return (
    <>
      <SectionHero
        title="Herramientas Jurídicas"
        description="Recursos legales prácticos para ejercer y defender el derecho a la participación."
        breadcrumbs={[
          { label: "Justificación Legal", href: "/justificacion-legal" },
          { label: "Herramientas Jurídicas" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="stagger-children grid gap-6 sm:grid-cols-2">
          {herramientas.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {h.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.description}</p>
              <div className="mt-4">
                <EmptyState message="Documento pendiente de carga." />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
