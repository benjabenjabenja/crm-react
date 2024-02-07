/* eslint-disable react/prop-types */
import { isValidArray, uniqueid } from "../helpers";
import Cliente from "./Cliente";

const TablaClientes = ({ th, data }) => {
    return (
        <table className="w-full bg-slate-400 shadow-md table-auto mt-4 rounded-md">
            <thead className="bg-slate-800 text-white rounded-md">
                <tr>
                {
                    isValidArray(th) && th.map( e => <th key={uniqueid()} className="p-2">{e}</th>)
                }
                </tr>
            </thead>
            <tbody>
                {
                    isValidArray(data) && data.map( d => (
                        <Cliente data={d} key={d.id} />
                    ))
                }
            </tbody>
        </table>
    );
};

export default TablaClientes;
