import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/photo-band.tsx
var IMAGE_MAP = {
	"manos trabajando sobre teclado en penumbra, alto contraste": "/images/hero-keyboard.jpg",
	"racks de servidores sobrios y desaturados": "/images/server-racks.jpg",
	"silueta urbana nocturna con infraestructura tecnológica": "/images/city-skyline.jpg",
	"macro de placa y cableado, iluminación controlada": "/images/macro-hardware.jpg"
};
function PhotoBand({ description, src, ratio = "21:9", className = "", children }) {
	const resolvedSrc = src || IMAGE_MAP[description];
	return /* @__PURE__ */ jsxs("section", {
		className: `photo-band ${className}`,
		"aria-label": description,
		children: [resolvedSrc ? /* @__PURE__ */ jsxs("div", {
			className: "photo-media-wrapper",
			children: [/* @__PURE__ */ jsx("img", {
				src: resolvedSrc,
				alt: description,
				className: "photo-media-image",
				loading: "lazy"
			}), /* @__PURE__ */ jsx("div", {
				className: "photo-media-overlay",
				"aria-hidden": "true"
			})]
		}) : /* @__PURE__ */ jsx("div", {
			className: "photo-placeholder",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("span", { children: [
				"IMAGEN PENDIENTE — ",
				description,
				", ",
				ratio
			] })
		}), children ? /* @__PURE__ */ jsx("div", {
			className: "photo-content",
			children
		}) : null]
	});
}
//#endregion
export { PhotoBand as t };
