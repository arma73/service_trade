import Logo from "components/Logo";
import { FaIcon } from "components/Icons";
import { Footer, FooterNavigation } from ".";
import { NavigationItem, NavigationList } from "components/Navigation";

import "./Footer.scss";

const PublicFooter = () => (
	<Footer classpropname="Footer_access-public">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<Logo type="dark" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis
						nunc, posuere quis ipsum quis consectetur.
					</p>
					<NavigationList classpropname="SocialList inline-list">
						<NavigationItem href="/">
							<FaIcon icon="fa-twitter" />
						</NavigationItem>
						<NavigationItem href="/">
							<FaIcon icon="fa-facebook-f" />
						</NavigationItem>
						<NavigationItem href="/">
							<FaIcon icon="fa-instagram" />
						</NavigationItem>
					</NavigationList>
					<p className="copyright">© BuyEnjoy. All rights reserved</p>
				</div>
				<div className="col-md-1" />
				<div className="col-md-7 flex-list">
					<FooterNavigation title="Company">
						<NavigationItem href="/">About</NavigationItem>
					</FooterNavigation>
					<FooterNavigation title="Resources">
						<NavigationItem href="/sign-up">Sign Up</NavigationItem>
					</FooterNavigation>
					<FooterNavigation title="Help">
						<NavigationItem href="/how-it-works">How it works</NavigationItem>
						<NavigationItem href="/contact-us">Contact Us</NavigationItem>
						<NavigationItem href="/">Blog</NavigationItem>
					</FooterNavigation>
				</div>
			</div>
		</div>
	</Footer>
);

export default PublicFooter;
