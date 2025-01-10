export async function importView(route: string): Promise<void> {
  const path = '../views/' + route + '/index.ts';

  import(/* @vite-ignore */ path);
}
