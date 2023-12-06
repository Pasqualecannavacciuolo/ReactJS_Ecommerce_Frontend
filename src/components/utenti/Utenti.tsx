import UsersTable from "../reusable/UsersTable"

function Utenti() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-10">Utenti</h1>
            {/* GRIGLIA DEL GRAFICO E DEGLI ORDINI RECENTI */}
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center justify-center h-full">
                    <UsersTable />
                </div>
            </div>
        </>
    )
}

export default Utenti