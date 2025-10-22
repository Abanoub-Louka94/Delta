import { motion } from "motion/react";

export default function DeskTopLinks({ scroll, activeSection, navLinks }) {
	return (
		<section className="hidden md:block">
			<ul className="flex-between gap-x-5">
				{navLinks.map((item) => (
					<List
						scroll={scroll}
						item={item}
						key={item.id}
						activeSection={activeSection}
					/>
				))}
			</ul>
		</section>
	);
}
function List({ item, scroll, activeSection }) {
	return (
		<li className="relative">
			<a
				className="capitalize text-white "
				href="#"
				onClick={(e) => {
					e.preventDefault();
					scroll(item.ref, item.id);
				}}
			>
				{item.id}
			</a>
			{activeSection === item.id && (
				<motion.span
					layoutId="activeSection"
					className="absolute left-0 bottom-[-4px] h-[2px] primary-bg-color w-full"
					transition={{ type: "spring", stiffness: 200, damping: 15 }}
				></motion.span>
			)}
		</li>
	);
}
