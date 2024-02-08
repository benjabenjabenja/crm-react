/* eslint-disable react/prop-types */

const Cliente = ({ data }) => {
    const { nombre, email, empresa, telefono } = data;
    return (
        <tr className="border-b w-full grid grid-cols-3 gap-4">
            <td className="py-2 w-auto">
                <p className="pl-2 text-xl text-slate-100">{nombre}</p>
                <p className="text-xs text-slate-300 p-0 pl-2 m-0">{empresa}</p>
            </td>
            <td className="py-2 w-auto text-slate-100 flex justify-between">
                <p className="text-ellipsis whitespace-nowrap"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-ellipsis whitespace-nowrap"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className="py-2 w-auto text-slate-100 flex justify-end gap-3 mr-2">
                <button
                    type="button"
                    className="text-slate-100 hover:text-slate-800 px-3 py-0 hover:border-slate-800 border rounded-md font-bold text-xs transition__all"
                >Editar</button>
                <button
                    type="button"
                    className="text-red-100 hover:text-red-800 px-3 py-0 hover:border-red-800 border rounded-md font-bold text-xs transition__all"
                >Borrar</button>
            </td>
        </tr>
    );
};

export default Cliente;
