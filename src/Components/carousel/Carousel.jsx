import { sliders, next, prev, iconColor } from "./carousel-js/carousel";
import { useState } from "react";
import Icon from "../icon/Icon";

export default function Carousel() {
	const [currentSlide, setSlide] = useState(0);
	function nextSlide() {
		setSlide((next) => (next + 1) % sliders.length);
	}

	function prevSlide() {
		setSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
	}
	return (
		<section className="relative w-full lg:mx-auto lg:w-[50%] ">
			<section className="overflow-hidden rounded-2xl border border-cyan-300/10 hover:border-cyan-300/30 my-transition">
				<section
					className="flex my-transition"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{sliders.map((slider) => (
						<SlideItem
							slider={slider}
							key={slider.name}
							currentSlide={currentSlide}
						/>
					))}
				</section>
			</section>

			<section className="absolute right-[-10px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 bg-[#1a1a1a] p-2 rounded-full flex items-center border border-cyan-300">
				<button onClick={nextSlide}>
					<Icon path={next} color={iconColor} />
				</button>
			</section>
			<section className="absolute left-[-10px] lg:left-[-60px] top-1/2 transform -translate-y-1/2 bg-[#1a1a1a]  p-2 rounded-full flex items-center border border-cyan-300">
				<button onClick={prevSlide}>
					<Icon path={prev} color={iconColor} />
				</button>
			</section>
		</section>
	);
}

function SlideItem({ slider }) {
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
