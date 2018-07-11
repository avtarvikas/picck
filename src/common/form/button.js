import React from 'react';

const Button = ({ disabled, value, className }) => {
    let classNames = `button ${className}`;
    return (
        <button
            disabled={disabled}
            className={classNames}
        >
            {value}
        </button>
    );
}

export default Button;