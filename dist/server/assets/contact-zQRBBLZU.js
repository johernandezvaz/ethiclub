import { t as Button } from "./button-BjOpXBw4.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/contact-form.tsx
function ContactForm() {
	const [status, setStatus] = useState("idle");
	async function submit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		if (!form.reportValidity()) return;
		setStatus("sending");
		const payload = Object.fromEntries(new FormData(form));
		try {
			if (!(await fetch("/api/public/contacto", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			})).ok) throw new Error("No fue posible enviar el formulario");
			form.reset();
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	}
	return /* @__PURE__ */ jsxs("form", {
		className: "contact-form",
		onSubmit: submit,
		children: [
			/* @__PURE__ */ jsxs("label", { children: ["Nombre", /* @__PURE__ */ jsx("input", {
				name: "nombre",
				autoComplete: "name",
				required: true,
				minLength: 2
			})] }),
			/* @__PURE__ */ jsxs("label", { children: ["Empresa", /* @__PURE__ */ jsx("input", {
				name: "empresa",
				autoComplete: "organization",
				required: true,
				minLength: 2
			})] }),
			/* @__PURE__ */ jsxs("label", { children: ["Correo", /* @__PURE__ */ jsx("input", {
				name: "correo",
				type: "email",
				autoComplete: "email",
				required: true
			})] }),
			/* @__PURE__ */ jsxs("label", { children: ["Tipo de servicio", /* @__PURE__ */ jsxs("select", {
				name: "servicio",
				required: true,
				defaultValue: "",
				children: [
					/* @__PURE__ */ jsx("option", {
						value: "",
						disabled: true,
						children: "Selecciona una opción"
					}),
					/* @__PURE__ */ jsx("option", { children: "Pentesting web" }),
					/* @__PURE__ */ jsx("option", { children: "Pentesting de APIs" }),
					/* @__PURE__ */ jsx("option", { children: "Automatización de seguridad y DevOps" }),
					/* @__PURE__ */ jsx("option", { children: "Web scraping y OSINT" }),
					/* @__PURE__ */ jsx("option", { children: "No estoy seguro todavía" })
				]
			})] }),
			/* @__PURE__ */ jsxs("label", {
				className: "field-wide",
				children: ["Mensaje", /* @__PURE__ */ jsx("textarea", {
					name: "mensaje",
					rows: 5,
					required: true,
					minLength: 20
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "form-action",
				children: /* @__PURE__ */ jsx(Button, {
					variant: "ethiclub",
					type: "submit",
					disabled: status === "sending",
					children: status === "sending" ? "ENVIANDO…" : "ENVIAR SOLICITUD"
				})
			}),
			/* @__PURE__ */ jsx("p", {
				className: "form-status",
				"aria-live": "polite",
				children: status === "sent" ? "Recibimos tu solicitud. Te contactaremos cuando el canal de correo quede conectado." : status === "error" ? "No se pudo enviar. Inténtalo de nuevo." : ""
			})
		]
	});
}
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "contact-page",
		children: [/* @__PURE__ */ jsxs("section", {
			className: "contact-intro",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "CONTACTO"
				}),
				/* @__PURE__ */ jsx("h1", { children: "CUÉNTANOS QUÉ NECESITAS PROTEGER." }),
				/* @__PURE__ */ jsx("p", { children: "Describe brevemente tu sistema, el riesgo que te preocupa o el proceso que quieres automatizar. Definiremos alcance, autorización y siguientes pasos antes de cualquier revisión." })
			]
		}), /* @__PURE__ */ jsxs("section", {
			className: "form-section",
			children: [/* @__PURE__ */ jsx(ContactForm, {}), /* @__PURE__ */ jsxs("aside", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "ANTES DE EMPEZAR"
				}),
				/* @__PURE__ */ jsx("p", { children: "No solicitamos contraseñas ni accesos en este formulario. Toda evaluación ofensiva requiere autorización escrita y un alcance acordado." }),
				/* @__PURE__ */ jsx("p", {
					className: "muted-note",
					children: "Correo y teléfono directos: [POR DEFINIR]"
				})
			] })]
		})]
	});
}
//#endregion
export { ContactPage as component };
