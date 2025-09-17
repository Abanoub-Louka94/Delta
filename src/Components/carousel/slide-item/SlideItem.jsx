import Icon from "../../icon/Icon";
export default function SlideItem({ sliders, currentSlide }) {
	return (
		<>
			{sliders.map((slider) => (
				<section
					key={slider.name}
					className="bg-[#1a1a1a] text-white rounded-2xl p-8 md:p-12 border border-cyan-300/10 hover:border-cyan-300/30 my-transition mx-4"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					<section className="flex justify-center items-center mb-4">
						<Icon path={slider.qouteIcon} color={slider.iconColor} />
					</section>
					<section className="flex justify-center items-center mb-4">
						{slider.starsIcon.map((star) => (
							<Icon path={star.path} color={slider.iconColor} key={star.id} />
						))}
					</section>
					<section className="mb-4">
						<p className="capitalize text-sm ">{slider.qoute}</p>
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
							<p className="primary-color capitalize text-xs">
								{slider.location}
							</p>
						</section>
					</section>
				</section>
			))}
		</>
	);
}
