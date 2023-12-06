import {
    RocketLaunchIcon,
    CubeIcon,
    ArchiveBoxArrowDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/outline";
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
} from "@tremor/react";
import { ForwardRefExoticComponent, RefAttributes, SVGProps, useEffect, useState } from "react";

const data: TableItem[] = [
    {
        codice: "SKU001",
        data: "01-01-2023",
        importo: 366,
        status: "consegnato",
        color: "emerald",
        icon: ArchiveBoxArrowDownIcon
    },
    {
        codice: "SKU002",
        data: "02-02-2023",
        importo: 213,
        status: "spedito",
        color: "orange",
        icon: RocketLaunchIcon
    },
    {
        codice: "SKU003",
        data: "03-03-2023",
        importo: 450,
        status: "ricevuto",
        color: "gray",
        icon: CubeIcon
    },
    {
        codice: "SKU004",
        data: "04-12-2023",
        importo: 213,
        status: "spedito",
        color: "orange",
        icon: RocketLaunchIcon
    },
    {
        codice: "SKU005",
        data: "13-02-2023",
        importo: 213,
        status: "spedito",
        color: "orange",
        icon: RocketLaunchIcon
    },
];

const data2: TableItem[] = [
    {
        codice: "SKU001",
        data: "01-01-2023",
        importo: 366,
        status: "annullato",
        color: "red",
        icon: ArchiveBoxArrowDownIcon
    },
    {
        codice: "SKU002",
        data: "02-02-2023",
        importo: 213,
        status: "annullato",
        color: "red",
        icon: RocketLaunchIcon
    },
];

interface TableItem {
    codice: string,
    data: string,
    importo: number,
    status: string,
    color: string
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>,
}

function TableStats() {
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
    return (
        <Card className="h-full flex flex-col relative">
            <h1 className="font-semibold text-xl">Ordini recenti</h1>
            <div className="flex-1 overflow-y-auto">
                <Table className="mt-5">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Cod. Ordine</TableHeaderCell>
                            <TableHeaderCell>Data</TableHeaderCell>
                            <TableHeaderCell>Importo</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="pb-10">
                        {pageData.map((item) => (
                            <TableRow key={item.codice}>
                                <TableCell className="text-primary">{item.codice}</TableCell>
                                <TableCell className="text-primary">{item.data}</TableCell>
                                <TableCell>
                                    <Text className="text-primary">{item.importo}€</Text>
                                </TableCell>
                                <TableCell>
                                    <Badge color={item.color} icon={item.icon}>
                                        {item.status}
                                    </Badge>
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
    );
}

export default TableStats;
