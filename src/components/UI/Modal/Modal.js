import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Modal = ({ closeModal, children, title }) => {
  const Backdrop = ({ closeModal }) => {
    return <div className={classes.backdrop} onClick={closeModal}></div>;
  };
  const Overlay = ({ closeModal }) => {
    return (
      <dialog className={classes.dialog} open>
        <div className={classes.head}>
          <h1>{title}</h1>
          <h1 role="button" onClick={closeModal}>
            &#x1F5D9;
          </h1>
        </div>
        {children}
      </dialog>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay closeModal={closeModal} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Modal;
