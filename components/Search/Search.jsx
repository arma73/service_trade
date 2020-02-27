import Input from "components/Form/Input";

import "./Search.scss";

const Search = () => {
	const handleValueChange = (e, value) => console.log(value);

	return (
		<Input
			size="lg_m"
			type="text"
			onChange={handleValueChange}
			className="Concepts_search_input"
		/>
	);
};

export default Search;
