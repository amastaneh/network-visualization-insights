import React from 'react';
import { Outlet } from 'react-router-dom';
import packageJson from "../../package.json";
import { browserHelper } from './../helper/browserHelper';

const svgMoon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 499.712 499.712" className="w-4 h-4">
    <path className="fill-yellow-300" d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88 C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712 C39.744,355.368,90.944,375.528,146.88,375.528z" />
    <path className="fill-yellow-400" d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256 c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256 C499.712,162.12,461.392,89.64,401.92,42.776z" />
    <g>
        <polygon className="fill-amber-300" points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296 128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4 	" />
        <polygon className="fill-amber-300" points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984 276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552 	" />
    </g>
</svg>
const svgSun = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" className="w-4 h-4">
    <g>
        <circle className="fill-amber-200" cx="255.997" cy="255.997" r="144.824" />
        <path className="fill-amber-200" d="M256,56.849c-4.273,0-7.737-3.463-7.737-7.737V7.737C248.263,3.463,251.727,0,256,0 s7.737,3.463,7.737,7.737v41.376C263.737,53.386,260.273,56.849,256,56.849z" />
        <path className="fill-amber-200" d="M152.563,84.568c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832 c-2.136-3.7-0.869-8.432,2.832-10.569c3.701-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569 C155.206,84.234,153.876,84.568,152.563,84.568z" />
        <path className="fill-amber-200" d="M76.823,160.294c-1.312,0-2.643-0.334-3.861-1.038L37.13,138.569 c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569 C82.097,158.907,79.497,160.294,76.823,160.294z" />
        <path className="fill-amber-200" d="M49.112,263.737H7.737C3.464,263.737,0,260.274,0,256s3.464-7.737,7.737-7.737h41.376 c4.273,0,7.737,3.463,7.737,7.737S53.385,263.737,49.112,263.737z" />
        <path className="fill-amber-200" d="M41.005,387.869c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569 l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687 C43.648,387.535,42.317,387.869,41.005,387.869z" />
        <path className="fill-amber-200" d="M131.862,478.74c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569 l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832 C137.136,477.352,134.536,478.74,131.862,478.74z" />
        <path className="fill-amber-200" d="M256,512c-4.273,0-7.737-3.463-7.737-7.737v-41.376c0-4.274,3.464-7.737,7.737-7.737 s7.737,3.463,7.737,7.737v41.376C263.737,508.537,260.273,512,256,512z" />
        <path className="fill-amber-200" d="M380.138,478.74c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832 c-2.136-3.7-0.869-8.432,2.832-10.569c3.7-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569 C382.781,478.406,381.451,478.74,380.138,478.74z" />
        <path className="fill-amber-200" d="M470.995,387.869c-1.312,0-2.643-0.334-3.861-1.038l-35.832-20.687 c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569 C476.269,386.481,473.669,387.869,470.995,387.869z" />
        <path className="fill-amber-200" d="M504.263,263.737h-41.376c-4.273,0-7.737-3.463-7.737-7.737s3.464-7.737,7.737-7.737h41.376 c4.273,0,7.737,3.463,7.737,7.737S508.536,263.737,504.263,263.737z" />
        <path className="fill-amber-200" d="M435.177,160.294c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569 l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687 C437.82,159.96,436.489,160.294,435.177,160.294z" />
        <path className="fill-amber-200" d="M359.437,84.568c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569 l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832 C364.711,83.181,362.11,84.568,359.437,84.568z" />
    </g>
    <path className="fill-amber-400" d="M256,111.18c-5.242,0-10.418,0.286-15.516,0.828c72.685,7.743,129.303,69.252,129.303,143.991 s-56.619,136.249-129.303,143.992c5.098,0.544,10.273,0.828,15.516,0.828c79.982,0,144.82-64.838,144.82-144.82 S335.983,111.18,256,111.18z" />
</svg>

const ButtonHamburger = ({ isOpen }) =>
    <svg className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`M4 6h16${isOpen ? 'M4 18h16' : 'M4 12h16m-7 6h7'}`}></path>
    </svg>

const ButtonDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(() => browserHelper.isDarkMode());

    React.useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () =>
        setIsDarkMode(!isDarkMode);

    return (
        <button
            className={`px-4 py-2 rounded-full focus:outline-none transition duration-300 ${isDarkMode ? "bg-gray-700 text-black" : "bg-gray-600 text-white"}`}
            onClick={toggleDarkMode}>
            {isDarkMode ? svgSun : svgMoon}
        </button>
    );
};



const PageLayout = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () =>
        setMobileMenuOpen(!isMobileMenuOpen);
    return <div className="flex flex-col min-h-screen bg-white text-slate-800 dark:bg-slate-800 dark:text-white">
        {/* Header menu */}
        <header className="px-4 bg-slate-800 text-white dark:bg-slate-800 dark:text-gray-300">
            <nav className="container mx-auto flex items-center justify-between py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <img src="/logo-light.png" alt="Logo" className="mr-2 h-10" />
                        Network Visualization Insights
                    </a>
                </div>
                {/* Desktop Menu items */}
                <div className="hidden md:flex items-center relative">
                    <a href="/" className="px-4 hover:text-blue-400 dark:hover:text-blue-400">Home</a>
                    {/* Dashboard Dropdown */}
                    <div className="group relative">
                        <button href="#" className="px-4 hover:text-blue-400 dark:hover:text-blue-400 focus:outline-none cursor-pointer">Dashboard</button>
                        <div className="absolute left-0 hidden group-hover:block bg-blue-900 dark:bg-slate-900 text-white dark:text-gray-400 z-10">
                            <a href="/gateway" className="block px-4 py-2 hover:bg-blue-700 dark:hover:bg-slate-700">Gateway Dashboard</a>
                            <a href="/regional" className="block px-4 py-2 hover:bg-blue-700 dark:hover:bg-slate-700">Regional Dashboard</a>
                        </div>
                    </div>
                    <a href="/signin" className="px-4 hover:text-blue-400 dark:hover:text-blue-400">Sign In</a>
                    {/* Dark Mode Toggle */}
                    <ButtonDarkMode />
                </div>
                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className="px-4 hover:text-blue-400 dark:hover:text-blue-400 focus:outline-none md:hidden">
                    <ButtonHamburger isOpen={isMobileMenuOpen} />
                </button>
            </nav>
            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="/" className="block px-4 py-2 hover:bg-blue-600">Home</a>
                {/* Dashboard Mobile Toggle */}
                <div>
                    <button href="#" className="block px-4 py-2 hover:bg-blue-600" onClick={(e) => e.preventDefault()}>Dashboard</button>
                    <div className="pl-4">
                        <a href="/regional" className="block px-4 py-2 hover:bg-blue-600">Regional Dashboard</a>
                        <a href="/gateway" className="block px-4 py-2 hover:bg-blue-600">Gateway Dashboard</a>
                    </div>
                </div>
                <a href="/signin" className="block px-4 py-2 hover:bg-blue-600">Sign In</a>
            </div>
        </header>

        <Outlet />

        {/* Footer section */}
        <footer className="text-xs flex flex-row justify-center gap-x-4 py-6 bg-slate-800 text-white dark:bg-slate-800 dark:text-gray-300">
            <small>Copyright &copy; 2023 {packageJson.title} - v{packageJson.version} All rights reserved.</small>
        </footer>

        {/* Tailwind CSS Reset */}
        <span className="bg-slate-50 bg-slate-100 bg-slate-200 bg-slate-300 bg-slate-400 bg-slate-500 bg-slate-600 bg-slate-700 bg-slate-800 bg-slate-900 bg-slate-950 bg-gray-50 bg-gray-100 bg-gray-200 bg-gray-300 bg-gray-400 bg-gray-500 bg-gray-600 bg-gray-700 bg-gray-800 bg-gray-900 bg-gray-950 bg-zinc-50 bg-zinc-100 bg-zinc-200 bg-zinc-300 bg-zinc-400 bg-zinc-500 bg-zinc-600 bg-zinc-700 bg-zinc-800 bg-zinc-900 bg-zinc-950 bg-neutral-50 bg-neutral-100 bg-neutral-200 bg-neutral-300 bg-neutral-400 bg-neutral-500 bg-neutral-600 bg-neutral-700 bg-neutral-800 bg-neutral-900 bg-neutral-950 bg-stone-50 bg-stone-100 bg-stone-200 bg-stone-300 bg-stone-400 bg-stone-500 bg-stone-600 bg-stone-700 bg-stone-800 bg-stone-900 bg-stone-950 bg-red-50 bg-red-100 bg-red-200 bg-red-300 bg-red-400 bg-red-500 bg-red-600 bg-red-700 bg-red-800 bg-red-900 bg-red-950 bg-orange-50 bg-orange-100 bg-orange-200 bg-orange-300 bg-orange-400 bg-orange-500 bg-orange-600 bg-orange-700 bg-orange-800 bg-orange-900 bg-orange-950 bg-amber-50 bg-amber-100 bg-amber-200 bg-amber-300 bg-amber-400 bg-amber-500 bg-amber-600 bg-amber-700 bg-amber-800 bg-amber-900 bg-amber-950 bg-yellow-50 bg-yellow-100 bg-yellow-200 bg-yellow-300 bg-yellow-400 bg-yellow-500 bg-yellow-600 bg-yellow-700 bg-yellow-800 bg-yellow-900 bg-yellow-950 bg-lime-50 bg-lime-100 bg-lime-200 bg-lime-300 bg-lime-400 bg-lime-500 bg-lime-600 bg-lime-700 bg-lime-800 bg-lime-900 bg-lime-950 bg-green-50 bg-green-100 bg-green-200 bg-green-300 bg-green-400 bg-green-500 bg-green-600 bg-green-700 bg-green-800 bg-green-900 bg-green-950 bg-emerald-50 bg-emerald-100 bg-emerald-200 bg-emerald-300 bg-emerald-400 bg-emerald-500 bg-emerald-600 bg-emerald-700 bg-emerald-800 bg-emerald-900 bg-emerald-950 bg-teal-50 bg-teal-100 bg-teal-200 bg-teal-300 bg-teal-400 bg-teal-500 bg-teal-600 bg-teal-700 bg-teal-800 bg-teal-900 bg-teal-950 bg-cyan-50 bg-cyan-100 bg-cyan-200 bg-cyan-300 bg-cyan-400 bg-cyan-500 bg-cyan-600 bg-cyan-700 bg-cyan-800 bg-cyan-900 bg-cyan-950 bg-sky-50 bg-sky-100 bg-sky-200 bg-sky-300 bg-sky-400 bg-sky-500 bg-sky-600 bg-sky-700 bg-sky-800 bg-sky-900 bg-sky-950 bg-blue-50 bg-blue-100 bg-blue-200 bg-blue-300 bg-blue-400 bg-blue-500 bg-blue-600 bg-blue-700 bg-blue-800 bg-blue-900 bg-blue-950 bg-indigo-50 bg-indigo-100 bg-indigo-200 bg-indigo-300 bg-indigo-400 bg-indigo-500 bg-indigo-600 bg-indigo-700 bg-indigo-800 bg-indigo-900 bg-indigo-950 bg-violet-50 bg-violet-100 bg-violet-200 bg-violet-300 bg-violet-400 bg-violet-500 bg-violet-600 bg-violet-700 bg-violet-800 bg-violet-900 bg-violet-950 bg-purple-50 bg-purple-100 bg-purple-200 bg-purple-300 bg-purple-400 bg-purple-500 bg-purple-600 bg-purple-700 bg-purple-800 bg-purple-900 bg-purple-950 bg-fuchsia-50 bg-fuchsia-100 bg-fuchsia-200 bg-fuchsia-300 bg-fuchsia-400 bg-fuchsia-500 bg-fuchsia-600 bg-fuchsia-700 bg-fuchsia-800 bg-fuchsia-900 bg-fuchsia-950 bg-pink-50 bg-pink-100 bg-pink-200 bg-pink-300 bg-pink-400 bg-pink-500 bg-pink-600 bg-pink-700 bg-pink-800 bg-pink-900 bg-pink-950 bg-rose-50 bg-rose-100 bg-rose-200 bg-rose-300 bg-rose-400 bg-rose-500 bg-rose-600 bg-rose-700 bg-rose-800 bg-rose-900 bg-rose-950"></span>
        <span className="text-slate-50 text-slate-100 text-slate-200 text-slate-300 text-slate-400 text-slate-500 text-slate-600 text-slate-700 text-slate-800 text-slate-900 text-slate-950 text-gray-50 text-gray-100 text-gray-200 text-gray-300 text-gray-400 text-gray-500 text-gray-600 text-gray-700 text-gray-800 text-gray-900 text-gray-950 text-zinc-50 text-zinc-100 text-zinc-200 text-zinc-300 text-zinc-400 text-zinc-500 text-zinc-600 text-zinc-700 text-zinc-800 text-zinc-900 text-zinc-950 text-neutral-50 text-neutral-100 text-neutral-200 text-neutral-300 text-neutral-400 text-neutral-500 text-neutral-600 text-neutral-700 text-neutral-800 text-neutral-900 text-neutral-950 text-stone-50 text-stone-100 text-stone-200 text-stone-300 text-stone-400 text-stone-500 text-stone-600 text-stone-700 text-stone-800 text-stone-900 text-stone-950 text-red-50 text-red-100 text-red-200 text-red-300 text-red-400 text-red-500 text-red-600 text-red-700 text-red-800 text-red-900 text-red-950 text-orange-50 text-orange-100 text-orange-200 text-orange-300 text-orange-400 text-orange-500 text-orange-600 text-orange-700 text-orange-800 text-orange-900 text-orange-950 text-amber-50 text-amber-100 text-amber-200 text-amber-300 text-amber-400 text-amber-500 text-amber-600 text-amber-700 text-amber-800 text-amber-900 text-amber-950 text-yellow-50 text-yellow-100 text-yellow-200 text-yellow-300 text-yellow-400 text-yellow-500 text-yellow-600 text-yellow-700 text-yellow-800 text-yellow-900 text-yellow-950 text-lime-50 text-lime-100 text-lime-200 text-lime-300 text-lime-400 text-lime-500 text-lime-600 text-lime-700 text-lime-800 text-lime-900 text-lime-950 text-green-50 text-green-100 text-green-200 text-green-300 text-green-400 text-green-500 text-green-600 text-green-700 text-green-800 text-green-900 text-green-950 text-emerald-50 text-emerald-100 text-emerald-200 text-emerald-300 text-emerald-400 text-emerald-500 text-emerald-600 text-emerald-700 text-emerald-800 text-emerald-900 text-emerald-950 text-teal-50 text-teal-100 text-teal-200 text-teal-300 text-teal-400 text-teal-500 text-teal-600 text-teal-700 text-teal-800 text-teal-900 text-teal-950 text-cyan-50 text-cyan-100 text-cyan-200 text-cyan-300 text-cyan-400 text-cyan-500 text-cyan-600 text-cyan-700 text-cyan-800 text-cyan-900 text-cyan-950 text-sky-50 text-sky-100 text-sky-200 text-sky-300 text-sky-400 text-sky-500 text-sky-600 text-sky-700 text-sky-800 text-sky-900 text-sky-950 text-blue-50 text-blue-100 text-blue-200 text-blue-300 text-blue-400 text-blue-500 text-blue-600 text-blue-700 text-blue-800 text-blue-900 text-blue-950 text-indigo-50 text-indigo-100 text-indigo-200 text-indigo-300 text-indigo-400 text-indigo-500 text-indigo-600 text-indigo-700 text-indigo-800 text-indigo-900 text-indigo-950 text-violet-50 text-violet-100 text-violet-200 text-violet-300 text-violet-400 text-violet-500 text-violet-600 text-violet-700 text-violet-800 text-violet-900 text-violet-950 text-purple-50 text-purple-100 text-purple-200 text-purple-300 text-purple-400 text-purple-500 text-purple-600 text-purple-700 text-purple-800 text-purple-900 text-purple-950 text-fuchsia-50 text-fuchsia-100 text-fuchsia-200 text-fuchsia-300 text-fuchsia-400 text-fuchsia-500 text-fuchsia-600 text-fuchsia-700 text-fuchsia-800 text-fuchsia-900 text-fuchsia-950 text-pink-50 text-pink-100 text-pink-200 text-pink-300 text-pink-400 text-pink-500 text-pink-600 text-pink-700 text-pink-800 text-pink-900 text-pink-950 text-rose-50 text-rose-100 text-rose-200 text-rose-300 text-rose-400 text-rose-500 text-rose-600 text-rose-700 text-rose-800 text-rose-900 text-rose-950"></span>
    </div>
}

export default PageLayout;