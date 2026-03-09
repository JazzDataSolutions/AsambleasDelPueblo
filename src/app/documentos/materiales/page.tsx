import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Materiales de Consulta",
  description: "Recursos y materiales complementarios para las asambleas del pueblo.",
};

export default function MaterialesPage() {
  return (
    <>
      <SectionHero
        title="Materiales de Consulta"
        description="Recursos, lecturas y materiales de apoyo para fortalecer el trabajo asambleario."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-lg text-muted">
            Los materiales de consulta se irán agregando conforme se
            proporcionen los documentos oficiales.
          </p>
          <p className="mt-4 text-sm text-muted/70">
            Aquí encontrarás lecturas recomendadas, guías prácticas, infografías
            y otros recursos para preparar y dar seguimiento a las asambleas.
          </p>
        </div>
      </section>
    </>
  );
}
