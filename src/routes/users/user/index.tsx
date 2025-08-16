import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

type UserType = {
	id: number;
	name: string;
	email: string;
};

function User() {
	const navigate = useNavigate();
	const handleGoBack = async () => {
		await navigate(-1);
	};
	const { id } = useParams();

	const { data } = useLoaderData();
	const { email: initialEmail, name: initialName } = data.data as UserType;

	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(initialName);
	const [email, setEmail] = useState(initialEmail);

	const editHandler = () => {
		setIsEditing(!isEditing);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleSaveChanges = async () => {
		try {
			await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
				name,
				email,
			});
			setIsEditing(false);
		} catch (error) {
			// biome-ignore lint/suspicious/noConsole: <>
			console.error("Failed to update user:", error);
		}
	};

	const handleDelete = async () => {
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
			// navigate('/users');
		} catch (error) {
			// biome-ignore lint/suspicious/noConsole: <>
			console.error("Failed to delete user:", error);
		}
	};

	return (
		<>
			<section className="mb-4">
				<button
					type="button"
					onClick={handleGoBack}
					className="cursor-pointer border"
				>
					Go Back
				</button>
				<p>id params: {id}</p>
			</section>
			<section className="mb-4">
				<input
					type="text"
					value={name}
					onChange={handleNameChange}
					disabled={!isEditing}
				/>
				<input
					type="text"
					value={email}
					onChange={handleEmailChange}
					disabled={!isEditing}
				/>
			</section>
			<section className="mb-4">
				<button
					type="button"
					className="cursor-pointer border"
					onClick={handleDelete}
				>
					Delete
				</button>
				<div className="border">
					<button
						type="button"
						className="cursor-pointer border"
						onClick={editHandler}
					>
						Edit
					</button>
					{isEditing && (
						<>
							<button
								type="button"
								className="cursor-pointer border"
								onClick={handleSaveChanges}
							>
								Save
							</button>
							<button
								type="button"
								className="cursor-pointer border"
								onClick={editHandler}
							>
								Cancel
							</button>
						</>
					)}
				</div>
			</section>
		</>
	);
}

export default User;
