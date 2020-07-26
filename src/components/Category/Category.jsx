import { FormGroup, SelectCategories } from "components/Form";

import "./Category.scss";

const Category = ({ CategoriesMocks }) => {
	const { lists } = CategoriesMocks();

	const handleFormChange = e => console.log(e);

	return (
		<FormGroup inline>
			<SelectCategories
				size="lg"
				name="rate"
				value={lists.mainText}
				options={lists.sections}
				onChange={handleFormChange}
			/>
		</FormGroup>
	);
};

Category.propTypes = {};

export default Category;
