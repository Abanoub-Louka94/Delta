import { motion } from "motion/react";
import ServicesCard from "../../Components/services-card/ServicesCard";
import Icon from "../../Components/icon/Icon";
import Button from "../../Components/button/Button";
import Intro from "../../Components/section-intro/Intro";
import { path, intro, cards, container, item } from "./services-js/services";

export default function Services({ servicesRef }) {
	return (
		<section
			ref={servicesRef}
			id="services"
			className="py-20 bg-gradient-to-br from-cyan-300/10 via-transparent to-cyan-300/10 "
		>
			<section className="centered-container">
				<Intro title={intro.title} description={intro.description}>
					<section className="rounded-full mb-6 px-6 py-3 w-fit mx-auto bg-cyan-300/10 border border-cyan-300/20">
						<Button>
							<Icon path={path.path_1} color={path.color_primary} />
							<span className="capitalize primary-color">
								{intro.butt_title}
							</span>
							<Icon path={path.path_2} color={path.color_primary} />
						</Button>
					</section>
				</Intro>
				<motion.section
					className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-10"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{cards.map((card, index) => (
						<ServicesCard card={card} key={index} />
					))}
				</motion.section>
				<motion.section
					className=" border-2 border-cyan-300 px-8 py-2 w-fit mx-auto mt-16"
					variants={item}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
				>
					<Button>
						<span className="capitalize primary-color text-sm">
							explore all services
						</span>
						<Icon path={path.path_3} color={path.color_primary} />
					</Button>
				</motion.section>
			</section>
		</section>
	);
}
