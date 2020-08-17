import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import App from './App';
import CharacterContainer from '../components/CharacterContainer/CharacterContainer';

describe('App', () => {
  const wrapper = shallow(<App />);

  describe('renders', () => {
    it('CharacterContainer', () => {
      // const element = <div />;
      // TODO APP TEST
      expect(true).toEqual(true);
    });
  });
});
