import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import ICharacter from '../../sources/ICharacter.interface';
import GetCharactersMock from '../../sources/GetCharactersMock';
import CharacterList from './CharacterList';

describe('CharacterList', () => {
  describe('with characters', () => {
    const characters: ICharacter[] = GetCharactersMock;
    const wrapper = shallow(<CharacterList characters={characters}/>);
    // const character: ICharacter = characters[0];

    describe('renders', () => {
      it('a list item per character', () => {
        const character = wrapper.find('div');
        expect(character).toBeDefined();
      });
    });
  });
});
