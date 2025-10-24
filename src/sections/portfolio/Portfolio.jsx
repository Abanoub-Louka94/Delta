import { motion } from "motion/react";
import Intro from "../../Components/section-intro/Intro";
import Button from "../../Components/button/Button";
import Icon from "../../Components/icon/Icon";
import StatsCard from "../../Components/stats-card/StatsCard";
import FullBanner from "../../Components/card-full-banner/FullBanner";
import PortfolioCard from "../../Components/portfolio-card/PortfolioCard";
import StrengthsCard from "../../Components/strengths-card/StrengthsCard";
import {
	intro,
	path,
	images,
	statsCard,
	portfolioCard,
} from "./portfolio-js/portfolio";

export default function Portfolio({ PortRef }) {
	return (
		<section id="portfolio" className="py-20" ref={PortRef}>
			<section className="centered-container">
				<Intro title={intro.title_1} description={intro.description_1}>
					<section className="rounded-full mb-6 px-6 py-3 w-fit mx-auto bg-cyan-300/10 border border-cyan-300/20">
						<Button>
							<Icon path={path.path_1} color={path.color_primary} />
							<span className="capitalize primary-color">
								{intro.butt_title}
							</span>
						</Button>
					</section>
				</Intro>
				<StatsCard cards={statsCard} />
				<section className="grid grid-cols-1 xl:grid-cols-2 mb-20 gap-16">
					<section className="relative h-[500px] overflow-hidden rounded-[10px]">
						<FullBanner image={images.banner} />
						<motion.span
							transition={{ duration: 1, type: "spring" }}
							whileHover={{ rotate: "5deg", scale: 1.1 }}
							className="capitalize absolute top-6 left-6 primary-bg-color px-4 py-2 rounded-full font-medium"
						>
							premium quality
						</motion.span>
						<span className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-300/40 to-transparent rounded-bl-full"></span>
						<span className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-cyan-300/40  to-transparent rounded-tr-full"></span>
						<div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-lg p-4">
							<span className="block capitalize text-white text-sm font-medium">
								since 1973
							</span>
							<span className="block capitalize primary-color text-lg">
								crafting excellence
							</span>
						</div>
					</section>
					<section>
						<section>
							<h3 className="text-3xl md:text-4xl primary-color mb-6 capitalize">
								the delta difference
							</h3>
							<p className="text-white text-lg  leading-relaxed mb-6">
								While our competitors focus on volume, we focus on value. Every
								piece that leaves our workshop is a testament to our commitment
								to excellence, crafted with the finest materials and attention
								to detail that has made us Dubai's premier furniture
								manufacturer.
							</p>
							<p className="text-white text-lg leading-relaxed">
								From European ladies seeking elegant home furnishings to
								high-end businesses requiring volume orders, we deliver
								solutions that exceed expectations every time.
							</p>
						</section>
						<PortfolioCard cards={portfolioCard} />
					</section>
				</section>
				<section>
					<section className="centered-container">
						<Intro
							title={intro.title_2}
							description={intro.description_2}
						></Intro>

						<StrengthsCard />
					</section>
				</section>
			</section>
		</section>
	);
}
