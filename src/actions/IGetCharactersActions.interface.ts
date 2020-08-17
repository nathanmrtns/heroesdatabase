import ICharacter from '../sources/ICharacter.interface';
import CharacterActionTypes from './CharacterActionTypes.enum';

export interface ISearchCharactersAction {
  type: CharacterActionTypes.SEARCH_CHARACTERS,
  term: string,
  isFetching: true,
}

export interface IGetCharactersSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
  characters: ICharacter[],
  isFetching: false,
}

export interface IGetCharacterDetailsAction {
  type: CharacterActionTypes.GET_CHARACTER_DETAILS,
  id: string,
  isFetching: true,
}

export interface IGetCharacterDetailsSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_DETAILS_SUCCESS,
  character: ICharacter,
  isFetching: false,
}

export interface IGetCharactersFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
  isFetching: false,
}
