import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";

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
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {herramientas.map((h) => (
            <div
              key={h.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{h.description}</p>
              <p className="mt-4 text-xs text-muted/70">
                Documento pendiente de carga.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
