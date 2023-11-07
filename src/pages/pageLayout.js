import React from 'react';
import { Outlet } from 'react-router-dom';
import packageJson from "../../package.json";

const HamburgerIcon = ({ isOpen }) =>
    <svg className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`M4 6h16${isOpen ? 'M4 18h16' : 'M4 12h16m-7 6h7'}`}></path>
    </svg>


const PageLayout = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () =>
        setMobileMenuOpen(!isMobileMenuOpen);

    return <div className="flex flex-col min-h-screen">
        {/* Header menu */}
        <header className="bg-blue-900 text-white px-4">
            <nav className="container mx-auto flex items-center justify-between py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <img src="/logo-light.png" alt="Logo" className="mr-2 h-10" />
                        Network Visualization Insights
                    </a>
                </div>
                {/* Menu items */}
                <div className="hidden md:flex items-center">
                    <a href="/" className="px-4 hover:text-blue-400">Home</a>
                    <a href="/signin" className="px-4 hover:text-blue-400">Sign In</a>
                </div>
                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className="px-4 hover:text-blue-400 focus:outline-none md:hidden">
                    <HamburgerIcon isOpen={isMobileMenuOpen} />
                </button>
            </nav>
            {/* Mobile Menu */}
            <div style={{ display: isMobileMenuOpen ? 'block' : 'none' }} className="md:hidden">
                <a href="/" className="block px-4 py-2 hover:bg-blue-600">Home</a>
                <a href="/signin" className="block px-4 py-2 hover:bg-blue-600">Sign In</a>
            </div>
        </header>
        <Outlet />
        {/* Footer section */}
        <footer className="bg-blue-700 text-xs text-gray-400 flex flex-row justify-center gap-x-4 py-6">
            <small>All Rights Reserved &copy; 2023 {packageJson.title} - v{packageJson.version}</small>
        </footer>
    </div>
}

export default PageLayout;