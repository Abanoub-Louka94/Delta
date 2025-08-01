export default function DeskTopLinks() {
	return (
		<section className="hidden md:block">
			<ul className="flex-between gap-x-5">
				<List name="home" />
				<List name="services" />
				<List name="portfolio" />
				<List name="about" />
				<List name="contact" />
			</ul>
		</section>
	);
}
function List({ name }) {
	return (
		<li className="relative group">
			<a className="capitalize text-white group-hover:praimary-color" href="#">
				{name}
			</a>
			<span className="absolute left-0 w-0 my-transition bottom-[-4px] h-[2px] praimary-bg-color group-hover:w-full"></span>
		</li>
	);
}
