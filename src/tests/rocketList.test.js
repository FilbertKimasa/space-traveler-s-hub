import React from 'react';
import { render } from '@testing-library/react';
import RocketItem from '../components/RocketItem';

describe('RocketItem component', () => {
  test('renders rocket item correctly', () => {
    const rocket = {
      flickr_images: ['rocket-image.jpg'],
      name: 'Rocket 1',
      description: 'This is a rocket.',
    };

    const { container } = render(<RocketItem itemProp={rocket} />);

    expect(container).toMatchSnapshot();
  });
});
