// 外部测试
import { it, expect, describe } from 'vitest';
import { add } from '../add'

describe('test-add', () => {

  it('add', () => {
    expect(add(1, 1)).toBe(2);
  });

});

