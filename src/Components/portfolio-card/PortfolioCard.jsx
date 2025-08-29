export default function PortfolioCard({ children }) {
	return (
		<section className="bg-[#1a1a1a] p-6 rounded-xl border border-cyan-300/20 hover:border-cyan-300/40 my-transition h-full">
			{children}
		</section>
	);
}
