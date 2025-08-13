export default function List({ list }) {
	return (
		<ul className="flex flex-wrap gap-4 mb-4">
			{list.map((item) => (
				<ListItem item={item} key={item} />
			))}
		</ul>
	);
}

function ListItem({ item }) {
	return (
		<li className="w-fit text-[13px] border rounded-full px-2 py-1 p-1 praimary-color nth-of-type-3:text-white">
			{item}
		</li>
	);
}
