import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketItem from '../components/RocketItem';

const mockStore = configureStore([]);

describe('RocketItem component', () => {
  test('renders rocket item correctly', () => {
    const store = mockStore({});

    const rocket = {
      flickr_images: ['rocket-image.jpg'],
      id: 1,
      name: 'Rocket 1',
      description: 'This is a rocket.',
      reserved: false,
    };

    const { container } = render(
      <Provider store={store}>
        <RocketItem itemProp={rocket} />
      </Provider>,
    );

    expect(container.innerHTML).toMatchInlineSnapshot('"<li class=\\"rocket-item\\"><img src=\\"rocket-image.jpg\\" alt=\\"rocket\\" class=\\"rocket-img\\"><span class=\\"display-flex rocket-info\\"><h2>Rocket 1</h2><p>This is a rocket.</p><button class=\\"rocket-btn reserve-btn\\" type=\\"button\\">Reserve Rocket</button></span></li>"');
  });
});
