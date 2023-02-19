export { default } from './Modal.jsx';
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .modal__content {
    max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
}