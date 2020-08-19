import React from 'react';
import { shallow } from 'enzyme';

import ICharacter from '../../sources/ICharacter.interface';
import GetCharactersMock from '../../sources/GetCharactersMock';
import CharacterListItem from '../CharacterListItem';
import CharacterList from '.';

describe('CharacterList', () => {
  describe('with characters', () => {
    const characters: ICharacter[] = GetCharactersMock;
    const wrapper = shallow(<CharacterList characters={characters}/>);
    const character: ICharacter = characters[0];

    describe('renders list with characters', () => {
      it('a list item per character', () => {
        const characterCard = wrapper.find(<CharacterListItem character={character}/>);
        expect(characterCard).toBeDefined();
      });
    });
  });

  describe('without characters', () => {
    const characters: ICharacter[] = [];
    const wrapper = shallow(<CharacterList characters={characters}/>);

    describe('renders a message with not found message', () => {
      it('a message not found', () => {
        let message = "Cerebro could not find your hero. Maybe he is using Magneto's helmet.";
        let element = wrapper.find('h2');
        expect(element.contains(message)).toBe(true);
      });
    });
  });
});