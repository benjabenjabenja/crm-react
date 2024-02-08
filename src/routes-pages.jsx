import { createBrowserRouter } from "react-router-dom";
import NuevoCliente, { action as nuevoClienteAction } from "./pages/NuevoCliente";
import Index, { loader as clientsLoader } from "./pages/Index";
import EditarCliente, { loader as editarLoader } from "./pages/EditarCliente";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";

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
				loader: clientsLoader,
				errorElement: <ErrorPage />
			},
			{
				path: 'clientes/nuevo',
				element: <NuevoCliente />,
				action: nuevoClienteAction,
				errorElement: <ErrorPage />
			},
			{
				path: 'cliente/:id/editar',
				element: <EditarCliente />,
				loader: editarLoader,
				errorElement: <ErrorPage />
			},
		]
	},

]);

export default router;