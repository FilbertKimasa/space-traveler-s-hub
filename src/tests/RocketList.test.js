import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import configureStore from 'redux-mock-store';
// import MissionList from '../components/mission';
import RocketList from '../components/RocketList';
import '@testing-library/jest-dom';

// Create a mock store
const mockStore = configureStore([]);

describe('RocketList component', () => {
  let store;

  beforeEach(() => {
    // Initialize the store with initial state
    store = mockStore({
      rockets: {
        rockets: [
          { id: 1, name: 'Rocket 1', description: 'Description 1' },
          { id: 2, name: 'Rocket 2', description: 'Description 2' },
        ],
        isLoading: false,
        error: null,
      },
    });

    // Mock the dispatch function
    store.dispatch = jest.fn();
  });

  test('renders mission list', () => {
    render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();

    expect(screen.container).toMatchSnapshot();
  });
});
