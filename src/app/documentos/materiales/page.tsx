import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import EmptyState from "@/components/EmptyState";

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
        breadcrumbs={[
          { label: "Documentos", href: "/documentos" },
          { label: "Materiales de Consulta" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8">
          <p className="text-center text-lg text-muted">
            Aquí encontrarás lecturas recomendadas, guías prácticas, infografías
            y otros recursos para preparar y dar seguimiento a las asambleas.
          </p>
          <div className="mt-6">
            <EmptyState message="Los materiales de consulta se irán agregando conforme se proporcionen los documentos oficiales." />
          </div>
        </div>
      </section>
    </>
  );
}
