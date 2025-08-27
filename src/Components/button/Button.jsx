export default function Button({ children }) {
	return (
		<button className="flex w-full justify-center items-center gap-x-2 cursor-pointer">
			{children}
		</button>
	);
}
