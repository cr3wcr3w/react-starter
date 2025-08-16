import axios from "axios";
import { createBrowserRouter } from "react-router";
import Home from "./routes/home";
import Users from "./routes/users";
import User from "./routes/users/user";

export const ROUTER = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/users",
		Component: Users,
		loader: async () => {
			const users = await axios.get(
				"https://jsonplaceholder.typicode.com/users",
			);
			return { data: users };
		},
		action: async ({ request }) => {
			const formData = await request.formData();
			const newUser = {
				name: formData.get("name"),
				email: formData.get("email"),
			};
			await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
			return { ok: true };
		},
	},
	{
		path: "/users/:id",
		Component: User,
		loader: async ({ params }) => {
			const users = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${params.id}`,
			);
			return { data: users };
		},
	},
]);

// TODO
// You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.
