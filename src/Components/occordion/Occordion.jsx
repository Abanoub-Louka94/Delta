import { motion } from "motion/react";
import { useState } from "react";
import Icon from "../icon/Icon";
import { occordionData } from "../../sections/about/about-js/about";

export default function Occordion() {
	const [selected, setIsSelectede] = useState(null);

	function toggole(index) {
		selected === index ? setIsSelectede(null) : setIsSelectede(index);
	}
	return (
		<motion.section
			className="flex flex-col  gap-y-3"
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				transition: {
					staggerChildren: 0.7,
				},
			}}
			viewport={{ once: true }}
		>
			{occordionData.map((occ, index) => (
				<OccordionComponent
					data={occ}
					key={index}
					selected={selected}
					toggole={toggole}
					index={index}
				/>
			))}
		</motion.section>
	);
}

function OccordionComponent({ data, selected, toggole, index }) {
	return (
		<motion.section
			className="bg-[#1a1a1a] rounded-2xl border border-cyan-300/20 overflow-hidden"
			initial={{ y: 50, opacity: 0 }}
			whileInView={{
				y: 0,
				opacity: 1,
			}}
			transition={{ delay: 0.5, duration: 0.5 }}
			viewport={{ once: true }}
		>
			<section
				className="cursor-pointer border-b border-cyan-300/10 flex-between p-4 md:p-6"
				onClick={() => toggole(index)}
			>
				<section className="flex-between">
					<section className="mr-2">
						<Icon path={data.icon} color={data.iconColor} />
					</section>
					<section>
						<h2 className="primary-color capitalize">{data.title}</h2>
					</section>
				</section>
				<section
					className={`${
						index === selected ? "rotate-180" : "rotate-0"
					} my-transition`}
				>
					<Icon path={data.arrowIcon} color={data.iconColor} />
				</section>
			</section>
			<section
				className={`${
					index === selected ? `h-auto py-4 md:py-6` : `h-0 py-0`
				}  my-transition overflow-hidden px-4 md:px-6`}
			>
				<ul>
					{data.list.map((item, index) => (
						<ListItem item={item} key={index} />
					))}
				</ul>
			</section>
		</motion.section>
	);
}

function ListItem({ item }) {
	return <li className="text-white not-last:mb-3 text-sm flex">{item}</li>;
}
