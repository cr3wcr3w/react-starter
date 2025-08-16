import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles/global.css";
import { RouterProvider } from "react-router/dom";
import { ROUTER } from "./routes";

// biome-ignore lint/style/noNonNullAssertion: <default>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={ROUTER} />
	</StrictMode>,
);
