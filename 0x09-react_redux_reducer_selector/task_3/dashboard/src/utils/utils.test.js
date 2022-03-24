/**
 * @jest-environment jsdom
 */
import { getFullYear,getFooterCopy, getLatestNotification } from './utils';

describe('Utils Test Suite', () => {
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