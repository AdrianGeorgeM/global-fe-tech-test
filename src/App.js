import React from 'react';
import styles from './App.module.css';
import StationList from './components/StationList';

function App() {
	return (
		<div className={styles.app}>
			<h1>Global FE tech test</h1>
			<StationList />
		</div>
	);
}

export default App;
