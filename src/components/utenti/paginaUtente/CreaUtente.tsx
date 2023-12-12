import { useToast } from "@/components/ui/use-toast";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios";

const createUserSchema = z.object({
    firstname: z.string().min(2, "Il nome e' obbligatorio").max(100),
    lastname: z.string().min(2, "Il cognome e' obbligatorio").max(100),
    age: z.string().min(2, "L'eta' e' obbligatoria").max(3),
    gender: z.enum(["Altro", "Uomo", "Donna"]),
    email: z.string().min(2, "L'email e' obbligatoria").max(100),
    phone: z.string().min(1, "Il contatto telefonico e' obbligatorio").max(10),
    password: z.string().min(10, "La password deve essere lunga almeno 10 caratteri").max(50),
    birthDate: z.string(),
    image: z.string(),
})

function CreaUtente() {
    const { toast } = useToast();

    // 1. Definisco il form.
    const form = useForm<z.infer<typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            age: "",
            gender: "Altro",
            email: "",
            phone: "",
            password: "",
            birthDate: "",
            image: "",
        },
    });

    // 2. Definisco un handler per il Submit.
    async function onSubmit(values: z.infer<typeof createUserSchema>) {
        // Creo l'utente nel database con i dati ottenuti dal form
        // ✅ Questi valori saranno validati e pronti per essere caricati
        try {
            await axios.post("http://localhost:8080/users", values).then(res => {
                toast({
                    title: "✅ " + res.statusText,
                    description: "Utente creato correttamente",
                });
            });
        } catch (error) {
            toast({
                title: "🔴 Errore durante l'esecuzione",
                description: "Non ho potuto eseguire la richiesta",
            });
        }
    }
    return (
        <>
            <h1 className="text-2xl font-bold mb-10">Crea utente</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto px-10">
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci il nome" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cognome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci il cognome" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Eta</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci l' eta'" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sesso</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selezione il sesso" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Altro">Altro</SelectItem>
                                        <SelectItem value="Uomo">Uomo</SelectItem>
                                        <SelectItem value="Donna">Donna</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci l' email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefono</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci un contatto telefonico" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci un contatto telefonico" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Data di nascita</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci un contatto telefonico" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Immagine profilo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Inserisci un contatto telefonico" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default CreaUtente