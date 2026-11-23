/**
 * Fuente única de datos estructurados de los 5 módulos del Parque Nacional Waraira Repano
 * utilizada por la vista responsiva móvil vertical (VistaMovilWaraira.astro) para mantener
 * fidelidad exacta de textos, rutas, especies, números de emergencia y normativas.
 */

export type SeccionId =
  | "quienes-somos"
  | "patrimonio-natural"
  | "guia-visitante"
  | "emergencias"
  | "normativa";

export interface SubvistaConfig {
  id: string;
  etiqueta: string;
  fondo?: string;
}

export interface SeccionConfig {
  id: SeccionId;
  etiquetaLineas: [string, string];
  titulo: string;
  color: string;
  colorOscuro: string;
  lomitaSvg: string;
  esquinaImg: string;
  fondoIntro: string;
  subvistas: SubvistaConfig[];
}

export const SECCIONES_WARAIRA: SeccionConfig[] = [
  {
    id: "quienes-somos",
    etiquetaLineas: ["¿Quiénes", "somos?"],
    titulo: "¿Quiénes somos?",
    color: "#ff8f00",
    colorOscuro: "#cc6f00",
    lomitaSvg: "/elementos/svg/lomita-quienes-somos.svg",
    esquinaImg: "/elementos/rocas-esquina-izquierda.webp",
    fondoIntro: "/fondos/bg-quienes-somos-intro.webp",
    subvistas: [
      { id: "intro", etiqueta: "Portada", fondo: "/fondos/bg-quienes-somos-intro.webp" },
      { id: "mision-vision", etiqueta: "Misión y Visión", fondo: "/fondos/bg-mision-vision.webp" },
      { id: "valor-ecologico", etiqueta: "Valor ecológico", fondo: "/fondos/bg-valor-ecologico.webp" },
      { id: "inparques", etiqueta: "INPARQUES", fondo: "/fondos/bg-inparques.webp" },
    ],
  },
  {
    id: "patrimonio-natural",
    etiquetaLineas: ["Patrimonio", "natural"],
    titulo: "Patrimonio natural",
    color: "#eac00f",
    colorOscuro: "#c29905",
    lomitaSvg: "/elementos/svg/lomita-patrimonio-natural.svg",
    esquinaImg: "/elementos/hojas-esquina-izquierda.webp",
    fondoIntro: "/fondos/bg-patrimonio-intro.webp",
    subvistas: [
      { id: "intro", etiqueta: "Portada", fondo: "/fondos/bg-patrimonio-intro.webp" },
      { id: "clima", etiqueta: "Clima", fondo: "/fondos/bg-clima.webp" },
      { id: "geologia", etiqueta: "Geología", fondo: "/fondos/bg-geologia.webp" },
      { id: "hidrografia", etiqueta: "Hidrografía", fondo: "/fondos/bg-hidrografia.webp" },
      { id: "flora-fauna", etiqueta: "Flora y Fauna", fondo: "/fondos/bg-flora-fauna.webp" },
    ],
  },
  {
    id: "guia-visitante",
    etiquetaLineas: ["Guía del", "visitante"],
    titulo: "Guía del visitante",
    color: "#4bae50",
    colorOscuro: "#38893c",
    lomitaSvg: "/elementos/svg/lomita-guia-visitante.svg",
    esquinaImg: "/elementos/flores-esquina-guia.webp",
    fondoIntro: "/fondos/bg-guia-visitante.webp",
    subvistas: [
      { id: "intro", etiqueta: "Portada", fondo: "/fondos/bg-guia-visitante.webp" },
      { id: "rutas-parque", etiqueta: "Rutas del parque", fondo: "/fondos/bg-guia-visitante.webp" },
    ],
  },
  {
    id: "emergencias",
    etiquetaLineas: ["Emergencias y", "protocolos"],
    titulo: "Emergencias y protocolos",
    color: "#25a69a",
    colorOscuro: "#167a70",
    lomitaSvg: "/elementos/svg/lomita-emergencias.svg",
    esquinaImg: "/elementos/hojas-izquierda-emergencias.webp",
    fondoIntro: "/fondos/bg-emergencias.webp",
    subvistas: [
      { id: "intro", etiqueta: "Portada", fondo: "/fondos/bg-emergencias.webp" },
      { id: "prepara-ascenso", etiqueta: "Prepara tu ascenso" },
      { id: "protocolo-extravio", etiqueta: "Protocolo ante extravío" },
      { id: "urgencias-medicas", etiqueta: "Urgencias médicas" },
      { id: "golpes-heridas", etiqueta: "Golpes y heridas" },
      { id: "niebla-densa", etiqueta: "Niebla densa" },
      { id: "incendio-forestal", etiqueta: "Incendio forestal" },
      { id: "contactos-emergencia", etiqueta: "Contactos de emergencia" },
    ],
  },
  {
    id: "normativa",
    etiquetaLineas: ["Conoce su", "normativa"],
    titulo: "Conoce su normativa",
    color: "#6856a0",
    colorOscuro: "#4e3f80",
    lomitaSvg: "/elementos/svg/lomita-normativa.svg",
    esquinaImg: "/elementos/hojas-izquierda-normativa.webp",
    fondoIntro: "/fondos/bg-normativa.webp",
    subvistas: [
      { id: "intro", etiqueta: "Portada", fondo: "/fondos/bg-normativa.webp" },
      { id: "seguridad-ambiental", etiqueta: "Seguridad ambiental" },
      { id: "acceso-horarios", etiqueta: "Acceso y horarios" },
      { id: "seguridad-visitante", etiqueta: "Seguridad del visitante" },
      { id: "manejo-desechos", etiqueta: "Manejo de desechos" },
    ],
  },
];

