import './index.js';
import { expect, fixture, html } from '@open-wc/testing';
import type { MyButton_2 } from './button-2.js';

describe('MyButton_2', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<MyButton_2>(html`<my-button-2></my-button-2>`);
      await expect(el).to.be.accessible();
    });
  });
});
