import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = {
  title: "Documentos",
  description: "Manifiesto, APS Escrito, Metodología y materiales de consulta de Asambleas del Pueblo.",
};

export default function DocumentosPage() {
  return (
    <>
      <SectionHero
        title="Documentos"
        description="Los textos fundamentales que guían nuestra organización y metodología."
        breadcrumbs={[{ label: "Documentos" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Manifiesto */}
        <article id="manifiesto" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Manifiesto</h2>
          <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <p className="text-muted">
              El manifiesto de Asambleas del Pueblo establece los principios y
              valores que nos guían como movimiento. Aquí se articula nuestra
              visión de democracia participativa, justicia social y poder popular.
            </p>
            <div className="mt-4">
              <EmptyState />
            </div>
          </div>
        </article>

        {/* APS Escrito */}
        <article id="aps" className="mt-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">APS Escrito</h2>
          <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <p className="text-muted">
              El APS (Asambleas del Pueblo y su programa) escrito detalla la
              propuesta orgánica y programática del movimiento.
            </p>
            <div className="mt-4">
              <EmptyState />
            </div>
          </div>
        </article>

        {/* Metodología */}
        <article id="metodologia" className="mt-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Metodología</h2>
          <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <p className="text-muted">
              La metodología describe cómo se organizan, convocan y llevan a cabo
              las asambleas. Incluye lineamientos para la facilitación, la toma
              de decisiones y el seguimiento de acuerdos.
            </p>
            <div className="mt-4">
              <EmptyState />
            </div>
          </div>
        </article>

        {/* Link to Materiales */}
        <div className="mt-12 rounded-xl border border-secondary/30 bg-secondary/5 p-6 transition-colors hover:border-secondary/50">
          <h3 className="text-lg font-semibold text-foreground">
            Materiales de Consulta
          </h3>
          <p className="mt-2 text-sm text-muted">
            Accede a recursos complementarios, lecturas recomendadas y materiales
            de apoyo para las asambleas.
          </p>
          <Link
            href="/documentos/materiales"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-secondary-dark"
          >
            Ver materiales
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
