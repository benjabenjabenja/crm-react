import { useLoaderData } from "react-router-dom";
import TablaClientes from "../components/TablaClientes";
import { isValidArray } from "../helpers";


// se importa en el routes-pages para la carga de datos (como un hook)
export function loader() {
    return [
        {
            id: 1,
            nombre: "Juan",
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: "Codigo Con Juan",
        },
        {
            id: 2,
            nombre: "Karen",
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: "Codigo Con Juan",
        },
        {
            id: 3,
            nombre: "Josue",
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: "Codigo Con Juan",
        },
        {
            id: 4,
            nombre: "Miguel",
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: "Codigo Con Juan",
        },
        {
            id: 5,
            nombre: "Pedro",
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: "Codigo Con Juan",
        },
    ];
}

function Index() {
    // data que se carga desde el loader
    const data = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-slate-800">Clientes</h1>
            <p className="mt-3">administra tus clientes</p>

            {
                isValidArray(data) ? (<TablaClientes clientes={data} />): (<p className="text-center mt-10 text-xl">No hay clientes</p>) 
            }
        </>
    );
}

export default Index;
