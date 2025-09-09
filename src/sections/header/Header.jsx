import NavBar from "../../Components/navbar/NavBar";
import Button from "../../Components/button/Button";
import StatsCard from "../../Components/stats-card/StatsCard";
import Icon from "../../Components/icon/Icon";
import { path } from "../header/header-js/header";
export default function Header() {
	return (
		<header className="h-screen relative">
			<section className="bg w-full h-full bg-[url(/src/assets/header/header.jpeg)] centered-background">
				<section className="animate-bounce absolute translate-x-[-50%] translate-y-[-50%] left-[50%] bottom-7 flex items-center column-flex">
					<span className="block uppercase text-white text-xs tracking-[2px]">
						scroll
					</span>
					<span className="block">
						<Icon path={path.path_6} color={path.color_white} />
					</span>
				</section>
				<section className="w-full h-screen bg-gradient-to-b from-black/50 via-black/30 to-black/80 flex justify-center items-center">
					<NavBar />
					<section className="w-[70%] h-[80%] md:h-[70%] text-center flex flex-col items-center md:gap-y-10">
						<section className="mb-4 sm:mb-6">
							<span className="text-sm md:text-base primary-color tracking-[3px] uppercase w-fit py-3 px-6 rounded-full block bg-cyan-500/30 backdrop-blur-sm ">
								dubai's premier furniture atelier
							</span>
						</section>
						<section className="mb-6">
							<h1 className="text-2xl sm:text-4xl md:text-6xl">
								<span className="block text-white capitalize">
									where luxury
								</span>
								<span className="block primary-color capitalize">
									meets craftsmanship
								</span>
							</h1>
						</section>
						<section className="mb-8">
							<p className="text-white/60 text-sm md:text-xl max-w-2xl">
								bespoke furniture manufacturing that transforms your vision into
								timeless pieces of art
							</p>
						</section>
						<section>
							<section className="primary-bg-color px-10 py-5 shadow-lg shadow-[#04D9C4]/25">
								<Button>
									<Icon path={path.path_4} color={path.color_black} />
									<span className="font-semibold">Get a Qute</span>
								</Button>
							</section>
						</section>
						<section className="mt-12 grid grid-cols-1 md:grid-cols-3 w-[60%] gap-y-4">
							<StatsCard>
								<section className="w-16 h-16 animate-[shadow-pulse_5s_ease-out_0.5s_infinite]  bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center mb-4 border border-[#04D9C4]/30 group-hover:border-[#04D9C4]/60 transition-colors duration-300">
									<Icon path={path.path_1} color={path.color} />
								</section>
								<section>
									<span className="block primary-color font-bold text-2xl mb-1">
										5+
									</span>
									<span className="block text-white text-[12px] capitalize">
										years excellence
									</span>
								</section>
							</StatsCard>
							<StatsCard>
								<section className="w-16 h-16 animate-[shadow-pulse_5s_ease-out_1s_infinite] bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center mb-4 border border-[#04D9C4]/30 group-hover:border-[#04D9C4]/60 transition-colors duration-300">
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
							</StatsCard>
							<StatsCard>
								<section className="w-16 h-16 animate-[shadow-pulse_5s_ease-out_2s_infinite] bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center mb-4 border border-[#04D9C4]/30 group-hover:border-[#04D9C4]/60 transition-colors duration-300">
									<Icon path={path.path_3} color={path.color} />
								</section>
								<section>
									<span className="block primary-color font-bold text-2xl mb-1">
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
			</section>
		</header>
	);
}
