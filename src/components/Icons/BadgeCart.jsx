import { number } from "prop-types";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles(theme => ({
	"badge": {
		"right": -3,
		"top": 13,
		"border": `2px solid ${theme.palette.background.paper}`,
		"padding": "0 4px"
	}
}))(Badge);

const CustomizedBadges = ({ count }) => (
	<StyledBadge badgeContent={count} color="secondary">
		<ShoppingCartIcon />
	</StyledBadge>
);

CustomizedBadges.propTypes = {
	"count": number
};

CustomizedBadges.defaultProps = {
	"count": 0
};

export default CustomizedBadges;
