import { v4 as uuidv4 } from "uuid";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ObservedCars from "./pages/ObservedCars";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SearchResults from "./pages/SearchResults";
import SingleOffer from "./pages/SingleOffer";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Homepage />,
		},
		{
			path: "/obserwowane",
			element: <ObservedCars />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/wyniki",
			element: <SearchResults />,
		},
		{
			path: "/wyniki/:id",
			element: <SingleOffer />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
