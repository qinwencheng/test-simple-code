// 外部测试
import { it, expect, describe } from 'vitest';
import { isValid } from '../20'

describe('test-isValid', () => {
  
  it('isValid', () => {
    expect(isValid('()')).toBe(true);
  });

  it('isValid', () => {
    expect(isValid('()()')).toBe(true);
  });

});