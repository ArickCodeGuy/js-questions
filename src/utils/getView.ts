export function getView(): string {
  const key = window.location.pathname.split('/')[1];

  switch (key) {
    case 'debounce':
      return 'debounce';
    case 'sort':
      return 'sort';
    case 'recursion':
      return 'recursion';
    default:
      return 'main';
  }
}
