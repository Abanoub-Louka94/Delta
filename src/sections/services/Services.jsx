import CardDescrip from "../../Components/card/card-descrip/CardDescrip";
import Card from "../../Components/card/Card";
import CardBanner from "../../Components/card/card-banner/CardBanner";
import Icon from "../../Components/icon/Icon";
import List from "../../Components/card/list/List";
import Button from "../../Components/button/Button";
import ButtonIcon from "../../Components/button/button-icon/ButtonIcon";
import {
	images,
	description,
	titles,
	lists,
	path,
	buttonIcon,
} from "./services-js/services";

export default function Services() {
	return (
		<section className="py-20 bg-gradient-to-br from-[#04D9C4]/10 via-transparent to-[#04BFAD]/10">
			<section className="centered-container">
				<section className="cards grid-container gap-x-6 gap-y-10">
					<Card>
						<CardBanner image={images.banner_1} />
						<section className="absolute top-[20px] right-[20px]">
							<Icon path={path.path_1} />
						</section>
						<section className="p-6">
							<section className="mb-4">
								<CardDescrip
									title={titles.title_1}
									descrip={description.de_1}
								/>
							</section>
							<List list={lists.list_1} />
							<section className="rounded-[10px] praimary-bg-color py-2">
								<Button>
									<span className="capitalize">view more</span>
									<ButtonIcon icon={buttonIcon.icon} color={buttonIcon.color} />
								</Button>
							</section>
						</section>
					</Card>
					<Card>
						<CardBanner image={images.banner_2} />
						<section className="absolute top-[20px] right-[20px]">
							<Icon path={path.path_2} />
						</section>
						<section className="p-6">
							<section className="mb-4">
								<CardDescrip
									title={titles.title_2}
									descrip={description.de_2}
								/>
							</section>
							<List list={lists.list_2} />
							<section className="rounded-[10px] praimary-bg-color py-2">
								<Button>
									<span className="capitalize">view more</span>
									<ButtonIcon icon={buttonIcon.icon} color={buttonIcon.color} />
								</Button>
							</section>
						</section>
					</Card>
					<Card>
						<CardBanner image={images.banner_3} />
						<section className="absolute top-[20px] right-[20px]">
							<Icon path={path.path_2} />
						</section>
						<section className="p-6">
							<section className="mb-10">
								<CardDescrip
									title={titles.title_3}
									descrip={description.de_3}
								/>
							</section>
							<List list={lists.list_3} />
							<section className="rounded-[10px] praimary-bg-color py-2">
								<Button>
									<span className="capitalize">view more</span>
									<ButtonIcon icon={buttonIcon.icon} color={buttonIcon.color} />
								</Button>
							</section>
						</section>
					</Card>

					<Card>
						<CardBanner image={images.banner_4} />
						<section className="absolute top-[20px] right-[20px]">
							<Icon path={path.path_4} />
						</section>
						<section className="p-6">
							<section className="mb-4">
								<CardDescrip
									title={titles.title_4}
									descrip={description.de_4}
								/>
							</section>

							<List list={lists.list_4} />
							<section className="rounded-[10px] praimary-bg-color py-2">
								<Button>
									<span className="capitalize">view more</span>
									<ButtonIcon icon={buttonIcon.icon} color={buttonIcon.color} />
								</Button>
							</section>
						</section>
					</Card>
				</section>
			</section>
		</section>
	);
}
