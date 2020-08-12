import React, {useState, useColback, useContext, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {LinkCard} from "../components/LinkCard";
import {Loader} from "../components/Loader"



const DetailPage = (props) => {
	const {token} = useContext(AuthContext);
	const {request, loading} = useHttp();
	const [link, setLink] = useState({
		to: 'some link',
		from: 'from link',
		date: new Date().toLocaleDateString(),
		clicks: 125,
	});
	const linkId = props.match.params.id

	// const getLink = useColback( async () => {
	// 	try {
	// 		const fetched = await request(`/api/link/${linkId}`, "GET", null, {
	// 			Authorisation: `Bearer ${token}`
	// 		});
	// 		setLink(fetched);
	// 	} catch (e) {}
	// }, [token, linkId, request]);
	//
	// useEffect(() => {
	// 	getLink();
	// }, [getLink]);

	if(loading) {
		return <Loader />
	}

	return (
		<>
			{
				// !loading && link &&
				<LinkCard link={link}/>
			}
		</>
	)
}

export default withRouter(DetailPage)