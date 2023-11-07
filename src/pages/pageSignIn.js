import React from "react"
import ComTailwindReset from './../components/comTailwindReset';

const PageSignIn = () => {
    const [datasets, setDatasets] = React.useState({})

    const handleChange = (event) =>
        setDatasets({ ...datasets, [event.target.name]: event.target.value })

    const handleSubmit = (event) => {
        event.preventDefault()
        window.location.href = "/gateways"
    }

    return <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-25 w-auto" src="/logo.png" alt="Network Visualization Insights" />
            <h2 className="text-center text-lg font-bold leading-9 tracking-tight">Network Visualization Insights</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                        <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="text-sm">
                            <a href="/" className="font-semibold text-slate-600 hover:text-slate-500">Forgot password?</a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                        onClick={handleSubmit}
                    >Sign in</button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member? <a href="/" className="font-semibold leading-6 text-slate-600 hover:text-slate-500">Start a 14 day free trial</a>
            </p>
        </div>
        <ComTailwindReset />
    </div>
}

export default PageSignIn