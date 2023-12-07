import {
    ChevronLeftIcon,
    ChevronRightIcon,
    EyeIcon,
    PencilSquareIcon,
    TrashIcon
} from "@heroicons/react/20/solid";
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from "@tremor/react";
import { useEffect, useState } from "react";
import { CardDescription } from "../ui/card";
import { Input } from "../ui/input";

interface TableItem {
    id: string,
    nome: string
    cognome: string
    eta: number
    email: string
}

const data: TableItem[] = [
    {
        id: "001",
        nome: "Pasquale",
        cognome: "Cannavacciuolo",
        eta: 26,
        email: "p.cannavacciuolo@icloud.com"
    },
    {
        id: "002",
        nome: "Davide",
        cognome: "Cannavacciuolo",
        eta: 16,
        email: "dxel08@icloud.com"
    },
    {
        id: "003",
        nome: "Michele",
        cognome: "Cannavacciuolo",
        eta: 53,
        email: "m.cannavacciuolo@icloud.com"
    },
    {
        id: "004",
        nome: "Gennarina",
        cognome: "Campagnuolo",
        eta: 55,
        email: "m.campagnuolo@gmail.com"
    },
    {
        id: "005",
        nome: "John",
        cognome: "Wick",
        eta: 48,
        email: "j.wick@email.com"
    },
    {
        id: "006",
        nome: "Jason",
        cognome: "Statham",
        eta: 56,
        email: "j.stat@email.com"
    },
];
const data2: TableItem[] = [
    {
        id: "007",
        nome: "Pasquale",
        cognome: "Cannavacciuolo",
        eta: 26,
        email: "p.cannavacciuolo@icloud.com"
    },
    {
        id: "008",
        nome: "Davide",
        cognome: "Cannavacciuolo",
        eta: 16,
        email: "dxel08@icloud.com"
    },
    {
        id: "009",
        nome: "Michele",
        cognome: "Cannavacciuolo",
        eta: 53,
        email: "m.cannavacciuolo@icloud.com"
    },
    {
        id: "010",
        nome: "Gennarina",
        cognome: "Campagnuolo",
        eta: 55,
        email: "m.campagnuolo@gmail.com"
    },
    {
        id: "011",
        nome: "John",
        cognome: "Wick",
        eta: 48,
        email: "j.wick@email.com"
    },
    {
        id: "012",
        nome: "Jason",
        cognome: "Statham",
        eta: 56,
        email: "j.stat@email.com"
    },
];

function UsersTable() {

    const [pageCounter, setPageCounter] = useState(1);
    const [pageData, setPageData] = useState<TableItem[]>([]);

    // All'avvio inizializzo i dati
    useEffect(() => {
        setPageData(data);
    }, []);

    // Funzione che controlla l'incremento della paginazione
    const paginationUp = () => {
        if (pageCounter == 2) {
            return;
        }
        setPageCounter(pageCounter + 1);
        setPageData(data2);
    }

    // Funzione che controlla il decremento della paginazione
    const paginationDown = () => {
        if (pageCounter == 1) {
            return;
        }
        setPageCounter(pageCounter - 1);
        setPageData(data);
    }

    // Implemento la ricerca
    const [searchQuery, setSearchQuery] = useState("");
    const filteredData = pageData.filter((item) =>
        item.id.includes(searchQuery) ||
        item.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.cognome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Card className="h-full flex flex-col relative">
            <div className="flex">
                <div className="flex flex-col w-2/3">
                    <h1 className="font-semibold text-xl">Utenti totali</h1>
                    <CardDescription>Tabella che mostra tutti gli utenti registrati</CardDescription>
                </div>
                <Input
                    className="flex justify-end w-1/3 ring-gray-300 placeholder:text-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Cerca..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Table className="mt-5">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell className="text-zinc-900 font-bold">ID</TableHeaderCell>
                            <TableHeaderCell className="text-zinc-900 font-bold">Nome</TableHeaderCell>
                            <TableHeaderCell className="text-zinc-900 font-bold">Cognome</TableHeaderCell>
                            <TableHeaderCell className="text-zinc-900 font-bold">Eta'</TableHeaderCell>
                            <TableHeaderCell className="text-zinc-900 font-bold">Email</TableHeaderCell>
                            <TableHeaderCell className="text-zinc-900 font-bold">Operazioni</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="pb-10">
                        {filteredData.length == 0 ?
                            /* CASO IN CUI NON E' STATO SCRITTO QUALCOSA NELLA BARRA DI RICERCA */
                            pageData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="text-primary">{item.id}</TableCell>
                                    <TableCell className="text-primary">{item.nome}</TableCell>
                                    <TableCell className="text-primary">{item.cognome}</TableCell>
                                    <TableCell className="text-primary">{item.eta}</TableCell>
                                    <TableCell className="text-primary">{item.email}</TableCell>
                                    <TableCell className="text-primary flex gap-1">
                                        <a href="#visualizza">
                                            <EyeIcon className="h-6 w-6" />
                                        </a>
                                        <a href="#modifica">
                                            <PencilSquareIcon className="h-6 w-6" />
                                        </a>
                                        <a href="#cancella">
                                            <TrashIcon className="h-6 w-6" />
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))
                            /* CASO IN CUI E' STATO SCRITTO QUALCOSA NELLA BARRA DI RICERCA */
                            : filteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="text-primary">{item.id}</TableCell>
                                    <TableCell className="text-primary">{item.nome}</TableCell>
                                    <TableCell className="text-primary">{item.cognome}</TableCell>
                                    <TableCell className="text-primary">{item.eta}</TableCell>
                                    <TableCell className="text-primary">{item.email}</TableCell>
                                    <TableCell className="text-primary flex gap-1">
                                        <a href="#visualizza" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                            <EyeIcon className="flex-shrink-0 w-5 h-5 text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        </a>
                                        <a href="#modifica" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                            <PencilSquareIcon className="flex-shrink-0 w-5 h-5 text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        </a>
                                        <a href="#cancella" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                            <TrashIcon className="flex-shrink-0 w-5 h-5 text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                {/* Per spostare la paginazione a sinistra sostituire right-0 con left-0 */}
                <div className="absolute bottom-0 right-0 border-none p-3">
                    <div className="flex justify-items-end">
                        <button onClick={() => paginationDown()}>
                            <ChevronLeftIcon className="h-4 w-4" />
                        </button>
                        <p className="text-sm">{pageCounter}</p>
                        <button onClick={() => paginationUp()}>
                            <ChevronRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default UsersTable