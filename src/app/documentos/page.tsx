import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";

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
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Manifiesto */}
        <article id="manifiesto" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Manifiesto</h2>
          <div className="mt-4 rounded-lg border border-border bg-card p-6">
            <p className="text-muted">
              El manifiesto de Asambleas del Pueblo establece los principios y
              valores que nos guían como movimiento. Aquí se articula nuestra
              visión de democracia participativa, justicia social y poder popular.
            </p>
            <p className="mt-4 text-sm text-muted/70">
              Contenido pendiente &mdash; Se actualizará cuando se proporcione el documento oficial.
            </p>
          </div>
        </article>

        {/* APS Escrito */}
        <article id="aps" className="mt-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">APS Escrito</h2>
          <div className="mt-4 rounded-lg border border-border bg-card p-6">
            <p className="text-muted">
              El APS (Asambleas del Pueblo y su programa) escrito detalla la
              propuesta orgánica y programática del movimiento.
            </p>
            <p className="mt-4 text-sm text-muted/70">
              Contenido pendiente &mdash; Se actualizará cuando se proporcione el documento oficial.
            </p>
          </div>
        </article>

        {/* Metodología */}
        <article id="metodologia" className="mt-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Metodología</h2>
          <div className="mt-4 rounded-lg border border-border bg-card p-6">
            <p className="text-muted">
              La metodología describe cómo se organizan, convocan y llevan a cabo
              las asambleas. Incluye lineamientos para la facilitación, la toma
              de decisiones y el seguimiento de acuerdos.
            </p>
            <p className="mt-4 text-sm text-muted/70">
              Contenido pendiente &mdash; Se actualizará cuando se proporcione el documento oficial.
            </p>
          </div>
        </article>

        {/* Link to Materiales */}
        <div className="mt-12 rounded-lg border border-accent/30 bg-accent/5 p-6">
          <h3 className="text-lg font-semibold text-foreground">
            Materiales de Consulta
          </h3>
          <p className="mt-2 text-sm text-muted">
            Accede a recursos complementarios, lecturas recomendadas y materiales
            de apoyo para las asambleas.
          </p>
          <Link
            href="/documentos/materiales"
            className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark"
          >
            Ver materiales &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
