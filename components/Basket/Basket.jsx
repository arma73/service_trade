import { SvgIcon } from "components/Icons";
import { HoverShow } from "components/ShowUp";

import "./Basket.scss";

const WrapComp = ({ className }) => (
	<div className={className}>
		<p>Your shopping cart is empty!</p>
	</div>
);

const Basket = () => (
	<HoverShow Component={WrapComp} hoverSide="_d">
		<div id="basket">
			<SvgIcon size="50px" icon="basket" />

			<style jsx>
				{`
					#basket::after {
						content: "${0}";
						position: absolute;
						top: 68%;
						right: 2%;
						width: 18px;
						height: 18px;
						background-color: #f77d12;
						border: 2px solid #f5f6f7;
						border-radius: 50%;
						font-family: serif;
						text-align: center;
						box-sizing: content-box;
						z-index: 12;
					}
				`}
			</style>
		</div>
	</HoverShow>
);

export default Basket;
