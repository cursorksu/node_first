import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../components/Loader";
import {LinksList} from "../components/LinksList";

export const LinksPage = () => {
	const [links, setLinks] = useState([
		{
			_id: 1,
			to: 'some link',
			from: 'from link',
			date: new Date().toLocaleDateString(),
			clicks: 125,
		},
		{
			_id: 2,
			to: 'some link',
			from: 'from link',
			date: new Date().toLocaleDateString(),
			clicks: 125,
		},
		{
			_id: 3,
			to: 'some link',
			from: 'from link',
			date: new Date().toLocaleDateString(),
			clicks: 125,
		},
		{
			_id: 4,
			to: 'some link',
			from: 'from link',
			date: new Date().toLocaleDateString(),
			clicks: 125,
		},
		{
			_id: 5,
			to: 'some link',
			from: 'from link',
			date: new Date().toLocaleDateString(),
			clicks: 125,
		},
		{
			_id: 6,
			to: 'some link',
			from: 'from link',
			date: new Date().toLocaleDateString(),
			clicks: 125,
		}
	]);
	const {token} = useContext(AuthContext);
	const {request, loading} = useHttp();

	// const fetchLinks = useCallback(async () => {
	// 	try {
	// 		const fetched = await request('/api/link', 'GET', null, {
	// 			Authorization: `Bearer ${token}`
	// 		})
	// 	} catch (e) {}
	// }, [token, request]);
	//
	// useEffect(() => {
	// 	fetchLinks()
	// }, [fetchLinks]);
	//
	// if(loading) {
	// 	return <Loader />
	// }

	return(
		<div>
			{
				// !loading && link &&
				<LinksList links={links} />
			}
		</div>
	)
}