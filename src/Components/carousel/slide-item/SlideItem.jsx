import Icon from "../../icon/Icon";
export default function SlideItem({ slider }) {
	return (
		<section className="bg-[#1a1a1a] text-white rounded-2xl p-8 md:p-12  min-w-full min-h-full">
			<section className="flex justify-center items-center mb-4">
				<Icon path={slider.qouteIcon} color={slider.iconColor} />
			</section>
			<section className="flex justify-center items-center mb-4">
				{slider.starsIcon.map((star) => (
					<Icon path={star.path} color={slider.iconColor} key={star.id} />
				))}
			</section>
			<section className="mb-4 text-center">
				<p className="capitalize text-lg leading-relaxed">{slider.qoute}</p>
			</section>
			<section>
				<section className="mx-auto rounded-full w-20 h-20 mb-3">
					<img
						className="rounded-full object-cover w-full h-full"
						src={slider.img}
						alt={slider.name}
					/>
				</section>
				<section className="text-center">
					<h5 className="font-bold capitalize mb-4">{slider.name}</h5>
					<p className="text-sm capitalize">{slider.job}</p>
					<p className="primary-color capitalize text-xs">{slider.location}</p>
				</section>
			</section>
		</section>
	);
}
