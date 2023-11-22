export const fetchStations = async () => {
	const response = await fetch(
		'https://75750e17-4c6f-43f1-9a65-e4290c99700a.mock.pstmn.io/stations'
	);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

export const fetchStationInfo = async (slug) => {
	const response = await fetch(
		`https://75750e17-4c6f-43f1-9a65-e4290c99700a.mock.pstmn.io/station/${slug}`
	);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};
