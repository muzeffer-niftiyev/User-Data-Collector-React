import style from './Overlay.module.scss';


const Overlay = (props) => {
    return (
        <div className={style.overlay} onClick={props.onOverlayClicked}></div>
    );
}

export default Overlay;