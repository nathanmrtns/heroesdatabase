import {
  setCharacterActionCreator,
  getCharactersStartActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator
} from '../actions/CharacterActionCreators';
import ICharacterState from "../sources/ICharacterState.interface";
import GetCharacterMock from '../sources/GetCharacterMock';
import GetCharactersMock from '../sources/GetCharactersMock';
import CharacterReducer from './CharacterReducer';

const initialState: ICharacterState = {
  characters: [],
  isFetching: false,
};

describe('CharacterReducer action type responses for', () => {
  describe('GET_CHARACTERS_START', () => {
    const action = getCharactersStartActionCreator();
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

  describe('GET_CHARACTERS_FAILURE', () => {
    const action = getCharactersFailureActionCreator();
    const newState = CharacterReducer(initialState, action);

    it('has not fetched characters', () => {
      expect(newState.characters).toEqual([]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});
