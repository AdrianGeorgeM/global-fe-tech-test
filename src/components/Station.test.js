import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Station from './Station';
import { fetchStationInfo } from '../api/stationsApi';

// Mock the API module
jest.mock('../api/stationsApi');

describe('Station', () => {
	const mockStation = { slug: 'test-station' };

	it('displays loading initially', () => {
		fetchStationInfo.mockResolvedValue({});
		render(<Station station={mockStation} />);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('displays an error message if the API call fails', async () => {
		fetchStationInfo.mockRejectedValue(new Error('Network response was not ok'));
		render(<Station station={mockStation} />);
		await waitFor(() => {
			expect(screen.getByText(/Error:/i)).toBeInTheDocument();
		});
	});

	it('renders the AudioPlayer component on successful API call', async () => {
		const mockStationInfo = { name: 'Test Station', streamUrl: 'test-url' };
		fetchStationInfo.mockResolvedValue(mockStationInfo);
		render(<Station station={mockStation} />);
		await waitFor(() => {
			expect(screen.getByText('Test Station')).toBeInTheDocument();
		});
	});
});
