import Logo from "components/Logo";
import { FaIcon } from "components/Icons";
import { Footer, FooterNavigation } from ".";
import { NavigationItem, NavigationList } from "components/Navigation";

import "./Footer.scss";

const PublicFooter = () => (
	<Footer className="Footer_access-public">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<Logo type="dark" />
					<p>
						Jointohire gives your business access to thousands of trusted freelance
						experts who can work flexibly from anywhere
					</p>
					<NavigationList className="SocialList inline-list">
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
					<p className="copyright">© Join To Hire. All rights reserved</p>
				</div>
				<div className="col-md-1" />
				<div className="col-md-7 flex-list">
					<FooterNavigation title="Company">
						{/*todo hidden*/}
						{/*<NavigationItem href="/team">Our team</NavigationItem> */}
						<NavigationItem href="/">Need a contractor</NavigationItem>
						<NavigationItem href="/">Looking for clients</NavigationItem>
						<NavigationItem href="/terms-service">Terms of Service</NavigationItem>
					</FooterNavigation>
					<FooterNavigation title="Resources">
						<NavigationItem href="/sign-up">Sign Up</NavigationItem>
						<NavigationItem href="/freelancers">Find local freelancers</NavigationItem>
						<NavigationItem href="/post-job">Post your job</NavigationItem>
						<NavigationItem href="/freelance-jobs">Find jobs</NavigationItem>
					</FooterNavigation>
					<FooterNavigation title="Help">
						<NavigationItem href="/how-it-works">How it works</NavigationItem>
						{/*todo hidden */}
						{/*<NavigationItem href="/freelancers-category/1">Categories</NavigationItem> */}
						<NavigationItem href="/contact-us">Contact Us</NavigationItem>
						<NavigationItem href="/">Blog</NavigationItem>
					</FooterNavigation>
				</div>
			</div>
		</div>
	</Footer>
);

export default PublicFooter;
