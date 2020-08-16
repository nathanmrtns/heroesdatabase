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
export interface IGetCharactersFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
  isFetching: false,
}
