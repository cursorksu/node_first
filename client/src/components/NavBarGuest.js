import React from "react";
import {ScrollTo} from "react-scroll-to";
import {NavLink} from "react-router-dom";

export const NavBarGuest = () => {
	return  (<nav>
		<div className="container">
			<div className="main-menu ">
				<ScrollTo>
					{({scroll}) => (
						<NavLink to="/" onClick={() => scroll({smooth: true, y: 0})}>Home</NavLink>
					)}
				</ScrollTo>
				<ScrollTo>
					{({scroll}) => (
						<NavLink to="/auth" onClick={() => scroll({smooth: true, y: 0})}>Login</NavLink>
					)}
				</ScrollTo>
				<ScrollTo>
					{({scroll}) => (
						<NavLink to="/registration" onClick={() => scroll({smooth: true, y: 0})}>Contact
							Us</NavLink>
					)}
				</ScrollTo>
			</div>
		</div>
	</nav>)
}