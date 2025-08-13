import StatsCard from "../../Components/stats-card/StatsCard";

export function Header({ children }) {
	return (
		<header className="h-screen bg-[url(/src/assets/header/header.jpeg)] centered-background relative">
			<section className="w-full h-screen bg-gradient-to-b from-black/50 via-black/30 to-black/80 flex justify-center items-center">
				{children}
				<section className="w-[70%] h-[50%] text-center flex flex-col items-center gap-y-10">
					<section>
						<span className=" praimary-color tracking-[3px] uppercase w-fit py-3 px-6 rounded-full block bg-cyan-500/30 backdrop-blur-sm ">
							dubai's premier furniture atelier
						</span>
					</section>
					<section>
						<h1 className="text-4xl md:text-6xl">
							<span className="block text-white capitalize">where luxury</span>
							<span className="block praimary-color capitalize">
								meets craftsmanship
							</span>
						</h1>
					</section>
					<section>
						<p className="text-white/60 text-xl max-w-2xl">
							bespoke furniture manufacturing that transforms your vision into
							timeless pieces of art
						</p>
					</section>

					<section className="flex flex-wrap justify-between">
						<StatsCard></StatsCard>
					</section>
				</section>
			</section>
		</header>
	);
}
