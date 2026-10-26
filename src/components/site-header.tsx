import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Brand } from "./brand";

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Navegación principal">
                <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
                    <span aria-hidden="true">{open ? "×" : "☰"}</span><span className="desktop-label"> MENÚ</span>
                </button>
                <Link to="/" className="brand-link" aria-label="Ir al inicio"><Brand /></Link>
                <Link to="/contacto" className="nav-contact">CONTACTO</Link>
            </nav>
            {open ? (
                <nav id="mobile-menu" className="mobile-menu" aria-label="Menú móvil">
                    <Link to="/" onClick={() => setOpen(false)}>INICIO</Link>
                    <Link to="/servicios" onClick={() => setOpen(false)}>SERVICIOS</Link>
                    <Link to="/contacto" onClick={() => setOpen(false)}>CONTACTO</Link>
                </nav>
            ) : null}
        </header>
    );
}