/* ----------------------------------------------------------
   DATOS: ¿QUIÉNES SOMOS?
   ---------------------------------------------------------- */
export const CIFRAS_VALOR_ECOLOGICO = [
  { cifra: "1.800", etiqueta: "Plantas", icono: "/iconos/icono-plantas.webp" },
  { cifra: "120", etiqueta: "Mamíferos", icono: "/iconos/icono-mamiferos.webp" },
  { cifra: "500", etiqueta: "Aves", icono: "/iconos/icono-aves.webp" },
  { cifra: "30", etiqueta: "Reptiles", icono: "/iconos/icono-reptiles.webp" },
];

export const CIFRAS_INPARQUES = [
  { cifra: "44", etiqueta: "Parques nacionales" },
  { cifra: "65", etiqueta: "Parques de recreación" },
  { cifra: "37", etiqueta: "Monumentos naturales" },
];

/* ----------------------------------------------------------
   DATOS: PATRIMONIO NATURAL
   ---------------------------------------------------------- */
export interface CumbreGeologia {
  id: string;
  nombre: string;
  foto: string;
  desc: string;
  altura: string;
}

export const CUMBRES_GEOLOGIA: CumbreGeologia[] = [
  {
    id: "pico-el-avila",
    nombre: "Pico El Ávila",
    foto: "/fotos/geologia/pico-el-avila.webp",
    desc: "Es la cima de mayor infraestructura turística.",
    altura: "Altura: (2.459 m.s.n)",
  },
  {
    id: "pico-oriental",
    nombre: "Pico Oriental",
    foto: "/fotos/geologia/pico-oriental.webp",
    desc: "Es la segunda cumbre más alta del parque.",
    altura: "Altura: (2.459 m.s.n)",
  },
  {
    id: "pico-occidental",
    nombre: "Pico Occidental",
    foto: "/fotos/geologia/pico-occidental.webp",
    desc: "Es una de las cumbres principales del Parque nacional Waraira Repano.",
    altura: "Altura: (2.478 m.s.n)",
  },
  {
    id: "pico-naiguata",
    nombre: "Pico Naiguatá",
    foto: "/fotos/geologia/pico-naiguata.webp",
    desc: "Es la cumbre más alta de la Cordillera de la Costa y del parque.",
    altura: "Altura: (2.765 m.s.n)",
  },
  {
    id: "silla-de-caracas",
    nombre: "Silla de Caracas",
    foto: "/fotos/geologia/silla-de-caracas.webp",
    desc: "Está compuesta por el Pico Occidental y el Pico Oriental",
    altura: "",
  },
];

export interface EspecieItem {
  comun: string;
  cientifico: string;
  foto: string;
  posicionFoto?: string;
}

export interface CategoriaEspecies {
  id: string;
  nombre: string;
  especies: EspecieItem[];
}

export const CATALOGO_FLORA_MOVIL: CategoriaEspecies[] = [
  {
    id: "emblematicas",
    nombre: "Plantas emblemáticas",
    especies: [
      { comun: "Árbol niño", cientifico: "Gyranthera caribensis", foto: "/fotos/flora/arbol-nino.webp" },
      { comun: "Arrayán", cientifico: "Myrcianthes karsteniana", foto: "/fotos/flora/arrayan.webp" },
      { comun: "Frailejón arbolito", cientifico: "Espeletia neriifolia", foto: "/fotos/flora/frailejon-arbolito.webp" },
    ],
  },
  {
    id: "orquideas",
    nombre: "Orquídeas",
    especies: [
      { comun: "Orquídea Cattleya", cientifico: "Cattleya mossiae", foto: "/fotos/flora/orquidea-cattleya.webp" },
      { comun: "Coronas de Cristo", cientifico: "Epidendrum leucochilum", foto: "/fotos/flora/coronas-de-cristo.webp" },
      {
        comun: "Varita de San José",
        cientifico: "Epidendrum secundum",
        foto: "/fotos/flora/varita-de-san-jose.webp",
        posicionFoto: "50% 23%",
      },
    ],
  },
  {
    id: "helechos",
    nombre: "Helechos",
    especies: [
      { comun: "Helecho Pincel", cientifico: "Blechnum occidentale", foto: "/fotos/flora/helecho-pincel.webp" },
      { comun: "Palma boba", cientifico: "Cyathea caracasana", foto: "/fotos/flora/palma-boba.webp" },
      { comun: "Helecho Corocillo", cientifico: "Pteridium aquilinum", foto: "/fotos/flora/helecho-corocillo.webp" },
    ],
  },
  {
    id: "endemicas",
    nombre: "Especies endémicas",
    especies: [
      { comun: "Vira Vira Avileña", cientifico: "Achyrocline flaccida", foto: "/fotos/flora/vira-vira-avilena.webp" },
      { comun: "El Nogal de Caracas", cientifico: "Juglans venezuelensis", foto: "/fotos/flora/nogal-de-caracas.webp" },
      { comun: "Rosa del Ávila", cientifico: "Befaria glauca", foto: "/fotos/flora/rosa-del-avila.webp" },
    ],
  },
];

