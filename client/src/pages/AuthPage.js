import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
	const auth = useContext(AuthContext);
	const message = useMessage()
	const{loading, error, request, clearError} = useHttp()
	const [form, setForm] = useState({
		email: '',
		password: '',
		first_name: '',
		last_name: '',
	});

	useEffect(() => {
		message(error);
		clearError();
	}, [error, message, clearError]);

	const registerHandler = async () => {
		try {
			const data = await request('api/auth/register', 'POST', {...form})
			message(data.message)
		} catch (e) {}
	}

	useEffect(() => {
		window.M.updateTextFields();
	},[])

	const loginHandler = async () => {
		try {
			const data = await request('api/auth/login', 'POST', {...form});
			auth.login(data.token, data.userId);
			message(data.message);
		} catch (e) {}
	}
	const changeHandler = e => {
		const {name, value} = e.target;
		setForm({...form, [name]: value });
	}

	return(
		<div className="row auth-form">
			<div className="col s6 offset-s3">
				<div className="card sign-up blue-grey darken-1">
					<div className="card-content white-text">
						<div className="input-field col s6">
							<input placeholder="First Name" id="first_name" type="text" className="validate"/>
								<label htmlFor="first_name">First Name</label>
						</div>
						<div className="input-field col s6">
							<input placeholder="Last Name" id="last_name" type="text" className="validate"/>
								<label htmlFor="last_name">Last Name</label>
						</div>
						<div className="input-field col s6">
							<input
								placeholder="Email"
								id="email"
								type="email"
								className="validate"
								name="email"
								value={form.email}
								onChange={changeHandler}
							/>
							<label htmlFor="email">Email</label>
						</div>
						<div className="input-field col s6">
							<input
								placeholder="Password"
								id="password"
								type="password"
								className="validate"
								name="password"
								value={form.password}
								onChange={changeHandler}
							/>
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="card-action" style={{display: 'flex', justifyContent: 'space-between'}}>
						<button
							className="btn waves-effect waves-grey"
							onClick={loginHandler}
						>
							Sign In
						</button>
						<button
							className="btn waves-effect waves-grey"
							onClick={registerHandler}
						>
							Registration
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}