import React from 'react';
import { shallow } from 'enzyme';

import TitleAndSubtitle from '.';

describe('Title and subtitle component', () => {
  describe('renders component', () => {
    it('Should render spans with ', () => {
      const wrapper = shallow(
        <TitleAndSubtitle title="Some property" subtitle="Hero information"/>
      );
      expect(wrapper.find(<span className="title">Some property</span>)).toBeDefined();
      expect(wrapper.find(<span className="subtitle">Hero information</span>)).toBeDefined();
      expect(wrapper.contains('Some property')).toBe(true);
      expect(wrapper.contains('Hero information')).toBe(true);
    });
  });
});
