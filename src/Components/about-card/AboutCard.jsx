import Icon from "../../Components/icon/Icon";

export default function AboutCard({
	path,
	title,
	title_2,
	description,
	color,
}) {
	return (
		<section className="flex flex-col md:flex-row justify-center gap-4 mb-10">
			<section className="icon mx-auto md:mx-0">
				<section className="rounded-full p-2 border border-[#04D9C4]/30 w-fit group hover:scale-110 my-transition">
					<section className="w-16 h-16 bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center  border border-[#04D9C4]/30 group-hover:bg-cyan-300/30 group-hover:border-[#04D9C4]/60 my-transition">
						<Icon path={path} color={color} />
					</section>
				</section>
			</section>
			<section className="desc  text-center md:text-left">
				<h4 className=" uppercase text-lg md:text-xl font-bold primary-color mb-2 tracking-wide">
					{title}
				</h4>
				<p className="text-white text-sm md:text-base leading-relaxed mb-3">
					{title_2}
				</p>
				<p className="text-white text-xs md:text-sm leading-relaxed">
					{description}
				</p>
			</section>
		</section>
	);
}
