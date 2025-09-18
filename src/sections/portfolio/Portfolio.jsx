import Intro from "../../Components/section-intro/Intro";
import Button from "../../Components/button/Button";
import Icon from "../../Components/icon/Icon";
import StatsCard from "../../Components/stats-card/StatsCard";
import Card from "../../Components/card/Card";
import { motion } from "motion/react";
import { intro, path, images } from "./portfolio-js/portfolio";
import FullBanner from "../../Components/card-full-banner/FullBanner";
import PortfolioCard from "../../Components/portfolio-card/PortfolioCard";
export default function Portfolio() {
	return (
		<section id="portfolio" className="py-20">
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
				<section className="grid-container gap-x-6 gap-y-10 mb-20">
					<StatsCard>
						<span className="block primary-color text-5xl mb-4">10,000+</span>
						<span className="block text-white capitalize">
							projects completed
						</span>
					</StatsCard>
					<StatsCard>
						<span className="block primary-color text-5xl mb-4">500+</span>
						<span className="block text-white capitalize">happy clients</span>
					</StatsCard>
					<StatsCard>
						<span className="primary-color text-5xl mb-4 inline-flex gap-x-2">
							4.8
							<section className="animate-wiggle">
								<Icon path={path.path_2} color={path.color_primary} />
							</section>
						</span>
						<span className="block text-white capitalize">customer rating</span>
					</StatsCard>
					<StatsCard>
						<span className="block primary-color text-5xl mb-4">50+</span>
						<span className="block text-white capitalize">
							years of experience
						</span>
					</StatsCard>
				</section>
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
						<section className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6 mb-20">
							<PortfolioCard>
								<section className="flex gap-x-5 mb-4">
									<section className=" flex w-12 h-12  rounded-full primary-bg-color justify-center items-center">
										<Icon path={path.path_3} color={path.color_white} />
									</section>
									<section>
										<h4 className="text-lg primary-color mb-1 capitalize">
											b2C excellence
										</h4>
										<span className="text-white text-xs block capitalize">
											premium home solutions
										</span>
									</section>
								</section>
								<p className="text-white text-sm mb-4 leading-relaxed capitalize">
									personalized service for discerning homeowners seeking luxury
									furniture solutions.
								</p>
								<section className="rounded-[10px] border border-cyan-300  py-2 ">
									<Button>
										<Icon path={path.path_4} color={path.color_primary} />
										<span className="capitalize primary-color">
											download profile
										</span>
									</Button>
								</section>
							</PortfolioCard>
							<PortfolioCard>
								<section className="flex gap-x-5 mb-4">
									<section className=" flex w-12 h-12  rounded-full primary-bg-color justify-center items-center">
										<Icon path={path.path_5} color={path.color_white} />
									</section>
									<section>
										<h4 className="text-lg primary-color mb-1 capitalize">
											b2C leadership
										</h4>
										<span className="text-white text-xs block capitalize">
											commercial & volume orders
										</span>
									</section>
								</section>
								<p className="text-white text-sm mb-4 xl:mb-10 leading-relaxed capitalize">
									trusted by dubai's leading businesses for large-scale
									furniture projects.
								</p>
								<section className="rounded-[10px] border border-cyan-300  py-2 ">
									<Button>
										<Icon path={path.path_6} color={path.color_primary} />
										<span className="capitalize primary-color">
											schedule work
										</span>
									</Button>
								</section>
							</PortfolioCard>
						</section>
					</section>
				</section>
				<section>
					<section className="centered-container">
						<Intro
							title={intro.title_2}
							description={intro.description_2}
						></Intro>
						<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<Card>
								<section className="rounded-[10px] group relative bg-[#1a1a1a]  p-8 flex flex-col justify-center items-center">
									<section className=" flex w-14 h-14  rounded-full primary-bg-color justify-center items-center mb-4">
										<Icon path={path.path_7} color={path.color_white} />
									</section>
									<section className="text-white text-center">
										<h5 className="capitalize mb-5 group-hover:primary-color my-transition">
											expertise
										</h5>
										<p className="text-sm leading-relaxed">
											Expertise Over 50 years of specialized knowledge in luxury
											furniture manufacturing, with master craftsmen who
											understand the nuances of premium materials and
											traditional techniques.
										</p>
									</section>
								</section>
							</Card>
							<Card>
								<section className="rounded-[10px] group bg-[#1a1a1a]  p-8  flex flex-col justify-center items-center">
									<section className=" flex w-14 h-14  rounded-full primary-bg-color justify-center items-center mb-4">
										<Icon path={path.path_8} color={path.color_white} />
									</section>
									<section className="text-white text-center">
										<h5 className="capitalize mb-5 group-hover:primary-color my-transition">
											expertise
										</h5>
										<p className="text-sm leading-relaxed">
											Expertise Over 50 years of specialized knowledge in luxury
											furniture manufacturing, with master craftsmen who
											understand the nuances of premium materials and
											traditional techniques.
										</p>
									</section>
								</section>
							</Card>
							<Card>
								<section className="rounded-[10px] group relative bg-[#1a1a1a]  p-8  flex flex-col justify-center items-center">
									<section className=" flex w-14 h-14  rounded-full primary-bg-color justify-center items-center mb-4">
										<Icon path={path.path_9} color={path.color_white} />
									</section>
									<section className="text-white text-center">
										<h5 className="capitalize mb-5 group-hover:primary-color my-transition">
											expertise
										</h5>
										<p className="text-sm leading-relaxed">
											Expertise Over 50 years of specialized knowledge in luxury
											furniture manufacturing, with master craftsmen who
											understand the nuances of premium materials and
											traditional techniques.
										</p>
									</section>
								</section>
							</Card>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
}
