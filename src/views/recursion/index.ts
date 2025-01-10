import { mock } from './mock';
import { nodeToConstructorNode, solution } from './solution';
import './style.css';
import { getAppElement } from '@/utils/getAppElement';

const app = getAppElement();
app.innerHTML = `
  <main>
    <seciton class="section">
      <div class="container">
        <h1>Рекурсия</h1>
        <div>Есть дерево такой структуры в "./mock.ts"</div>
        <pre>${JSON.stringify(mock, null, 2)}</pre>
        <div>Нужно его спарсить как строку "${solution(mock)}"</div>
      </div>
    </seciton>
    <seciton class="section">
      <div class="container">
        <h2>Дополнительно</h2>
        <div>Предположим мы спарсили выше перечисленное как список значений, скобок и операторов. В этом массиве мы можем добавлять, менять местами элементы. Как можно это провалидировать?</div>
        <pre>${JSON.stringify(nodeToConstructorNode(mock), null, 2)}</pre>
      </div>
    </seciton>
  </main>
`;
