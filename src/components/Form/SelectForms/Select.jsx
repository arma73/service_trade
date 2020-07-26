import * as PropTypes from "prop-types";
import clsx from "clsx";
import SvgIcon from "components/Icons/SvgIcon";
import { ClickShow } from "components/ShowUp";

import "./Select.scss";

const SelectOption = ({ onChange, ...rest }) => {
	const handleSelect = () => onChange({ ...rest });
	return (
		<div role="button" className="SelectOption" onClick={handleSelect}>
			{rest.label}
		</div>
	);
};

SelectOption.propTypes = {
	"onChange": PropTypes.func.isRequired
};

const ShowOptions = ({ options, handleChange }) =>
	// eslint-disable-next-line implicit-arrow-linebreak
	options.map(option => <SelectOption key={option.id} {...option} onChange={handleChange} />);

const Select = ({ children, className, options, value, name, size, onChange, invalid, disabled, ...restProps }) => {
	const handleChange = option => {
		const { id } = option;
		const e = {
			"target": {
				name,
				"value": id,
				"type": "select"
			}
		};
		onChange(e, option.id, option);
	};

	const findOption = option => option.label === value;
	const selectedOption = options.find(findOption);
	const compositeClassName = clsx("Select", size, {
		[className]: className,
		invalid,
		disabled
	});

	return (
		<ClickShow
			className={compositeClassName}
			onChange={handleChange}
			Component={ShowOptions}
			options={options}
			{...restProps}>
			<div role="button" className="selected">
				<span className="selected_label">{selectedOption.label}</span>
				<SvgIcon icon="arrow-down" />
			</div>
		</ClickShow>
	);
};

Select.defaultProps = {
	"size": "md"
};

Select.propTypes = {
	"className": PropTypes.string,
	"disabled": PropTypes.bool,
	"invalid": PropTypes.bool,
	"name": PropTypes.string,
	"onChange": PropTypes.func.isRequired,
	"options": PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])),
	"size": PropTypes.oneOf(["sm", "md", "lg", "lg_m"]),
	"value": PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])
};

export default Select;
