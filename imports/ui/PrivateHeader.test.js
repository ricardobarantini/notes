import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { PrivateHeader } from './PrivateHeader';

configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('PrivateHeader', function () {
    it('should set button text to logout', function () {
      const wrapper = mount(<PrivateHeader title="Test title" handleLogout={() => {}}/>);
      const buttonText = wrapper.find('.button').text();
      expect(buttonText).toBe('Logout');
    });

    it('should use title prop as h1 text', function () {
      const title = 'Test title here';
      const wrapper = mount(<PrivateHeader title={title} handleLogout={() => {}}/>);
      const h1TitleText = wrapper.find('h1').text();
      expect(h1TitleText).toBe(title);
    });

    it('should call the function', function () {
      const spy = expect.createSpy();
      spy(1);
      spy('Ricardo');
      expect(spy).toHaveBeenCalledWith(1);
    });

    it('should call handle logout on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount(<PrivateHeader title="Title" handleLogout={spy}/>);
      wrapper.find('button').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
}