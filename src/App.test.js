// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PhiZen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PhiZen/i);
    expect(titleElement).toBeInTheDocument();
});
