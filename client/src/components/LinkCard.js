import React from "react";

export const LinkCard = ({link}) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col s12 offset-l3 m6 l6">
					<h2 className="subtitle">Created short link</h2>
					<div className="card horizontal">
						<div className="card-image">
							<img alt="img" src="https://lorempixel.com/100/190/nature/6"/>
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
									Short link:
									<a rel="noopener noreferrer" href={link.to}> {link.to}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}