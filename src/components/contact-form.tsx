import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.reportValidity()) return;
        setStatus("sending");
        const payload = Object.fromEntries(new FormData(form));
        try {
            const response = await fetch("/api/public/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error("No fue posible enviar el formulario");
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    return (
        <form className="contact-form" onSubmit={submit}>
            <label>Nombre<input name="nombre" autoComplete="name" required minLength={2} /></label>
            <label>Empresa<input name="empresa" autoComplete="organization" required minLength={2} /></label>
            <label>Correo<input name="correo" type="email" autoComplete="email" required /></label>
            <label>Tipo de servicio<select name="servicio" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Pentesting web</option><option>Pentesting de APIs</option><option>Automatización de seguridad y DevOps</option><option>Web scraping y OSINT</option><option>No estoy seguro todavía</option></select></label>
            <label className="field-wide">Mensaje<textarea name="mensaje" rows={5} required minLength={20} /></label>
            <div className="form-action"><Button variant="ethiclub" type="submit" disabled={status === "sending"}>{status === "sending" ? "ENVIANDO…" : "ENVIAR SOLICITUD"}</Button></div>
            <p className="form-status" aria-live="polite">{status === "sent" ? "Recibimos tu solicitud. Te contactaremos cuando el canal de correo quede conectado." : status === "error" ? "No se pudo enviar. Inténtalo de nuevo." : ""}</p>
        </form>
    );
}