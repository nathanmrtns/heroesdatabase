import React from 'react';
import { shallow } from 'enzyme';

import Loader from '.';

describe('CharacterListItem', () => {
  const wrapper = shallow(<Loader />);

  describe('renders', () => {
    it('loading text', () => {
      expect(wrapper.contains('Cerebro is trying to find your hero...')).toBe(true);
    });
  });
});
