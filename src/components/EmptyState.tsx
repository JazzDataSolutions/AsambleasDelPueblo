import { Document } from "@/components/Icons";

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({
  message = "Este contenido se actualizará cuando se proporcione el documento oficial.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-dashed border-border bg-surface px-6 py-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-light/20 text-muted-light">
        <Document className="h-6 w-6" />
      </div>
      <p className="mt-3 max-w-sm text-sm text-muted">{message}</p>
    </div>
  );
}
