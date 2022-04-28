/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const leftList: string[] = ['(', '{', '['];
  const rightList: string[] = [')', '}', ']'];
  const nowStack: string[] = [];
  for (let i of s) {
    const _id = leftList.indexOf(i);
    if (_id !== -1) {
      nowStack.push(rightList[_id]);
    } else {
      if (nowStack[nowStack.length - 1] !== i) {
        return false;
      } else {
        nowStack.pop();
      }
    }
  }
  return !(nowStack.length);
}
export {isValid}
// @lc code=end

// 内联测试
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('isValid', () => {
    expect(isValid('()')).toBe(true);
  });

  it('isValid', () => {
    expect(isValid('()()')).toBe(true);
  });
}

