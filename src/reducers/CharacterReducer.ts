// Import Reducer type
import { Reducer } from 'redux';

// Busines domain imports
import CharacterActions from '../actions/CharacterActions.type';
import CharacterActionTypes from '../actions/CharacterActionTypes.enum';
import ICharacterState from '../sources/ICharacterState.interface';

// Business logic
const initialCharacterState: ICharacterState = {
  character: undefined,
  characters: [],
  isFetching: false,
};

const CharacterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.SEARCH_CHARACTERS: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
        isFetching: action.isFetching,
      };
    }
    case CharacterActionTypes.GET_CHARACTER_DETAILS: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_DETAILS_SUCCESS: {
      return {
        ...state,
        character: action.character,
        isFetching: action.isFetching,
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default CharacterReducer;
