/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { get_cliente_by_id } from "../data/cliente";
import { isValidObject } from "../helpers";

export async function loader(params) {
    const { id } = params.params;
    const client = await get_cliente_by_id(id); 
    if (isValidObject(client)) throw new Response('', {
        status: 400,
        statusText: 'ERROR - Invalid service response'
    });
    return client;
}
const EditarCliente = () => {
    const cliente = useLoaderData();

    return (
        <div>
            Editar Cliente
        </div>
    )
}

export default EditarCliente;
