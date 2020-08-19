import React from 'react';
import { mount } from 'enzyme';
import {Router} from 'react-router';
import {  } from 'history';

import ICharacter from '../../sources/ICharacter.interface';
import GetCharacterMock from '../../sources/GetCharacterMock';
import CharacterListItem from '.';

describe('CharacterListItem', () => {
  const changePage: Function = jest.fn();
  const history = { push: changePage, location: {}, listen: jest.fn() };
  const character: ICharacter = GetCharacterMock;
  const wrapper = mount(
    <Router history={history}>
      <CharacterListItem character={character} />
    </Router>,
  )

  describe('renders character card', () => {
    it('a characted card with name', () => {
      const characterImg = wrapper.find('img')
      const characterName = wrapper.find(<span>Batman II</span>)
      expect(characterImg).toBeDefined();
      expect(characterName).toBeDefined();
    });
  });

  describe('on click should call function', () => {
    it('a characted card with name', () => {
      const characterCard = wrapper.find('div.hero-card')
      characterCard.simulate('click');
      expect(changePage).toBeCalledTimes(1)
    });
  });
});
