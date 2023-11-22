import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import StationList from './StationList';
import { fetchStations } from '../api/stationsApi';

jest.mock('../api/stationsApi');

describe('StationList', () => {
	it('renders without crashing', async () => {
		fetchStations.mockResolvedValue([]);
		render(<StationList />);
		await waitFor(() => {
			expect(screen.getByTestId('station-list')).toBeInTheDocument();
		});
	});
});
