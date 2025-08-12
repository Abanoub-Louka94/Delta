export default function Card({ children }) {
	return (
		<section className="flex flex-col rounded-[10px] relative">
			{children}
		</section>
	);
}
