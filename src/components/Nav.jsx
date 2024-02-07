import { Link, useLocation } from "react-router-dom";
import { isValidArray, uniqueid } from "../helpers";

const Nav = () => {
    const location = useLocation();
    const links = [
        {
            to: '/', text: 'Clientes', title: 'Clientes'
        },
        {
            to: '/clientes/nuevo', text: 'Nuevo Cliente', title: 'Nuevo cliente'
        },
    ];
    return (
        <nav className="mt-10">
            {
                isValidArray(links) && links.map( l =>
                <Link
                    className={`${location.pathname === l.to ? 'text-slate-400 active' : 'text-white'} text-xl block mt-2 hover:text-slate-400 transition__all link__hover`}
                    to={l.to}
                    title={l.cliente}
                    key={uniqueid()}
                >{l.text}</Link>)
            }
        </nav>
    );
};

export default Nav;
