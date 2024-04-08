import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
    render(<App />);
    const linkElement = document.querySelector('a');
    expect(linkElement).toBeInTheDocument();
});