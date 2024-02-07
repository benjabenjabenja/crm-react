import { Link, useLocation } from "react-router-dom";
import { isValidArray } from "../helpers";

const Nav = () => {
    const location = useLocation();
    const links = [
        {
            to: '/', text: 'Cliente', title: 'Cliente'
        },
        {
            to: '/clientes/nuevo', text: 'Nuevo Cliente', title: 'Nuevo cliente'
        },
    ];
    return (
        <nav className="mt-10">
            {
                isValidArray(links) && links.map((l, i) =>
                <Link
                    className={`${location.pathname === l.to ? 'text-slate-400 active' : 'text-white'} text-xl block mt-2 hover:text-slate-400 transition__all link__hover`}
                    to={l.to}
                    title={l.cliente}
                    key={i}
                >{l.text}</Link>)
            }
        </nav>
    );
};

export default Nav;
