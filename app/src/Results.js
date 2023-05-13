import style from './Results.module.scss'

const Results = (props) => {
    const correctedName = (name) => name[0].toUpperCase() + name.slice(1);

    return (
        <div className={style['container']}>
            {props.renderData.map(data => {
                return <p className="data" key={data.id}>{`${correctedName(data.name)} (${data.age} years old)`}</p>;
            })}
        </div>
    );
};

export default Results;
