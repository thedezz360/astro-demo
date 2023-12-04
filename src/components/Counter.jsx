import { useState } from "preact/hooks"


export function Counter() {
	const [counter, setCounter] = useState(0)

	return (
		<>
			{/* como esto es preact usamos class y no classname */}
			<span class= "text-yellow-300 text-xl mr-3">Counter: {counter}</span>
			<button
				class="border px-4 py-2 text-xl"
				onClick={() => { setCounter(counter => counter + 1) }}>+</button>
			<button
				class="border px-4 py-2 text-xl"
				onClick={() => { setCounter(counter => counter - 1) }}>-</button>
		</>
	)
}
