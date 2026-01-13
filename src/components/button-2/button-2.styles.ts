import { css } from 'lit';

export default css`
  :host {
    --button-border-radius: 4px;
    --button-color: white;
    --button-bg-color: darkgreen;
    --button-padding: 1rem;
  }
  button {
    background-color: var(--button-bg-color);
    color: var(--button-color);
    padding: var(--button-padding);
    border-radius: var(--button-border-radius, 4px);
  }
`;