export const CATALOGO_FAUNA_MOVIL: CategoriaEspecies[] = [
  {
    id: "mamiferos",
    nombre: "Mamíferos",
    especies: [
      { comun: "Cunaguaro", cientifico: "Leopardus pardalis", foto: "/fotos/fauna/cunaguaro.webp" },
      {
        comun: "Zorro común",
        cientifico: "Cerdocyon thous",
        foto: "/fotos/fauna/zorro-comun.webp",
        posicionFoto: "50% 10%",
      },
      { comun: "Perezoso", cientifico: "Bradypus variegatus", foto: "/fotos/fauna/perezoso.webp" },
    ],
  },
  {
    id: "aves",
    nombre: "Aves",
    especies: [
      { comun: "Tangara coroniazul", cientifico: "Thraupis cyanocephala", foto: "/fotos/fauna/tangara-coroniazul.webp" },
      {
        comun: "Guacharaca",
        cientifico: "Ortalis ruficauda",
        foto: "/fotos/fauna/guacharaca.webp",
        posicionFoto: "50% 0%",
      },
      { comun: "Guacamaya azul y amarilla", cientifico: "Ara ararauna", foto: "/fotos/fauna/guacamaya-azul-amarilla.webp" },
    ],
  },
  {
    id: "reptiles",
    nombre: "Reptiles",
    especies: [
      { comun: "Iguana", cientifico: "Iguana iguana", foto: "/fotos/fauna/iguana.webp" },
      { comun: "Cascabel", cientifico: "Crotalus durissus", foto: "/fotos/fauna/cascabel.webp" },
      { comun: "Tragavenado", cientifico: "Boa constrictor", foto: "/fotos/fauna/tragavenado.webp" },
    ],
  },
  {
    id: "anfibios",
    nombre: "Anfibios",
    especies: [
      { comun: "Ranita de cristal del Ávila", cientifico: "Hyalinobatrachium guairarepanensis", foto: "/fotos/fauna/ranita-de-cristal.webp" },
      { comun: "Sapo común", cientifico: "Rhaebo guttatus", foto: "/fotos/fauna/sapo-comun.webp" },
      { comun: "Ranita de las bromelias", cientifico: "Dendropsophus microcephalus", foto: "/fotos/fauna/ranita-de-las-bromelias.webp" },
    ],
  },
];

/* ----------------------------------------------------------
   DATOS: GUÍA DEL VISITANTE (8 RUTAS)
   ---------------------------------------------------------- */
export interface BulletItem {
  prefix?: string;
  texto: string;
}

export interface RutaParque {
  slug: string;
  nombreLista: string;
  nombreDetalle: string;
  distancia: string;
  distanciaNota?: string;
  tiempo: string;
  dificultad: "Media" | "Alta";
  descripcion: string;
  acceso: BulletItem[];
  caracteristicas: BulletItem[];
  advertencias: BulletItem[];
  fotoLista: string;
  fotosDetalle: [string, string, string];
  mapaCoords: string;
  mapaAccesoCorto: string;
}

