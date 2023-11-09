import React from "react";
import Lottie from 'react-lottie';
import LottieNetwork from './../assets/network.json';

const PageHome = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieNetwork,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return <>
        {/* Hero section */}
        <section className="px-4 py-10 md:py-20 bg-gray-100 text-gray-800 dark:bg-gray-400 dark:text-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="w-full mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Network Visualization Insights</h1>
                    <p className="text-base md:text-xl mb-8">Capture, visualize, and control your network's gateways with ease. Embrace a platform that adapts to your evolving telecom, network, and 5G needs, simplifying complexity with intuitive visualization insights.</p>
                    <a href="/gateway" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dashboard</a>
                </div>
                <div className="w-full">
                    <Lottie options={defaultOptions} height={400} width={400} />
                </div>
            </div>
        </section>

        {/* Highlight sections */}
        <section className="px-4 py-10 md:py-20 bg-blue-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
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
                        <a href="/gateway" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}


export default PageHome