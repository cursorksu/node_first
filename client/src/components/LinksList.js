import React from "react";
import {Link} from "react-router-dom";

export const LinksList = ({links}) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col l12"><h2 className="subtitle">links list</h2></div>
				{links.map((link, idx) => {
					return(
						<div className="col l6" key={link._id}>
							<div className="card horizontal">
								<div className="card-image">
									<img alt="img" src={`https://lorempixel.com/100/190/nature/${idx}`}/>
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<p>
											Short link:
											<a rel="noopener noreferrer" href={link.to}> {link.to}</a>
										</p>
										<p>
											Source link:
											<a rel="noopener noreferrer" href={link.from}> {link.from}</a>
										</p>
										<p>
											Click counter:
											<strong> {link.clicks}</strong>
										</p>
										<p>
											Creation date:
											<strong> {link.date}</strong>
										</p>
									</div>
									<div className="card-action">
										Details:
										<Link to={`/detail/${link._id}`} href={link.to}> {link.to}</Link>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}