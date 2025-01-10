# Отложенная отрисовка

У нас есть элемент, с которым может взаимодействовать пользователь. Рендер этого элемента может занимать какое-то время. Пользователи жалуются, что после взаимодействия с ним у них зависает весь браузер на какое-то время. Как нам не сасорять колстэк множеством вызовов?

```html
<details>
  <summary>Подсказка</summary>
  Модифицируй `handleMouseMove` для того чтобы не засорять стек вызовов функций
  при `mousemove`
</details>
```