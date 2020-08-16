import React from 'react';
import { mount } from 'enzyme';

import ICharacter from '../../sources/ICharacter.interface';
import GetCharacterMock from '../../sources/GetCharacterMock';
import CharacterListItem from './CharacterListItem';

describe('CharacterListItem', () => {
  const setCharacter = jest.fn();
  const character: ICharacter = GetCharacterMock;
  const wrapper = mount(<CharacterListItem key={character.name} character={character} />);

  describe('renders', () => {
    it('a list item', () => {
      const character = wrapper.find('li')
      expect(character).toBeDefined();
    });
  });
});
