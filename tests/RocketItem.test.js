import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RocketItem from '../src/components/RocketItem'; // Adjust the import path as needed
// Mock the useDispatch function to avoid actual Redux actions in the test
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('RocketItem Component', () => {
  const mockItem = {
    id: 1,
    name: 'Test Rocket',
    description: 'Rocket description',
    reserved: false,
    flickr_images: ['image_url'],
  };

  it('renders the RocketItem component correctly', () => {
    // Mock the useDispatch function to capture the dispatched action
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(<RocketItem itemProp={mockItem} />);

    // Ensure that the RocketItem component renders with the correct content
    expect(screen.getByText('Test Rocket')).toBeInTheDocument();
    expect(screen.getByText('Rocket description')).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
    expect(screen.queryByText('Cancel Reservation')).toBeNull();
    expect(screen.getByAltText('rocket')).toBeInTheDocument();

    // Simulate a button click to test the onClick event
    const reserveButton = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveButton);

    // Ensure that the correct action was dispatched when clicking the Reserve Rocket button
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'rockets/bookRocket',
      payload: { id: 1 },
    });
  });

  it('renders the RocketItem component with "Reserved" label', () => {
    const reservedItem = {
      ...mockItem,
      reserved: true,
    };

    render(<RocketItem itemProp={reservedItem} />);

    // Ensure that the "Reserved" label is displayed and the "Cancel Reservation" button is rendered
    expect(screen.getByText('Reserved')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });
});
