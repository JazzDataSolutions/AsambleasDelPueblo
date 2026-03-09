import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Diagnóstico Territorial",
  description: "Identificación de problemas locales y la asamblea como forma de atención comunitaria.",
};

const problemas = [
  { label: "Acceso al agua", emoji: "💧" },
  { label: "Seguridad comunitaria", emoji: "🛡" },
  { label: "Salud pública", emoji: "🏥" },
  { label: "Educación", emoji: "📚" },
  { label: "Medio ambiente", emoji: "🌱" },
  { label: "Empleo y economía local", emoji: "💼" },
  { label: "Vivienda digna", emoji: "🏠" },
  { label: "Infraestructura", emoji: "🛤" },
];

const pasos = [
  "Identificación colectiva de problemas prioritarios",
  "Deliberación y propuesta de soluciones",
  "Toma de acuerdos y asignación de responsabilidades",
  "Seguimiento y rendición de cuentas",
];

export default function DiagnosticoTerritorialPage() {
  return (
    <>
      <SectionHero
        title="Diagnóstico Territorial"
        description="Conocer el territorio es el primer paso para transformarlo. Identifica problemas y construye soluciones colectivas."
        breadcrumbs={[{ label: "Diagnóstico Territorial" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Problemas Locales */}
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            Problemas Locales
          </h2>
          <p className="mt-3 text-muted">
            Cada territorio tiene problemáticas específicas. El diagnóstico
            territorial permite identificar, priorizar y documentar estos
            problemas desde la perspectiva de la comunidad.
          </p>
          <div className="stagger-children mt-6 grid gap-3 sm:grid-cols-2">
            {problemas.map(({ label, emoji }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5"
              >
                <span className="text-lg" role="img" aria-hidden="true">{emoji}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* La Asamblea como forma de atención */}
        <div className="mt-8 rounded-xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            La Asamblea como Forma de Atención
          </h2>
          <p className="mt-3 text-muted">
            La asamblea es el espacio donde la comunidad se reúne para discutir
            sus problemas, proponer soluciones y tomar decisiones de manera
            colectiva.
          </p>
          <ol className="mt-6 space-y-4">
            {pasos.map((paso, i) => (
              <li key={paso} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground/80 pt-0.5">{paso}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
