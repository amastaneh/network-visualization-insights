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
    };

    return (
        <>
            {/* Hero section */}
            <section className="px-4 py-20 text-neutral-800">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Network Visualization Insights</h1>
                        <p className="text-lg text-neutral-600 mb-8">Capture, visualize, and control your network's DUTs with ease. Embrace a platform that adapts to your evolving telecom, network, and 5G needs, simplifying complexity with intuitive visualization insights.</p>
                        <a href="/dut" className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-6 rounded-lg text-lg">Open Dashboard</a>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
                </div>
            </section>

            {/* Highlight sections */}
            <section className="px-4 py-20 bg-neutral-100 text-neutral-800">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-md mb-8 md:mb-0">
                            <h3 className="text-2xl font-bold mb-4">Regional Dashboard</h3>
                            <p className="text-neutral-600 mb-4">Explore network performance by region with dynamic data visualizations of strength, usage, and DL/UL reports. Empower your decision-making with insights on map.</p>
                            <a href="/regional" className="text-neutral-800 hover:text-neutral-600 font-bold">Get Started &rarr;</a>
                        </div>
                        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">DUT Dashboard</h3>
                            <p className="text-neutral-600 mb-4">Streamline your DUTs' oversight with city-specific maps. Monitor health, traffic, and 5G efficiency to maintain seamless connectivity and robust network infrastructure.</p>
                            <a href="/dut" className="text-neutral-800 hover:text-neutral-600 font-bold">Get Started &rarr;</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageHome;