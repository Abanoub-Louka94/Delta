export default function HeaderCard({ data }) {
	return (
		<section className="flex flex-col justify-center items-center">
			<section className="w-16 h-16 animate-[shadow-pulse_5s_ease-out_1s_infinite] bg-gradient-to-br from-cyan-300/20 to-cyan-300/20 rounded-full flex items-center justify-center mb-4 border border-[#04D9C4]/30 group-hover:border-[#04D9C4]/60 transition-colors duration-300">
				<Icon path={path.path_2} color={path.color} />
			</section>
			<section>
				<span className="block primary-color font-bold text-2xl mb-1">
					500+
				</span>
				<span className="block text-white text-[12px] capitalize">
					happy clients
				</span>
			</section>
		</section>
	);
}
