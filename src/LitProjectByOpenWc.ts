// import {html, css, LitElement} from 'lit';
// import {customElement, property} from 'lit/decorators.js';

// @customElement('lit-project-by-open-wc')
// export class LitProjectByOpenWc extends LitElement {
//   static styles = css`p { color: blue }`;

//   @property()
//   name = 'Somebody';

//   render() {
//     return html`<p>Hello, ${this.name}!</p>`;
//   }
// }










// import { html, css, LitElement } from 'lit';
// import { property } from 'lit/decorators.js';

// @customElement('lit-project-by-open-wc')
// export class LitProjectByOpenWc extends LitElement {

//   static styles = css`
//     :host {
//       display: block;
//       padding: 25px;
//       color: var(--lit-project-by-open-wc-text-color, #000);
//     }
//   `;

//   @property
//   ({ type: String }) header = 'Hey there';

//   @property
//   ({ type: Number }) counter = 5;

//   __increment() {
//     this.counter += 1;
//   }

//   render() {
//     return html`
//       <h2>${this.header} Nr. ${this.counter}!</h2>
//       <button @click=${this.__increment}>increment</button>
//     `;
//   }
// }
