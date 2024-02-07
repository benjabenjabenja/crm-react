/* eslint-disable react/prop-types */
import { isValidArray } from "../helpers";

const TablaClientes = ({ th, clientes }) => {
    console.log({ clientes })
    return (
        <table className="w-full bg-slate-400 shadow-md table-auto mt-4">
            <thead className="bg-slate-800 text-white">
                {
                    isValidArray(th) && th.map( (e,i) => <th key={i} className="p-2">{e}</th>)
                }
                <th className="p-2">Cliente</th>
                <th className="p-2">Contacto</th>
                <th className="p-2">Acciones</th>
            </thead>
        </table>
    );
};

export default TablaClientes;
