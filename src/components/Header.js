import React from 'react';

function Header(props) {
    const style = {
        color: 'red',
    };
    return (
        <div style={style}>
            hii {props.name} this is the header
        </div>
    );
};

export default Header;