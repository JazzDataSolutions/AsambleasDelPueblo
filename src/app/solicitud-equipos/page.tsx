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
        breadcrumbs={[
          { label: "Herramientas", href: "/herramientas-digitales" },
          { label: "Solicitud de Equipos" },
        ]}
        accent="secondary"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="stagger-children grid gap-6 sm:grid-cols-2">
          {equipos.map(({ name, description, Icon }) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Formulario de solicitud */}
        <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8">
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
                required
                autoComplete="off"
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Asamblea de…"
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
                required
                autoComplete="address-level1"
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Estado, municipio…"
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
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tu nombre…"
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
                required
                autoComplete="email"
                spellCheck={false}
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
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
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm transition-colors hover:border-secondary/50 hover:bg-secondary/5 has-[:checked]:border-secondary has-[:checked]:bg-secondary/10"
                    >
                      <input
                        type="checkbox"
                        name="equipos"
                        value={name}
                        className="accent-secondary"
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
                required
                rows={3}
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Explica brevemente por qué necesitas estos equipos…"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:bg-secondary-dark hover:shadow-xl focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:w-auto"
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
