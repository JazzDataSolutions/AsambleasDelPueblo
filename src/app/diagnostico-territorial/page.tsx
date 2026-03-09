import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Diagnóstico Territorial",
  description: "Identificación de problemas locales y la asamblea como forma de atención comunitaria.",
};

export default function DiagnosticoTerritorialPage() {
  return (
    <>
      <SectionHero
        title="Diagnóstico Territorial"
        description="Conocer el territorio es el primer paso para transformarlo. Identifica problemas y construye soluciones colectivas."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Problemas Locales */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground">
            Problemas Locales
          </h2>
          <p className="mt-4 text-muted">
            Cada territorio tiene problemáticas específicas: agua, seguridad,
            salud, educación, medio ambiente, empleo, vivienda, infraestructura.
            El diagnóstico territorial permite identificar, priorizar y
            documentar estos problemas desde la perspectiva de la comunidad.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Acceso al agua",
              "Seguridad comunitaria",
              "Salud pública",
              "Educación",
              "Medio ambiente",
              "Empleo y economía local",
              "Vivienda digna",
              "Infraestructura",
            ].map((problema) => (
              <div
                key={problema}
                className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground"
              >
                {problema}
              </div>
            ))}
          </div>
        </div>

        {/* La Asamblea como forma de atención */}
        <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-6">
          <h2 className="text-xl font-bold text-foreground">
            La Asamblea como Forma de Atención
          </h2>
          <p className="mt-4 text-muted">
            La asamblea es el espacio donde la comunidad se reúne para discutir
            sus problemas, proponer soluciones y tomar decisiones de manera
            colectiva. Es la herramienta fundamental de la democracia
            participativa.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Identificación colectiva de problemas prioritarios
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Deliberación y propuesta de soluciones
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Toma de acuerdos y asignación de responsabilidades
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Seguimiento y rendición de cuentas
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
