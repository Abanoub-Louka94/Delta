import { useState } from "react";
import Icon from "../icon/Icon";
import { occordionData } from "../../sections/about/about-js/about";

export default function Occordion() {
	const [selected, setIsSelectede] = useState(null);

	function toggole(index) {
		index === selected ? null : index;

		setIsSelectede(index);
	}
	return (
		<>
			{occordionData.map((occ, index) => (
				<OccordionComponent
					data={occ}
					key={index}
					selected={selected}
					toggole={toggole}
					index={index}
				/>
			))}
		</>
	);
}

function OccordionComponent({ data, selected, toggole, index }) {
	return (
		<section className="bg-[#1a1a1a] rounded-2xl border border-cyan-300/20 ">
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
					className={`${index === selected ? "rotate-180" : "rotate-0"}`}
				>
					<span></span>
				</section>
			</section>
			<section
				className={`${
					index === selected ? `h-auto` : `h-0`
				} p-4 md:p-6 my-transition overflow-hidden`}
			>
				<ul>
					{data.list.map((item, index) => (
						<ListItem item={item} key={index} />
					))}
				</ul>
			</section>
		</section>
	);
}

function ListItem({ item }) {
	return <li className="text-white not-last:mb-3 text-sm flex">{item}</li>;
}
