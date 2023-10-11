import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
  test('it should mount', () => {
    render(<Backdrop />);
    
    const backdrop = screen.getByTestId('Backdrop');

    expect(backdrop).toBeInTheDocument();
  });
});