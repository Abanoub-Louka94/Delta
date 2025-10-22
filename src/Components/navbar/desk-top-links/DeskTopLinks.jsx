export default function DeskTopLinks({ scroll }) {
	const navLinks = [
		{
			id: "home",
			lable: "home",
		},
		{
			id: "services",
			lable: "services",
		},
		{
			id: "portfolio",
			lable: "portfolio",
		},
		{
			id: "about",
			lable: "about",
		},
		{
			id: "contact",
			lable: "contact",
		},
	];

	return (
		<section className="hidden md:block">
			<ul className="flex-between gap-x-5">
				{navLinks.map((navList) => (
					<List scroll={scroll} list={navList} key={navList.id} />
				))}
			</ul>
		</section>
	);
}
function List({ list, scroll }) {
	return (
		<li className="relative group">
			<a
				className="capitalize text-white group-hover:primary-color"
				href="#"
				onClick={() => scroll(list.id)}
			>
				{list.lable}
			</a>
			<span className="absolute left-0 w-0 my-transition bottom-[-4px] h-[2px] primary-bg-color group-hover:w-full"></span>
		</li>
	);
}
