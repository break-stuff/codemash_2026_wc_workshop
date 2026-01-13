import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './button-2.styles.js';

/**
 * Add a description here
 *
 * @tag my-button-2
 * @since 0.0.0
 * @status experimental
 *
 **/
export class MyButton_2 extends LitElement {
  static override styles = styles;

  @property()
  label?: string;

  @property({ type: Boolean })
  disabled?: boolean;

  override render() {
    return html`
      <div>${this.label}</div>
      <button 
        part="control" 
        ?disabled=${this.disabled}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `;
  }
}

export default MyButton_2;
