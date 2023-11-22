import React, { useState, useRef } from 'react';
import styles from './AudioPlayer.module.css';

const AudioPlayer = ({ stationInfo }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [isMuted, setIsMuted] = useState(false);
	const audioRef = useRef(null);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current
				.play()
				.then(() => setIsPlaying(true))
				.catch((error) => console.error('Failed to play audio:', error));
		}
	};

	const pauseAudio = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	const togglePlay = () => {
		isPlaying ? pauseAudio() : playAudio();
	};

	const handleVolumeChange = (e) => {
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
			setIsMuted(newVolume === 0);
		}
	};

	const toggleMute = () => {
		setIsMuted(!isMuted);
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
		}
	};

	return (
		<div className={styles.audioPlayer}>
			{stationInfo.logo && (
				<img
					src={stationInfo.logo}
					alt={stationInfo.name}
					className={styles.stationLogo}
				/>
			)}
			<div className={styles.station}>
				<h2 className={styles.stationName}>{stationInfo.name}</h2>
				<div className={styles.audioControls}>
					<button
						onClick={togglePlay}
						className={`${styles.controlButton} ${
							isPlaying ? styles.pauseButton : styles.playButton
						}`}
					>
						{isPlaying ? 'Pause' : 'Play'}
					</button>
					<button
						className={`${styles.controlButton} ${isMuted ? styles.muted : ''}`}
						onClick={toggleMute}
					>
						{isMuted ? 'Unmute' : 'Mute'}
					</button>
					<input
						type='range'
						min='0'
						max='1'
						step='0.01'
						value={isMuted ? 0 : volume}
						onChange={handleVolumeChange}
						className={styles.volumeSlider}
					/>
				</div>
				<audio
					ref={audioRef}
					src={stationInfo.streamUrl}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
				></audio>
			</div>
		</div>
	);
};

export default AudioPlayer;
