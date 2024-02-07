/* eslint-disable no-useless-escape */
/* eslint-disable react-refresh/only-export-components */
import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import { uniqueid } from "../helpers";
import Error from "../components/Error";
// responde al method 'post' definido en el formulario
export async function action({ request }) {
    const formData = await request.formData();
    const format = Object.fromEntries(formData);
    
    const errores = [];

    const email = formData.get("email");
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (Object.values(format).includes("")) errores.push("todos los campos son requeridos");
    if (!regex.test(email)) errores.push("Email invalido, tiene que tener formato email");
    
    if (Object.keys(errores).length > 0) {
        return errores;
    }
}

const NuevoCliente = () => {
    const navigate = useNavigate();
    const errores = useActionData();

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
                    <h1 className="font-black text-4xl text-slate-800 hover:text-slate-50">Nuevo Cliente</h1>
                    <p className="mt-3">Agrega nuevos clientes</p>
                </div>
                <button
                    onClick={handleClick}
                    type="button"
                    className="bg-slate-800 hover:bg-slate-900 text-slate-100 px-3 py-1 rounded-md font-bold uppercase h-8 transition__all">
                    back
                </button>
            </div>
            <div className="bg-white-300 shadow-md rounded-md mf:w-3/4 mx-auto mt-2 px-5 py-10">
                {
                    errores?.length && errores?.map(m => <Error key={uniqueid()}>{m}</Error> )
                }
                <Form
                    method="post"
                    noValidate={true}
                    className="mt-4"
                >
                    <Formulario />
                    <input type="submit" className="mt-5 font-bold hover:shadow-md bg-slate-800 hover:bg-slate-900 hover:text-slate-50 text-slate-100 text-lg rounded-md w-full text-center py-1 uppercase transition__all hover:cursor-pointer" value={"Enviar"} />
                </Form>
            </div>
        </>
    );
};

export default NuevoCliente;
