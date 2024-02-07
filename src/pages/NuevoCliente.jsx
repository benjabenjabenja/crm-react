/* eslint-disable react-refresh/only-export-components */
import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";
// responde al method 'post' definido en el formulario
export function action() {
    console.log("nuevo cliente");
    return null
}

const NuevoCliente = () => {
    const navigate = useNavigate();
    const handleClick = ev => {
        ev.preventDefault();
        // if envias -1 te lleva a la pagina anteiror
        // se le puede especificar a que ruta enviar por params [ navigate("/clientes") ]
        navigate(-1);
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="container">
                    <h1 className="font-black text-4xl text-slate-800">Nuevo Cliente</h1>
                    <p className="mt-3">Agrega nuevos clientes</p>
                </div>
                <button
                    onClick={handleClick}
                    type="button"
                    className="bg-slate-800 text-slate-100 px-3 py-1 rounded-md font-bold uppercase h-8">
                    back
                </button>
            </div>
            <div className="bg-white-300 shadow-md rounded-md mf:w-3/4 mx-auto mt-4 px-5 py-10">
                <Form
                    method="post"
                >
                    <Formulario />
                    <input type="submit" className="mt-5 font-bold bg-slate-800 text-slate-100 text-lg rounded-md w-full text-center py-1 uppercase" value={"Enviar"} />
                </Form>
            </div>
        </>
    );
};

export default NuevoCliente;
