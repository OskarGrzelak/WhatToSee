import React from 'react';
import MonumentsIcons from '../../MonumentsIcons/MonumentsIcons';
import styles from './Header.module.css';

const header = (props) => {
    let style = [styles.Header];
    if (props.type === 'main') style.push(styles.HeaderMain);
    return (
        <div className={style.join(' ')}>
            <MonumentsIcons style={{transform: 'translateY(5px)', color: '#37AFFF', fontSize: '12rem'}} />
            <h1>The best places</h1>
            <h2>to see in {props.type === 'main' ? (<input type="text" onChange={(e) => props.changeCity(e)} value={props.city} />) : props.city}</h2>
            {props.type === 'main' ? (<button>Check it!</button>) : null }
        </div>
    )
}

export default header;