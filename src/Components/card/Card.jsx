export default function Card({ children }) {
	return (
		<section className="rounded-[10px] relative border hover:border-cyan-300 my-transition">
			{children}
		</section>
	);
}
