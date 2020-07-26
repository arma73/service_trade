import Link from "next/link";
import { BackDrop } from "components/Back";
import clsx from "clsx";

const ListCategory = ({ onClose, content }) => {
	const renderListDrop = subsection =>
		subsection.map(item => (
			<ul key={item.id}>
				<h3>{item.mainSection}</h3>
				{item.sectionKinds.map(item => (
					<li key={`${item}`}>
						<Link href="/">
							<a>{item}</a>
						</Link>
					</li>
				))}
			</ul>
		));

	const RenderList = content =>
		content.map(item => (
			<li onClick={onClose} className={clsx({ "manuListDropHover": item.subsection.length })} key={item.id}>
				<Link href="/">
					<a
						style={{
							"padding": "5px",
							"display": "flex",
							"alignItems": "center"
						}}>
						{item.mainSection}
					</a>
				</Link>
				<div className="manuDropList">{renderListDrop(item.subsection)}</div>
			</li>
		));

	return (
		<>
			<BackDrop ocClick={onClose} />
			<ul className="StyledListCategorias">{RenderList(content)}</ul>
		</>
	);
};

export default ListCategory;
