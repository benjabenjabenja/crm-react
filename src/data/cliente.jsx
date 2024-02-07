export async function get_clientes() {
    const url = `${import.meta.env.VITE_API_URL}/clientes`;

    const result = await fetch(url);
    const response = await result.json();

    return response;
}