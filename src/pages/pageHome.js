import React from "react";

const PageHome = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header menu */}
            <header className="bg-gray-900 text-white">
                <nav className="container mx-auto flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <a href="/" className="font-bold text-xl">My Website</a>
                    </div>
                    <div className="flex items-center">
                        <a href="/" className="px-4 hover:text-gray-400">Home</a>
                        <a href="/about" className="px-4 hover:text-gray-400">About</a>
                        <a href="/contact" className="px-4 hover:text-gray-400">Contact</a>
                    </div>
                </nav>
            </header>

            {/* Hero section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
                    <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, nunc elit bibendum sapien, vel bibendum sapien elit vel sapien.</p>
                    <a href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
                </div>
            </section>

            {/* Highlight sections */}
            <section className="bg-white py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <h3 className="text-2xl font-bold mb-4">Service 1</h3>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, nunc elit bibendum sapien, vel bibendum sapien elit vel sapien.</p>
                            <a href="/" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <h3 className="text-2xl font-bold mb-4">Service 2</h3>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, nunc elit bibendum sapien, vel bibendum sapien elit vel sapien.</p>
                            <a href="/" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Our Team</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Person 1</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, nunc elit bibendum sapien, vel bibendum sapien elit vel sapien.</p>
                                <a href="/" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Person 2</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, nunc elit bibendum sapien, vel bibendum sapien elit vel sapien.</p>
                                <a href="/" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Person 3</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, nunc elit bibendum sapien, vel bibendum sapien elit vel sapien.</p>
                                <a href="/" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default PageHome;