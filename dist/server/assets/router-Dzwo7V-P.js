import { useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-XOuMVA_J.css";
//#endregion
//#region src/assets/ethiclub-logo-white.png
var ethiclub_logo_white_default = "/assets/ethiclub-logo-white-BGOMOc1P.png";
//#endregion
//#region src/components/brand.tsx
function Brand({ className = "" }) {
	return /* @__PURE__ */ jsx("img", {
		src: ethiclub_logo_white_default,
		alt: "EthiClub — Ethical Hacking & Automation",
		className: `brand-logo ${className}`,
		width: 1e3,
		height: 220
	});
}
//#endregion
//#region src/components/site-header.tsx
function SiteHeader() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "site-header",
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "site-nav",
			"aria-label": "Navegación principal",
			children: [
				/* @__PURE__ */ jsxs("button", {
					className: "menu-toggle",
					type: "button",
					"aria-expanded": open,
					"aria-controls": "mobile-menu",
					onClick: () => setOpen((value) => !value),
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: open ? "×" : "☰"
					}), /* @__PURE__ */ jsx("span", {
						className: "desktop-label",
						children: " MENÚ"
					})]
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "brand-link",
					"aria-label": "Ir al inicio",
					children: /* @__PURE__ */ jsx(Brand, {})
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/contacto",
					className: "nav-contact",
					children: "CONTACTO"
				})
			]
		}), open ? /* @__PURE__ */ jsxs("nav", {
			id: "mobile-menu",
			className: "mobile-menu",
			"aria-label": "Menú móvil",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					onClick: () => setOpen(false),
					children: "INICIO"
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/servicios",
					onClick: () => setOpen(false),
					children: "SERVICIOS"
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/contacto",
					onClick: () => setOpen(false),
					children: "CONTACTO"
				})
			]
		}) : null]
	});
}
//#endregion
//#region src/components/site-footer.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "site-footer",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "footer-grid",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "footer-title",
							children: "ETHICLUB"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							children: "Inicio"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contacto",
							children: "Contacto"
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "footer-title",
							children: "SERVICIOS"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/servicios",
							children: "Pentesting web"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/servicios",
							children: "Pentesting de APIs"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/servicios",
							children: "Automatización y DevOps"
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "footer-title",
							children: "RECURSOS"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							children: "Bitácora"
						}),
						/* @__PURE__ */ jsx("span", { children: "[POR DEFINIR]" })
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "footer-title",
							children: "CONTACTO"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contacto",
							children: "Solicitar diagnóstico"
						}),
						/* @__PURE__ */ jsx("span", { children: "Datos directos [POR DEFINIR]" })
					] })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "legal-row",
				children: [/* @__PURE__ */ jsx("p", { children: "Todo servicio ofensivo se realiza únicamente con autorización escrita del titular de los sistemas." }), /* @__PURE__ */ jsx("p", { children: "© 2026 EthiClub. Todos los derechos reservados." })]
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "footer-brand",
				"aria-label": "EthiClub, inicio",
				children: /* @__PURE__ */ jsx(Brand, {})
			})
		]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "EthiClub"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400&family=JetBrains+Mono:wght@400&family=Saira+Condensed:wght@400&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "es-MX",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "site-shell",
			children: [
				/* @__PURE__ */ jsx(SiteHeader, {}),
				/* @__PURE__ */ jsx(Outlet, {}),
				/* @__PURE__ */ jsx(SiteFooter, {})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$2 = () => import("./routes-C7mLofWR.js");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "EthiClub — Hacking ético y automatización" },
			{
				name: "description",
				content: "Seguridad práctica para PYMEs y startups: pentesting web y de APIs, automatización, DevOps, scraping y OSINT."
			},
			{
				property: "og:title",
				content: "EthiClub — Hacking ético y automatización"
			},
			{
				property: "og:description",
				content: "Encontramos riesgos, ayudamos a corregirlos y automatizamos controles útiles para tu negocio."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "EthiClub",
				description: "Agencia mexicana de hacking ético y automatización",
				areaServed: "MX"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$1 = () => import("./contact-zQRBBLZU.js");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contacto — EthiClub" },
		{
			name: "description",
			content: "Cuéntanos qué sistema quieres revisar o qué proceso necesitas automatizar."
		},
		{
			property: "og:title",
			content: "Contacto — EthiClub"
		},
		{
			property: "og:description",
			content: "Agenda una conversación inicial para definir alcance, autorización y próximos pasos."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/servicios.tsx
var $$splitComponentImporter = () => import("./servicios-CkRI282k.js");
var Route = createFileRoute("/servicios")({
	head: () => ({ meta: [
		{ title: "Servicios de seguridad — EthiClub" },
		{
			name: "description",
			content: "Pentesting web y de APIs, automatización de seguridad, DevOps, web scraping y OSINT para PYMEs y startups."
		},
		{
			property: "og:title",
			content: "Servicios de seguridad — EthiClub"
		},
		{
			property: "og:description",
			content: "Alcances claros y entregables accionables para fortalecer sistemas y procesos."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$3
	}),
	ServiciosRoute: Route.update({
		id: "/servicios",
		path: "/servicios",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
