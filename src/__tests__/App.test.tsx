import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the app correctly', () => {
    render(<App />);
    const headerElement = screen.getByText(/your portfolio title/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('contains navigation links', () => {
    render(<App />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<App />);
    const footerElement = screen.getByText(/copyright/i);
    expect(footerElement).toBeInTheDocument();
  });
});