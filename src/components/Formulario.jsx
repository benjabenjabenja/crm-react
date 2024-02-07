const Formulario = () => {
    return (
        <>
            <div className="mb-4">
                <label className="text-gray-800 pl-2 ml-1" htmlFor="nombre">
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-slate-300 rounded-md"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="text-gray-800 pl-2 ml-1" htmlFor="empresa">
                    Empresa:
                </label>
                <input
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-slate-300 rounded-md"
                    placeholder="Empresa del Cliente"
                    name="empresa"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800 pl-2 ml-1" htmlFor="email">
                    E-mail:
                </label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-slate-300 rounded-md"
                    placeholder="Email del Cliente"
                    name="email"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800 pl-2 ml-1" htmlFor="telefono">
                    Teléfono:
                </label>
                <input
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-slate-300 rounded-md"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800 pl-2 ml-1" htmlFor="notas">
                    Notas:
                </label>
                <textarea
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-slate-300 rounded-md h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                />
            </div>
        </>
    );
};

export default Formulario;
