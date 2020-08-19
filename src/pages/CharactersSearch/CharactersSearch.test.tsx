import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import GetCharactersMock from '../../sources/GetCharactersMock';
import { CharactersSearch } from '.';
import ICharacter from '../../sources/ICharacter.interface';
import Loader from '../../components/Loader';
import NavigationBar from '../../components/NavigationBar';
import Search from '../../components/Search';

interface renderElementParameters {
  searchCharacters: jest.Mock,
  characters: ICharacter[],
  isFetching: Boolean,
}

const defaultProps: renderElementParameters = {
  searchCharacters: jest.fn(),
  characters: [],
  isFetching: false,
}

const renderCharacterListContainer = (overrides: any): ShallowWrapper => {
  return shallow(
    <CharactersSearch
      {...defaultProps}
      {...overrides}
    />
  );
}

const mockUseEffect = (): jest.SpyInstance => {
  return jest.spyOn(React, 'useEffect').mockImplementation(f => f());
}

// Tests
describe('CharacterListContainer', () => {
  describe('when fetching', () => {
    const wrapper = renderCharacterListContainer({ isFetching: true });

    it('display "Loader"', () => {
      const element = <Loader />;
      expect(wrapper.contains(element)).toBe(true);
    });
  });

  describe('on initial render', () => {
    const characters: ICharacter[] = [];
    const searchCharacters = jest.fn().mockResolvedValue(GetCharactersMock);
    mockUseEffect();
    const wrapper = renderCharacterListContainer({ characters, searchCharacters });

    it('calls getCharacters', () => {
      expect(true)
      expect(searchCharacters).toHaveBeenCalledTimes(1);
    });

    it('navbar, search an list containers', () => {
      expect(wrapper.find('div.characters-container')).toHaveLength(1);
      expect(wrapper.find(<NavigationBar />)).toBeDefined();
      expect(wrapper.find('div.list')).toHaveLength(1);
      expect(wrapper.find(Search)).toBeDefined();
      let submit = wrapper.find(Search).dive().find('button')
      submit.simulate('click', {
        preventDefault: () => { }
      });
      expect(searchCharacters).toHaveBeenCalledTimes(2);
    });
  });
});
