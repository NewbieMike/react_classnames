import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../../styles/stylButton.scss'
const Button = () => {
    const buttonError = true;
    const buttonAccept = true;
    const btnClasses = classNames(
        'btn-default', 
        {'btn-accept': buttonAccept === true},
        {'btn-error': buttonError === true});
    return (
        <button className={btnClasses}>Hello!</button>
    );
};

export default Button;