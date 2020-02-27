import { useState } from "react";
import { object } from "prop-types";
import Fetcher from "containers/Hocs/Fetcher";

import ListCategory from "./ListCategory";

import "./Category.scss";

const Category = ({ content }) => {
	const [listOpen, setListOpen] = useState(false);

	const onListHandler = () => {
		setListOpen(!listOpen);
	};

	return (
		<>
			{content ? (
				<div className="All_Categorias" onClick={onListHandler}>
					<span className="All_Categorias_title">
						{content.MainText}
						<span> &#9660; </span>
					</span>
					{listOpen ? (
						<ListCategory
							onClose={onListHandler}
							Open={listOpen}
							content={content.Sections}
						/>
					) : null}
				</div>
			) : null}
		</>
	);
};

Category.propTypes = {
	//eslint-disable-next-line react/forbid-prop-types
	content: object
};

export default Fetcher(Category, "category");
