// Вызываем эту функцию как `const delayedRender = solution(render)`
// И заменяем в `handleMouseMove` `render` на `delayedRender`

/**
 *  @param delay - ms
 */
export function solution(
  fn: () => void,
  delay: number = 1000 / 60
): () => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function () {
    if (timeout) return;

    timeout = setTimeout(() => {
      fn();
      timeout = null;
    }, delay);
  };
}
