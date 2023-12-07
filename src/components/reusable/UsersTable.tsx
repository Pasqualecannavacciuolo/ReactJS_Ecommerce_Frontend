import {
    ChevronLeftIcon,
    ChevronRightIcon,
    EyeIcon,
    PencilSquareIcon,
    TrashIcon,
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
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

interface TableItem {
    id: number,
    firstname: string,
    lastname: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
}

/*const data: TableItem[] = [
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
];*/

function UsersTable() {
    // TODO => Da aggiornare con la response del backend al route 'users/count'
    // Variabili che servono a far funzionare la tabella
    const elementsInEachPage: number = 7;
    const [pageCounter, setPageCounter] = useState(1);
    // Variabili che prendono dati dal Database
    const [pageData, setPageData] = useState<TableItem[]>([]);
    const [allDataFromUsers, setAllDataFromUsers] = useState<TableItem[]>([]);
    // Variabili per effettuare la ricerca globale
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredAllData, setFilteredAllData] = useState<TableItem[]>([]);
    const [totalRecords, setTotalRecords] = useState(0);

    useEffect(() => {
        // Ottengo il numero totale dei record presenti nella tabella
        axios.get(`http://localhost:8080/users/count`).then((res) => {
            if (res.status === 422) return;
            setTotalRecords(parseInt(res.data.count));
        });
        // Ottengo i dati da visualizzare nella prima pagina della tabella
        axios.get(`http://localhost:8080/users/elementi?pagina=${pageCounter}`).then((res) => {
            setPageData(res.data);
        });
        // Ottengo i dati per effettuare la ricerca globale
        axios.get(`http://localhost:8080/users`).then((res) => {
            if (res.status === 422) return;
            setAllDataFromUsers(res.data);
        });
    }, [totalRecords, pageCounter]);

    // Controllo la paginazione in avanti
    const paginationUp = () => {
        const tmpCounter = pageCounter + 1;
        const maxPages = Math.round(totalRecords / elementsInEachPage);
        if (tmpCounter <= maxPages) {
            axios.get(`http://localhost:8080/users/elementi?pagina=${tmpCounter}`).then((res) => {
                if (res.status === 422) return;
                setPageCounter(pageCounter + 1);
                setPageData(res.data);
            });
        }
    };

    // Controllo la paginazione a ritroso
    const paginationDown = () => {
        if (pageCounter === 1) return;
        setPageCounter(pageCounter - 1);
        axios.get(`http://localhost:8080/users/elementi?pagina=${pageCounter}`).then((res) => {
            setPageData(res.data);
        });
    };

    // Implemento la ricerca
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filteredAllData = allDataFromUsers.filter((item) =>
            // Effettuo la ricerca su questi campi
            item.id.toString().includes(query.toLowerCase()) ||
            item.firstname.toLowerCase().includes(query.toLowerCase()) ||
            item.lastname.toLowerCase().includes(query.toLowerCase()) ||
            item.email.toLowerCase().includes(query.toLowerCase())
        );
        // Restituisco il risultato della ricerca
        setFilteredAllData(filteredAllData);
    };

    // Gestisco i dati da visualizzare in base alla query di ricerca
    const dataToRender = searchQuery ? filteredAllData : pageData;

    return (
        <Card className="h-full flex flex-col relative">
            <div className="flex">
                <div className="flex flex-col w-2/3">
                    <h1 className="font-semibold text-xl">Utenti totali</h1>
                    <CardDescription>Tabella che mostra tutti gli utenti registrati</CardDescription>
                </div>
                <div className="flex w-1/3 gap-1">
                    <Link to={"/creaUtente"}><Button className="bg-primary">Crea utente</Button></Link>
                    <Input
                        className="flex justify-end ring-gray-300 placeholder:text-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        type="text"
                        placeholder="Cerca..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
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
                        {dataToRender.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="text-primary">{item.id}</TableCell>
                                <TableCell className="text-primary">{item.firstname}</TableCell>
                                <TableCell className="text-primary">{item.lastname}</TableCell>
                                <TableCell className="text-primary">{item.age}</TableCell>
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