/*eslint-disable max-lines*/
import * as PropTypes from "prop-types";
import clsx from "clsx";

import { ClickShow, HoverShow } from "components/ShowUp";
import { SvgIcon } from "components/Icons";
import "./SelectCategories.scss";

const ShowOptionsList = ({ subData }) => (
	<>
		{subData.map(option => (
			<div key={option.id} className="SelectOption_List_Block">
				<h3 className="SelectOption_List_Block_Title">{option.mainSection}</h3>
				<ul className="SelectOption_List_Block_Subsec">
					{option.sectionKinds.length > 0
						? option.sectionKinds.map(item => <li key={item}>{item}</li>)
						: null}
				</ul>
			</div>
		))}
	</>
);

const SelectOption = ({ onChange, ...rest }) => {
	const handleSelect = () => onChange({ ...rest });
	return (
		<HoverShow
			className="SelectOption"
			Component={ShowOptionsList}
			onClick={handleSelect}
			hoverSide="_r"
			subData={rest.subsection}
		>
			{rest.mainSection}
			<SvgIcon icon="nav-left" />
		</HoverShow>
	);
};

const ShowOptions = ({ options, handleChange }) =>
	//eslint-disable-next-line implicit-arrow-linebreak
	options.map(option => <SelectOption key={option.id} {...option} onChange={handleChange} />);

const SelectCategories = ({
	children,
	className,
	options,
	value,
	name,
	size,
	onChange,
	invalid,
	disabled,
	...restProps
}) => {
	const handleChange = option => {
		const { mainSection } = option;
		const e = {
			target: {
				value: mainSection,
				type: "select"
			}
		};
		onChange(e);
	};

	const compositeClassName = clsx("SelectCategories", size, {
		[className]: className,
		invalid,
		disabled
	});

	return (
		<ClickShow
			className={compositeClassName}
			Component={ShowOptions}
			onChange={handleChange}
			options={options}
			childClassName="options options_List"
			{...restProps}
		>
			<div role="button" className="selected">
				{value}
				<SvgIcon icon="arrow-down" />
			</div>
		</ClickShow>
	);
};

SelectCategories.defaultProps = {
	size: "md"
};

SelectCategories.propTypes = {
	className: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])
	),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})]),
	name: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	onChange: PropTypes.func.isRequired,
	invalid: PropTypes.bool,
	disabled: PropTypes.bool
};

export default SelectCategories;
