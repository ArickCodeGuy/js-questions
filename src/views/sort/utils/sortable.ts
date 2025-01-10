export type Options = {
  ondrop: (oldIdx: number, newIdx: number) => void;
};

export function sortable(
  sortableContainer: HTMLElement,
  options: Partial<Options> = {}
) {
  let activeElement: HTMLElement | null = null;
  let draggableElement: HTMLElement | null = null;

  // Позиция при нажатии
  let draggableElementOffsetX = 0;
  let draggableElementOffsetY = 0;

  // Перетаскивание
  let draggableElementPositionX = 0;
  let draggableElementPositionY = 0;

  function init(): void {
    [...sortableContainer.children].forEach((child) => {
      addEventListeners(child as HTMLElement);
    });
  }

  function destroy(): void {
    [...sortableContainer.children].forEach((child) => {
      removeEventListeners(child as HTMLElement);
    });
  }

  function addEventListeners(element: HTMLElement): void {
    element.addEventListener('mousedown', handleMouseDown);
  }

  function removeEventListeners(element: HTMLElement): void {
    element.removeEventListener('mousedown', handleMouseDown);
  }

  function handleMouseDown(e: MouseEvent): void {
    activeElement = e.target as HTMLElement;
    draggableElement = activeElement.cloneNode(true) as HTMLElement;
    draggableElement.style.opacity = '.7';

    const activeElementRect = activeElement.getBoundingClientRect();

    draggableElement.style.position = 'absolute';
    draggableElement.style.width = activeElementRect.width + 'px';
    draggableElement.style.height = activeElementRect.height + 'px';

    draggableElementOffsetY = -e.offsetY;
    draggableElementOffsetX = -e.offsetX;
    draggableElementPositionX = e.clientX;
    draggableElementPositionY = e.clientY;
    positionDraggable();

    sortableContainer.insertAdjacentElement('beforeend', draggableElement);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp, {
      once: true,
    });
  }

  function handleMouseMove(e: MouseEvent): void {
    draggableElementPositionY = e.clientY;
    draggableElementPositionX = e.clientX;
    positionDraggable();
  }

  function positionDraggable(): void {
    if (!draggableElement) return;

    draggableElement.style.top =
      draggableElementOffsetY + draggableElementPositionY + 'px';
    draggableElement.style.left =
      draggableElementOffsetX + draggableElementPositionX + 'px';
  }

  function handleMouseUp(e: MouseEvent): void {
    document.removeEventListener('mousemove', handleMouseMove);

    if (draggableElement) {
      draggableElement.remove();
      draggableElement = null;
    }

    if (!activeElement) return;

    const children = [...sortableContainer.children] as HTMLElement[];
    // draggableElement
    children.pop();
    let lastChildIdx = -1;

    // Ищем куда вставить
    // Пока не найдем элемент ниже чем наш курсор
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const rect = child.getBoundingClientRect();
      if (rect.top > e.clientY) break;
      lastChildIdx = i;
    }

    // Игнорируем перетаскивание в ту же позицию
    if (children[lastChildIdx] === activeElement) return;

    const oldIdx = children.indexOf(activeElement);

    activeElement.remove();

    // Перетаскивание в 0 позицию
    if (lastChildIdx === -1) {
      children[0].before(activeElement);
      lastChildIdx = 0;
    } else {
      children[lastChildIdx].after(activeElement);
      if (Math.sign(lastChildIdx - oldIdx) === -1) lastChildIdx++;
    }

    options.ondrop?.(oldIdx, lastChildIdx);
  }

  init();

  return destroy;
}
