import { createBrowserRouter } from "react-router-dom";
import NuevoCliente, { action as nuevoClienteAction } from "./pages/NuevoCliente";
import Index, { loader as clientsLoader } from "./pages/Index";
import EditarCliente, { loader as editarLoader, action as editarAction } from "./pages/EditarCliente";
import { action as eliminarAction } from './components/Cliente';
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
				path: 'clientes/:id/editar',
				element: <EditarCliente />,
				loader: editarLoader,
				action: editarAction,
				errorElement: <ErrorPage />
			},
			{
				path: 'clientes/:id/eliminar',
				action: eliminarAction
			}
		]
	},

]);

export default router;