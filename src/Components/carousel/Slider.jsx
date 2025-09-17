import SlideItem from "./slide-item/SlideItem";
import { sliders, next, prev } from "./carousel-js/carousel";
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
		<section className="relative overflow-hidden flex">
			<SlideItem sliders={sliders} currentSlide={currentSlide} />
			<section>
				<Icon path={next} />
			</section>
			<section>
				<Icon path={prev} />
			</section>
		</section>
	);
}
