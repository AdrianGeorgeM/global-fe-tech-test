import React, { useState, useEffect } from 'react';
import { fetchStations } from '../api/stationsApi';
import Station from './Station';
import styles from './StationList.module.css';

const StationList = () => {
	const [stations, setStations] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchStations()
			.then(setStations)
			.catch((error) => setError(error.message));
	}, []);

	const filteredStations = stations.filter((station) =>
		station.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	if (error) {
		return <div className={styles.error}>Error: {error}</div>;
	}

	return (
		<div data-testid='station-list'>
			<input
				type='text'
				placeholder='Search stations...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className={styles.searchBar}
			/>
			<div className={styles.stationList}>
				{filteredStations.map((station) => (
					<Station key={station.slug} station={station} />
				))}
			</div>
		</div>
	);
};

export default StationList;
