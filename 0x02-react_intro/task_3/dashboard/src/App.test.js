import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

describe('App Test Suite', () => {
    it('TestGetFullYear', () => {
      expect(getFullYear()).toBe(new Date().getFullYear());
    });
    it('TestGetFooterCopyTrue', () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
    });
    it('TestGetFooterCopyFalse', () => {
        expect(getFooterCopy(false)).toEqual("Holberton Schoool main dashboard");
    });
    it('TestGetLatestNotification', () => {
        expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
  });