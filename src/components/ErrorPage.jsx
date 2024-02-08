import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {

    const errors = useRouteError();
    return (
        <div className='space-y-8'>
            <h1 className="text-6xl font-extra-bold text-slate-800">CRM - Clientes</h1>
            <p className="text-left text-xl">Hubo un error</p>
            <p className="text-left text-xl">{errors.statusText || errors.message}</p>
        </div>
    );
}