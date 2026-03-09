interface SectionHeroProps {
  title: string;
  description: string;
}

export default function SectionHero({ title, description }: SectionHeroProps) {
  return (
    <div className="border-b border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
