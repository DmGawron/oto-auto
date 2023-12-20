import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ObservedCars from "./pages/ObservedCars";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SearchResults from "./pages/SearchResults";
import SingleOffer from "./pages/SingleOffer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="obserwowane" element={<ObservedCars />} />
					<Route path="login" element={<Login />} />
					<Route path="login" element={<Login />} />
					<Route path="wyniki" element={<SearchResults />} />
					<Route path="wyniki/oferta/:id" element={<SingleOffer />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
