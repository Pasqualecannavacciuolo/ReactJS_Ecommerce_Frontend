import { BarChart, Card } from "@tremor/react";

const chartdata = [
    {
        name: "Gennaio",
        "Numero di ordini": 2488,
    },
    {
        name: "Febbraio",
        "Numero di ordini": 1445,
    },
    {
        name: "Marzo",
        "Numero di ordini": 743,
    },
    {
        name: "Aprile",
        "Numero di ordini": 874,
    },
    {
        name: "Maggio",
        "Numero di ordini": 251,
    },
    {
        name: "Giugno",
        "Numero di ordini": 232,
    },
    {
        name: "Luglio",
        "Numero di ordini": 98,
    },
    {
        name: "Agosto",
        "Numero di ordini": 147,
    },
    {
        name: "Settembre",
        "Numero di ordini": 156,
    },
    {
        name: "Ottobre",
        "Numero di ordini": 98,
    },
    {
        name: "Novembre",
        "Numero di ordini": 472,
    },
    {
        name: "Dicembre",
        "Numero di ordini": 368,
    },
];

function ChartStats() {
    return (
        <Card className="h-full">
            <h1 className="font-semibold text-xl">Totale degli ordini per il 2023</h1>
            <p className="text-zinc-400">
                Questo grafico mostra l'andamento degli ordini durante l'anno.
            </p>
            <BarChart
                className="mt-6"
                data={chartdata}
                index="name"
                categories={["Numero di ordini"]}
                colors={["green"]}
                yAxisWidth={48}
            />
        </Card>
    )
}

export default ChartStats