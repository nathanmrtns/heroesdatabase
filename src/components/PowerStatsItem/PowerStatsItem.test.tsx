import React from 'react';
import { GiThink, GiPowerLightning } from "react-icons/gi";
import { shallow } from 'enzyme';

import PowerStatsItem from '.';

describe('PowerStatsItem', () => {
  describe('renders power stats item', () => {
    it('Card text and icon power', () => {
      const wrapper = shallow(
        <PowerStatsItem type="power" value="10"/>
      );
      expect(wrapper.find(GiPowerLightning)).toBeDefined();
      expect(wrapper.contains('power')).toBe(true);
      expect(wrapper.contains('10')).toBe(true);
    });

    it('Card text and icon intelligence', () => {
      const wrapper = shallow(
        <PowerStatsItem type="intelligence" value="10"/>
      );
      expect(wrapper.find(GiThink)).toBeDefined();
      expect(wrapper.contains('intelligence')).toBe(true);
      expect(wrapper.contains('10')).toBe(true);
    });
  });
});
