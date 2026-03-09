import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

export default function Card({ title, description, href, icon }: CardProps) {
  const content = (
    <div className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md">
      {icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }

  return content;
}
