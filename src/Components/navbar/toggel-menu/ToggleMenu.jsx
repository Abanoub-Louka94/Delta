import Close from "../icons/close/Close";
import Menu from "../icons/menu/Menu";

export default function ToggleMenu({ isToggeld, toggle }) {
	return (
		<section className="md:hidden" onClick={toggle}>
			{isToggeld ? <Close /> : <Menu />}
		</section>
	);
}
