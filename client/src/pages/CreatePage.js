import React, {useContext, useEffect, useState } from 'react';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from 'react-router-dom';
export const CreatePage = () => {
const history = useHistory();
	const auth = useContext(AuthContext);
	const {request} = useHttp();
	const [link, setLink] = useState('');

	useEffect(() => {
		window.M.updateTextFields();
	},[])

	const changeHandler = e => {
		const {value} = e.target;
		setLink(value);
	}

	const pressHandler = async e => {
		if (e.key === 'Enter') {
			try {
				const data = await request('/api/link/generate', "POST", {from: link}, {
					Authorization: `Bearer ${auth.token}`,
				});
				history.push(`/detail/${data.link._id}`)
				console.log(data)
			} catch (e) {

			}
		}
	}

	return (
		<>
			<div className="container">
				<div className="row">
					<h1 className="main-subtitle main-subtitle--dark">Create short link</h1>
					<div className="col s8 offset-s2">
						<div className="input-field">
							<input
								placeholder="Input link"
								id="link"
								type="text"
								className="validate"
								value={link}
								onChange={changeHandler}
								onKeyPress={pressHandler}
							/>
							<label htmlFor="email">Input link</label>
						</div>
					</div>
				</div>


			</div>
			<div className="parallax-container parallax-container--small">
				<div className="parallax"><img alt="img"
											   src="https://ic.pics.livejournal.com/e_kaspersky/24977487/8464686/8464686_original.jpg"/>
				</div>
			</div>
		</>
	)
}