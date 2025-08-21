import Button from "../../Components/button/Button";
import StatsCard from "../../Components/stats-card/StatsCard";
import Icon from "../../Components/icon/Icon";
import { path } from "../header/header-js/header";
export function Header({ children }) {
	return (
		<header className="h-screen bg-[url(/src/assets/header/header.jpeg)] centered-background relative">
			<section className="w-full h-screen bg-gradient-to-b from-black/50 via-black/30 to-black/80 flex justify-center items-center">
				{children}
				<section className="w-[70%] h-[70%] text-center flex flex-col items-center gap-y-10">
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
					<section>
						<section className=" praimary-bg-color px-10 py-5">
							<Button>
								<Icon path={path.path_4} color={path.color_black} />
								<span className="font-semibold">Get a Qute</span>
							</Button>
						</section>
					</section>
					<section className="grid grid-cols-1 md:grid-cols-3 w-3xl gap-y-4">
						<StatsCard>
							<section className="w-16 h-16 bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center mb-4 border border-[#04D9C4]/30 group-hover:border-[#04D9C4]/60 transition-colors duration-300">
								<Icon path={path.path_1} color={path.color} />
							</section>
							<section>
								<span className="block praimary-color font-bold text-2xl mb-">
									5+
								</span>
								<span className="block text-white text-[12px] capitalize">
									years excellence
								</span>
							</section>
						</StatsCard>
						<StatsCard>
							<section className="w-16 h-16 bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center mb-4 border border-[#04D9C4]/30 group-hover:border-[#04D9C4]/60 transition-colors duration-300">
								<Icon path={path.path_2} color={path.color} />
							</section>
							<section>
								<span className="block praimary-color font-bold text-2xl mb-1">
									500+
								</span>
								<span className="block text-white text-[12px] capitalize">
									happy clients
								</span>
							</section>
						</StatsCard>
						<StatsCard>
							<section className="w-16 h-16 bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center mb-4 border border-[#04D9C4]/30 group-hover:border-[#04D9C4]/60 transition-colors duration-300">
								<Icon path={path.path_3} color={path.color} />
							</section>
							<section>
								<span className="block praimary-color font-bold text-2xl mb-1">
									1000+
								</span>
								<span className="block text-white text-[12px] capitalize">
									project delivered
								</span>
							</section>
						</StatsCard>
					</section>
				</section>
			</section>
		</header>
	);
}
