import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Contenidos",
  description:
    "Entrevistas, análisis, historia, democracia participativa, convocatorias y más.",
};

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

const categories = [
  "Todos",
  "Producción",
  "Educativo",
  "Análisis",
  "Organización",
];

export default function ContenidosPage() {
  return (
    <>
      <SectionHero
        title="Temas para Contenidos"
        description="Ideas, análisis y producción de contenido para alimentar la reflexión y la acción."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2" role="list" aria-label="Categorías">
          {categories.map((cat) => (
            <span
              key={cat}
              role="listitem"
              className="cursor-pointer rounded-full border border-border px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map(({ title, description, category, Icon }) => (
            <div
              key={title}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {category}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
