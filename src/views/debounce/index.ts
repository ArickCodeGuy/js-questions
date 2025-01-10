import { initCanvas } from './initCanvas';
import './style.css';
import { getAppElement } from '@/utils/getAppElement';

export function page() {
  const app = getAppElement();
  app.innerHTML = `
  <main>
    <div class="container">
      <h1>Отложенная отрисовка</h1>
      <p>У нас есть элемент, с которым может взаимодействовать пользователь. Рендер этого элемента может занимать какое-то время. Пользователи жалуются, что после взаимодействия с ним у них зависает весь браузер на какое-то время. Как нам исправить это?</p>
      <p>
        <details>
          <summary>Подсказка</summary>
          Модифицируй "handleMouseMove" для того чтобы не засорять стек вызовов функций
          при "mousemove"
        </details>
      </p>
      <p>Перетяни куб с 1 места в другое</p>
      <canvas id="canvas" />
    </div>
  </main>
  `;
  const canvas: HTMLCanvasElement = document.querySelector('#canvas')!;
  initCanvas(canvas);
}
