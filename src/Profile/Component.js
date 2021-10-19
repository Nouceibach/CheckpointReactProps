import React from 'react';
import PropTypes from 'prop-types';

const Component= props => {
    return (
        <div>
            <h1>Hello {props.fullName} </h1>
            <h2>Bio: {props.bio} </h2>
            <h3>Profession: {props.profession} </h3>
            {props.children}
        </div>
    )
}
Component.defaultProps ={
fullName:"Larine",
bio:"biographie",
profession:"Professeur"
};
Component.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
};

export default Component


