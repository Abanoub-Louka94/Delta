import { motion } from "motion/react";
import Icon from "../../Components/icon/Icon";
import { cardsData } from "../../sections/about/about-js/about";

export default function AboutCard() {
	return (
		<>
			{cardsData.map((data) => (
				<Card data={data} key={data.title} />
			))}
		</>
	);
}

function Card({ data }) {
	return (
		<motion.section
			className="flex flex-col md:flex-row justify-center gap-4 mb-10"
			initial={{ x: -50, opacity: 0 }}
			whileInView={{
				x: 0,
				opacity: 1,
			}}
			transition={{ delay: 0.5 }}
			viewport={{ once: true }}
		>
			<section className="icon mx-auto md:mx-0">
				<section className="rounded-full p-2 border border-cyan-300/30 w-fit group hover:scale-110 my-transition">
					<section className="w-16 h-16 bg-gradient-to-br from-cyan-300/20 to-cyan-300/20 rounded-full flex items-center justify-center  border border-cyan-300/30 group-hover:bg-cyan-300/30 group-hover:border-cyan-300/60 my-transition">
						<Icon path={data.icon} color={data.iconColor} />
					</section>
				</section>
			</section>
			<section className="desc  text-center md:text-left">
				<h4 className=" uppercase text-lg md:text-xl font-bold primary-color mb-2 tracking-wide">
					{data.title}
				</h4>
				<p className="text-white text-sm md:text-base leading-relaxed mb-3">
					{data.title_2}
				</p>
				<p className="text-white text-xs md:text-sm leading-relaxed">
					{data.description}
				</p>
			</section>
		</motion.section>
	);
}
