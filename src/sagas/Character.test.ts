// Libraries
import { call, put } from 'redux-saga/effects';

// App imports
import {
  searchCharactersActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator,
} from '../actions/CharacterActionCreators';

import GetCharactersMock from '../sources/GetCharactersMock';

import {
  searchCharactersFromApi,
} from '../sources/Api';

import {
  searchCharactersSaga,
} from './Character';

// Tests
describe('searchCharacters', () => {
  it('success triggers success action with characters', () => {
    const term = 'Batman';
    const generator = searchCharactersSaga(searchCharactersActionCreator(term));
    const response = { data: { results: GetCharactersMock } };

    expect(generator.next().value)
      .toEqual(call(searchCharactersFromApi, term));

    expect(generator.next(response).value)
      .toEqual(put(getCharactersSuccessActionCreator(GetCharactersMock)));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });

  it('failure triggers failure action', () => {
    const term = 'Batman';
    const generator = searchCharactersSaga(searchCharactersActionCreator(term));
    const response = {};

    expect(generator.next().value)
      .toEqual(call(searchCharactersFromApi, term));

    expect(generator.next(response).value)
      .toEqual(put(getCharactersFailureActionCreator()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
