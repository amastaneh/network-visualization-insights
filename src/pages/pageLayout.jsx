import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import packageJson from '../../package.json';

const Logo = () => (
    <a href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-semibold tracking-tight">Network Visualization Insights</span>
    </a>
);

const MobileMenuButton = ({ open, toggle }) => (
    <button onClick={toggle} className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 shadow-sm transition hover:bg-neutral-200 md:hidden">
        <svg viewBox="0 0 24 24" className={`h-5 w-5 transition ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
    </button>
);

const LinkItem = ({ to, children, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `px-3 py-2 text-sm rounded-lg transition ${isActive
                ? 'bg-neutral-800 text-white'
                : 'text-neutral-700 hover:bg-neutral-100'
            }`
        }
    >
        {children}
    </NavLink>
);

const PageLayout = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-800 antialiased font-sans">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/70 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
                    <div className="flex items-center gap-3">
                        <Logo />
                    </div>
                    <div className="hidden items-center gap-2 md:flex">
                        <LinkItem to="/">Home</LinkItem>
                        <LinkItem to="/dut">DUT Dashboard</LinkItem>
                        <LinkItem to="/regional">Regional Dashboard</LinkItem>
                        <LinkItem to="/signin">Sign In</LinkItem>
                    </div>
                    <div className="flex items-center gap-2 md:hidden">
                        <MobileMenuButton open={open} toggle={() => setOpen((v) => !v)} />
                    </div>
                </nav>
                {/* Mobile sheet */}
                {open && (
                    <div className="border-t border-neutral-200/60 bg-white/90 px-4 py-2 backdrop-blur md:hidden">
                        <div className="mx-auto flex max-w-6xl flex-col gap-1 pb-2">
                            <LinkItem to="/" onClick={() => setOpen(false)}>Home</LinkItem>
                            <LinkItem to="/dut" onClick={() => setOpen(false)}>DUT Dashboard</LinkItem>
                            <LinkItem to="/regional" onClick={() => setOpen(false)}>Regional Dashboard</LinkItem>
                            <LinkItem to="/signin" onClick={() => setOpen(false)}>Sign In</LinkItem>
                        </div>
                    </div>
                )}
            </header>

            {/* Content */}
            <main className="mx-auto max-w-6xl px-4 py-6">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="mt-auto border-t border-neutral-200/60 bg-white/50 py-6 text-xs text-neutral-600">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <small>
                        © {new Date().getFullYear()} {packageJson.title} — v{packageJson.version}
                    </small>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;