import React from 'react';
import 'materialize-css';
import {useRoutes} from "./routs";
import {BrowserRouter as Router} from 'react-router-dom'
import M from 'materialize-css'
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {NavBar} from './components/NavBar'
import {NavBarGuest} from './components/NavBarGuest'
import {Loader} from './components/Loader'


function App() {
	const {token, login, logout, userId, ready} = useAuth();
	// const isAuthenticated = !!token;
	const isAuthenticated = true;
	const routes = useRoutes(isAuthenticated);


	document.addEventListener('DOMContentLoaded', function () {
		const elems = document.querySelectorAll('.parallax');
		const instances = M.Parallax.init(elems);
	});

	document.addEventListener('DOMContentLoaded', function () {
		const elems = document.querySelectorAll('.carousel');
		const instances = M.Carousel.init(elems);
	});

	return (
		<AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
			<Router>
				<div className="my-app">
					<div className="main-title__wrapper">
						<h1 className="main-title">be happy &#10084;</h1>
						<h4 className="main-subtitle">Always Keep Smiling</h4>
					</div>
					<div className="parallax-container">
						<div className="parallax"><img alt="img"
													   src="https://ic.pics.livejournal.com/e_kaspersky/24977487/8464686/8464686_original.jpg"/>
						</div>
					</div>
					<div className="main-menu__wrapper">
						{isAuthenticated
							? <NavBar/>
							: <NavBarGuest/>
						}
					</div>
					{!ready && <Loader /> }
					{routes}
					<h4 className="main-subtitle main-subtitle--dark">energy around</h4>
					<div className="carousel">
						<a className="carousel-item" href="#one!"><img alt="img"
																	   src="https://lorempixel.com/250/250/nature/1"/></a>
						<a className="carousel-item" href="#two!"><img alt="img"
																	   src="https://lorempixel.com/250/250/nature/2"/></a>
						<a className="carousel-item" href="#three!"><img alt="img"
																		 src="https://lorempixel.com/250/250/nature/3"/></a>
						<a className="carousel-item" href="#four!"><img alt="img"
																		src="https://lorempixel.com/250/250/nature/4"/></a>
						<a className="carousel-item" href="#five!"><img alt="img"
																		src="https://lorempixel.com/250/250/nature/5"/></a>
					</div>
					<div className="parallax-container parallax-container--small">
						<div className="parallax"><img alt="img"
													   src="https://ic.pics.livejournal.com/e_kaspersky/24977487/8464686/8464686_original.jpg"/>
						</div>
					</div>
				</div>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
