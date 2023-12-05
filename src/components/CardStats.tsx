import { ReactNode } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

function CardStats({ title, subtitle, value, description, icon }: { title: string, subtitle: string, value: number, description: string, icon: ReactNode }) {
    return (
        <Card className="w-full h-auto sm:w-full md:w-full lg:w-full xl:w-[450px]">
            <CardHeader>
                <div className="mb-3 flex justify-between gap-3 items-center">
                    <CardTitle className="md:text-sm text-xl font-normal xl:text-xl justify-start">{title}</CardTitle>
                    <div className="flex flex-row items-center justify-between gap-1">
                        <div className="md:h-4 md:w-4 h-6 w-6 xl:h-7 xl:w-7">
                            {icon}
                        </div>
                    </div>
                </div>
                <CardTitle className="md:text-sm text-xl font-bold xl:text-xl justify-start">{subtitle} {value}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default CardStats