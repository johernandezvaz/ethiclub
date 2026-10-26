import { t as Button } from "./button-BjOpXBw4.js";
import { t as PhotoBand } from "./photo-band-CXqQP3gc.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/section-heading.tsx
function SectionHeading({ eyebrow, title, description }) {
	return /* @__PURE__ */ jsxs("header", {
		className: "section-heading",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", { children: title }),
			description ? /* @__PURE__ */ jsx("p", {
				className: "section-lead",
				children: description
			}) : null
		]
	});
}
//#endregion
//#region src/components/service-card.tsx
function ServiceCard({ index, title, description }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "service-card",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: index
			}),
			/* @__PURE__ */ jsx("h3", { children: title }),
			/* @__PURE__ */ jsx("p", { children: description }),
			/* @__PURE__ */ jsxs(Link, {
				to: "/servicios",
				className: "text-link",
				children: ["CONOCER MÁS ", /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					children: "→"
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PhotoBand, {
			description: "manos trabajando sobre teclado en penumbra, alto contraste",
			ratio: "21:9",
			className: "hero-band",
			children: /* @__PURE__ */ jsxs("div", {
				className: "hero-copy",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "ETHICAL HACKING & AUTOMATION"
					}),
					/* @__PURE__ */ jsx("h1", { children: "SEGURIDAD QUE TRABAJA PARA TU NEGOCIO" }),
					/* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "ethiclub",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/contacto",
							children: "AGENDAR DIAGNÓSTICO"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "content-section",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "01 — ENFOQUE",
				title: "MENOS INCERTIDUMBRE. MÁS CONTROL.",
				description: "Convertimos riesgos técnicos en decisiones claras. Revisamos lo que está expuesto, automatizamos controles repetitivos y acompañamos la corrección sin alarmismo ni jerga innecesaria."
			}), /* @__PURE__ */ jsx("div", {
				className: "cycle-grid",
				children: [
					[
						"01",
						"ENCONTRAR",
						"Revisamos aplicaciones, APIs y exposición pública para detectar fallas reales."
					],
					[
						"02",
						"AUTOMATIZAR",
						"Convertimos revisiones repetitivas en controles que se ejecutan de forma consistente."
					],
					[
						"03",
						"CORREGIR",
						"Priorizamos hallazgos y entregamos recomendaciones concretas para resolverlos."
					],
					[
						"04",
						"MONITOREAR",
						"Observamos cambios y señales de exposición antes de que se conviertan en incidentes."
					]
				].map(([n, t, d]) => /* @__PURE__ */ jsxs("article", {
					className: "spec-cell",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "spec-number",
							children: n
						}),
						/* @__PURE__ */ jsx("h3", { children: t }),
						/* @__PURE__ */ jsx("p", { children: d })
					]
				}, n))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "content-section",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "02 — SERVICIOS",
				title: "CAPACIDAD TÉCNICA, ALCANCE CLARO."
			}), /* @__PURE__ */ jsxs("div", {
				className: "services-grid",
				children: [
					/* @__PURE__ */ jsx(ServiceCard, {
						index: "01",
						title: "PENTESTING DE APLICACIONES WEB",
						description: "Evaluación autorizada de portales, paneles y flujos críticos para encontrar vulnerabilidades explotables."
					}),
					/* @__PURE__ */ jsx(ServiceCard, {
						index: "02",
						title: "PENTESTING DE APIS",
						description: "Pruebas sobre reglas de acceso, autenticación y manejo de datos entre sistemas."
					}),
					/* @__PURE__ */ jsx(ServiceCard, {
						index: "03",
						title: "AUTOMATIZACIÓN Y DEVOPS",
						description: "Hardening, integración de seguridad en CI/CD y manejo responsable de secretos."
					}),
					/* @__PURE__ */ jsx(ServiceCard, {
						index: "04",
						title: "WEB SCRAPING Y OSINT",
						description: "Monitoreo de fuentes públicas para identificar exposición de datos y señales relevantes."
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx(PhotoBand, {
			description: "racks de servidores sobrios y desaturados",
			ratio: "21:9"
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "content-section two-column",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "03 — PARA PYMES",
				title: "SEGURIDAD ENTENDIBLE, SIN VENDER MIEDO."
			}), /* @__PURE__ */ jsxs("div", {
				className: "prose-block",
				children: [/* @__PURE__ */ jsx("p", { children: "Un formulario vulnerable, un panel de administración expuesto, una integración mal configurada o una credencial publicada pueden afectar la operación diaria. Trabajamos sobre esos riesgos concretos y explicamos su impacto en términos de negocio." }), /* @__PURE__ */ jsxs("ol", { children: [
					/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "DIAGNÓSTICO PUNTUAL" }), /* @__PURE__ */ jsx("p", { children: "Alcance y precio fijo después de conocer el sistema." })] })] }),
					/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "REMEDIACIÓN" }), /* @__PURE__ */ jsx("p", { children: "Proyecto para acompañar y verificar las correcciones." })] })] }),
					/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "MONITOREO CONTINUO" }), /* @__PURE__ */ jsx("p", { children: "Seguimiento mensual acordado según las necesidades reales." })] })] })
				] })]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "content-section legal-section",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "04 — CÓMO TRABAJAMOS",
				title: "AUTORIZACIÓN ANTES QUE ACCESO.",
				description: "Cada trabajo comienza con un contrato que define sistemas, fechas y técnicas permitidas. Firmamos NDA, reportamos hallazgos por prioridad y verificamos las correcciones realizadas."
			}), /* @__PURE__ */ jsx("p", {
				className: "legal-note",
				children: "Toda prueba ofensiva se realiza únicamente con autorización escrita del titular de los sistemas."
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "content-section",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "05 — BITÁCORA",
				title: "NOTAS PARA DECIDIR MEJOR."
			}), /* @__PURE__ */ jsx("div", {
				className: "journal-grid",
				children: [
					[
						"EJEMPLO",
						"SEGURIDAD WEB",
						"28.09.2026",
						"Qué revisar antes de publicar un portal para clientes"
					],
					[
						"EJEMPLO",
						"APIS",
						"28.09.2026",
						"Tres errores de acceso que una API no debe permitir"
					],
					[
						"EJEMPLO",
						"OPERACIÓN",
						"28.09.2026",
						"Credenciales expuestas: una guía breve de respuesta"
					]
				].map(([tag, category, date, title]) => /* @__PURE__ */ jsxs("article", {
					className: "journal-card",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "journal-meta",
							children: [/* @__PURE__ */ jsxs("span", { children: [
								tag,
								" · ",
								category
							] }), /* @__PURE__ */ jsx("time", { children: date })]
						}),
						/* @__PURE__ */ jsx("h3", { children: title }),
						/* @__PURE__ */ jsx("p", { children: "Contenido editorial de ejemplo. Publicación real [POR DEFINIR]." })
					]
				}, title))
			})]
		}),
		/* @__PURE__ */ jsx(PhotoBand, {
			description: "silueta urbana nocturna con infraestructura tecnológica",
			ratio: "21:9",
			className: "cta-band",
			children: /* @__PURE__ */ jsxs("div", {
				className: "cta-copy",
				children: [/* @__PURE__ */ jsx("h2", { children: "EMPECEMOS POR LO QUE MÁS TE PREOCUPA." }), /* @__PURE__ */ jsx(Button, {
					asChild: true,
					variant: "ethiclub",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/contacto",
						children: "HABLAR CON ETHICLUB"
					})
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };
