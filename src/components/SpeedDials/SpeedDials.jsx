import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ShareIcon from "@material-ui/icons/Share";
import { BadgeCart } from "components/Icons";

const useStyles = makeStyles(theme => ({
	"speedDial": {
		"position": "absolute",
		"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
			"bottom": theme.spacing(2),
			"right": theme.spacing(2)
		},
		"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
			"top": theme.spacing(2),
			"left": theme.spacing(2)
		}
	}
}));

const actions = [
	{ "icon": <BadgeCart />, "name": "Cart" },
	{ "icon": <ShareIcon />, "name": "Share" }
];

const SpeedDials = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<SpeedDial
			ariaLabel="SpeedDial example"
			className={classes.speedDial}
			icon={<SpeedDialIcon />}
			onClose={handleClose}
			onOpen={handleOpen}
			open={open}>
			{actions.map(action => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={handleClose}
				/>
			))}
		</SpeedDial>
	);
};

export default SpeedDials;
