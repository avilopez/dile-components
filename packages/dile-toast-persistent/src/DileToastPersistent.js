import { LitElement, html, css } from "lit";
import { DileOverlayMixin } from "@dile/dile-overlay-mixin";

export class DileToastPersistent extends DileOverlayMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
      }
      span {
        position: fixed;
        bottom: 0px;
        left: 0px;
        
        width: 0;
        height: 0;
      }
      :host([opened]) section {
        transform: translateX(0);
      }
      :host([right]) span {
        right: 0px;
        left: auto;
      }
      #overlay {
        box-sizing: border-box;
        color: var(--dile-toast-persistent-color, #303030);
        z-index: var(--dile-toast-persistent-z-index, 999);
        background-color: var(--dile-toast-persistent-background-color, #fff);
        border-radius: var(--dile-toast-persistent-border-radius, 5px);
        width: var(--dile-toast-persistent-width, 280px);
        max-width: var(--dile-toast-persistent-max-width, 300px);
        box-shadow: var(--dile-toast-persistent-box-shadow, 0 0 20px rgba(102, 102, 102, 0.5));
        padding: var(--dile-toast-persistent-padding, 1px);
        display: none;
        position: absolute;
        opacity: 0;
        transition: var(--dile-toast-persistent-transition, ease 0.5s);
        transition-property: transform, opacity;
        transform: translateY(-10px);
      }
      #overlay.opened {
        opacity: 1;
        transform: translateY(0);
      }
      #trigger {
        display: flex;
      }
    `;
  }

  static get properties() {
    return {
      right: { 
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.horizontalAlign = 'left';
    this.verticalAlign = 'top';
    this.moveLeft = -10;
    this.moveTop = -16;
  }
  
  updated(changedProperties) {
    if(changedProperties.has('right') && this.right !== undefined) {
      this.horizontalAlign = this.right ? 'left' : 'right';
    }
  }

  render() {
    return html`
      <span id="trigger">
        <div
          id="overlay"
          class="${this._overlayClass}"
        >
          <slot></slot>
        </div>
      </span>
    `;
  }

}