import SlideItem from "./slide-item/SlideItem";
import { sliders } from "./carousel-js/carousel";

export default function Slider() {
	console.log(sliders.statsIcon);
	return (
		<section className="relative overflow-hidden flex">
			<SlideItem sliders={sliders} />
		</section>
	);
}
