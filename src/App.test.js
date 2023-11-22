import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
	render(<App />);
	const headerElement = screen.getByText(/Global FE tech test/i);
	expect(headerElement).toBeInTheDocument();
});
