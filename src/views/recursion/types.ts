export type Operator = '+' | '-' | '*' | '/';

export type Node = {
  val: number;
  nextOperator?: Operator;
  next?: Node[];
};

export type ConstructorNode = ValueNode | OperatorNode | BracketNode;

export type ValueNode = number;

export type OperatorNode = Operator;

export type BracketNode = '(' | ')';
