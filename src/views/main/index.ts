import { BASE_PATH } from '@/constants';
import './style.css';
import { getAppElement } from '@/utils/getAppElement';

type List = {
  text: string;
  url: string;
};

export function page() {
  const list: List[] = [
    {
      text: 'Сортировка',
      url: 'sort',
    },
    {
      text: 'Отложенная отрисовка',
      url: 'debounce',
    },
    {
      text: 'Рекурсия',
      url: 'recursion',
    },
  ];

  const app = getAppElement();
  app.innerHTML = `
  <main class="main">
    <div class="container">
      <h1 class="h1">Небольшой сборник задач из реальной жизни по фронту</h1>
      <ul class="list">
        ${list
          .map((i) => `<li><a href="${BASE_PATH}${i.url}">${i.text}</a></li>`)
          .join('')}
      </ul>
    </div>
  </main>
`;
}
