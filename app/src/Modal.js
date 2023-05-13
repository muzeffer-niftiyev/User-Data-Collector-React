import style from "./Modal.module.scss";



const Modal = (props) => {

    return (
    <div className={style["container"]}>
            <h4>Invalid Input</h4>
        <div>
            <p className="modal-text">{props.onModalMessage}</p>
        <button onClick={props.onBtnClicked}>Okay</button>
        </div>
    </div>
    );
};

export default Modal;
