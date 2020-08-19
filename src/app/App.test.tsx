import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe("App Component", () => {
  const wrapper = shallow(
    <App />
  );
  it("should render without throwing an error", () => {
    expect(wrapper).toBeDefined()
  });
});