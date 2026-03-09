"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = { current: null as ReturnType<typeof setTimeout> | null };

  function closeAll() {
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  function handleMouseEnter(label: string) {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  function handleKeyDown(e: React.KeyboardEvent, label: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenDropdown(openDropdown === label ? null : label);
    }
    if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  }

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-lg"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:opacity-80"
        >
          <img
            src="/images/serpiente-icon.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto sm:h-10"
          />
          <span className="text-lg font-bold tracking-tight text-primary sm:text-xl">
            Asambleas del Pueblo Soberano
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  onKeyDown={(e) =>
                    item.children && handleKeyDown(e, item.label)
                  }
                  aria-expanded={
                    item.children ? openDropdown === item.label : undefined
                  }
                  aria-haspopup={item.children ? "true" : undefined}
                  className={`relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent focus-visible:text-accent ${
                    active
                      ? "text-accent"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-3 w-3 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {active && (
                    <span className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="animate-fade-in-up absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-border bg-card py-1.5 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-card-hover hover:text-accent focus-visible:bg-card-hover focus-visible:text-accent ${
                          pathname === child.href
                            ? "text-accent font-medium"
                            : "text-foreground/70"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-card-hover hover:text-accent lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <Close className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="animate-slide-down border-t border-border bg-card px-4 pb-4 pt-2 lg:hidden"
          role="menu"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <div key={item.label} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={() => !item.children && closeAll()}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover hover:text-accent ${
                    active
                      ? "bg-accent/5 text-accent"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                </Link>
                {item.children && (
                  <div className="mb-1 ml-3 border-l-2 border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        role="menuitem"
                        onClick={closeAll}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-card-hover hover:text-accent ${
                          pathname === child.href
                            ? "text-accent font-medium"
                            : "text-muted"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
