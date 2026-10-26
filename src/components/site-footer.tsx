import { Link } from "@tanstack/react-router";
import { Brand } from "./brand";

export function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="footer-grid">
                <div><p className="footer-title">ETHICLUB</p><Link to="/">Inicio</Link><Link to="/contacto">Contacto</Link></div>
                <div><p className="footer-title">SERVICIOS</p><Link to="/servicios">Pentesting web</Link><Link to="/servicios">Pentesting de APIs</Link><Link to="/servicios">Automatización y DevOps</Link></div>
                <div><p className="footer-title">RECURSOS</p><Link to="/">Bitácora</Link><span>[POR DEFINIR]</span></div>
                <div><p className="footer-title">CONTACTO</p><Link to="/contacto">Solicitar diagnóstico</Link><span>Datos directos [POR DEFINIR]</span></div>
            </div>
            <div className="legal-row">
                <p>Todo servicio ofensivo se realiza únicamente con autorización escrita del titular de los sistemas.</p>
                <p>© 2026 EthiClub. Todos los derechos reservados.</p>
            </div>
            <Link to="/" className="footer-brand" aria-label="EthiClub, inicio"><Brand /></Link>
        </footer>
    );
}