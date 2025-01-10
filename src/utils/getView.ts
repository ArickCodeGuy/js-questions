import * as views from '@/views/index';

export function getView() {
  const key = window.location.pathname.split('/')[2];

  switch (key) {
    case 'debounce':
      return views.default.debounce();
    case 'sort':
      return views.default.sort();
    case 'recursion':
      return views.default.recursion();
    default:
      return views.default.main();
  }
}
