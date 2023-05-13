import style from './Form.module.scss';
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const nameChangeHandler = (e) =>{
        setName(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            name, age, id: Math.random().toString().slice(9)
        }
        props.onSumbitHandler(data);
        setName('');
        setAge('');
    }

    return (
    <form onSubmit={submitHandler} className={style['container']}>
        <div className="label">
            <h3 className="label-title">Username</h3>
            <input onChange={nameChangeHandler} type="text" value={name} />
        </div>

        <div className="label">
            <h3 className="label-title">Age (Years)</h3>
            <input type="text" onChange={ageChangeHandler} value={age}/>
        </div>

        <button>Add User</button>
    </form>
    );
};

export default Form;
