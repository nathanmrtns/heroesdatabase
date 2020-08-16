import axios from 'axios';
import {
  searchCharactersFromApi,
} from './Api';

// Tests
describe('getCharacters', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  })

  describe('searchCharacters', () => {
    const searchString = 'Luke';

    it('httpClient is called as expected', () => {
      searchCharactersFromApi(searchString);
      expect(axios.get).toHaveBeenCalledWith(`https://superheroapi.com/api.php/10223717305259940/search/${searchString}`);
    });
  });
});
