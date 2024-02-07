import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente, { action as nuevoClienteAction } from "./pages/NuevoCliente";
import Index, { loader as clientsLoader } from "./pages/Index";

/**
 * Se renderiza cada elemento de children, dentro del componente Layout
 */
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			// si le establecemos el index en true lo toma como "default"
			{
				index: true,
				element: <Index />,
				loader: clientsLoader
			},
			{
				path: 'clientes/nuevo',
				element: <NuevoCliente />,
				action: nuevoClienteAction
			}
		]
	},

]);

export default router;