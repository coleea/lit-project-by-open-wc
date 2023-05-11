// import { LitProjectByOpenWc } from './LitProjectByOpenWc.js';
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-project-by-open-wc')
export class LitProjectByOpenWc extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  render() {
    return html`<p>Hello111, ${this.name}!</p>`;
  }
}


window.customElements.define('lit-project-by-open-wc', LitProjectByOpenWc);
