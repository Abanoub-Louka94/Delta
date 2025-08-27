export default function Intro({ title, description, children }) {
	return (
		<section className="text-center mb-16">
			{children}
			<h2 className="mb-6 text-4xl md:text-6xl praimary-color capitalize tracking-[2px]">
				{title}
			</h2>
			<p className="text-white">{description}</p>
		</section>
	);
}
