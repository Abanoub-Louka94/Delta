import { motion } from "motion/react";
import NavBar from "../../Components/navbar/NavBar";
import Button from "../../Components/button/Button";
import Icon from "../../Components/icon/Icon";
import { path, CardData, container, item } from "../header/header-js/header";
import HeaderCard from "../../Components/header-card/HeaderCard";
export default function Header({ scroll, homeRef, activeSection, navLinks }) {
	return (
		<header className="h-screen  overflow-hidden" ref={homeRef}>
			<section className="bg w-full h-full bg-[url(/src/assets/header/header.jpeg)] centered-background">
				<section className="w-full h-screen bg-gradient-to-b from-black/50 via-black/30 to-black/80 flex  justify-center items-center">
					<NavBar
						scroll={scroll}
						activeSection={activeSection}
						navLinks={navLinks}
					/>

					<motion.section
						className="relative"
						variants={container}
						initial="hidden"
						animate="show"
					>
						<motion.section className="mb-6 w-fit mx-auto" variants={item}>
							<span className="text-sm md:text-base primary-color tracking-[3px] uppercase w-fit py-3 px-6 rounded-full block bg-cyan-500/30 backdrop-blur-sm ">
								dubai's premier furniture atelier
							</span>
						</motion.section>

						<motion.section className="mb-6 text-center" variants={item}>
							<h1 className="text-2xl sm:text-4xl md:text-6xl">
								<span className="block text-white capitalize">
									where luxury
								</span>
								<span className="block primary-color capitalize">
									meets craftsmanship
								</span>
							</h1>
						</motion.section>
						<motion.section className="mb-6 text-center" variants={item}>
							<p className="text-white/60 text-sm md:text-xl max-w-2xl">
								bespoke furniture manufacturing that transforms your vision into
								timeless pieces of art
							</p>
						</motion.section>
						<motion.section variants={item}>
							<section className="primary-bg-color px-10 py-5 shadow-lg shadow-cyan-300/25 flex w-fit mx-auto">
								<Button>
									<Icon path={path.path_4} color={path.color_black} />
									<span className="font-semibold">Get a Qute</span>
								</Button>
							</section>
						</motion.section>
						<motion.section
							className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
							variants={item}
						>
							{CardData.map((card) => (
								<HeaderCard data={card} key={card.description} />
							))}
						</motion.section>
						<motion.section
							className="animate-bounce absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[-120px]  flex items-center column-flex"
							variants={item}
						>
							<span className="block uppercase text-white text-xs tracking-[2px]">
								scroll
							</span>
							<span className="block">
								<Icon path={path.path_6} color={path.color_white} />
							</span>
						</motion.section>
					</motion.section>
				</section>
			</section>
		</header>
	);
}
