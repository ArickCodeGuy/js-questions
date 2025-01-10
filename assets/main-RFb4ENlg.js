(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const M="/js-questions/";function g(){return document.querySelector("#app")}function $(){const n=[{text:"Сортировка",url:"sort"},{text:"Отложенная отрисовка",url:"debounce"},{text:"Рекурсия",url:"recursion"}],t=g();t.innerHTML=`
  <main class="main">
    <div class="container">
      <h1 class="h1">Небольшой сборник задач из реальной жизни по фронту</h1>
      <ul class="list">
        ${n.map(i=>`<li><a href="${M}${i.url}">${i.text}</a></li>`).join("")}
      </ul>
    </div>
  </main>
`}const E=[{val:1,nextOperator:"+"},{val:6,nextOperator:"/",next:[{val:2,nextOperator:"-",next:[{val:3,nextOperator:"/",next:[{val:5,nextOperator:"-"},{val:4}]}]}]}];function S(n){let t="";function i(e){t+=" "+e.val,e.nextOperator&&(t+=" "+e.nextOperator),e.next&&(t+=" (",e.next.forEach(o=>{i(o)}),t+=" )")}for(const e of n)i(e);return t.slice(1)}function Y(n){const t=[];function i(e){if(t.push(e.val),e.nextOperator&&t.push(e.nextOperator),e.next){t.push("(");for(const o of e.next)i(o);t.push(")")}}for(const e of n)i(e);return t}function N(){console.log("recursion");const n=g();n.innerHTML=`
  <main>
    <seciton class="section">
      <div class="container">
        <h1>Рекурсия</h1>
        <div>Есть дерево такой структуры в "./mock.ts"</div>
        <p>
          <pre>${JSON.stringify(E,null,2)}</pre>
        </p>
        <p>Нужно его спарсить как строку "${S(E)}"</p>
      </div>
    </seciton>
    <seciton class="section">
      <div class="container">
        <h2>Дополнительно</h2>
        <p>Предположим мы спарсили выше перечисленное как список значений, скобок и операторов. В этом массиве мы можем добавлять, менять местами элементы. Как можно это провалидировать?</p>
        <p>
          <pre>${JSON.stringify(Y(E),null,2)}</pre>
        </p>
      </div>
    </seciton>
  </main>
`}function P(n){n.width=500,n.height=500;const t=50;let i=n.width/2-t/2,e=n.height/2-t/2;const o=n.getContext("2d");function s(){d(),l()}function l(){o.fillStyle="black",o.fillRect(0,0,n.width,n.height),o.fillStyle="white",o.fillRect(i,e,t,t)}function d(){n.addEventListener("mousedown",f)}function f(){document.addEventListener("mousemove",m),document.addEventListener("mouseup",x,{once:!0})}function m(a){i+=a.movementX,e+=a.movementY,l()}function x(){document.removeEventListener("mousemove",m)}function y(){n.removeEventListener("mousedown",f)}function p(){y()}return s(),p}function X(){const n=g();n.innerHTML=`
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
  `;const t=document.querySelector("#canvas");P(t)}function T(n=Math.random()){return`Строка: ${n}`}function q(){let n=[];for(let t=0;t<10;t++)n.push(T(t));return n}function A(n,t={}){let i=null,e=null,o=0,s=0,l=0,d=0;function f(){[...n.children].forEach(r=>{x(r)})}function m(){[...n.children].forEach(r=>{y(r)})}function x(r){r.addEventListener("mousedown",p)}function y(r){r.removeEventListener("mousedown",p)}function p(r){i=r.target,e=i.cloneNode(!0),e.style.opacity=".7";const c=i.getBoundingClientRect();e.style.position="absolute",e.style.width=c.width+"px",e.style.height=c.height+"px",s=-r.offsetY,o=-r.offsetX,l=r.clientX,d=r.clientY,L(),n.insertAdjacentElement("beforeend",e),document.addEventListener("mousemove",a),document.addEventListener("mouseup",w,{once:!0})}function a(r){d=r.clientY,l=r.clientX,L()}function L(){e&&(e.style.top=s+d+"px",e.style.left=o+l+"px")}function w(r){var b;if(document.removeEventListener("mousemove",a),e&&(e.remove(),e=null),!i)return;const c=[...n.children];c.pop();let u=-1;for(let h=0;h<c.length&&!(c[h].getBoundingClientRect().top>r.clientY);h++)u=h;if(c[u]===i)return;const O=c.indexOf(i);i.remove(),u===-1?(c[0].before(i),u=0):(c[u].after(i),Math.sign(u-O)===-1&&u++),(b=t.ondrop)==null||b.call(t,O,u)}return f(),m}function H(){const n=g(),t=q();n.innerHTML=`
  <main>
    <div class="container">
      <h1>Сортировка</h1>
<p>Есть массив элементов. Есть перетаскивание. Оно реализуется отдельной либой. Эта либа перемещает элементы только в html. Есть колбек "ondrop(oldIdx: number, newIdx: number)". Нужно синхронизировать то что отображается в html с тем что имеем в массиве.</p>
      <ul>
        ${t.map(e=>`<li>${e}</li>`).join("")}
      </ul>
    </div>
  </main>
`;const i=document.querySelector("ul");A(i,{ondrop:(e,o)=>{console.log(`Перетаскивание. Прошлая позиция: ${e}. Актуальная позиция: ${o}.`)}})}const v={main:$,recursion:N,debounce:X,sort:H};function I(){switch(window.location.pathname.split("/")[2]){case"debounce":return v.debounce();case"sort":return v.sort();case"recursion":return v.recursion();default:return v.main()}}I();
