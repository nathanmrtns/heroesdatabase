import React from 'react';
import { shallow } from 'enzyme';
import GetCharacterMock from '../../sources/GetCharacterMock';
import ICharacter from '../../sources/ICharacter.interface';
import PowerStatsItem from '../PowerStatsItem';

import PowerStatsList from '.';

describe('PowerStatsList', () => {
  describe('renders list', () => {
    it('Renders power stats from char', () => {
      const character: ICharacter = GetCharacterMock;
      // "intelligence": "88",
      // "strength": "11",
      // "speed": "33",
      // "durability": "28",
      // "power": "36",
      // "combat": "100"
      const wrapper = shallow(
        <PowerStatsList character={character} />
      );
      expect(wrapper.find(<PowerStatsItem type="intelligence" value="88"/>)).toBeDefined();
      expect(wrapper.find(<PowerStatsItem type="strength" value="11" />)).toBeDefined();
      expect(wrapper.find(<PowerStatsItem type="speed" value="33" />)).toBeDefined();
      expect(wrapper.find(<PowerStatsItem type="durability" value="28" />)).toBeDefined();
      expect(wrapper.find(<PowerStatsItem type="power" value="36" />)).toBeDefined();
      expect(wrapper.find(<PowerStatsItem type="combat" value="100" />)).toBeDefined();
    });
  });
});
