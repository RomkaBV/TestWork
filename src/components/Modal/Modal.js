import React, { Component } from 'react';

import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop">
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
