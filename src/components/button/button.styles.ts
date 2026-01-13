import { css } from 'lit';

export default css`
  :host {
    --button-bg-color: #f0f0f0;
    --button-fg-color: #333;
    --button-border-color: transparent;

    display: inline-flex;
  }

  button {
    cursor: pointer;
    background-color: var(--button-bg-color);
    border: 1px solid var(--button-border-color);
    border-radius: 4px;
    color: var(--button-fg-color);
    padding: 8px 16px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :host([variation='primary']) {
    --button-bg-color: #024996;
    --button-fg-color: white;
    --button-border-color: #024996;
  }

  :host([variation='hollow']) {
    --button-bg-color: transparent;
    --button-fg-color: #024996;
    --button-border-color: #024996;
  }

  :host([variation='transparent']) {
    --button-bg-color: transparent;
    --button-fg-color: #024996;
    --button-border-color: transparent;
  }
`;
