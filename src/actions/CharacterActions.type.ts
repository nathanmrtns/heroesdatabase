import {
  ISearchCharactersAction,
  IGetCharacterDetailsAction,
  IGetCharacterDetailsSuccessAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction
} from './IGetCharactersActions.interface';

// Combine the action types with a union (we assume there are more)
type CharacterActions =
  | ISearchCharactersAction
  | IGetCharacterDetailsAction
  | IGetCharacterDetailsSuccessAction
  | IGetCharactersSuccessAction
  | IGetCharactersFailureAction;

export default CharacterActions;
