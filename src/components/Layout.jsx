import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
    const title = `CRM + React Router Dom`;
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-slate-800 px-5 py-8">
                <h2 className="text-4xl font-black text-white text-center">{title}</h2>
                <Nav />
            </aside>
            {/* contenedor donde se renderizan las routes */}
            <main className="md:w-3/4 p-10 mf:h-screen overflow-x-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
