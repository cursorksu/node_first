import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {ScrollTo} from "react-scroll-to";
import {AuthContext} from "../context/AuthContext";

export const NavBar = () => {
	const history = useHistory();
	const auth = useContext(AuthContext);

	const logoutHandler = e => {
		e.preventDefault();
		auth.logout();
		history.push('/auth');
	}
	return (<nav>
		<div className="nav-wrapper main-menu">
			<h5 className="logo">Cutting links</h5>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<ScrollTo>
						{({scroll}) => (
							<NavLink to="/create" onClick={() => scroll({smooth: true, y: 0})}>Create</NavLink>
						)}
					</ScrollTo>
				</li>
				<li>
					<ScrollTo>
						{({scroll}) => (
							<NavLink to="/links" onClick={() => scroll({smooth: true, y: 0})}>Links</NavLink>
						)}
					</ScrollTo>
				</li>
				<li>
					<ScrollTo>
						{({scroll}) => (
							<NavLink to="/detail/10" onClick={() => scroll({smooth: true, y: 0})}>Details</NavLink>
						)}
					</ScrollTo>
				</li>
				<li>
					<ScrollTo>
						{({scroll}) => (
							<a href="#" onClick={(e) => {
								scroll({smooth: true, y: 0});
								logoutHandler(e);
							}}>LogOut</a>
						)}
					</ScrollTo>
				</li>
			</ul>
		</div>
	</nav>)
}