export const RUTAS_PARQUE_MOVIL: RutaParque[] = [
  {
    slug: "galipan-via-cotiza",
    nombreLista: "Galipán Vía Cotiza",
    nombreDetalle: "Galipán vía Cotiza",
    distancia: "17,55 km",
    tiempo: "2 a 3 horas",
    dificultad: "Media",
    descripcion:
      "Ruta que asciende al poblado de Galipán, famoso por sus cultivos de flores y fresas. Pasa por el área recreativa Los Venados y conecta con el Hotel Humboldt y la estación del Teleférico.",
    acceso: [
      { texto: "Cotiza, Av. Peñalver (entre San Bernardino y Cotiza)." },
      { texto: "Se puede acceder en vehículo 4x4 o a pie." },
    ],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "Cotiza / Los Venados." },
      { prefix: "Punto de hidratación:", texto: "Los Venados / Galipán." },
    ],
    advertencias: [
      { texto: "Clima con abundante niebla." },
      { texto: "Vía vehicular estrecha y sinuosa." },
    ],
    fotoLista: "/fotos/rutas/galipan-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/galipan-detalle-1.webp",
      "/fotos/rutas/galipan-detalle-2.webp",
      "/fotos/rutas/galipan-detalle-3.webp",
    ],
    mapaCoords: "10.5625,-66.8980",
    mapaAccesoCorto: "Cotiza, Av. Peñalver → Los Venados → Galipán",
  },
  {
    slug: "camino-de-los-espanoles",
    nombreLista: "Camino de los Españoles",
    nombreDetalle: "Camino de los Españoles",
    distancia: "8 km",
    tiempo: "3 a 4 horas",
    dificultad: "Media",
    descripcion:
      "Ruta histórica colonial construida en el siglo XVIII para conectar Caracas con el puerto de La Guaira. Es un camino empedrado original que pasa por las ruinas de los fortines Castillo Negro y Castillo Blanco, patrimonio histórico de Venezuela.",
    acceso: [{ texto: "Puerta Caracas, sector La Pastora." }],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "Puerta de Caracas / Quenepe." },
      { prefix: "Punto de hidratación:", texto: "La Posada." },
    ],
    advertencias: [
      { texto: "Exposición solar alta en primer tramo." },
      { texto: "Tramos empedrados irregulares debido a los restos coloniales." },
    ],
    fotoLista: "/fotos/rutas/camino-espanoles-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/camino-espanoles-detalle-1.webp",
      "/fotos/rutas/camino-espanoles-detalle-2.webp",
      "/fotos/rutas/camino-espanoles-detalle-3.webp",
    ],
    mapaCoords: "10.5256,-66.9325",
    mapaAccesoCorto: "Puerta Caracas (La Pastora) → Fortines → La Guaira",
  },
  {
    slug: "pico-el-avila",
    nombreLista: "Pico El Ávila",
    nombreDetalle: "Pico El Ávila",
    distancia: "6.84 km",
    tiempo: "4 horas",
    dificultad: "Media",
    descripcion:
      "El Pico El Ávila se identifica con facilidad desde Caracas gracias al icónico Hotel Humboldt. Durante el ascenso, se aprecian vistas panorámicas de la ciudad y se observan los cambios de vegetación, que van desde la sabana hasta el subpáramo, reflejando los distintos pisos altitudinales.",
    acceso: [
      { texto: "Entrada por Sendero San Bernardino - Humboldt, detrás del Hotel Ávila (Cota Mil)." },
      { prefix: "Teleférico:", texto: "acceso en Maripérez." },
    ],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "Papelón / Incluye punto de hidratación." },
    ],
    advertencias: [
      { texto: "Descenso en teleférico sujeto a horarios y clima." },
      { texto: "Primer tramo asfaltado con fuerte pendiente." },
    ],
    fotoLista: "/fotos/rutas/pico-avila-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/pico-avila-detalle-1.webp",
      "/fotos/rutas/pico-avila-detalle-2.webp",
      "/fotos/geologia/pico-el-avila.webp",
    ],
    mapaCoords: "10.5432,-66.8856",
    mapaAccesoCorto: "San Bernardino (Cota Mil) → Papelón → Hotel Humboldt",
  },
  {
    slug: "sabas-nieves",
    nombreLista: "Sabas Nieves",
    nombreDetalle: "Sabas Nieves",
    distancia: "3.5 km",
    tiempo: "1 a 2 horas",
    dificultad: "Media",
    descripcion:
      "La ruta más popular y transitada del parque. Un ascenso constante por escalones y caminos de tierra que lleva hasta el puesto de guardaparques Sabas Nieves, con vistas panorámicas de Caracas.",
    acceso: [{ texto: "Altamira, 10ma Transversal (entre 2da y 3ra Avenida)." }],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "Sabas Nieves I y II / incluyen punto de hidratación." },
      { texto: "Incluye la escalera de 72 peldaños." },
    ],
    advertencias: [
      { texto: "Alta concurrencia los fines de semana." },
      { texto: "Resbaladizo en época de lluvias." },
      { texto: "Pendiente pronunciada continua." },
    ],
    fotoLista: "/fotos/rutas/sabas-nieves-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/sabas-nieves-detalle-1.webp",
      "/fotos/rutas/sabas-nieves-detalle-2.webp",
      "/fotos/rutas/sabas-nieves-detalle-3.webp",
    ],
    mapaCoords: "10.5280,-66.8505",
    mapaAccesoCorto: "Altamira 10ma Transversal → Sabas Nieves I y II",
  },
  {
    slug: "quebrada-quintero",
    nombreLista: "Quebrada Quintero",
    nombreDetalle: "Quebrada Quintero",
    distancia: "7 km",
    tiempo: "4 a 5 horas",
    dificultad: "Alta",
    descripcion:
      "Ruta que sigue el curso de la quebrada Quintero a través de densa vegetación. Ideal para excursionistas experimentados que buscan una experiencia silvestre y fresca.",
    acceso: [{ texto: "Sector Quintero / Sebucán, este de Caracas." }],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "Cachimbo." },
      { prefix: "Punto de hidratación:", texto: "Cascada Quintero / Qda. Quintero." },
    ],
    advertencias: [
      { texto: "Sendero poco señalizado en tramos." },
      { texto: "Riesgo de crecida en lluvias debido a abundantes cruces de agua, cascadas y pozas naturales." },
    ],
    fotoLista: "/fotos/rutas/quebrada-quintero-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/quebrada-quintero-detalle-1.webp",
      "/fotos/rutas/quebrada-quintero-detalle-2.webp",
      "/fotos/rutas/quebrada-quintero-detalle-3.webp",
    ],
    mapaCoords: "10.5255,-66.8350",
    mapaAccesoCorto: "Sebucán (Sector Quintero) → Cachimbo → Cascada Quintero",
  },
  {
    slug: "piedra-el-indio",
    nombreLista: "Piedra El Indio",
    nombreDetalle: "Piedra El Indio",
    distancia: "3.19 km",
    tiempo: "3.5 horas",
    dificultad: "Media",
    descripcion:
      "Gran parte del trayecto discurre bajo la sombra fresca de frondosos árboles. La ruta culmina en la imponente mole rocosa de Piedra El Indio a 1.600 msnm, mirador natural privilegiado sobre la ciudad.",
    acceso: [{ texto: "Av. Boyacá (Cota Mil) a la altura de Sebucán / entrada en PGP Cachimbo." }],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "Cachimbo / incluye punto de hidratación." },
    ],
    advertencias: [
      { texto: "Borde rocoso de Piedra El Indio." },
      { texto: "Poca señalización tras la bifurcación." },
    ],
    fotoLista: "/fotos/rutas/piedra-indio-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/piedra-indio-detalle-1.webp",
      "/fotos/rutas/piedra-indio-detalle-2.webp",
      "/fotos/rutas/piedra-indio-detalle-3.webp",
    ],
    mapaCoords: "10.5295,-66.8315",
    mapaAccesoCorto: "Cota Mil (Sebucán) → PGP Cachimbo → Piedra El Indio",
  },
  {
    slug: "silla-de-caracas",
    nombreLista: "Silla de Caracas",
    nombreDetalle: "Silla de Caracas",
    distancia: "10 km",
    distanciaNota: "(ida y vuelta)",
    tiempo: "6 a 8 horas",
    dificultad: "Alta",
    descripcion:
      "Una de las rutas más emblemáticas de Caracas. La formación montañosa conocida como «La Silla» incluye el Pico Occidental (2.480 m) y el Pico Oriental (2.640 m).",
    acceso: [
      { texto: "El ascenso pasa por el refugio «No te apures» a 1.800 msnm, punto de bifurcación hacia ambos picos." },
    ],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "Sabas Nieves I y II / incluyen punto de hidratación." },
    ],
    advertencias: [
      { texto: "Ruta de alta exigencia." },
      { texto: "Últimos tramos muy empinados." },
      { texto: "Clima impredecible en cumbres." },
    ],
    fotoLista: "/fotos/rutas/silla-caracas-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/silla-caracas-detalle-1.webp",
      "/fotos/rutas/silla-caracas-detalle-2.webp",
      "/fotos/geologia/silla-de-caracas.webp",
    ],
    mapaCoords: "10.5469,-66.8364",
    mapaAccesoCorto: "Sabas Nieves → Refugio No te apures → Silla de Caracas",
  },
  {
    slug: "pico-naiguata",
    nombreLista: "Pico Naiguatá",
    nombreDetalle: "Pico Naiguatá",
    distancia: "22 km",
    distanciaNota: "(ida y vuelta)",
    tiempo: "10 a 14 horas",
    dificultad: "Alta",
    descripcion:
      "La ruta más exigente del parque, se caracteriza por sus formaciones rocosas gigantescas y vistas simultáneas al valle de Caracas y al Mar Caribe separadas por la Fila Maestra. Zonas de acampada: Rancho Grande, El Urquijo, Lagunazo y Anfiteatro.",
    acceso: [{ texto: "La Julia, sector El Marqués (final Av. Sanz)." }],
    caracteristicas: [
      { prefix: "Puesto de guardaparques:", texto: "La Julia." },
      { prefix: "Punto de hidratación:", texto: "Sabas Nieves / Lagunazo." },
    ],
    advertencias: [
      { texto: "Ruta de alta dificultad." },
      { texto: "Avisar a INPARQUES sobre la pernocta." },
      { texto: "Zonas sin señal móvil." },
    ],
    fotoLista: "/fotos/rutas/pico-naiguata-lista.webp",
    fotosDetalle: [
      "/fotos/rutas/pico-naiguata-detalle-1.webp",
      "/fotos/rutas/pico-naiguata-detalle-2.webp",
      "/fotos/geologia/pico-naiguata.webp",
    ],
    mapaCoords: "10.5429,-66.7830",
    mapaAccesoCorto: "La Julia (El Marqués) → Rancho Grande → Pico Naiguatá",
  },
];

