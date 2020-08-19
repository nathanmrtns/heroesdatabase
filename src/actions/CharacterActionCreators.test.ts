// App imports
import GetCharacterMock from '../sources/GetCharacterMock';
import GetCharactersMock from '../sources/GetCharactersMock';
import {
  searchCharactersActionCreator,
  getCharacterDetailsActionCreator,
  getCharacterDetailsSuccessActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator,
} from './CharacterActionCreators';
import CharacterActionTypes from './CharacterActionTypes.enum';

// Tests
describe('searchCharacters', () => {
  it('creates ISearchCharactersAction', () => {
    const term = "Batman";
    const action = searchCharactersActionCreator(term);

    expect(action).toEqual({
      type: CharacterActionTypes.SEARCH_CHARACTERS,
      term,
      isFetching: true,
    });
  });
});

describe('characterDetails', () => {
  it('creates IGetCharacterDetailsAction', () => {
    const id = "1";
    const action = getCharacterDetailsActionCreator(id);

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTER_DETAILS,
      id,
      isFetching: true,
    });
  });
});

describe('getCharacterDetailsSuccess', () => {
  it('creates getCharacterDetailsSuccessAction', () => {
    const action = getCharacterDetailsSuccessActionCreator(GetCharacterMock);

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_DETAILS_SUCCESS,
      character: GetCharacterMock,
      isFetching: false,
    });
  });
});

describe('getCharactersSuccess', () => {
  it('creates IGetCharactersSuccessAction', () => {
    const action = getCharactersSuccessActionCreator(GetCharactersMock);

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
      characters: GetCharactersMock,
      isFetching: false,
    });
  });
});

describe('getCharactersFailure', () => {
  it('creates IGetCharactersFailureAction', () => {
    const action = getCharactersFailureActionCreator();

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
      isFetching: false,
    });
  });
});
