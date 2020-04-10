import React from 'react';

const Input = (props) => {
    return (
        <React.Fragment>
            <label className={props.classNameLabel}>{props.label}</label>
            <input
                className={props.className}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
            />
        </React.Fragment>
    );
};

export default Input;