import axios from 'axios';
import {
  getCharacterDetailsFromApi,
  searchCharactersFromApi,
} from './Api';

// Tests
describe('getCharacters', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  })

  describe('searchCharacters', () => {
    const searchString = 'Batman';

    it('httpClient is called as expected', () => {
      searchCharactersFromApi(searchString);
      expect(axios.get).toHaveBeenCalledWith(`https://superheroapi.com/api.php/10223717305259940/search/${searchString}`);
    });
  });

  describe('characterDetails', () => {
    const charId = '71';

    it('httpClient is called as expected', () => {
      getCharacterDetailsFromApi(charId);
      expect(axios.get).toHaveBeenCalledWith(`https://superheroapi.com/api.php/10223717305259940/${charId}`);
    });
  });
});
