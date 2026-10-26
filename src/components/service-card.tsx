import { Link } from "@tanstack/react-router";

export function ServiceCard({ index, title, description }: { index: string; title: string; description: string }) {
    return (
        <article className="service-card">
            <p className="eyebrow">{index}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to="/servicios" className="text-link">CONOCER MÁS <span aria-hidden="true">→</span></Link>
        </article>
    );
}