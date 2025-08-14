import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles/global.css";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: <default>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
