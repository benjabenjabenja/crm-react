const url_web_services = import.meta.env.VITE_API_URL;
export async function get_clientes() {
    const url = `${url_web_services}/clientes`;

    const result = await fetch(url);
    const response = await result.json();

    return response;
}
export async function get_cliente_by_id(id = '') {
    const url = `${url_web_services}/clientes/${id}`;
    const result = await fetch(url);

    return await result.json();
}
export async function add_cliente(datos) {
    try {
        const response = await fetch(`${url_web_services}/clientes`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'aaplication/json'}
        });
        const r = await response.json();
        return r;
    } catch (error) {
        console.error({ datos });
        return false;
    }
}