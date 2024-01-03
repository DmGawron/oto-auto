import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./AppContext";
import { CarProvider } from "./NewCarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppProvider>
			<CarProvider>
				<App />
			</CarProvider>
		</AppProvider>
	</React.StrictMode>
);
