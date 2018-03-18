import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a state of search set to empty string by default', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.state().search).toEqual('');
  });

  it('should run the search prop method when searchInput is invoked', () => {
    const mockSearch = jest.fn();
    const mockEvent = {target: {value: 'example'}};
    const wrapper = shallow(<Nav search={mockSearch}/>);
    wrapper.instance().searchInput(mockEvent);
    expect(mockSearch).toHaveBeenCalled();
  });

  it('should update state on invoking searchInput', () => {
    const mockSearch = jest.fn();
    const mockEvent = {target: {value: 'example'}};
    const wrapper = shallow(<Nav search={mockSearch}/>);
    wrapper.instance().searchInput(mockEvent);
    expect(wrapper.state().search).toEqual(mockEvent.target.value);
    expect(wrapper.state().search).toEqual('example');
  });

  it('should reset the state on method clearSearch', () => {
    const mockSearch = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {value: 'hello'}
    };
    const wrapper = shallow(
      <Nav search={mockSearch} />
    );
    wrapper.instance().searchInput(mockEvent);
    wrapper.instance().clearSearch(mockEvent);
    expect(wrapper.state().search).toEqual('');
  });
});