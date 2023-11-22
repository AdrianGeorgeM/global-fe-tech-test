import React, { useState, useEffect } from 'react';
import { fetchStationInfo } from '../api/stationsApi';
import styles from './Station.module.css';
import AudioPlayer from './AudioPlayer';

function Station({ station }) {
	const [stationInfo, setStationInfo] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchStationInfo(station.slug)
			.then(setStationInfo)
			.catch((error) => setError(error.message));
	}, [station.slug]);

	return (
		<div className={styles.station}>
			{error ? (
				<div className={styles.error}>Error: {error}</div>
			) : !stationInfo ? (
				<div className={styles.loading}>Loading...</div>
			) : (
				<AudioPlayer stationInfo={stationInfo} />
			)}
		</div>
	);
}

export default Station;
