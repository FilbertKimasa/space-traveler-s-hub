import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Render header component correctly', () => {
  it('Should render the header correctly', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});