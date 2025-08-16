import {
	Form,
	useLoaderData,
	useNavigate,
	useNavigation,
	useSubmit,
} from "react-router";

type UserType = {
	id: number;
	name: string;
	email: string;
};

function Users() {
	const { data } = useLoaderData();
	const navigate = useNavigate();
	const navigation = useNavigation();
	const submit = useSubmit();

	// after this function "aka. action" is called, the loader will be called again to fetch the updated list of users
	const AddUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		submit(event.currentTarget, { method: "post" });
	};

	return (
		<>
			<section className="mb-4">
				<h1>Users List</h1>
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{data?.data.map((user: UserType) => (
						<li key={user.id} className="border p-4">
							<h3>{user.name}</h3>
							<p>{user.email}</p>
							<button
								type="button"
								onClick={() => navigate(`/users/${user.id}`)}
								className="cursor-pointer border"
							>
								goto
							</button>
						</li>
					))}
				</ul>
			</section>
			<section className="mb-4">
				<h3>Add User Form</h3>
				<Form method="post" onSubmit={AddUserHandler}>
					<input
						type="text"
						name="name"
						className="border"
						placeholder="Name"
						disabled={navigation.state === "loading"}
					/>
					<input
						type="email"
						name="email"
						className="border"
						placeholder="Email"
						disabled={navigation.state === "loading"}
					/>
					<button
						type="submit"
						className="cursor-pointer border"
						disabled={navigation.state === "loading"}
					>
						{navigation.state === "loading" ? "Adding..." : "Add User"}
					</button>
				</Form>
				<p>status: {navigation.state}</p>
			</section>
		</>
	);
}

export default Users;
