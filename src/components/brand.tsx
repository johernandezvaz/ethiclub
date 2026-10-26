import logoUrl from "@/assets/ethiclub-logo-white.png";

export function Brand({ className = "" }: { className?: string }) {
    return (
        <img
            src={logoUrl}
            alt="EthiClub — Ethical Hacking & Automation"
            className={`brand-logo ${className}`}
            width={1000}
            height={220}
        />
    );
}