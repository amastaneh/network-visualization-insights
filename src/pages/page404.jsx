const Page404 = () => (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 text-center px-6 py-24 sm:py-32 lg:px-8">
        <p className="text-5xl font-semibold text-neutral-700">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-neutral-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" className="rounded-md bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800">Go back home</a>
            <a href="/" className="text-sm font-semibold text-neutral-900">Contact support <span aria-hidden="true">&rarr;</span></a>
        </div>
    </main>
);

export default Page404;