import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Toggle from "./Toggle";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./TemporaryDrawer.scss";

const useStyles = makeStyles({
	list: {
		width: "80vw"
	}
});

export default function TemporaryDrawer({ Mocks }) {
	const classes = useStyles();
	const [state, setState] = useState({
		right: false,
		sub: {
			open: false,
			id: ""
		}
	});
	const { lists } = Mocks();

	const toggleDrawer = (side, open) => event => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setState({ ...state, [side]: open });
	};

	const toggleSub = (id, open) => toggleDrawer("sub", { open, id });

	const getById = id => lists.sections.filter(item => item.id === id)[0];

	const sideList = side => (
		<div
			className={classes.list}
			role="presentation"
			//onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			{state.sub.open ? (
				<>
					<button type="button" onClick={toggleSub("", false)}>
						{" "}
						Back{" "}
					</button>
					<Divider />
				</>
			) : null}
			<List>
				{state.sub.open
					? getById(state.sub.id).subsection.map(category => (
						<List key={category.id}>
							<ListItem button key={category.id}>
								<ListItemText primary={category.mainSection} />
							</ListItem>
							{category.sectionKinds.length
								? category.sectionKinds.map(kind => (
									<div key={kind}>{kind}</div>
								))
								: null}
						</List>
					))
					: lists.sections.map(category => (
						<ListItem
							onClick={toggleSub(category.id, true)}
							button
							key={category.id}
						>
							<ListItemText primary={category.mainSection} />
						</ListItem>
					))}
			</List>
			<Divider />
		</div>
	);

	return (
		<div className={clsx("Drawer_right", { open: state.right })}>
			<Toggle handleClick={toggleDrawer("right", !state.right)} />
			<Drawer anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
				{sideList("right")}
			</Drawer>
		</div>
	);
}
