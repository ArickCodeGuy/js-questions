import './style.css';
import { getAppElement } from '@/utils/getAppElement';
import { genList } from './utils/genList';
import { sortable } from './utils/sortable';

export function page() {
  const app = getAppElement();
  const list = genList();
  app.innerHTML = `
  <main>
    <div class="container">
      <h1>Сортировка</h1>
      <ul>
        ${list.map((i) => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  </main>
`;

  const ul = document.querySelector('ul')!;
  sortable(ul, {
    // Твой код здесь
    ondrop: (oldIdx, newIdx) => {
      console.log(
        `Перетаскивание. Прошлая позиция: ${oldIdx}. Актуальная позиция: ${newIdx}.`
      );
    },
  });
}
