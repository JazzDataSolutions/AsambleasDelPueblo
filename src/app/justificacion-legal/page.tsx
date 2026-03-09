import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";
import EmptyState from "@/components/EmptyState";

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
        breadcrumbs={[{ label: "Justificación Legal" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            Fundamento Constitucional y Legal
          </h2>
          <p className="mt-3 text-muted">
            Las asambleas del pueblo se sustentan en el derecho constitucional a
            la libre asociación, la participación ciudadana y los mecanismos de
            democracia directa establecidos en la Constitución Política de los
            Estados Unidos Mexicanos y las leyes secundarias aplicables.
          </p>
          <div className="mt-6">
            <EmptyState message="Contenido jurídico detallado pendiente. Se actualizará con los fundamentos legales específicos." />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-secondary/30 bg-secondary/5 p-6 transition-colors hover:border-secondary/50">
          <h3 className="text-lg font-semibold text-foreground">
            Herramientas Jurídicas
          </h3>
          <p className="mt-2 text-sm text-muted">
            Accede a formatos, guías y herramientas legales para la defensa de
            los derechos de participación.
          </p>
          <Link
            href="/justificacion-legal/herramientas-juridicas"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-secondary-dark"
          >
            Ver herramientas jurídicas
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
