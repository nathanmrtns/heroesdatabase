import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from './NavigationBar';

describe('NavigationBar', () => {
  const wrapper = shallow(
    <NavigationBar/>
  );

  describe('renders', () => {
    it('loading text', () => {
      expect(wrapper.contains('HEROES DATABASE')).toBe(true);
    });
  });
});
