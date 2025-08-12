export default function CardDescrip({ title, descrip }) {
	return (
		<section className="p-6">
			<h4 className="font-bold text-white mb-4">{title}</h4>
			<p className="text-[12px] text-white">{descrip}</p>
		</section>
	);
}
