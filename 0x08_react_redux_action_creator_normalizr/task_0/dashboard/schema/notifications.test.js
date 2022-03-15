/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { shallow, mount } from 'enzyme';
 import * as db from '../notifications.json';
 import getAllNotificationsByUser from './notifications';

 const dummy = [
  {
    guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
    isRead: true,
    type: "urgent",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
    isRead: false,
    type: "urgent",
    value:
      "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
  }
]

 describe('App Test Suite', () => {
  // beforeEach(() => {
  // });
  // afterEach(() => {
  // });
  it('Function is working', () => {
    getAllNotificationsByUser(dummy);
  });
})