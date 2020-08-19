import React from 'react';
import { shallow } from 'enzyme';

import Search from '.';

describe('Search component', () => {
  describe('renders component', () => {
    it('Should render search and submit button and call functions ', () => {
      const change = jest.fn();
      const submit = jest.fn(); 
      const wrapper = shallow(
        <Search value="" onChange={change} onSubmit={submit}/>
      );
      const input = wrapper.find('input'); 
      input.simulate('change', 'bat');
      expect(change).toBeCalled();
      const submitBtn = wrapper.find('button'); 
      expect(submitBtn).toBeDefined();
      submitBtn.simulate('click');
      expect(submit).toBeCalled();
    });
  });
});
