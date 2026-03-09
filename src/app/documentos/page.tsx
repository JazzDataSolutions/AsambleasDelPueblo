import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Documentos",
  description:
    "Manifiesto Eco-comunitarista, Asambleas Soberanas del Pueblo y materiales de consulta.",
};

export default function DocumentosPage() {
  return (
    <>
      <SectionHero
        title="Documentos"
        description="Los textos fundamentales que guian nuestra organizacion y metodologia."
        breadcrumbs={[{ label: "Documentos" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Manifiesto Eco-comunitarista */}
        <article id="manifiesto" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary">
            Manifiesto Eco-comunitarista
          </h2>
          <div className="mt-4 rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="prose prose-stone max-w-none space-y-4 text-foreground/90 leading-relaxed">
              <p>
                <strong>§1.</strong> Se nos ha pedido que hagamos un diagnostico
                del momento historico con el objetivo de poder evaluar cual es la
                necesidad de nuestros pueblos y la estrategia mas pertinente.
              </p>
              <p>
                <strong>§2.</strong> Por lo general nos han acostumbrado a tener
                mucho pudor para no explicitar sobre la posicion teorica desde la
                que construimos una perspectiva particular. Quienes dominan nos
                obligan a la autocensura, al eclecticismo filosofico, es decir,
                mezclar teorias, al pragmatismo, actuar sin teoria, o al
                intelectualismo arido de cafe, actuar sin practica ni base
                social, pero quienes dominan el mundo y nuestra sociedad
                invierten mucho para dominar el conocimiento, la narrativa y la
                conciencia.
              </p>
              <p>
                <strong>§3.</strong> Asi que la conciencia es un campo de batalla
                y en ese campo la espiritualidad entendida como la busqueda del
                bien comun es fundamental.
              </p>
              <p>
                <strong>§4.</strong> Es decir, necesitamos una teoria para
                acompanar la lucha social, que busque fortalecer los procesos de
                resistencia, que haga un diagnostico preciso y contribuya desde
                esa perspectiva a construir una estrategia adecuada, pertinente,
                oportuna y efectiva.
              </p>
              <p>
                <strong>§5.</strong> A lo largo de la historia se ha construido
                una teoria social de materialismo historico que se ha ido
                consolidando a medida que la exigencia de la lucha lo va
                requiriendo, fundamentada en una teoria general de la realidad,
                del conocimiento y de la logica. Esa teoria es una herencia
                solida para quienes buscamos fortalecer y fundamentar la lucha
                social.
              </p>
              <p>
                <strong>§6.</strong> Por ejemplo, companeros y companeras, Hegel
                proporciona la concepcion dialectica, progresiva y
                multideterminada de la realidad en movimiento rompiendo con la
                logica lineal aristotelica tomista aunque en su forma idealista;
                Marx nos provee de una teoria dialectica materialista, explica
                los procesos historicos y caracteriza con mucha precision el
                desarrollo y las contradicciones del capitalismo; Engels aporta
                la teoria del reflejo para fundamentar que el conocimiento y la
                conciencia son producto de la accion y la practica; Lenin expone
                al capitalismo en su fase imperialista y evidencia la
                conflagracion entre las corporaciones industriales y financiera,
                expresada a traves del conflicto entre naciones; Kosik aporta la
                tesis de la totalidad concreta y la pseudoconcresion como reflejo
                incompleto de la realidad para poder tener perspectiva general de
                los procesos historicos y comprender las limitaciones desde la
                conciencia; Felipe Bate aporta la Teoria Social como un proceso
                historico y estructural, precisa las categorias de analisis
                materialistas dialecticas, ademas propone las categorias de
                formacion economico social y cultura para completar la teoria
                social como herramienta poderosa para transformar la realidad en
                favor de la clase dominada, e incluye la sicologia social como
                elemento insoslayable para comprender la conciencia social.
              </p>
              <p>
                <strong>§7.</strong> Se hace entonces necesario partir de estas
                herramientas para comprender la realidad social y poder realizar
                un diagnostico del momento historico que estamos viviendo como
                mundo y como sociedad particular.
              </p>
              <p>
                <strong>§8.</strong> Partimos afirmando que: las distintas etapas
                de la historia de la humanidad, si bien no son lineales y las
                sociedades entramos en ellas a distintos ritmos y a veces
                saltandonos ciertas etapas historicas, entrando en ellas a
                destiempo o tardiamente, lo cierto es que toda la humanidad hemos
                ido de las sociedades preclasistas a la fundacion de las grandes
                civilizaciones agricolas que a traves de los milenios
                desembocaron hacia el capitalismo global como modo de produccion
                general vigente en la civilizacion humana. Este proceso no es
                como algunos quieren afirmar, particular solo de la historia
                europea, sino general de toda la historia de la humanidad.
              </p>
              <p>
                <strong>§9.</strong> Por ejemplo, las tribus germanas que
                conformaron europa, en el contacto con el imperio romano, fueron
                absorbidas por el expansionismo esclavista de este, y pasaron
                casi de la prehistoria a la edad media, sin construir ni grandes
                sociedades agricolas, ni pasar por sociedades esclavistas. Por
                otra parte, sociedades como las de la llamada mesoamerica, que es
                una de las grandes civilizaciones madre de la humanidad que mas
                tiempo ha permanecido viva y vigente, pasaron de las grandes
                civilizaciones agricolas a un proceso de protoesclavismo que no
                se consolido pero que, con su conflagracion interna y la
                posterior invasion europea, que la potencializo, paso
                directamente a un feudalismo tardio, en el marco de un
                precapitalismo en su fase de expansion.
              </p>
              <p>
                <strong>§10.</strong> En el momento de la invasion, la sociedad
                europea iba en ascenso y las sociedades precolombinas estaban en
                una crisis interna, producto de las leyes generales de la
                historia y las sociedades. Este es el contexto concreto del
                encuentro.
              </p>
              <p>
                <strong>§11.</strong> Junto con la conformacion economico social
                de las colectividades humanas estan los valores fundamentales de
                la vida que se construyeron en milenios de fraternidad,
                cooperacion e interdependencia y que trascienden los cambios en
                los modos de produccion, en forma de cultura, ya que son la vida
                psicologica, emocional y espiritual de las sociedades.
              </p>
              <p>
                <strong>§12.</strong> Nuestra cosmovision sobre la
                interconectividad de la existencia, la vida comunitaria, la
                reciprocidad, por ejemplo, quedo como un sistema de vida que
                permanece hasta nuestros dias, pero estuvo constantemente
                expuesta a modos de produccion que tenian valores y objetivos
                distintos y que justificaban o incluso promovian la explotacion
                como derecho divino. Por lo que hoy podemos evocar nuestra
                herencia cultural, pero debemos saber el contexto de la forma
                particular de relaciones economico-sociales en las que hoy
                estamos inmersos y que son dominantes para poder ocupar esa
                herencia oportunamente. La propuesta de refuncionalizar el
                sistema capitalista, de disenar un capitalismo distinto, crear un
                proceso de acumulacion en Mexico, crear condiciones para que
                desde el Estado haya un desarrollo economico y un crecimiento
                economico, es inviable e inmoral, no es etico. Esta
                descontextualizado del momento historico actual del capitalismo en
                su fase monopolica, en su fase terminal, pero expansiva,
                amenazante e insolente, destructiva, de muerte, y ademas
                incompatible con los valores civilizatorios heredados de nuestra
                cultura.
              </p>

              <h3 className="mt-8 text-lg font-bold text-primary">
                Afirmamos que:
              </h3>

              <p>
                <strong>§13.</strong> Ya en la fase de expansion del capitalismo,
                este se volvio el modo de produccion dominante a nivel global y
                se caracterizo por generar procesos de disputa por los mercados,
                acaparamiento, acumulacion, concentracion y centralizacion del
                capital por parte de las potencias imperiales, principalmente
                europeas, que fueron conformando un sistema mundo de grandes
                centros hegemonicos y las llamadas periferias que gravitaron
                alrededor siempre sometidas y dependientes.
              </p>
              <p>
                <strong>§14.</strong> El escenario global fue cambiando bajo la
                direccion general que marcaba el desarrollo del capitalismo,
                hasta que la contradiccion antagonica entre las corporaciones
                monopolicas industriales y las corporaciones bancarias llevo a la
                primera guerra mundial y al ascenso de un hegemon global
                industrial y bancario llamado EEUU, que pudo consolidarse como
                potencia hegemonica global dominante definitivamente, aunque de
                manera efimera, hasta despues de la Segunda Guerra Mundial y con
                la desintegracion de la Union Sovietica, cuando a su vez, se
                manifestaron las crisis acumuladas y la salida fue el llamado
                neoliberalismo como proceso de desmantelamiento del Estado,
                monopolio y saqueo.
              </p>
              <p>
                <strong>§15.</strong> Todo este proceso llevo, por ejemplo, a que
                a principios de los 2000 el 99% de las transacciones globales
                fueran especulativas y se generara otra crisis de produccion, que
                resulta en la necesidad de refuncionalizar al capitalismo,
                apareciendo como respuesta un mundo multipolar industrial
                nacionalista que contrarreste la crisis de la burbuja
                especulativa del financierismo, sentando las bases para el
                capitalismo multilateralista, que por supuesto, no resuelve el
                fondo de la crisis general, sino que la esconde, posterga y
                agrava manteniendo disputas encarnizadas por los mercados,
                aranceles, sanciones, guerras como expresion de esa disputa de
                estas fuerzas: aquellos que gozaron de los mercados de futuros,
                la especulacion financiera, el lavado de dinero, los paraisos
                fiscales, el desmantelamiento del Estado para el enriquecimiento
                privado, llamados financieristas, y aquellos cuyas condiciones
                les permitio ayudar a dar salida momentanea a esa crisis a traves
                de la industrializacion tardia y el multilateralismo capitalista,
                llamados industrialistas. Sin embargo, financieristas e
                industrialistas, tienen a las naciones a distintos ritmos y bajo
                distintas condiciones alineandose para su supervivencia, a veces
                compitiendo, a veces negociando para cuidar el sistema comun que
                los hermana como clase, en detrimento de los pueblos.
              </p>
              <p>
                <strong>§16.</strong> En todo este proceso, como hemos ya
                mencionado, el capitalismo centralizo la riqueza y se apropio
                despojando a la humanidad, de la fuerza del trabajador, del
                trabajo acumulado de la humanidad entera en la forma de
                tecnologia, de los desarrollos culturales de las sociedades, del
                acervo biologico de la naturaleza que hace posible la vida, y
                todo ello para que el 1% de la poblacion global rica concentre
                mas riqueza que el 95% de la poblacion global, y mientras la
                fortuna por ejemplo de alguien como Elon Musk que posee 850 mil
                millones de dolares &mdash;que le tomaria 2 mil anos en agotarla
                si gastara un millon de dolares diarios!&mdash; mientras 700
                millones de personas viven con 2 dolares diarios.
              </p>
              <p>
                <strong>§17.</strong> Este tipo de desproporciones es
                inaceptable, pues estamos viviendo una etapa de decadencia del
                capitalismo donde las medidas contrarrestantes, que no han
                resuelto el fondo, estan llevando a la humanidad a una disyuntiva
                irreductible:{" "}
                <strong className="text-primary">
                  eco-comunitarismo o extincion.
                </strong>{" "}
                Es decir, o pasamos como humanidad a una forma de redistribucion
                de lo que hemos producido como civilizacion o la disputa por la
                direccion del capitalismo que se esta llevando a cabo entre las
                corporaciones imperiales, industriales y financieras nos llevaran
                a la extincion de la especie.
              </p>
              <p>
                <strong>§18.</strong> En este momento y contexto las soberanias
                nacionales de las democracias electorales no son ni viables, ni
                posibles, o por lo menos ya no son suficientes ya que en la fase
                del capitalismo en la que estamos, las naciones si no son centros
                hegemonicos al servicio de las corporaciones imperiales del
                capitalismo, solo pueden aspirar a cierta autonomia
                administrativa que le conceda la potencia que la domina, sobre
                todo en el marco de la disputa monopolica decadente.
              </p>
              <p>
                <strong>§19.</strong> Sin embargo, la democracia participativa,
                convertida en una fuerza popular que sustente, respalde,
                fortalezca y utilice la democracia electoral para expresar su
                voluntad de poder, es el horizonte de lucha para la humanidad.
              </p>
              <p>
                <strong>§20.</strong> De esta manera vemos que la necesidad es
                que debemos posibilitar el eco comunitarismo desde el Estado
                Nacional. Es decir que la poblacion organizada en Asambleas del
                Pueblo Soberano debe a traves de la democracia electoral y
                participativa construir un horizonte de tejido comunitario,
                organizacion territorial, economias cooperativistas,
                redistribucion de la riqueza, gobernanza popular, un horizonte
                civilizatorio mas alla del decadente e intransigente lumpen
                capitalismo.
              </p>
              <p>
                <strong>§21.</strong> Lumpen significa grupo social que atenta,
                sin ningun tipo de principios, contra la seguridad de los
                individuos y colectividades bajo un animo rapaz y delincuencial.
              </p>
              <p>
                <strong>§22.</strong> Consideramos necesario a su vez integrar la
                dimension popular en todos los aspectos de la vida publica,
                empezando por el regimen de propiedad, regresando la propiedad
                social con la reforma art. 27 Constitucional; siguiendo con una
                economia popular de produccion autonoma por lo que se hace
                necesario denunciar y retirarse del T-MEC como forma de gobierno
                dependiente y colonial; construir la seguridad comunitaria e
                inteligencia popular para fortalecer las relaciones sociales y
                resguardar el proyecto comun; construir una gobernanza que parta
                de las necesidades concretas y contextualizadas de los
                territorios.
              </p>
              <p>
                <strong>§23.</strong> Asumamos que el momento historico actual es
                la transicion de un modo de produccion capitalista conocido,
                hacia otro modo de produccion eco-comunitarista en construccion.
                Manos a la obra!
              </p>

              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <p className="font-semibold text-primary">
                  Que vivan las asambleas del pueblo soberano!
                </p>
                <p className="font-semibold text-primary">
                  Que viva la democracia participativa!
                </p>
                <p className="font-semibold text-primary">
                  Que viva la soberania popular organizada!
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* APS Escrito */}
        <article id="aps" className="mt-16 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary">
              Asambleas Soberanas del Pueblo
            </h2>
            <a
              href="/docs/asambleas-soberanas-del-pueblo.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Descargar PDF
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="mb-4 text-xs text-muted">
              Av. Alvaro Obregon 10, col. Roma, Alcaldia Cuauhtemoc, CP 06700
              CDMX.
            </p>

            <div className="prose prose-stone max-w-none space-y-4 text-foreground/90 leading-relaxed">
              <h3 className="text-lg font-bold text-primary">Justificacion</h3>
              <p className="font-semibold italic">
                La democracia electoral ya no es suficiente.
              </p>
              <p>
                En el mundo convulso en que vivimos, la lumpen burguesia
                monopolica en decadencia incide en el voto y se apodera de las
                democracias condicionando a la poblacion con financiamientos o
                respaldando candidatos a modo para colocarlos como titeres
                manipulando y moldeando la opinion publica con la poderosa
                inteligencia artificial y los medios de comunicacion masivos,
                mientras mantienen en todo el mundo guerras asimetricas,
                clandestinas, irrestrictas, proxy o directas para imponer su
                voluntad, ya sea de manera simulada evocando la democracia, la
                lucha contra el terrorismo, la lucha contra el narcotrafico o
                descaradamente movidos por la desesperacion, extorsionando,
                ocupando territorialmente y decapitando gobiernos de proyectos
                politicos que desafian sus intereses.
              </p>
              <p>
                Este nuevo sistema economico-social debe ser un Proyecto de los
                Pueblos que posibilite la reproduccion de la vida y la
                restitucion de la herencia civilizatoria y material de la que ha
                sido despojada la humanidad. El capitalismo monopolista se
                sustenta en la acumulacion, concentracion y centralizacion de la
                riqueza por unos cuantos que se apropian tanto de la energia
                vital del trabajador, como del legado cultural de las sociedades,
                asi como del trabajo acumulado de la humanidad en la forma de
                tecnologia, e incluso, del desarrollo organico del planeta que
                tomo millones de anos para generar las condiciones biologicas que
                posibilitan la reproduccion de la vida.
              </p>
              <p>
                Las resistencias y el hartazgo social en decadas de lucha,
                posibilitaron arrebatar el poder gubernamental a las oligarquicas
                por medio de la democracia electoral, pero esto no ha sido
                suficiente para contrarrestar el enorme poder economico,
                mediatico, ideologico y factico que mantiene y reproduce una
                conformacion de relaciones economico-sociales que no cuestiona el
                sistema capitalista ni a las lumpen burguesias globales y
                oligarquias locales que lo controlan. Por lo que se hace
                indiscutible la necesidad de profundizar, ampliar y consolidar la
                democracia electoral a traves de la recomposicion de las
                relaciones sociales desde el territorio, la construccion de un
                tejido social solido, la toma de responsabilidad popular sobre la
                realidad inmediata y la elevacion de la conciencia de la
                poblacion.
              </p>
              <p>
                La organizacion popular de democracia participativa es un
                replanteamiento de forma de gobierno. Se busca que la poblacion
                se involucre de manera activa en todos los aspectos de su
                comunidad como el diagnostico de problematicas, la seguridad del
                territorio, la restauracion del medio ambiente, la construccion
                de una economia social popular territorial, la discusion publica
                de los asuntos de interes, la vigilancia colectiva de un sistema
                de encargos para la eleccion de autoridades comunitarias, la
                rendicion de cuentas en el ejercicio de la administracion de lo
                publico. Las Asambleas Soberanas del Pueblo son la plataforma
                que organiza, integra y teje esos esfuerzos para consolidar un
                poder popular activo que dialogue e interactue con el gobierno,
                que lo pueda respaldar de manera organizada y coordinada ante los
                embates, e incluso conduzca su actuar en lo cotidiano y de
                manera permanente para que siga adherido al proyecto popular.
              </p>

              <h3 className="mt-8 text-lg font-bold text-primary">
                Asambleas Soberanas del Pueblo
              </h3>
              <p>
                Cuando se habla de organizacion popular de democracia
                participativa y directa, estamos hablando de la esencia de la
                democracia. Es necesario distinguirla de otras formas de
                organizacion politica que conviven y coexisten con ella, como
                son: los partidos politicos, las organizaciones sociales, las
                asociaciones civiles, los grupos religiosos y el propio gobierno
                en sus distintos niveles. Tambien es muy importante distinguir
                que lo politico no es exclusivamente lo electoral sino un
                ejercicio para decidir lo comun.
              </p>
              <p>
                Las Asambleas Soberanas del Pueblo pueden ser convocadas en
                cualquier lugar, por cualquier persona y en cualquier momento,
                habiendo condiciones de sesionar, ya que son la expresion mas
                fundamental de la soberania popular, que no solo es
                supraconstitucional (como los derechos humanos), sino que es el
                poder que crea el Constituyente, que a su vez, conforma los
                poderes de la Nacion y tiene en todo momento la facultad de
                cambiar su forma de gobierno.
              </p>

              <h4 className="mt-6 font-bold text-foreground">
                Las Asambleas Soberanas del Pueblo son instancias para activar:
              </h4>
              <ul className="ml-4 list-disc space-y-2 text-foreground/80">
                <li>
                  Procesos de Consulta Popular sobre asuntos de interes publico
                </li>
                <li>
                  Diagnosticos colectivos sobre asuntos del territorio, del
                  sector o de la afinidad que los congrega
                </li>
                <li>
                  Discusiones sobre temas coyunturales y estructurales
                </li>
                <li>
                  Iniciativas ciudadanas para promover reformas constitucionales
                  o legales
                </li>
                <li>
                  Proyectos comunitarios como escuelas populares, proyectos
                  economicos de cooperativas, consejos de seguridad popular,
                  clinicas de atencion a las adicciones con perspectiva
                  comunitaria, radios comunitarias
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
                  La construccion de redes de colaboracion, coordinacion y apoyo
                  con otras Asambleas Soberanas del Pueblo
                </li>
              </ul>

              <p className="mt-6">
                Es importante resaltar que las Asambleas Soberanas del Pueblo no
                son contra el gobierno ni contra los partidos. Buscan darles a
                estos el lugar que les corresponde y fortalecer la organizacion
                social y el poder popular como instancia que ejerce su soberania
                directa y cotidianamente y no solo de manera indirecta y
                esporadica.
              </p>

              <div className="mt-6 rounded-lg border-l-4 border-accent bg-accent/5 p-4">
                <p className="italic text-foreground/80">
                  &ldquo;El movimiento no es un partido, sino la expresion de
                  una voluntad colectiva.&rdquo;
                </p>
                <p className="mt-1 text-sm font-medium text-muted">
                  &mdash; Presidenta Claudia Sheinbaum
                </p>
              </div>

              <p className="mt-4 text-sm text-muted">
                Autores: Purushottam Dharmaraj Nava, Jose Guillermo Soto Garcia
              </p>
            </div>
          </div>
        </article>

        {/* Metodologia */}
        <article id="metodologia" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary">Metodologia</h2>
          <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <p className="text-muted">
              La metodologia describe como se organizan, convocan y llevan a
              cabo las asambleas. Incluye lineamientos para la facilitacion, la
              toma de decisiones y el seguimiento de acuerdos.
            </p>
            <p className="mt-4 rounded-lg border border-dashed border-border bg-surface px-4 py-8 text-center text-sm text-muted-light">
              Contenido pendiente de publicacion.
            </p>
          </div>
        </article>

        {/* Link to Materiales */}
        <div className="mt-16 rounded-xl border border-secondary/30 bg-secondary/5 p-6 transition-colors hover:border-secondary/50">
          <h3 className="text-lg font-semibold text-foreground">
            Materiales de Consulta
          </h3>
          <p className="mt-2 text-sm text-muted">
            Accede a recursos complementarios, lecturas recomendadas y
            materiales de apoyo para las asambleas.
          </p>
          <Link
            href="/documentos/materiales"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-secondary-dark"
          >
            Ver materiales
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
