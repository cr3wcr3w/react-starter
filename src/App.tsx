import { useTotalStore } from "./shared/stores/total-store";

function App() {
	const { clearTotal, setTotal, total } = useTotalStore();
	return (
		<>
			<section>
				<h1>Vite + React</h1>
				<p className="text-red-900">tailwind</p>
			</section>
			<section className="flex flex-col items-start">
				<p>{total}</p>
				<button
					type="button"
					onClick={() => setTotal(total + 1)}
					className="cursor-pointer border"
				>
					Increment
				</button>
				<button
					type="button"
					onClick={() => setTotal(total - 1)}
					className="cursor-pointer border"
				>
					Decrement
				</button>
				<button
					type="button"
					onClick={() => clearTotal()}
					className="cursor-pointer border"
				>
					Clear
				</button>
			</section>
		</>
	);
}

export default App;
