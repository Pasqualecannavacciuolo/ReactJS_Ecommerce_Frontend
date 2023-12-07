import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Pagina non trovata</h1>
                <p className="mt-6 text-base leading-7 text-slate-600">Ci dispiace ma non abbiamo potuto trovare la pagina che cerchi.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to={"/"}
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Ritorna alla home
                    </Link>
                    <a href="#" className="text-sm font-semibold text-slate-900">
                        Contatta il supporto <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default NotFound