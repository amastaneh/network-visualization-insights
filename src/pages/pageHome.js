import React from "react";
import Lottie from 'react-lottie';
import LottieNetwork from './../assets/network.json';
import packageJson from "../../package.json";

const HamburgerIcon = ({ isOpen }) =>
    <svg className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`M4 6h16${isOpen ? 'M4 18h16' : 'M4 12h16m-7 6h7'}`}></path>
    </svg>


const PageHome = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieNetwork,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const toggleMobileMenu = () =>
        setMobileMenuOpen(!isMobileMenuOpen);


    return (
        <div className="flex flex-col min-h-screen">
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


            {/* Hero section */}
            <section className="bg-white px-4 py-10 md:py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full mb-8">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Network Visualization Insights</h1>
                        <p className="text-base md:text-xl mb-8">Capture, visualize, and control your network's gateways with ease. Embrace a platform that adapts to your evolving telecom, network, and 5G needs, simplifying complexity with intuitive visualization insights.</p>
                        <a href="/gateways" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dashboard</a>
                    </div>
                    <div className="w-full">
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
                </div>
            </section>

            {/* Highlight sections */}
            <section className="bg-blue-100 px-4 py-10 md:py-20">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services</h2>
                    <div className="flex flex-col md:flex-row md:-mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Regional Dashboard</h3>
                            <p className="text-base md:text-lg mb-4">Explore network performance by region with dynamic data visualizations of strength, usage, and DL/UL reports. Empower your decision-making with insights on map.</p>
                            <a href="/regional" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Gateway Dashboard</h3>
                            <p className="text-base md:text-lg mb-4">Streamline your gateways' oversight with city-specific maps. Monitor health, traffic, and 5G efficiency to maintain seamless connectivity and robust network infrastructure.</p>
                            <a href="/gateways" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer section */}
            <footer className="bg-blue-700 text-xs text-gray-400 flex flex-row justify-center gap-x-4 py-6">
                <small>All Rights Reserved &copy; 2023 {packageJson.title} - v{packageJson.version}</small>
            </footer>
        </div>
    );
};


export default PageHome