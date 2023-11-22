import { fetchStations, fetchStationInfo } from './stationsApi';

const createMockResponse = (data) => {
	return {
		ok: true,
		json: jest.fn().mockResolvedValue(data),
	};
};

describe('stationsApi', () => {
	beforeEach(() => {
		global.fetch = jest.fn();
	});

	it('fetchStations returns a list of stations on successful response', async () => {
		const mockStationsData = [{ id: 1, name: 'Station 1' }];
		global.fetch.mockResolvedValue(createMockResponse(mockStationsData));

		const stations = await fetchStations();
		expect(stations).toEqual(mockStationsData);
		expect(global.fetch).toHaveBeenCalledWith(
			'https://75750e17-4c6f-43f1-9a65-e4290c99700a.mock.pstmn.io/stations'
		);
	});

	it('fetchStationInfo returns station info on successful response', async () => {
		const mockStationInfo = { id: 1, name: 'Station 1' };
		global.fetch.mockResolvedValue(createMockResponse(mockStationInfo));

		const stationInfo = await fetchStationInfo('station1');
		expect(stationInfo).toEqual(mockStationInfo);
		expect(global.fetch).toHaveBeenCalledWith(
			'https://75750e17-4c6f-43f1-9a65-e4290c99700a.mock.pstmn.io/station/station1'
		);
	});

	it('fetchStations throws an error on a bad response', async () => {
		global.fetch.mockResolvedValue({ ok: false });
		await expect(fetchStations()).rejects.toThrow('Network response was not ok');
	});

	it('fetchStationInfo throws an error on a bad response', async () => {
		global.fetch.mockResolvedValue({ ok: false });
		await expect(fetchStationInfo('station1')).rejects.toThrow(
			'Network response was not ok'
		);
	});
});
