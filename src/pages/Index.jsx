/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { get_clientes } from "../data/cliente";
import TablaClientes from "../components/TablaClientes";
import { isValidArray } from "../helpers";


// se importa en el routes-pages para la carga de datos (como un hook)
export function loader() {
    const clientes = get_clientes();
    return clientes;
}

function Index() {
    // data que se carga desde el loader
    const data = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-slate-800">Clientes</h1>
            <p className="mt-3">administra tus clientes</p>

            {
                isValidArray(data) ? (<TablaClientes th={['Clientes', 'Contacto', 'Acciones']} data={data} />): (<p className="text-center mt-10 text-xl">No hay clientes</p>) 
            }
        </>
    );
}

export default Index;
