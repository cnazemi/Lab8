/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 
describe('entry', () => {
    

    test('Test1', () => {
      expect(pushToHistory("entry", 1).length).toBe(2);
    });

    test('Test2', () => {
        expect(pushToHistory("entry", 2).length).toBe(3);
    });

    

    
  
    
});

describe('settings', () => {
    test('Test3', () => {
        expect(pushToHistory("settings", 3).length).toBe(4);
    });
    test('Test4', () => {
        expect(pushToHistory("settings", 3).state).toEqual({ page: 'settings' });
    });
});




describe('other', () => {
    // put pushToHistory("test", 0) in var and call then
    test('Test5', () => {
        expect(pushToHistory("test", 0).length).toBe(6);
    });
    test('Test6', () => {
        expect(pushToHistory("test", 0).length).toBe(7);
    });

    test('Test7', () => {
        expect(pushToHistory("test", 0).state).toEqual({  });
    });



});
 