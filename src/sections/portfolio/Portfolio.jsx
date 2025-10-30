import { motion, transform } from "motion/react";
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

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.7, // Delay between each child animation
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	show: { y: 0, opacity: 1 },
};

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
					<motion.section
						className="relative h-[500px] overflow-hidden rounded-[10px]"
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							type: "spring",
							delay: 1,
							stiffness: 100,
							damping: 15,
						}}
					>
						<FullBanner image={images.banner} />
						<motion.span
							transition={{
								type: "spring",
								stiffness: 400,
								damping: 15,
							}}
							whileHover={{ rotate: "7deg", scale: 1.1 }}
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
					</motion.section>
					<section>
						<motion.section
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
						>
							<motion.h3
								className="text-3xl md:text-4xl primary-color mb-6 capitalize"
								variants={item}
							>
								the delta difference
							</motion.h3>
							<motion.p
								className="text-white text-lg leading-relaxed mb-6"
								variants={item}
							>
								While our competitors focus on volume, we focus on value. Every
								piece that leaves our workshop is a testament to our commitment
								to excellence, crafted with the finest materials and attention
								to detail that has made us Dubai's premier furniture
								manufacturer.
							</motion.p>
							<motion.p
								className="text-white text-lg leading-relaxed"
								variants={item}
							>
								From European ladies seeking elegant home furnishings to
								high-end businesses requiring volume orders, we deliver
								solutions that exceed expectations every time.
							</motion.p>
						</motion.section>
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
