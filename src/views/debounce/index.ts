import { initCanvas } from './initCanvas';
import './style.css';
import { getAppElement } from '@/utils/getAppElement';

const app = getAppElement();
app.innerHTML = `
<main>
  <div class="container">
    <h1>Отложенный вызов</h1>
    <div>Перетяни куб с 1 места в другое</div>
    <canvas id="canvas" />
  </div>
</main>
`;
const canvas: HTMLCanvasElement = document.querySelector('#canvas')!;
initCanvas(canvas);
