import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PhotoBand } from "@/components/photo-band";

export const Route = createFileRoute("/servicios")({
    head: () => ({
        meta: [
            { title: "Servicios de seguridad — EthiClub" },
            { name: "description", content: "Pentesting web y de APIs, automatización de seguridad, DevOps, web scraping y OSINT para PYMEs y startups." },
            { property: "og:title", content: "Servicios de seguridad — EthiClub" },
            { property: "og:description", content: "Alcances claros y entregables accionables para fortalecer sistemas y procesos." },
            { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
        ]
    }),
    component: ServicesPage,
});

const services = [
    { n: "01", title: "PENTESTING DE APLICACIONES WEB", intro: "Evaluamos sitios, portales y paneles con autorización para identificar vulnerabilidades que podrían permitir acceso o manipulación indebida.", scope: ["Autenticación y sesiones", "Controles de acceso", "Validación de entradas", "Configuración y exposición"], deliverables: ["Reporte ejecutivo y técnico", "Evidencia reproducible", "Prioridad y recomendaciones", "Re-verificación acordada"] },
    { n: "02", title: "PENTESTING DE APIS", intro: "Probamos las interfaces que conectan aplicaciones y datos, con atención especial a quién puede consultar o modificar cada recurso.", scope: ["Autorización por objeto", "Tokens y autenticación", "Límites y abuso", "Exposición de información"], deliverables: ["Mapa de superficie", "Casos de prueba", "Hallazgos priorizados", "Sesión de revisión"] },
    { n: "03", title: "AUTOMATIZACIÓN DE SEGURIDAD Y DEVOPS", intro: "Integramos controles repetibles en la forma de construir y operar software, sin frenar al equipo.", scope: ["Hardening", "CI/CD seguro", "Gestión de secretos", "Revisiones automatizadas"], deliverables: ["Scripts documentados", "Configuración reproducible", "Guía operativa", "Transferencia de conocimiento"] },
    { n: "04", title: "WEB SCRAPING Y OSINT", intro: "Recolectamos y ordenamos información pública para detectar exposición de datos o cambios relevantes para la organización.", scope: ["Fuentes públicas", "Monitoreo definido", "Normalización de datos", "Alertas acordadas"], deliverables: ["Inventario de fuentes", "Proceso automatizado", "Resultados estructurados", "Límites legales documentados"] },
];

function ServicesPage() {
    return <main><PhotoBand description="macro de placa y cableado, iluminación controlada" ratio="21:9" className="page-hero"><div className="page-hero-copy"><p className="eyebrow">SERVICIOS</p><h1>REVISAR. CORREGIR. AUTOMATIZAR.</h1><p>Alcances técnicos definidos alrededor de riesgos que sí afectan la operación.</p></div></PhotoBand><div className="service-details">{services.map((service) => <section className="service-detail" key={service.n}><div className="service-intro"><p className="eyebrow">{service.n}</p><h2>{service.title}</h2><p>{service.intro}</p></div><div className="detail-columns"><div><p className="eyebrow">ALCANCE</p>{service.scope.map((item) => <p className="detail-row" key={item}>{item}</p>)}</div><div><p className="eyebrow">ENTREGABLES</p>{service.deliverables.map((item) => <p className="detail-row" key={item}>{item}</p>)}</div></div></section>)}</div><section className="simple-cta"><h2>DEFINE EL PRIMER ALCANCE CON NOSOTROS.</h2><Button asChild variant="ethiclub"><Link to="/contacto">AGENDAR DIAGNÓSTICO</Link></Button></section></main>;
}