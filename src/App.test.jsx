import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main application component', () => {
	render(<App />);
	const linkElement = screen.getByText(/welcome to the app/i);
	expect(linkElement).toBeInTheDocument();
});

test('checks functionality of a button', () => {
	render(<App />);
	const buttonElement = screen.getByRole('button', { name: /submit/i });
	expect(buttonElement).toBeEnabled();
});