/* ----------------------------------------------------------
   DATOS: EMERGENCIAS Y PROTOCOLOS
   ---------------------------------------------------------- */
export const PREPARA_PAGINAS_MOVIL = [
  {
    lead: "Anticipa cualquier riesgo siguiendo nuestras recomendaciones de seguridad.",
    items: [
      "Avisar sobre tu salida",
      "Llevar suficiente agua y comida",
      "Llevar ropa ligera y abrigo.",
      "Usar calzado cerrado.",
    ],
  },
  {
    lead: "Anticipa cualquier riesgo siguiendo nuestras recomendaciones prácticas de seguridad.",
    items: [
      "Llevar protector solar.",
      "Llevar repelente de insectos.",
      "Llevar silbato de emergencia.",
      "Llevar linterna.",
    ],
  },
  {
    lead: "Anticipa cualquier riesgo siguiendo nuestras recomendaciones prácticas de seguridad.",
    items: [
      "Lleva tu celular con suficiente batería.",
      "Llevar mapa o screenshot de la ruta.",
      "Lleva un bolso impermeable para proteger tus pertenencias de la lluvia.",
    ],
  },
];

export const EXTRAVIO_PASOS_MOVIL = [
  { negrita: "1. Detente,", texto: "no sigas caminando sin saber hacia dónde vas." },
  {
    negrita: "2. Piensa",
    texto: "¿por dónde viniste? revisa si tienes señal de celular y si hay algún sonido de agua, carretera o gente.",
  },
  {
    negrita: "3. Mira a tu alrededor.",
    texto: "¿Ves señales, huellas, una quebrada? Las quebradas generalmente bajan hacia la ciudad.",
  },
  {
    negrita: "4. Llama a un servicio de emergencias.",
    texto: "Si no hay señal, muévete lentamente hacia una zona más alta para intentar capturar señal.",
  },
];

