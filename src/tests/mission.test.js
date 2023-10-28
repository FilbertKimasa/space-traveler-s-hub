import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionList from '../components/mission';
import { fetchMission, joinMission } from '../redux/missions/missionSlice';
import '@testing-library/jest-dom';


// Create a mock store
const mockStore = configureStore([]);

describe('MissionList component', () => {
  let store;

  beforeEach(() => {
    // Initialize the store with initial state
    store = mockStore({
      missions: {
        missions: [
          {
            id: 1,
            mission_name: 'Mission 1',
            description: 'Description 1',
            join: false,
          },
          {
            id: 2,
            mission_name: 'Mission 2',
            description: 'Description 2',
            join: true,
          },
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
        <MissionList />
      </Provider>
    );

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();

    expect(screen.container).toMatchSnapshot();
  })
});