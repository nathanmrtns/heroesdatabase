import { call, put, takeEvery, all } from 'redux-saga/effects';
import CharacterActionTypes from '../actions/CharacterActionTypes.enum';

import {
  searchCharactersFromApi,
  getCharacterDetailsFromApi,
} from '../sources/Api';

import {
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator,
  getCharacterDetailsSuccessActionCreator
} from '../actions/CharacterActionCreators';

import {
  ISearchCharactersAction, IGetCharacterDetailsAction
} from '../actions/IGetCharactersActions.interface';

export function* searchCharactersSaga(action: ISearchCharactersAction) : any {
  try {
    const response = yield call(searchCharactersFromApi, action.term);
    const characters = response.data.results;
    yield put(getCharactersSuccessActionCreator(characters))
  } catch(e) {
    yield put(getCharactersFailureActionCreator());
  }
};


export function* getCharacterDetailSaga(action: IGetCharacterDetailsAction) : any {
  try {
    const response = yield call(getCharacterDetailsFromApi, action.id);
    const character = response.data;
    yield put(getCharacterDetailsSuccessActionCreator(character))
  } catch(e) {
    yield put(getCharactersFailureActionCreator());
  }
};


export function* charactersSaga() {
  yield all([
    takeEvery(CharacterActionTypes.SEARCH_CHARACTERS, searchCharactersSaga),
    takeEvery(CharacterActionTypes.GET_CHARACTER_DETAILS, getCharacterDetailSaga)
  ]);
}
