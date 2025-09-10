export default function FooterList({ list }) {
	return (
		<section>
			<ul className="flex flex-col gap-y-2.5">
				{list.map((list) => (
					<li className="relative group w-fit">
						<a href="#" className="capitalize text-white text-sm ">
							{list}
						</a>
						<span className="absolute left-0 w-0 my-transition bottom-[-6px] h-[2px] primary-bg-color group-hover:w-full"></span>
					</li>
				))}
			</ul>
		</section>
	);
}
