import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

export default function Card({ title, description, href, icon }: CardProps) {
  const content = (
    <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      {icon && (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      {href && (
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
          <span>Explorar</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
