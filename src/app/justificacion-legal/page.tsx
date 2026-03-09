import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Justificacion Legal",
  description:
    "Marco juridico que respalda la organizacion asamblearia y la participacion ciudadana.",
};

export default function JustificacionLegalPage() {
  return (
    <>
      <SectionHero
        title="Justificacion Legal"
        description="El marco juridico que respalda nuestro derecho a organizarnos y participar."
        breadcrumbs={[{ label: "Justificacion Legal" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-primary">
            Fundamento Constitucional y Legal
          </h2>
          <div className="mt-4 prose prose-stone max-w-none space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Las Asambleas Soberanas del Pueblo pueden ser convocadas en
              cualquier lugar, por cualquier persona y en cualquier momento,
              habiendo condiciones de sesionar, ya que son la expresion mas
              fundamental de la <strong>soberania popular</strong>, que no solo
              es supraconstitucional (como los derechos humanos), sino que es el
              poder que crea el Constituyente, que a su vez, conforma los
              poderes de la Nacion y tiene en todo momento la facultad de cambiar
              su forma de gobierno.
            </p>
            <p>
              Si las Asambleas Soberanas del Pueblo se realizan por territorio,
              por sector o por afinidad, tienen mayor posibilidad de
              consolidarse y mantenerse como una instancia estable donde se
              viertan las problematicas, se debatan las posiciones politicas (en
              el sentido amplio), se realicen diagnosticos adecuados, se
              consensen soluciones, se motive la organizacion social y se
              consolide el poder popular.
            </p>
            <p>
              Para que la organizacion popular de democracia participativa se
              consolide, es necesario convocar, organizar e instituir Asambleas
              Soberanas del Pueblo, que bajo ninguna circunstancia se deben
              drenar, inocular, reventar, manipular o instrumentalizar de manera
              clientelar ya que sus propositos se enfocan en la construccion de
              un solido tejido de relaciones sociales que son la base de la
              Soberania Popular.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-bold text-primary">
            Relacion con el gobierno y los partidos
          </h3>
          <div className="mt-3 space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Las Asambleas Soberanas del Pueblo pueden, por ejemplo, tener
              comunicacion con el partido (o los partidos con perspectiva
              popular) para proveerle(s) de cuadros politicos formados en el
              fragor del servicio comunitario, asi como con las organizaciones
              sociales, los academicos, expertos, al igual que las asociaciones
              civiles u organizaciones no gubernamentales e iglesias, todos los
              cuales pueden apoyar a la Asamblea Popular con experiencias,
              insumos, contactos, conocimiento, consejo, recursos de diversos
              tipos, pero, bajo ninguna circunstancia, pueden conducir o
              controlar la organizacion popular de democracia participativa
              instituida en Asamblea Soberana del Pueblo.
            </p>
            <p>
              Es importante resaltar que las Asambleas Soberanas del Pueblo no
              son contra el gobierno ni contra los partidos. Buscan darles a
              estos el lugar que les corresponde y fortalecer la organizacion
              social y el poder popular como instancia que ejerce su soberania
              directa y cotidianamente y no solo de manera indirecta y
              esporadica.
            </p>
            <p>
              Las Asambleas Soberanas del Pueblo pueden ser cuidadas por la
              fuerza publica, respaldadas y acreditadas por las instancias
              gubernamentales y electorales; apoyadas con insumos para su mejor
              organizacion, difundidas y promovidas por canales oficiales.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-bold text-primary">
            Facultades de las Asambleas
          </h3>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-foreground/80">
            <li>
              Procesos de Consulta Popular sobre asuntos de interes publico
            </li>
            <li>
              Diagnosticos colectivos sobre asuntos del territorio, del sector o
              de la afinidad que los congrega
            </li>
            <li>Discusiones sobre temas coyunturales y estructurales</li>
            <li>
              Iniciativas ciudadanas para promover reformas constitucionales o
              legales
            </li>
            <li>
              Proyectos comunitarios: escuelas populares, cooperativas, consejos
              de seguridad popular, clinicas comunitarias, radios comunitarias
            </li>
            <li>
              Instancias de rendicion de cuentas de los funcionarios publicos
            </li>
            <li>
              Estrategias de Defensa Popular Territorial y de Inteligencia
              Popular
            </li>
            <li>
              Deliberacion sobre el uso del Presupuesto Participativo para
              proyectos colectivos
            </li>
            <li>Revocacion de mandato de autoridades locales</li>
            <li>
              Construccion de redes de colaboracion y coordinacion entre
              Asambleas para la reconducciin de la cultura politica
            </li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href="/docs/asambleas-soberanas-del-pueblo.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md"
            >
              Descargar documento completo (PDF)
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-secondary/30 bg-secondary/5 p-6 transition-colors hover:border-secondary/50">
          <h3 className="text-lg font-semibold text-foreground">
            Herramientas Juridicas
          </h3>
          <p className="mt-2 text-sm text-muted">
            Accede a formatos, guias y herramientas legales para la defensa de
            los derechos de participacion.
          </p>
          <Link
            href="/justificacion-legal/herramientas-juridicas"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-secondary-dark"
          >
            Ver herramientas juridicas
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
