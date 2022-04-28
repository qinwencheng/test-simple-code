// 外部测试
import { it, expect } from 'vitest';
import { isValid } from '../20'
it('isValid', () => {
  expect(isValid('()')).toBe(true);
});

it('isValid', () => {
  expect(isValid('()()')).toBe(true);
});