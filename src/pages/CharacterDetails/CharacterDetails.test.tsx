import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';

import GetCharacterMock from '../../sources/GetCharacterMock';
import { CharacterDetails } from '.';
import ICharacter from '../../sources/ICharacter.interface';
import Loader from '../../components/Loader';
import NavigationBar from '../../components/NavigationBar';
import Search from '../../components/Search';
import PowerStatsList from '../../components/PowerStatsList';
import { InfoList } from '../../components/InfoList';

// Extract to helper?
interface renderElementParameters {
  getCharDetails: jest.Mock,
  character: ICharacter,
  isFetching: Boolean,
}

const defaultProps: renderElementParameters = {
  getCharDetails: jest.fn(),
  character: GetCharacterMock,
  isFetching: false,
}

const renderCharDetailsComponent = (overrides: any): ReactWrapper => {
  return mount(
    <MemoryRouter initialEntries={['character/71']}>
      <Route route="character/:charId">
        <CharacterDetails
          {...defaultProps}
          {...overrides}
        />
      </Route>
    </MemoryRouter>
  );
}

const mockUseEffect = (): jest.SpyInstance => {
  return jest.spyOn(React, 'useEffect').mockImplementation(f => f());
}

// Tests
describe('CharacterDetailsContainer', () => {
  describe('when fetching', () => {
    const getCharacterDetails = jest.fn().mockResolvedValue(GetCharacterMock);
    const wrapper = renderCharDetailsComponent({ getCharacterDetails, isFetching: true });

    it('display "Loader"', () => {
      const wrapperHTML = wrapper.render().html();
      expect(wrapperHTML).toContain('loader');
    });
  });

  describe('display details', () => {
    const getCharacterDetails = jest.fn().mockResolvedValue(GetCharacterMock);
    mockUseEffect();
    const wrapper = renderCharDetailsComponent({ getCharacterDetails });

    it('calls getCharacterDetails', () => {
      expect(getCharacterDetails).toHaveBeenCalledTimes(1);
    });

    it('display char info', () => {
      expect(wrapper.find(NavigationBar)).toBeDefined();
      expect(wrapper.find(PowerStatsList)).toBeDefined();
      expect(wrapper.find(InfoList)).toBeDefined();
    });
  });
});
