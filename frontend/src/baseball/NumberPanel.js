import React from 'react';

export default function NumberPanel({ onUpClick, onDownClick, value }) {
    const style = {
        margin: '25px'
    }
    return (
        <div style={style}>
            <button onClick={onDownClick}>-</button>
            {value}
            <button onClick={onUpClick}>+</button>
        </div>
    )
}
