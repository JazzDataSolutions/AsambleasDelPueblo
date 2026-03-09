import Breadcrumb from "@/components/Breadcrumb";

interface Crumb {
  label: string;
  href?: string;
}

interface SectionHeroProps {
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  accent?: "primary" | "secondary";
}

export default function SectionHero({
  title,
  description,
  breadcrumbs,
  accent = "primary",
}: SectionHeroProps) {
  const gradientClass =
    accent === "secondary"
      ? "from-secondary/5 to-transparent"
      : "from-accent/5 to-transparent";

  return (
    <div className={`relative border-b border-border bg-gradient-to-br ${gradientClass} px-4 py-14 sm:px-6 sm:py-16 lg:px-8`}>
      <div className="mx-auto max-w-4xl">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted animate-fade-in-up" style={{ animationDelay: "80ms" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
