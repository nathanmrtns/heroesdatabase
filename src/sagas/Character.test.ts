// Libraries
import { call, put } from 'redux-saga/effects';

// App imports
import {
  searchCharactersActionCreator,
  getCharacterDetailsActionCreator,
  getCharacterDetailsSuccessActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator,
} from '../actions/CharacterActionCreators';

import GetCharactersMock from '../sources/GetCharactersMock';
import GetCharacterMock from '../sources/GetCharacterMock';

import {
  searchCharactersFromApi, 
  getCharacterDetailsFromApi
} from '../sources/Api';

import {
  getCharacterDetailSaga,
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

describe('getCharacterDetails', () => {
  it('success triggers success action with character details', () => {
    const id = '71';
    const generator = getCharacterDetailSaga(getCharacterDetailsActionCreator(id));
    const response = { data: { ...GetCharacterMock } };

    expect(generator.next().value)
      .toEqual(call(getCharacterDetailsFromApi, id));

    expect(generator.next(response).value)
      .toEqual(put(getCharacterDetailsSuccessActionCreator(GetCharacterMock)));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });

  it('failure triggers failure action', () => {
    const id = '71';
    const generator = getCharacterDetailSaga(getCharacterDetailsActionCreator(id));
    const response = null;

    expect(generator.next().value)
    .toEqual(call(getCharacterDetailsFromApi, id));

    expect(generator.next(response).value)
      .toEqual(put(getCharactersFailureActionCreator()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
