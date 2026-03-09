import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contenidos",
  description:
    "Entrevistas, análisis, historia, democracia participativa, convocatorias y más.",
};

export default function ContenidosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
