import type { ReactNode } from "react";

const IMAGE_MAP: Record<string, string> = {
    "manos trabajando sobre teclado en penumbra, alto contraste": "/images/hero-keyboard.jpg",
    "racks de servidores sobrios y desaturados": "/images/server-racks.jpg",
    "silueta urbana nocturna con infraestructura tecnológica": "/images/city-skyline.jpg",
    "macro de placa y cableado, iluminación controlada": "/images/macro-hardware.jpg",
};

export function PhotoBand({
    description,
    src,
    ratio = "21:9",
    className = "",
    children,
}: {
    description: string;
    src?: string;
    ratio?: "21:9" | "16:9" | "vertical móvil";
    className?: string;
    children?: ReactNode;
}) {
    const resolvedSrc = src || IMAGE_MAP[description];

    return (
        <section className={`photo-band ${className}`} aria-label={description}>
            {resolvedSrc ? (
                <div className="photo-media-wrapper">
                    <img
                        src={resolvedSrc}
                        alt={description}
                        className="photo-media-image"
                        loading="lazy"
                    />
                    <div className="photo-media-overlay" aria-hidden="true" />
                </div>
            ) : (
                <div className="photo-placeholder" aria-hidden="true">
                    <span>IMAGEN PENDIENTE — {description}, {ratio}</span>
                </div>
            )}
            {children ? <div className="photo-content">{children}</div> : null}
        </section>
    );
}