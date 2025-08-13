export default function CardDescrip({ title, descrip }) {
	return (
		<section>
			<h4 className="font-bold text-white mb-4 text-xl">{title}</h4>
			<p className="text-[12px] text-white">{descrip}</p>
		</section>
	);
}
