// Business domain imports
import CharacterActionTypes from './CharacterActionTypes.enum';
import {
  ISearchCharactersAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction,
  IGetCharacterDetailsAction,
  IGetCharacterDetailsSuccessAction,
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

export const getCharacterDetailsActionCreator = (id: string): IGetCharacterDetailsAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTER_DETAILS,
    id,
    isFetching: true,
  };
}

export const getCharacterDetailsSuccessActionCreator = (character: ICharacter): IGetCharacterDetailsSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_DETAILS_SUCCESS,
    character,
    isFetching: false,
  };
}


