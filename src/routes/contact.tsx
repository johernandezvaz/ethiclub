import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
    head: () => ({
        meta: [
            { title: "Contacto — EthiClub" },
            { name: "description", content: "Cuéntanos qué sistema quieres revisar o qué proceso necesitas automatizar." },
            { property: "og:title", content: "Contacto — EthiClub" },
            { property: "og:description", content: "Agenda una conversación inicial para definir alcance, autorización y próximos pasos." },
            { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
        ]
    }),
    component: ContactPage,
});

function ContactPage() {
    return <main className="contact-page"><section className="contact-intro"><p className="eyebrow">CONTACTO</p><h1>CUÉNTANOS QUÉ NECESITAS PROTEGER.</h1><p>Describe brevemente tu sistema, el riesgo que te preocupa o el proceso que quieres automatizar. Definiremos alcance, autorización y siguientes pasos antes de cualquier revisión.</p></section><section className="form-section"><ContactForm /><aside><p className="eyebrow">ANTES DE EMPEZAR</p><p>No solicitamos contraseñas ni accesos en este formulario. Toda evaluación ofensiva requiere autorización escrita y un alcance acordado.</p><p className="muted-note">Correo y teléfono directos: [POR DEFINIR]</p></aside></section></main>;
}