export const URGENCIAS_PAGINAS_MOVIL = [
  {
    subtitulo: "Golpe de Calor / Deshidratación.",
    lead: "Subir senderos exigentes con sol directo puede provocar deshidratación severa y golpe de calor.",
    pasos: [
      { num: "01", texto: "Lleva a la persona a la sombra de inmediato." },
      { num: "02", texto: "Dale agua en pequeños sorbos. No lo intentes si se encuentra inconsciente." },
      { num: "03", texto: "Humedece su piel con agua y abanícala." },
      { num: "04", texto: "Si no mejora o está inconsciente, llama al servicio de emergencias de inmediato." },
    ],
  },
  {
    subtitulo: "Hipotermia",
    lead: "Los cambios drásticos de clima y la lluvia en las crestas del parque pueden causar enfriamiento rápido.",
    pasos: [
      { num: "01", texto: "Saca a la persona del viento y la lluvia." },
      { num: "02", texto: "Quítale la ropa mojada y cúbrela con algo seco." },
      { num: "03", texto: "Comparte el calor corporal." },
      { num: "04", texto: "Dale líquidos tibios si está consciente." },
    ],
  },
  {
    subtitulo: "Picadura de Avispa o Abeja (Reacción Alérgica)",
    lead: "En los senderos del Waraira Repano es común encontrar abejas y avispas.",
    pasos: [
      { num: "01", texto: "Mantén a la persona acostada con los pies elevados." },
      { num: "02", texto: "Si la persona es alérgica llama al servicio de emergencias." },
      { num: "03", texto: "Si solo es una picadura sin alergia: saca el aguijón, lava con agua y jabón." },
    ],
  },
  {
    subtitulo: "Picadura de serpiente",
    lead: "Hay serpientes venenosas en El Ávila. En caso de picaduras actúa rápido.",
    pasos: [
      { num: "01", texto: "Mantén a la persona sin moverse, el movimiento acelera la absorción del veneno." },
      { num: "02", texto: "Inmoviliza el miembro picado por debajo del nivel del corazón." },
      { num: "03", texto: "Anota la hora exacta de la picadura." },
      { num: "04", texto: "Toma una foto de la serpiente, ayuda a identificar el antídoto." },
    ],
  },
];

export const GOLPES_PAGINAS_MOVIL = [
  {
    subtitulo: "Torcedura o Fractura de Tobillo / Pierna",
    lead: "El terreno irregular, las piedras sueltas y los desniveles del sendero pueden causar torceduras de tobillo o fracturas.",
    pasos: [
      { num: "01", texto: "No obligues a la persona a caminar si hay fractura o dolor muy intenso." },
      { num: "02", texto: "Inmoviliza el área: usa ramas, tela, lo que tengas para que no se mueva." },
      { num: "03", texto: "Si es torcedura leve y puede caminar: apóyala y baja despacio, sin correr." },
    ],
  },
  {
    subtitulo: "Caída con Golpe en la Cabeza",
    lead: "Un resbalón o tropezón en senderos empinados puede derivar en un impacto en la cabeza.",
    pasos: [
      { num: "01", texto: "No muevas a la persona si sospechas lesión en la columna." },
      { num: "02", texto: "Mantén su cabeza y cuello alineados y sin moverse." },
      { num: "03", texto: "Si la persona está inconsciente pero respira: ponla de lado para que no se ahogue." },
      { num: "04", texto: "Llama al servicio de emergencias inmediatamente." },
    ],
  },
  {
    subtitulo: "Cortes y Heridas",
    lead: "Las rocas filosas o las caídas accidentales en el sendero pueden provocar heridas abiertas o cortes.",
    pasos: [
      { num: "01", texto: "Lava la herida con agua limpia abundante y aplica antiséptico." },
      { num: "02", texto: "Presiona con una tela limpia para detener el sangrado." },
      { num: "03", texto: "Cubre con una venda o curita." },
      { num: "04", texto: "Si el sangrado no para o la herida es profunda ve a urgencias." },
    ],
  },
];

