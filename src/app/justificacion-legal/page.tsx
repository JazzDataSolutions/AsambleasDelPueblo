import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Justificación Legal",
  description: "Marco jurídico que respalda la organización asamblearia y la participación ciudadana.",
};

export default function JustificacionLegalPage() {
  return (
    <>
      <SectionHero
        title="Justificación Legal"
        description="El marco jurídico que respalda nuestro derecho a organizarnos y participar."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground">
            Fundamento Constitucional y Legal
          </h2>
          <p className="mt-4 text-muted">
            Las asambleas del pueblo se sustentan en el derecho constitucional a
            la libre asociación, la participación ciudadana y los mecanismos de
            democracia directa establecidos en la Constitución Política de los
            Estados Unidos Mexicanos y las leyes secundarias aplicables.
          </p>
          <p className="mt-4 text-sm text-muted/70">
            Contenido jurídico detallado pendiente &mdash; Se actualizará con
            los fundamentos legales específicos.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-6">
          <h3 className="text-lg font-semibold text-foreground">
            Herramientas Jurídicas
          </h3>
          <p className="mt-2 text-sm text-muted">
            Accede a formatos, guías y herramientas legales para la defensa de
            los derechos de participación.
          </p>
          <Link
            href="/justificacion-legal/herramientas-juridicas"
            className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark"
          >
            Ver herramientas jurídicas &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
