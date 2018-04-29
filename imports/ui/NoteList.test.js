import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { NoteList } from './NoteList';

const notes = [
  {
    _id: 'noteId1',
    title: 'Title 1',
    body: '',
    updatedAt: 0,
    userId: 'userId1'
  }, {
    _id: 'noteId2',
    title: '',
    body: 'Body here',
    updatedAt: 0,
    userId: 'userId2'
  }
];

if (Meteor.isClient) {
  describe('NoteList', function () {
    it('should render NoteListItem for each note', function () {
      const wrapper = mount(<NoteList notes={notes}/>);

      expect(wrapper.find('NoteListItem').length).toBe(2);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(0);
    });

    it('should render NoteListItem if zero notes', function () {
      const wrapper = mount(<NoteList notes={[]} />);

      expect(wrapper.find('NoteListItem').length).toBe(0);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(1);
    });
  });
}