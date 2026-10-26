import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PhotoBand } from "@/components/photo-band";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "EthiClub — Hacking ético y automatización" },
            { name: "description", content: "Seguridad práctica para PYMEs y startups: pentesting web y de APIs, automatización, DevOps, scraping y OSINT." },
            { property: "og:title", content: "EthiClub — Hacking ético y automatización" },
            { property: "og:description", content: "Encontramos riesgos, ayudamos a corregirlos y automatizamos controles útiles para tu negocio." },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "EthiClub", description: "Agencia mexicana de hacking ético y automatización", areaServed: "MX" }) }],
    }),
    component: Index,
});

function Index() {
    return (
        <main>
            <PhotoBand description="manos trabajando sobre teclado en penumbra, alto contraste" ratio="21:9" className="hero-band">
                <div className="hero-copy"><p className="eyebrow">ETHICAL HACKING &amp; AUTOMATION</p><h1>SEGURIDAD QUE TRABAJA PARA TU NEGOCIO</h1><Button asChild variant="ethiclub"><Link to="/contacto">AGENDAR DIAGNÓSTICO</Link></Button></div>
            </PhotoBand>

            <section className="content-section">
                <SectionHeading eyebrow="01 — ENFOQUE" title="MENOS INCERTIDUMBRE. MÁS CONTROL." description="Convertimos riesgos técnicos en decisiones claras. Revisamos lo que está expuesto, automatizamos controles repetitivos y acompañamos la corrección sin alarmismo ni jerga innecesaria." />
                <div className="cycle-grid">{[
                    ["01", "ENCONTRAR", "Revisamos aplicaciones, APIs y exposición pública para detectar fallas reales."],
                    ["02", "AUTOMATIZAR", "Convertimos revisiones repetitivas en controles que se ejecutan de forma consistente."],
                    ["03", "CORREGIR", "Priorizamos hallazgos y entregamos recomendaciones concretas para resolverlos."],
                    ["04", "MONITOREAR", "Observamos cambios y señales de exposición antes de que se conviertan en incidentes."],
                ].map(([n, t, d]) => <article className="spec-cell" key={n}><p className="spec-number">{n}</p><h3>{t}</h3><p>{d}</p></article>)}</div>
            </section>

            <section className="content-section">
                <SectionHeading eyebrow="02 — SERVICIOS" title="CAPACIDAD TÉCNICA, ALCANCE CLARO." />
                <div className="services-grid">
                    <ServiceCard index="01" title="PENTESTING DE APLICACIONES WEB" description="Evaluación autorizada de portales, paneles y flujos críticos para encontrar vulnerabilidades explotables." />
                    <ServiceCard index="02" title="PENTESTING DE APIS" description="Pruebas sobre reglas de acceso, autenticación y manejo de datos entre sistemas." />
                    <ServiceCard index="03" title="AUTOMATIZACIÓN Y DEVOPS" description="Hardening, integración de seguridad en CI/CD y manejo responsable de secretos." />
                    <ServiceCard index="04" title="WEB SCRAPING Y OSINT" description="Monitoreo de fuentes públicas para identificar exposición de datos y señales relevantes." />
                </div>
            </section>

            <PhotoBand description="racks de servidores sobrios y desaturados" ratio="21:9" />

            <section className="content-section two-column">
                <SectionHeading eyebrow="03 — PARA PYMES" title="SEGURIDAD ENTENDIBLE, SIN VENDER MIEDO." />
                <div className="prose-block"><p>Un formulario vulnerable, un panel de administración expuesto, una integración mal configurada o una credencial publicada pueden afectar la operación diaria. Trabajamos sobre esos riesgos concretos y explicamos su impacto en términos de negocio.</p><ol><li><span>01</span><div><h3>DIAGNÓSTICO PUNTUAL</h3><p>Alcance y precio fijo después de conocer el sistema.</p></div></li><li><span>02</span><div><h3>REMEDIACIÓN</h3><p>Proyecto para acompañar y verificar las correcciones.</p></div></li><li><span>03</span><div><h3>MONITOREO CONTINUO</h3><p>Seguimiento mensual acordado según las necesidades reales.</p></div></li></ol></div>
            </section>

            <section className="content-section legal-section">
                <SectionHeading eyebrow="04 — CÓMO TRABAJAMOS" title="AUTORIZACIÓN ANTES QUE ACCESO." description="Cada trabajo comienza con un contrato que define sistemas, fechas y técnicas permitidas. Firmamos NDA, reportamos hallazgos por prioridad y verificamos las correcciones realizadas." />
                <p className="legal-note">Toda prueba ofensiva se realiza únicamente con autorización escrita del titular de los sistemas.</p>
            </section>

            <section className="content-section">
                <SectionHeading eyebrow="05 — BITÁCORA" title="NOTAS PARA DECIDIR MEJOR." />
                <div className="journal-grid">{[
                    ["EJEMPLO", "SEGURIDAD WEB", "28.09.2026", "Qué revisar antes de publicar un portal para clientes"],
                    ["EJEMPLO", "APIS", "28.09.2026", "Tres errores de acceso que una API no debe permitir"],
                    ["EJEMPLO", "OPERACIÓN", "28.09.2026", "Credenciales expuestas: una guía breve de respuesta"],
                ].map(([tag, category, date, title]) => <article className="journal-card" key={title}><div className="journal-meta"><span>{tag} · {category}</span><time>{date}</time></div><h3>{title}</h3><p>Contenido editorial de ejemplo. Publicación real [POR DEFINIR].</p></article>)}</div>
            </section>

            <PhotoBand description="silueta urbana nocturna con infraestructura tecnológica" ratio="21:9" className="cta-band"><div className="cta-copy"><h2>EMPECEMOS POR LO QUE MÁS TE PREOCUPA.</h2><Button asChild variant="ethiclub"><Link to="/contacto">HABLAR CON ETHICLUB</Link></Button></div></PhotoBand>
        </main>
    );
}
