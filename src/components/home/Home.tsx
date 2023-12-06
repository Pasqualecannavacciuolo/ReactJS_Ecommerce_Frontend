import CardStats from "../reusable/CardStats";
import { UsersIcon, ArchiveBoxIcon, CurrencyEuroIcon } from "@heroicons/react/24/outline";
import ChartStats from "../reusable/ChartStats";
import TableStats from "../reusable/TableStats";
function Home() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
            {/* GRIGLIA DELLE 3 STATISTICHE IN EVIDENZA */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-4">
                <div className="flex justify-start h-full">
                    <CardStats
                        title={"Fatturato"}
                        subtitle={"€"}
                        value={65366.89}
                        description={"+20% Rispetto allo scorso anno"}
                        icon={<CurrencyEuroIcon />}
                    />
                </div>
                <div className="flex justify-center h-full">
                    <CardStats
                        title={"Utenti registrati"}
                        subtitle={"+"}
                        value={147}
                        description={"+3.4% Rispetto al mese scorso"}
                        icon={<UsersIcon />}
                    />
                </div>
                <div className="flex justify-end h-full">
                    <CardStats
                        title={"Ordini"}
                        subtitle={"+"}
                        value={126}
                        description={"+2% Rispetto alla scorsa settimana"}
                        icon={<ArchiveBoxIcon />}
                    />
                </div>
                {/* Aggiungi altri elementi se necessario */}
            </div>

            {/* GRIGLIA DEL GRAFICO E DEGLI ORDINI RECENTI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center h-full">
                    <ChartStats />
                </div>
                <div className="flex items-center justify-center h-full">
                    <TableStats />
                </div>
            </div>
        </>
    );
}

export default Home;
