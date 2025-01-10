import { ConstructorNode, Node } from './types';

/**
 * Time: O(n)
 * Space: O(n)
 */
export function solution(nodes: Node[]): string {
  let res = '';

  function recurse(curr: Node): void {
    res += ' ' + curr.val;

    if (curr.nextOperator) {
      res += ' ' + curr.nextOperator;
    }

    if (curr.next) {
      res += ' (';
      curr.next.forEach((node) => {
        recurse(node);
      });
      res += ' )';
    }
  }

  for (const node of nodes) {
    recurse(node);
  }

  return res.slice(1);
}

/** Парсинг для *дополнительно* */
export function nodeToConstructorNode(nodes: Node[]): ConstructorNode[] {
  const res: ConstructorNode[] = [];

  function recurse(curr: Node) {
    res.push(curr.val);

    if (curr.nextOperator) res.push(curr.nextOperator);

    if (curr.next) {
      res.push('(');
      for (const next of curr.next) {
        recurse(next);
      }
      res.push(')');
    }
  }

  for (const node of nodes) {
    recurse(node);
  }

  return res;
}
