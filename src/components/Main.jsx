import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import UpdateMovie from './UpdateMovie';
import Artists from './Artists';

const Main = () => {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<Movies />}
				/>
				<Route
					path='/movies/new'
					element={<NewMovie />}
				/>
				<Route
					path='/movies/:id'
					element={<MovieDetails />}
				/>
				<Route
					path='/movies/:id/update'
					element={<UpdateMovie />}
				/>
				<Route
					path='/artists'
					element={<Artists />}
				/>
			</Routes>
		</div>
	);
};

export default Main;
