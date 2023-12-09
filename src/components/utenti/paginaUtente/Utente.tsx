import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import TableStats from "@/components/home/TableStats";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { cn } from "@/lib/utils";
import { CreditCardIcon, DocumentTextIcon, BanknotesIcon } from "@heroicons/react/20/solid";

interface User {
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

// Dati mockati in attesa di implementarli con il database
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Pagato",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "In attesa",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Non pagato",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Pagato",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Pagato",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "In attesa",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Non pagato",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

function Utente() {
    // Ottengo i parametri dal path
    const params = useParams();
    // Dai parametri ottengo l'ID
    const id = params.userId;

    const [user, setUser] = useState<User>();

    // All'inizializzazione del componente ottengo l'utente dal Database
    useEffect(() => {
        axios.get<User>(`http://localhost:8080/users/${id}`).then(res => {
            setUser(res.data);
        });
    }, [id]);

    return (
        <>
            <h1 className="text-2xl font-bold mb-10">Dettaglio per {user?.username}</h1>
            {/* GRIGLIA DEL GRAFICO E DEGLI ORDINI RECENTI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-4">
                <Card className="flex h-full p-5">
                    <div>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-primary">Informazioni utente</h3>
                            {/* TODO => OTTENERE QUESTI TAG DAL BACKEND */}
                            <div className="flex gap-1 mt-3">
                                <Badge className="bg-emerald-200 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-900">Ottimo acquirente</Badge>
                                <Badge className="bg-emerald-200 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-900">Acquisti ricorrenti</Badge>
                                <Badge className="bg-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900">Nuovo utente</Badge>
                            </div>
                        </div>
                        <div className="mt-1">
                            <dl className="divide-y divide-gray-100">
                                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-bold leading-6 text-primary">Nome</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.firstname}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-bold leading-6 text-primary">Cognome</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.lastname}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-bold leading-6 text-primary">Sesso</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.gender}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-bold leading-6 text-primary">Email</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.email}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-bold leading-6 text-primary">Cellulare</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.phone}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-bold leading-6 text-primary">Eta'</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.age}</dd>
                                </div>
                            </dl>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <Button className="bg-primary">Modifica</Button>
                            </div>
                        </div>
                    </div>

                </Card>
                <TableStats />
            </div>
            <Card className="flex flex-col h-full p-5">
                <h1 className="mt-5 mb-5 text-xl font-bold text-primary">Fatture</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Codice</TableHead>
                            <TableHead>Stato</TableHead>
                            <TableHead>Metodo</TableHead>
                            <TableHead className="text-right">Totale</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="flex items-center gap-3 font-medium">
                                    <DocumentTextIcon className="w-5 h-5" />
                                    {invoice.invoice}
                                </TableCell>
                                <TableCell>
                                    {/* DEFINISCO IL COLORE PER I VARI BADGE IN BASE ALLO STATO DELLA FATTURA */}
                                    <Badge className={cn({
                                        "bg-red-300 text-red-700 text-bold": invoice.paymentStatus.toLowerCase() == "non pagato",
                                        "bg-emerald-300 text-emerald-700 text-bold": invoice.paymentStatus.toLowerCase() == "pagato",
                                        "bg-amber-300 text-amber-700 text-bold": invoice.paymentStatus.toLowerCase() == "in attesa"
                                    })}>
                                        {invoice.paymentStatus}
                                    </Badge>
                                </TableCell>
                                <TableCell className="flex items-center gap-3">
                                    {invoice.paymentMethod.toLowerCase() === "credit card" && <CreditCardIcon className="w-5 h-5" />}
                                    {invoice.paymentMethod.toLowerCase() === "paypal" && <CreditCardIcon className="w-5 h-5" />}
                                    {invoice.paymentMethod.toLowerCase() === "bank transfer" && <BanknotesIcon className="w-5 h-5" />}
                                    {invoice.paymentMethod}
                                </TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Totale</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Card>
        </>
    )
}

export default Utente