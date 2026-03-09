"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Close } from "@/components/Icons";

const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Documentos",
    href: "/documentos",
    children: [
      { label: "Manifiesto", href: "/documentos#manifiesto" },
      { label: "APS Escrito", href: "/documentos#aps" },
      { label: "Metodología", href: "/documentos#metodologia" },
      { label: "Materiales de Consulta", href: "/documentos/materiales" },
    ],
  },
  {
    label: "Legal",
    href: "/justificacion-legal",
    children: [
      { label: "Justificación Legal", href: "/justificacion-legal" },
      {
        label: "Herramientas Jurídicas",
        href: "/justificacion-legal/herramientas-juridicas",
      },
    ],
  },
  { label: "Diagnóstico Territorial", href: "/diagnostico-territorial" },
  {
    label: "Herramientas",
    href: "/herramientas-digitales",
    children: [
      { label: "Herramientas Digitales", href: "/herramientas-digitales" },
      { label: "Solicitud de Equipos", href: "/solicitud-equipos" },
    ],
  },
  { label: "Contenidos", href: "/contenidos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md" aria-label="Navegación principal">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:opacity-80">
          <span className="text-xl font-bold tracking-tight text-accent">
            Asambleas del Pueblo
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-card-hover hover:text-accent focus-visible:text-accent"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 mt-0 w-56 rounded-md border border-border bg-card py-1 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-card-hover hover:text-accent focus-visible:bg-card-hover focus-visible:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground/80 transition-colors hover:bg-card-hover lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 py-3 lg:hidden" role="menu">
          {navItems.map((item) => (
            <div key={item.label} role="none">
              <Link
                href={item.href}
                role="menuitem"
                onClick={() => !item.children && setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-card-hover hover:text-accent"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      role="menuitem"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-card-hover hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
