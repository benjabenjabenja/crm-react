/* eslint-disable no-useless-escape */
/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { get_cliente_by_id, update_cliente } from "../data/cliente";
import { isValidObject, uniqueid } from "../helpers";
import ErrorAlertForm from "../components/ErrorAlertForm";
import Formulario from "../components/Formulario";

export async function loader(params) {
    const { id } = params.params;
    const client = await get_cliente_by_id(id); 
    if (!isValidObject(client)) throw new Response('', {
        status: 400,
        statusText: 'ERROR - Invalid service response'
    });
    return client;
}
// responde al method 'post' definido en el formulario
export async function action({ request, params }) {
    const { id } = params;
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

    // guardo los datos
    await update_cliente({...format, id});

    return redirect('/');
}
const EditarCliente = () => {
    // hooks
    const cliente = useLoaderData();
    const errores = useActionData();
    const navigate = useNavigate();

    // functions component
    const handleBack = ev => {
        ev.preventDefault();
        navigate(-1);
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="container">
                    <h1 className="font-black text-4xl text-slate-800">Editando: {cliente.nombre}</h1>
                    <p className="mt-3">Edita tus clientes facilmente</p>
                </div>
                <button
                    onClick={handleBack}
                    type="button"
                    className="bg-slate-800 hover:bg-slate-900 text-slate-100 px-3 py-1 rounded-md font-bold uppercase h-8 transition__all">
                    back
                </button>
            </div>
            <div className="bg-white-300 shadow-md rounded-md mf:w-3/4 mx-auto mt-2 px-5 py-10">
                {
                    errores?.length && errores?.map(m => <ErrorAlertForm key={uniqueid()}>{m}</ErrorAlertForm>)
                }
                <Form
                    method="post"
                    noValidate={true}
                    className="mt-4"
                >
                    <Formulario cliente={cliente} />
                    <input type="submit" className="mt-5 font-bold hover:shadow-md bg-slate-800 hover:bg-slate-900 hover:text-slate-50 text-slate-100 text-lg rounded-md w-full text-center py-1 uppercase transition__all hover:cursor-pointer" value={"Editar"} />
                </Form>
            </div>
        </>
    )
};

export default EditarCliente;
