/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useNavigate, Form, redirect } from "react-router-dom";
import { delete_cliente } from "../data/cliente";

export async function action({params}) {
    const { id } = params;
    await delete_cliente(id);
    return redirect("/");
}

const Cliente = ({ data }) => {
    const { id, nombre, email, empresa, telefono } = data;
    const navigate = useNavigate();

    const handleClickEditar = ev => {
        ev.preventDefault();
        navigate(`clientes/${id}/editar`);
    }

    return (
        <tr className="border-b w-full grid grid-cols-3 gap-4">
            <td className="py-2 w-auto">
                <p className="pl-2 text-xl text-slate-100">{nombre}</p>
                <p className="text-xs text-slate-300 p-0 pl-2 m-0">{empresa}</p>
            </td>
            <td className="py-2 w-auto text-slate-100 flex justify-between flex-col">
                <p className="text-ellipsis whitespace-nowrap"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-ellipsis whitespace-nowrap"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className="py-2 w-auto text-slate-100 flex items-center justify-center gap-3 mr-2">
                <div>
                    <button
                        onClick={handleClickEditar}
                        type="button"
                        className="text-slate-100 hover:text-slate-800 px-3 py-2 hover:border-slate-800 border rounded-md font-bold text-xs transition__all"
                    >Editar</button>
                </div>
                <Form method="post" action={`clientes/${id}/eliminar`}>
                    <button
                        type="submit"
                        className="text-red-100 hover:text-red-800 px-3 py-2 hover:border-red-800 border rounded-md font-bold text-xs transition__all"
                    >Borrar</button>
                </Form>
            </td>
        </tr>
    );
};

export default Cliente;
