/**
 * Time: O(n)
 * Space: O(1)
 */
export function solution<T>(oldIdx: number, newIdx: number, arr: T[]): T[] {
  if (
    oldIdx === newIdx ||
    oldIdx < 0 ||
    newIdx < 0 ||
    oldIdx >= arr.length ||
    newIdx >= arr.length
  )
    return arr;

  const direction = Math.sign(newIdx - oldIdx);
  for (let i = oldIdx; i !== newIdx; i += direction) {
    [arr[i], arr[i + direction]] = [arr[i + direction], arr[i]];
  }

  return arr;
}
