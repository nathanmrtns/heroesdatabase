import React from 'react';
import { mount } from 'enzyme';

import ICharacter from '../../sources/ICharacter.interface';
import GetCharacterMock from '../../sources/GetCharacterMock';
import CharacterListItem from '.';

describe('CharacterListItem', () => {
  const character: ICharacter = GetCharacterMock;
  const wrapper = mount(<CharacterListItem character={character} />);

  describe('renders character card', () => {
    it('a characted card with name', () => {
      const characterImg = wrapper.find('img')
      const characterName = wrapper.find(<span>Batman II</span>)
      expect(characterImg).toBeDefined();
      expect(characterName).toBeDefined();
    });
  });
});
