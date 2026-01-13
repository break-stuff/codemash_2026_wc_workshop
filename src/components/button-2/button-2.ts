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
 * @cssprop [--button-border-radius=4px] - Controls the broder radius of the button
 * 
 * @csspart control - adds style hook to button
 * 
 * @slot - the button text
 * @slot icon - the icon before the button
 * 
 * @event {CustomEvent<{timeStamp: number}>} high-five - Emitted when the button is clicked
 **/
export class MyButton_2 extends LitElement {
  static override styles = styles;

  /** Sets the label above the button */
  @property()
  label?: string;

  /** Disables the button when `true` */
  @property({ type: Boolean })
  disabled?: boolean;

  clickHandler() {
    /** @internal */
    this.dispatchEvent(
      new CustomEvent<{ timeStamp: number }>('high-five', {
        detail: {
          timeStamp: Date.now(),
        },
        bubbles: false
      }),
    );
  }

  override render() {
    return html`
      <div>${this.label}</div>
      <button
        part="control"
        ?disabled=${this.disabled}
        @click=${this.clickHandler}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `;
  }
}

export default MyButton_2;
