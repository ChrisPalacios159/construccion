// ============================================================
// Data file for Concrete Premezclado Landing Pages
// All content separated from components for easy maintenance
// ============================================================

export const navItems = [
  { label: "Concreto Premezclado", href: "#concreto" },
  { label: "Nuestras Plantas", href: "#plantas" },
  { label: "Proyectos Realizados", href: "#proyectos" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Youtube", href: "#", icon: "youtube" },
] as const;

export const heroSlides = [
  {
    title: "CONCRETO PREMEZCLADO PARA VIVIENDAS Y OBRAS",
    subtitle: "Estricto control de calidad en laboratorio",
    cta: "Deseo Cotizar",
    ctaHref: "#cotizacion",
  },
  {
    title: "PLANTAS CON GRAN CAPACIDAD DE PRODUCCIÓN",
    subtitle: "Hasta 120 m³/hora de concreto premezclado",
    cta: "Conocer las Plantas",
    ctaHref: "#plantas",
  },
  {
    title: "EXPERIENCIA Y TECNOLOGÍA PARA TU PROYECTO",
    subtitle: "Diseño de mezcla según requerimientos",
    cta: "Ver Proyectos Realizados",
    ctaHref: "#proyectos",
  },
] as const;

export const institutionalText =
  "Trabajamos con los mejores materiales, siguiendo las normas nacionales NTP, RNC E 0.60, ASOCEM e internacionales ASTM, ACI, AASHTO. Elegimos Cemento Sol tipo 1, tipo 5 y tipo HS.";

export const concreteSection = {
  title: "Concreto Premezclado de Calidad Garantizada",
  text: "El Concreto Premezclado es un material que se prepara en planta para aplicarse directamente en la obra. Permite ahorrar costos y maximizar la productividad del proyecto.",
  text2:
    "La empresa cuenta con una flota de mixers, camiones acondicionados para entregar el producto en estado fresco y sin endurecer, con una vida útil máxima aproximada de 2 horas y media.",
  cta: "Descargar Brochure",
} as const;

export const processSteps = [
  {
    step: 1,
    title: "Abastecimiento",
    description:
      "Abastecimiento de agregados en la tolva de agregados, silo de cemento y tanque de aditivo, dependiendo del diseño solicitado.",
  },
  {
    step: 2,
    title: "Carga de Balanzas",
    description:
      "Carga de balanzas, siempre que se tenga abastecida la tolva, silo de cemento y tanque de aditivo.",
  },
  {
    step: 3,
    title: "Desplazamiento",
    description:
      "Desplazamiento simultáneo de agregados, cemento y aditivo mediante faja, gusano y manguera.",
  },
  {
    step: 4,
    title: "Carga al Mixer",
    description:
      "Carga mediante chute de descarga hacia el mixer estacionado en zona de carguío.",
  },
  {
    step: 5,
    title: "Control de Calidad",
    description:
      "Visualización del producto en zona de regulación mediante un técnico de calidad del concreto.",
  },
] as const;

export const plantsSection = {
  title: "Nuestras Plantas",
  text: "Las plantas están ubicadas en Villa El Salvador y Chilca. Tienen una capacidad de hasta 120 m³/hora de concreto premezclado. Cuentan con laboratorio equipado para el diseño de mezcla de concreto según las necesidades de cada obra. Los expertos dosifican los agregados y componentes para obtener un producto de máxima calidad.",
  plants: [
    {
      name: "Planta Villa El Salvador",
      location: "Villa El Salvador, Lima",
      capacity: "120 m³/hora",
      features: ["Laboratorio equipado", "Diseño de mezcla", "Dosificación precisa"],
    },
    {
      name: "Planta Chilca",
      location: "Chilca, Lima",
      capacity: "120 m³/hora",
      features: ["Laboratorio equipado", "Diseño de mezcla", "Dosificación precisa"],
    },
  ],
} as const;

export const qualitySection = {
  title: "Sistema de Control de Calidad en Planta y Obra",
  points: [
    "Regulado de concreto.",
    "Control de calidad del concreto en estado fresco.",
    "Moldeo de testigos de concreto.",
    "Curado de testigos de concreto.",
    "Ensayo de resistencia a la compresión.",
    "Emisión de informe de resistencia.",
    "Más de 10 ensayos para garantizar la calidad del concreto premezclado.",
    "Servicio de probetas a pie de obra.",
  ],
  cta: "Cotizar",
  ctaHref: "#cotizacion",
} as const;

export const projects = [
  {
    id: 1,
    title: "Consorcio Vial, Callao",
    volume: "2'000 m³ de concreto premezclado",
    duration: "3 meses, Setiembre a Noviembre 2022",
    category: "Vial",
  },
  {
    id: 2,
    title: "Pistas en Jr. Joaquín Torrico, San Juan de Miraflores",
    volume: "",
    duration: "",
    category: "Vial",
  },
  {
    id: 3,
    title: "Obra en Jr. Independencia, San Miguel",
    volume: "",
    duration: "",
    category: "Urbano",
  },
  {
    id: 4,
    title: "Zapatas para postes de cerco de protección, Costa Verde",
    volume: "",
    duration: "",
    category: "Estructural",
  },
  {
    id: 5,
    title: "Obra ubicada en Oquendo, Callao",
    volume: "500 m³ de concreto premezclado",
    duration: "Noviembre 2022",
    category: "Urbano",
  },
  {
    id: 6,
    title: "Veredas, Centro de Lima",
    volume: "",
    duration: "",
    category: "Vial",
  },
  {
    id: 7,
    title: "Obra de Inmobiliaria Pichihua S.A., Lince",
    volume: "1500 m³ de concreto premezclado",
    duration: "Agosto 2022",
    category: "Inmobiliario",
  },
  {
    id: 8,
    title: "Mejoramiento de la Asociación de Viviendas de San Gregorio 2, Distrito de Chorrillos",
    volume: "2'000 m³ de concreto premezclado",
    duration: "4 meses, Enero a Abril 2022",
    category: "Vial",
  },
  {
    id: 9,
    title: "Mejoramiento de la Transitabilidad Vehicular y Peatonal, Cercado de Lima",
    volume: "1'800 m³ de concreto premezclado",
    duration: "2 meses, Agosto a Setiembre 2022",
    category: "Vial",
  },
  {
    id: 10,
    title: "Pistas en Jr. Lima, San Miguel",
    volume: "",
    duration: "",
    category: "Vial",
  },
] as const;

export const stats = [
  { value: "120", unit: "m³/hora", label: "Capacidad de producción" },
  { value: "10+", unit: "ensayos", label: "De control de calidad" },
  { value: "2", unit: "plantas", label: "Estratégicamente ubicadas" },
  { value: "24/7", unit: "", label: "Flota de mixers disponible" },
] as const;

export const formFields = [
  { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Ingrese su nombre completo" },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "Ingrese su número de teléfono" },
  { name: "correo", label: "Correo electrónico", type: "email", placeholder: "Ingrese su correo electrónico" },
  { name: "distrito", label: "Distrito", type: "text", placeholder: "Ingrese su distrito" },
  { name: "tipoProyecto", label: "Tipo de proyecto", type: "select", options: ["Vivienda", "Obra comercial", "Obra vial", "Industrial", "Otro"] },
  { name: "metrosCubicos", label: "Metros cúbicos aproximados", type: "text", placeholder: "Ej: 50 m³" },
  { name: "mensaje", label: "Mensaje", type: "textarea", placeholder: "Cuéntenos sobre su proyecto..." },
] as const;

export const quoteSection = {
  title: "Solicita tu Cotización",
  text: "Realizamos visitas a obras en cualquier punto de Lima para evaluar cuántos metros cúbicos requerirá tu techo, vivienda u obra. Llena el formulario y nos pondremos en contacto contigo.",
  cta: "Solicitar Cotización",
} as const;

export const images = {
  heroIndustrial: "/images/hero-concreto-industrial-ai.webp",
  heroComercial: "/images/hero-comercial-ai.webp",
  heroTech: "/images/hero-tech-innovation-ai.webp",
  mixerTruck: "/images/mixer-concreto-ai.webp",
  plant: "/images/planta-concreto-ai.webp",
  roadProject: "/images/proyecto-vial-ai.webp",
  lab: "/images/laboratorio-calidad-ai.webp",
  residential: "/images/proyecto-viviendas-ai.webp",
  concretePour: "/images/concreto-vertido-ai.webp",
  testCylinders: "/images/testigos-concreto-ai.webp",
  urbanNight: "/images/proyecto-urbano-noche-ai.webp",
} as const;
