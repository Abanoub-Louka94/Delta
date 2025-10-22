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
				className="capitalize text-white group-hover:primary-color"
				href="#"
				onClick={() => scroll(item.id, item.ref)}
			>
				{item.id}
			</a>
			{activeSection === item.id && (
				<span className="absolute left-0 my-transition bottom-[-4px] h-[2px] primary-bg-color w-full"></span>
			)}
		</li>
	);
}
