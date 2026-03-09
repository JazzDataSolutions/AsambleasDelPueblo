import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import { Smartphone, Mic, Laptop, Projector } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solicitud de Equipos",
  description:
    "Solicita equipos para tu asamblea: celular, micrófonos, computadora, proyector.",
};

const equipos = [
  {
    name: "Celular",
    description:
      "Para transmisiones en vivo, grabación de asambleas y coordinación por mensajería.",
    Icon: Smartphone,
  },
  {
    name: "Micrófonos",
    description:
      "Equipos de audio para que todas las voces sean escuchadas en la asamblea.",
    Icon: Mic,
  },
  {
    name: "Computadora",
    description:
      "Para presentaciones, registro digital de acuerdos y herramientas de consulta.",
    Icon: Laptop,
  },
  {
    name: "Proyector",
    description:
      "Para presentaciones visuales, proyección de documentos y material educativo.",
    Icon: Projector,
  },
];

export default function SolicitudEquiposPage() {
  return (
    <>
      <SectionHero
        title="Solicitud de Equipos"
        description="Solicita los equipos que tu asamblea necesita para funcionar de manera efectiva."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {equipos.map(({ name, description, Icon }) => (
            <div
              key={name}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Formulario de solicitud */}
        <div className="mt-12 rounded-lg border border-border bg-card p-8">
          <h2 className="text-xl font-bold text-foreground">
            Formulario de Solicitud
          </h2>
          <p className="mt-2 text-sm text-muted">
            Completa el formulario para solicitar equipos para tu asamblea.
          </p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="asamblea"
                className="block text-sm font-medium text-foreground"
              >
                Nombre de la asamblea
              </label>
              <input
                id="asamblea"
                name="asamblea"
                type="text"
                autoComplete="off"
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Asamblea de&hellip;"
              />
            </div>
            <div>
              <label
                htmlFor="ubicacion"
                className="block text-sm font-medium text-foreground"
              >
                Ubicación
              </label>
              <input
                id="ubicacion"
                name="ubicacion"
                type="text"
                autoComplete="address-level1"
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Estado, municipio&hellip;"
              />
            </div>
            <div>
              <label
                htmlFor="contacto-nombre"
                className="block text-sm font-medium text-foreground"
              >
                Nombre de contacto
              </label>
              <input
                id="contacto-nombre"
                name="contacto-nombre"
                type="text"
                autoComplete="name"
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tu nombre&hellip;"
              />
            </div>
            <div>
              <label
                htmlFor="contacto-email"
                className="block text-sm font-medium text-foreground"
              >
                Correo electrónico
              </label>
              <input
                id="contacto-email"
                name="contacto-email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="tu@correo.com"
              />
            </div>
            <div className="sm:col-span-2">
              <fieldset>
                <legend className="block text-sm font-medium text-foreground">
                  Equipos solicitados
                </legend>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {equipos.map(({ name }) => (
                    <label
                      key={name}
                      className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-2 text-sm transition-colors hover:border-accent/50"
                    >
                      <input
                        type="checkbox"
                        name="equipos"
                        value={name}
                        className="accent-accent"
                      />
                      <span>{name}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="justificacion"
                className="block text-sm font-medium text-foreground"
              >
                Justificación
              </label>
              <textarea
                id="justificacion"
                name="justificacion"
                rows={3}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Explica brevemente por qué necesitas estos equipos&hellip;"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
