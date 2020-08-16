// Business domain imports
import CharacterActionTypes from './CharacterActionTypes.enum';
import {
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction,
  ISearchCharactersAction
} from './IGetCharactersActions.interface';
import ICharacter from '../sources/ICharacter.interface';

export const searchCharactersActionCreator = (term: string): ISearchCharactersAction => {
  return {
    type: CharacterActionTypes.SEARCH_CHARACTERS,
    term,
    isFetching: true,
  };
}

export const getCharactersSuccessActionCreator = (characters: ICharacter[]): IGetCharactersSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters,
    isFetching: false,
  };
}

export const getCharactersFailureActionCreator = (): IGetCharactersFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
    isFetching: false,
  };
}
