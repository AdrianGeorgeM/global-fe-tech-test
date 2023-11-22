import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AudioPlayer from './AudioPlayer';

describe('AudioPlayer', () => {
	const mockStationInfo = {
		name: 'Test Station',
		logo: 'test-logo.jpg',
		streamUrl: 'test-stream-url.mp3',
	};

	beforeEach(() => {
		window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
		window.HTMLMediaElement.prototype.pause = jest.fn();
	});

	it('renders with station information', () => {
		render(<AudioPlayer stationInfo={mockStationInfo} />);
		expect(screen.getByText('Test Station')).toBeInTheDocument();
		expect(screen.getByAltText('Test Station')).toHaveAttribute('src', 'test-logo.jpg');
	});

	it('toggles mute/unmute on button click', () => {
		render(<AudioPlayer stationInfo={mockStationInfo} />);
		const muteButton = screen.getByText('Mute');
		fireEvent.click(muteButton);
		expect(muteButton.textContent).toBe('Unmute');
		fireEvent.click(muteButton);
		expect(muteButton.textContent).toBe('Mute');
	});

	it('changes volume on slider change', () => {
		render(<AudioPlayer stationInfo={mockStationInfo} />);
		const volumeSlider = screen.getByRole('slider');
		fireEvent.change(volumeSlider, { target: { value: '0.5' } });
		expect(volumeSlider.value).toBe('0.5');
	});
});