export const NIEBLA_PASOS_MOVIL = [
  { num: "01", texto: "Si la niebla es tan densa que no ves el sendero, detente y espera." },
  { num: "02", texto: "Usa la linterna con luz blanca (no roja) para ver el suelo." },
  { num: "03", texto: "Sigue el sonido de una quebrada para orientarte (siempre bajan hacia la ciudad)." },
  { num: "04", texto: "No corras, el riesgo de caer es muy alto con poca visibilidad." },
];

export const INCENDIO_PAGINAS_MOVIL = [
  [
    { num: "1.", texto: "Mantener la Calma." },
    { num: "2.", texto: "Llama a los servicios de emergencia de la zona." },
    { num: "3.", texto: "Desciende, no subas: busca rutas de descenso por senderos consolidados hacia la base o zonas bajas." },
    { num: "4.", texto: "Llama a un servicio de emergencias. Si no hay señal, muévete lentamente hacia una zona más alta para intentar capturar señal." },
  ],
  [
    { num: "5.", texto: "No camines en la misma dirección hacia donde el viento empuja el humo o las llamas." },
    { num: "6.", texto: "Nunca te refugies en cañadas, quebradas secas, valles estrechos o zanjas; el fuego y el humo se concentran y ascienden a gran velocidad." },
    { num: "7.", texto: "Aléjate de áreas de vegetación densa y seca; busca senderos anchos, afloramientos rocosos, cauces de agua con caudal o áreas ya quemadas." },
    { num: "8.", texto: "Cubre tu nariz y boca con una prenda o pañuelo preferiblemente húmedo." },
  ],
  [
    { num: "9.", texto: "Protege tu piel. Cubre la piel expuesta abrochándote la chaqueta, subiéndote el cuello y bajándote las mangas." },
    { num: "10.", texto: "Utiliza ropa preferiblemente de algodón o lana; evita tejidos sintéticos que puedan derretirse sobre la piel con el calor radiante." },
    { num: "11.", texto: "Si el equipaje pesa demasiado y dificulta tu movilidad, descarta lo innecesario, pero conserva siempre el agua, teléfono/radio y linterna." },
    { num: "12.", texto: "Si la evacuación es imposible y el fuego te corta el paso: busca la zona que ya se quemó (donde ya no hay combustible)." },
  ],
  [
    { num: "13.", texto: "Adopta la posición de protección. Tírate al suelo boca abajo, sobre tierra limpia de vegetación." },
    { num: "14.", texto: "Protégete la cabeza y cubre tus vías respiratorias pegando la cara al suelo." },
    { num: "15.", texto: "Cubre tu cuerpo totalmente con una manta, chaqueta o mochila." },
    { num: "16.", texto: "No corras a ciegas a través del humo denso: la falta de visibilidad puede llevarte a despeñaderos o directamente al centro de las llamas." },
  ],
];

export const CONTACTOS_MOVIL = [
  {
    id: "proteccion-civil",
    etiqueta: "Protección civil: Bomberos - Policía",
    tipo: "grid" as const,
    numeros: [
      { operadora: "Cantv", numero: "171", href: "tel:171" },
      { operadora: "Movilnet:", numero: "*1", href: "tel:*1" },
      { operadora: "Digitel", numero: "112", href: "tel:112" },
      { operadora: "Movistar", numero: "911", href: "tel:911" },
    ],
  },
  {
    id: "bomberos",
    etiqueta: "Bomberos Metropolitanos Caracas:",
    tipo: "fijo" as const,
    codigo: "(0212)",
    numero: "263-1234",
    href: "tel:02122631234",
  },
  {
    id: "inparques",
    etiqueta: "INPARQUES El Ávila:",
    tipo: "fijo" as const,
    codigo: "(0212)",
    numero: "285-4106",
    href: "tel:02122854106",
  },
];

/* ----------------------------------------------------------
   DATOS: CONOCE SU NORMATIVA
   ---------------------------------------------------------- */
