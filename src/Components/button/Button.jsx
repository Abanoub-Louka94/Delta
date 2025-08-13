export default function Button({ children }) {
	return (
		<button className="flex w-full justify-center items-center gap-x-1 cursor-pointer">
			{children}
		</button>
	);
}
