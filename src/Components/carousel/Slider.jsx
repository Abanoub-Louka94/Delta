import SlideItem from "./slide-item/SlideItem";
import { sliders, next, prev, iconColor } from "./carousel-js/carousel";
import { useState } from "react";
import Icon from "../icon/Icon";

export default function Slider() {
	const [currentSlide, setSlide] = useState(0);
	function nextSlide() {
		setSlide((next) => (next + 1) % sliders.length);
	}

	function prevSlide() {
		setSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
	}
	return (
		<section className="relative">
			<section className="flex my-transition overflow-hidden">
				{sliders.map((slider) => (
					<SlideItem
						slider={slider}
						key={slider.name}
						currentSlide={currentSlide}
					/>
				))}
			</section>
			<section className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full flex items-center border border-cyan-300">
				<button onClick={nextSlide}>
					<Icon path={next} color={iconColor} />
				</button>
			</section>
			<section className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full flex items-center border border-cyan-300">
				<button onClick={prevSlide}>
					<Icon path={prev} color={iconColor} />
				</button>
			</section>
		</section>
	);
}