export const NORMATIVA_SECCIONES_MOVIL = {
  "seguridad-ambiental": {
    titulo: "Seguridad ambiental",
    lead: "Nuestra principal prioridad es la conservación de este espacio natural.",
    paginas: [
      [
        "Se prohibe encender fogatas, fogones o arrojar colillas de cigarrillos.",
        "Prohibido ingresar con mascotas para evitar la transmisión de enfermedades a la fauna silvestre.",
        "Prohibido el ingreso de bebidas alcohólicas, armas de cualquier tipo y equipos de sonido que generen contaminación sónica.",
        "Se prohibe extraer, cortar o alterar la flora, fauna y elementos geológicos.",
        "Prohibido el aprovechamiento de los recursos naturales con fines comerciales.",
      ],
      [
        "Prohibido el sacrificio de animales.",
        "Prohibida la extracción de material arqueológico, antropológico y paleontológico.",
        "Prohibida la exploración y explotación de minerales.",
        "Prohibida la introducción de especies exóticas de flora y fauna.",
        "Prohibidas la caza y la pesca en todo el territorio del parque.",
      ],
      [
        "Prohibida la extensión de la frontera agrícola.",
        "Prohibida la circulación de bicicletas dentro del parque.",
        "Prohibido escribir o marcar la corteza de los árboles o las piedras.",
        "Prohibida la producción, venta, transporte y consumo de alcohol y drogas, así como el ingreso de personas bajo sus efectos.",
        "Prohibido realizar actividades o usar sustancias que puedan contaminar los ecosistemas naturales.",
      ],
      [
        "Prohibida la instalación de vallas y avisos publicitarios con fines comerciales.",
        "Prohibida la introducción de materiales explosivos.",
        "Prohibida la utilización de sustancias tóxicas o peligrosas tales como pólvora, amoniaco, detonantes y sustancias colorantes.",
      ],
    ],
  },
  "acceso-horarios": {
    titulo: "Acceso y Horarios",
    lead: "El acceso responsable comienza con la planificación.",
    paginas: [
      [
        "Respetar los horarios establecidos para el ascenso y descenso, a partir de 6:00 a.m. hasta 5:00 p.m.",
        "Contar con permisos y cumplir los requisitos obligatorios para acampar.",
        "Cumplir con las normas de uso en instalaciones específicas, como el teleférico y las áreas recreativas.",
        "Se prohibe hacer recorridos en motocicletas por los caminos peatonales del Parque Nacional.",
      ],
      [
        "Los vehículos de turistas deben contar con su respectiva licencia o contrato de concesión para operar.",
        "El conductor debe registrarse en el punto de acceso, obtener la autorización y pagar la tarifa correspondiente.",
        "La pernocta de vehículos requiere autorización previa de la Coordinación y pago de tarifa.",
        "La Coordinación del Parque regulará el número máximo de vehículos permitidos, las vías de circulación y las zonas de estacionamiento.",
      ],
    ],
  },
  "seguridad-visitante": {
    titulo: "Seguridad del visitante",
    lead: "Disfruta la montaña sin riesgos. Revisa nuestras normas de seguridad.",
    paginas: [
      [
        "Registrar tus datos personales en el Puesto de Guardaparques al entrar y salir de la montaña.",
        "Camina únicamente por los senderos principales y rutas señalizadas; evita tomar atajos.",
        "En caso de extravío, accidentes o incendios forestales, sigue los protocolos de emergencia establecidos.",
        "Acampar únicamente en las zonas autorizadas.",
      ],
      [
        "Es obligatorio seguir las señales e instrucciones a lo largo de los senderos.",
        "Hacer un uso responsable de las instalaciones y servicios del Parque Nacional.",
        "Respeta y sigue las recomendaciones de las autoridades del parque.",
        "Los menores de edad deben presentar autorización escrita del representante (con copia de la cédula) y estar acompañados por un adulto responsable para hacer montañismo.",
      ],
      [
        "El número mínimo y máximo de integrantes por grupo dependerá del destino y se indicará en la autorización.",
        "Las cordadas de escalada serán de máximo dos (2) personas. Es obligatorio el uso de casco y cuerdas.",
        "El vuelo libre (parapente y similares) solo se permite en la Vertiente Norte. Se autoriza un máximo de 6 personas a la vez en la zona de despegue.",
      ],
      [
        "Toda persona (poblador, visitante o usuario) tiene el deber de denunciar ante las autoridades cualquier actividad que atente contra la protección y conservación del Parque Nacional.",
        "Todos los grupos voluntarios (rescate, incendios y primeros auxilios) requieren registro previo ante la Coordinación del Parque y el Programa Especial de Incendios Forestales.",
      ],
    ],
  },
  "manejo-desechos": {
    titulo: "Manejo de desechos",
    lead: "Mantener el parque libre de contaminación es responsabilidad de todos.",
    paginas: [
      [
        "Es obligatorio regresar con la totalidad (100 %) de los desechos y basura generados durante la visita.",
        "Prohibido usar jabones o detergentes en ríos, quebradas y cascadas.",
        "Prohibido verter aguas servidas en cualquier fuente de agua natural del parque.",
        "El reúso y vertido de efluentes en cursos de agua se autorizará únicamente con carácter excepcional, siempre que no haya otra alternativa técnica y las aguas tratadas cumplan los parámetros Tipo 1.",
      ],
      [
        "Los pobladores de las zonas de Uso Especial y Uso Poblacional Autóctono son responsables de recolectar y acopiar los residuos sólidos y desechos que generen.",
        "Es obligatorio que toda concesión comercial trate adecuadamente los efluentes líquidos que genere dentro del Parque.",
      ],
    ],
  },
};
