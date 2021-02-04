import React from 'react';

import './styles.css';

function Header({title, title2, title3, title4, title5, title6, title7}){
    return (
        <div className="header">
            <h3>{title}</h3>
            <h3>{title2}</h3>
            <h3>{title3}</h3>
            <h3>{title4}</h3>
            <h3>{title5}</h3>
            <h3>{title6}</h3>
            <h3>{title7}</h3>
        </div>
    )
}

export default Header