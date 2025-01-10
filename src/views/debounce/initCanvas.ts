export function initCanvas(canvas: HTMLCanvasElement) {
  canvas.width = 500;
  canvas.height = 500;
  const blockSize = 50;
  let translateX = canvas.width / 2 - blockSize / 2;
  let translateY = canvas.height / 2 - blockSize / 2;
  const ctx = canvas.getContext('2d')!;

  function init() {
    addEventListeners();
    render();
  }

  // Эту функцию менять нельзя
  function render() {
    // симулируем лаг
    for (let i = 0; i < 1e9; i++) {}

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.fillRect(translateX, translateY, blockSize, blockSize);
  }

  function addEventListeners() {
    canvas.addEventListener('mousedown', handleMouseDown);
  }

  function handleMouseDown() {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp, {
      once: true,
    });
  }

  function handleMouseMove(e: MouseEvent) {
    translateX += e.movementX;
    translateY += e.movementY;

    render();
  }

  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
  }

  function removeEventListeners() {
    canvas.removeEventListener('mousedown', handleMouseDown);
  }

  function destroy() {
    removeEventListeners();
  }

  init();

  return destroy;
}
