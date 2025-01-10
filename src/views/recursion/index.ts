import { mock } from './mock';
import { nodeToConstructorNode, solution } from './solution';
import './style.css';
import { getAppElement } from '@/utils/getAppElement';

export function page() {
  console.log('recursion');
  const app = getAppElement();
  app.innerHTML = `
  <main>
    <seciton class="section">
      <div class="container">
        <h1>Рекурсия</h1>
        <div>Есть дерево такой структуры в "./mock.ts"</div>
        <p>
          <pre>${JSON.stringify(mock, null, 2)}</pre>
        </p>
        <p>Нужно его спарсить как строку "${solution(mock)}"</p>
      </div>
    </seciton>
    <seciton class="section">
      <div class="container">
        <h2>Дополнительно</h2>
        <p>Предположим мы спарсили выше перечисленное как список значений, скобок и операторов. В этом массиве мы можем добавлять, менять местами элементы. Как можно это провалидировать?</p>
        <p>
          <pre>${JSON.stringify(nodeToConstructorNode(mock), null, 2)}</pre>
        </p>
      </div>
    </seciton>
  </main>
`;
}
