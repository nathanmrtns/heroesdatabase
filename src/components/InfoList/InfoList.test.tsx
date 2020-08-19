import React from 'react';
import { shallow } from 'enzyme';
import GetCharacterMock from '../../sources/GetCharacterMock';
import ICharacter from '../../sources/ICharacter.interface';
import TitleAndSubtitle from '../TitleAndSubtitle';

import InfoList from '.';

describe('Infolist component', () => {
  describe('renders info list', () => {
    it('Renders Title and subtitle from props', () => {
      const character: ICharacter = GetCharacterMock;
      const wrapper = shallow(
        <InfoList objProps={character.appearance} />
      );
      /*
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
      */
      expect(wrapper.find(<TitleAndSubtitle title="gender" subtitle="Male" />)).toBeDefined();
      expect(wrapper.find(<TitleAndSubtitle title="height" subtitle="5'10, 178 cm" />)).toBeDefined();
      expect(wrapper.find(<TitleAndSubtitle title="weight" subtitle="175 lb, 79 kg" />)).toBeDefined();
      expect(wrapper.find(<TitleAndSubtitle title="eye-color" subtitle="Blue" />)).toBeDefined();
      expect(wrapper.find(<TitleAndSubtitle title="hair-color" subtitle="Black" />)).toBeDefined();
    });
  });
});
