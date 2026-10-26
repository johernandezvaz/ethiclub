import { t as Button } from "./button-BjOpXBw4.js";
import { t as PhotoBand } from "./photo-band-CXqQP3gc.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/servicios.tsx?tsr-split=component
var services = [
	{
		n: "01",
		title: "PENTESTING DE APLICACIONES WEB",
		intro: "Evaluamos sitios, portales y paneles con autorización para identificar vulnerabilidades que podrían permitir acceso o manipulación indebida.",
		scope: [
			"Autenticación y sesiones",
			"Controles de acceso",
			"Validación de entradas",
			"Configuración y exposición"
		],
		deliverables: [
			"Reporte ejecutivo y técnico",
			"Evidencia reproducible",
			"Prioridad y recomendaciones",
			"Re-verificación acordada"
		]
	},
	{
		n: "02",
		title: "PENTESTING DE APIS",
		intro: "Probamos las interfaces que conectan aplicaciones y datos, con atención especial a quién puede consultar o modificar cada recurso.",
		scope: [
			"Autorización por objeto",
			"Tokens y autenticación",
			"Límites y abuso",
			"Exposición de información"
		],
		deliverables: [
			"Mapa de superficie",
			"Casos de prueba",
			"Hallazgos priorizados",
			"Sesión de revisión"
		]
	},
	{
		n: "03",
		title: "AUTOMATIZACIÓN DE SEGURIDAD Y DEVOPS",
		intro: "Integramos controles repetibles en la forma de construir y operar software, sin frenar al equipo.",
		scope: [
			"Hardening",
			"CI/CD seguro",
			"Gestión de secretos",
			"Revisiones automatizadas"
		],
		deliverables: [
			"Scripts documentados",
			"Configuración reproducible",
			"Guía operativa",
			"Transferencia de conocimiento"
		]
	},
	{
		n: "04",
		title: "WEB SCRAPING Y OSINT",
		intro: "Recolectamos y ordenamos información pública para detectar exposición de datos o cambios relevantes para la organización.",
		scope: [
			"Fuentes públicas",
			"Monitoreo definido",
			"Normalización de datos",
			"Alertas acordadas"
		],
		deliverables: [
			"Inventario de fuentes",
			"Proceso automatizado",
			"Resultados estructurados",
			"Límites legales documentados"
		]
	}
];
function ServicesPage() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PhotoBand, {
			description: "macro de placa y cableado, iluminación controlada",
			ratio: "21:9",
			className: "page-hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "page-hero-copy",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "SERVICIOS"
					}),
					/* @__PURE__ */ jsx("h1", { children: "REVISAR. CORREGIR. AUTOMATIZAR." }),
					/* @__PURE__ */ jsx("p", { children: "Alcances técnicos definidos alrededor de riesgos que sí afectan la operación." })
				]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "service-details",
			children: services.map((service) => /* @__PURE__ */ jsxs("section", {
				className: "service-detail",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "service-intro",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: service.n
						}),
						/* @__PURE__ */ jsx("h2", { children: service.title }),
						/* @__PURE__ */ jsx("p", { children: service.intro })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "detail-columns",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "ALCANCE"
					}), service.scope.map((item) => /* @__PURE__ */ jsx("p", {
						className: "detail-row",
						children: item
					}, item))] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "ENTREGABLES"
					}), service.deliverables.map((item) => /* @__PURE__ */ jsx("p", {
						className: "detail-row",
						children: item
					}, item))] })]
				})]
			}, service.n))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "simple-cta",
			children: [/* @__PURE__ */ jsx("h2", { children: "DEFINE EL PRIMER ALCANCE CON NOSOTROS." }), /* @__PURE__ */ jsx(Button, {
				asChild: true,
				variant: "ethiclub",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/contacto",
					children: "AGENDAR DIAGNÓSTICO"
				})
			})]
		})
	] });
}
//#endregion
export { ServicesPage as component };
