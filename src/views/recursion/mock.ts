import { Node } from './types';

export const mock: Node[] = [
  {
    val: 1,
    // Если есть nextOperator
    // То должен быть next
    nextOperator: '+',
  },
  {
    val: 6,
    nextOperator: '/',
    next: [
      {
        val: 2,
        nextOperator: '-',
        next: [
          {
            val: 3,
            nextOperator: '/',
            next: [
              {
                val: 5,
                nextOperator: '-',
              },
              {
                val: 4,
              },
            ],
          },
        ],
      },
    ],
  },
];
