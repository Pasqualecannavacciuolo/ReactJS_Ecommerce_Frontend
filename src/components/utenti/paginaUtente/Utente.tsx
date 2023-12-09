import TableStats from "@/components/home/TableStats";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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
                            <h1 className="font-semibold text-xl">Informazioni dettagliate</h1>
                        </div>
                        <div className="mt-6">
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                        </div>
                    </div>

                </Card>
                <TableStats />
            </div>
        </>
    )
}

export default Utente