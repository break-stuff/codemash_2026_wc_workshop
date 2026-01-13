import { MyButton_2 } from './button-2.js';

export type * from './button-2.js';

customElements.define('my-button-2', MyButton_2);

declare global {
  /**
   * adds component custom elements to the global HTML element map
   * no other changes need to be made here
   */
  interface HTMLElementTagNameMap {
    'my-button-2': MyButton_2;
  }
  
  /** 
   * adds component custom events to the global JS event map
   * add new custom events here
   */
  interface GlobalEventHandlersEventMap {
    'custom-event': CustomEvent;
  }
}