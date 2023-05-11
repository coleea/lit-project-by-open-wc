import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LitProjectByOpenWc } from '../src/LitProjectByOpenWc.js';
import '../src/lit-project-by-open-wc.js';

describe('LitProjectByOpenWc', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<LitProjectByOpenWc>(html`<lit-project-by-open-wc></lit-project-by-open-wc>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LitProjectByOpenWc>(html`<lit-project-by-open-wc></lit-project-by-open-wc>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<LitProjectByOpenWc>(html`<lit-project-by-open-wc header="attribute header"></lit-project-by-open-wc>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LitProjectByOpenWc>(html`<lit-project-by-open-wc></lit-project-by-open-wc>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
