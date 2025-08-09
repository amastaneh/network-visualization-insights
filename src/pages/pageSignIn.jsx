import React from "react";

const PageSignIn = () => {
    const [datasets, setDatasets] = React.useState({});

    const handleChange = (event) =>
        setDatasets({ ...datasets, [event.target.name]: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/dut";
    };

    return (
        <div className="flex min-h-screen flex-col justify-center bg-neutral-50 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-24 w-auto" src="/logo.png" alt="Network Visualization Insights" />
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900">Email address</label>
                        <div className="mt-2">
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6 ps-3"
                                defaultValue="demo@example.com"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900">Password</label>
                            <div className="text-sm">
                                <a href="/" className="font-semibold text-neutral-600 hover:text-neutral-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6 ps-3"
                                defaultValue="Demo@123"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-neutral-500">
                    Not a member? <a href="/" className="font-semibold leading-6 text-neutral-600 hover:text-neutral-500">Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    );
};

export default PageSignIn;