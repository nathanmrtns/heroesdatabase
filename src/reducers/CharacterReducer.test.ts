import {
  searchCharactersActionCreator,
  getCharacterDetailsActionCreator,
  getCharacterDetailsSuccessActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator
} from '../actions/CharacterActionCreators';
import ICharacterState from "../sources/ICharacterState.interface";
import GetCharactersMock from '../sources/GetCharactersMock';
import GetCharacterMock from '../sources/GetCharacterMock';
import CharacterReducer from './CharacterReducer';

const initialState: ICharacterState = {
  characters: [],
  isFetching: false,
};

describe('CharacterReducer action type responses for', () => {
  describe('SEARCH_CHARACTERS', () => {
    const action = searchCharactersActionCreator("Batman");
    const newState = CharacterReducer(initialState, action);

    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
    });
  });

  describe('GET_CHARACTER_DETAILS', () => {
    const action = getCharacterDetailsActionCreator("1");
    const newState = CharacterReducer(initialState, action);

    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
    });
  });

  describe('GET_CHARACTERS_SUCCESS', () => {
    const data = GetCharactersMock ;
    const action = getCharactersSuccessActionCreator(data);
    const newState = CharacterReducer(initialState, action);
    it('fetched characters', () => {
      expect(newState.characters).toEqual(GetCharactersMock);
    });

    it('is not fetching', () => {
      expect(newState.isFetching).toBe(false);
    });
  });

  describe('GET_CHARACTER_DETAILS_SUCCESS', () => {
    const data = GetCharacterMock ;
    const action = getCharacterDetailsSuccessActionCreator(data);
    const newState = CharacterReducer(initialState, action);
    it('fetched characters', () => {
      expect(newState.character).toEqual(data);
    });

    it('is not fetching', () => {
      expect(newState.isFetching).toBe(false);
    });
  });

  describe('GET_CHARACTERS_FAILURE', () => {
    const action = getCharactersFailureActionCreator();
    const newState = CharacterReducer(initialState, action);

    it('has not fetched characters', () => {
      expect(newState.characters).toEqual([]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});
