import Form from "./Form";
import Results from "./Results";
import style from "./App.module.scss";
import { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";

const resultArr = [];

const App = () => {
  const [item, setItem] = useState(resultArr);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState('');


  const addNewData = (newData) => {
    if(newData.name === '' || newData.age === '' ){
      setHasError(true);
      setMessage(`Please enter both your name and age.`)
      return;
    };
    console.log(newData);

    if(newData.age <= 0 || typeof +newData.age !== 'number'){
      console.log(typeof newData.age);
      setHasError(true);
      setMessage(`Please enter a valid age.`);
      return;
    }
    setItem((prev) => [newData, ...prev]);
  };

  const modalBtnHandle = () => {
    setHasError(false);
  }

  const overlayClicked = () => {
    setHasError(false);
  }

  return (
    <div className={style.container}>
      {hasError && <Overlay onOverlayClicked={overlayClicked}/>}
      {hasError && <Modal onBtnClicked={modalBtnHandle} onModalMessage={message}/>}
      <Form onSumbitHandler={addNewData} />
      <Results renderData={item} />
    </div>
  );
};

export default App;
