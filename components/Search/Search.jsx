import { useState } from "react";
import Input from "components/Form/Input";
import { FormGroup, Select, Button } from "components/Form";
import { ShowInput } from "components/ShowUp";
import CategoriesMocks from "mocks/CategoriesMocks";

import "./Search.scss";

const Search = () => {
	const [value, SetValue] = useState("");
	const [focus, SetFocus] = useState(false);
	const { Categories } = CategoriesMocks();
	const handleValueChange = (_, value) => SetValue(value);
	const handleFormChange = e => console.log(e);
	const handleFocus = focus => SetFocus(focus);

	return (
		<FormGroup inline>
			<Select
				size="lg_m"
				name="rate"
				value={Categories.mainText}
				options={Categories.lists}
				onChange={handleFormChange}
				className="Concepts_search_select"
			/>
			<ShowInput value={value} focus={focus} Component={() => <div>{value}</div>}>
				<Input
					size="lg_m"
					type="text"
					value={value}
					onChange={handleValueChange}
					onFocus={handleFocus}
					className="Concepts_search_input"
				/>
			</ShowInput>
			<Button>Search</Button>
		</FormGroup>
	);
};

export default Search;
