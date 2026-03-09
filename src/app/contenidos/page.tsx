"use client";

import { useState } from "react";
import SectionHero from "@/components/SectionHero";
import {
  MicPodcast,
  Trophy,
  Refresh,
  Globe,
  Book,
  GlobeAlt,
  Flag,
  Fist,
  Megaphone,
  Clipboard,
  Building,
} from "@/components/Icons";

const temas = [
  {
    title: "Entrevistas con la Gente",
    description:
      "Voces del pueblo: testimonios, opiniones y experiencias desde las comunidades.",
    category: "Producción",
    Icon: MicPodcast,
  },
  {
    title: "Retos",
    description:
      "Dinámicas virales y retos para promover la participación y conciencia ciudadana.",
    category: "Producción",
    Icon: Trophy,
  },
  {
    title: "Interacciones de Redes",
    description:
      "Contenido interactivo para generar debate y participación en redes sociales.",
    category: "Producción",
    Icon: Refresh,
  },
  {
    title: "Historia Global",
    description:
      "Recorrido por los movimientos populares y las luchas por la democracia en el mundo.",
    category: "Educativo",
    Icon: Globe,
  },
  {
    title: "Descripción Crítica del Capitalismo",
    description:
      "Análisis del sistema capitalista, sus contradicciones y su impacto en los pueblos.",
    category: "Educativo",
    Icon: Book,
  },
  {
    title: "Análisis de la Coyuntura Global",
    description:
      "Lectura del contexto internacional: geopolítica, economía y movimientos sociales.",
    category: "Análisis",
    Icon: GlobeAlt,
  },
  {
    title: "Análisis de la Coyuntura Local",
    description:
      "Los grandes problemas del capitalismo mexicano: desigualdad, extractivismo, violencia.",
    category: "Análisis",
    Icon: Flag,
  },
  {
    title: "Democracia Participativa como Horizonte",
    description:
      "La construcción de alternativas: del voto a la decisión colectiva permanente.",
    category: "Educativo",
    Icon: Fist,
  },
  {
    title: "Convocatorias",
    description:
      "Próximas asambleas, eventos, talleres y actividades del movimiento.",
    category: "Organización",
    Icon: Megaphone,
  },
  {
    title: "Asambleas Realizadas",
    description:
      "Registro y memoria de las asambleas que hemos llevado a cabo.",
    category: "Organización",
    Icon: Clipboard,
  },
  {
    title: "Opinión de Políticos sobre Temas Nodales",
    description:
      "Posiciones de actores políticos sobre temas clave para la agenda popular.",
    category: "Análisis",
    Icon: Building,
  },
];

const categories = ["Todos", "Producción", "Educativo", "Análisis", "Organización"];

const categoryColors: Record<string, string> = {
  Producción: "bg-accent/10 text-accent",
  Educativo: "bg-secondary/10 text-secondary",
  Análisis: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Organización: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
};

export default function ContenidosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? temas
      : temas.filter((t) => t.category === activeCategory);

  return (
    <>
      <SectionHero
        title="Temas para Contenidos"
        description="Ideas, análisis y producción de contenido para alimentar la reflexión y la acción."
        breadcrumbs={[{ label: "Contenidos" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-sm"
                  : "border border-border text-muted hover:border-accent hover:text-accent"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ title, description, category, Icon }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    categoryColors[category] ?? "bg-accent/10 text-accent"
                  }`}
                >
                  {category}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted">
            No hay contenidos en esta categoría.
          </p>
        )}
      </section>
    </>
  );
}
