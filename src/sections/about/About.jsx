import { motion } from "motion/react";
import Button from "../../Components/button/Button";
import Intro from "../../Components/section-intro/Intro";
import Icon from "../../Components/icon/Icon";
import Slider from "../../Components/carousel/Carousel";
import { intro, path } from "./about-js/about";
import AboutCard from "../../Components/about-card/AboutCard";
import Occordion from "../../Components/occordion/Occordion";

export default function About({ aboutRef }) {
	return (
		<section id="about" ref={aboutRef}>
			<section className="py-20 bg-gradient-to-br from-cyan-300/5 via-transparent to-cyan-300/5">
				<section className="centered-container">
					<Intro title={intro.title} description={intro.description}>
						<section className="rounded-full mb-6 px-6 py-3 w-fit mx-auto bg-cyan-300/10 border border-cyan-300/20">
							<Button>
								<Icon path={path.path_1} color={path.color_primary} />
								<span className="capitalize primary-color">
									{intro.butt_title}
								</span>
							</Button>
						</section>
					</Intro>
					<Slider />
				</section>
			</section>
			<section className="py-20">
				<section className="centered-container">
					<Intro title={intro.title} description={intro.description}>
						<section className="rounded-full mb-6 px-6 py-3 w-fit mx-auto bg-cyan-300/10 border border-cyan-300/20">
							<Button>
								<Icon path={path.path_1} color={path.color_primary} />
								<span className="capitalize primary-color">
									{intro.butt_title}
								</span>
							</Button>
						</section>
					</Intro>
					<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
						<motion.section
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
								transition: {
									staggerChildren: 0.7,
									stiffness: 150,
									type: "spring",
									damping: 10,
								},
							}}
						>
							<AboutCard />
						</motion.section>
						<section>
							<Occordion />
						</section>
					</section>
				</section>
			</section>
		</section>
	);
}
