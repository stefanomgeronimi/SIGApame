import React from 'react';

import './styles.css';

export default function List({cod1, class1, dias1, prof1, cod2, class2, dias2, prof2,
     cod3, class3, dias3, prof3, cod4, class4, dias4, prof4, cod5, class5, dias5, prof5, 
     cod6, class6, dias6, prof6}){
    return(
        <div className="list">
            <ul>
                <li id="cabecalho"><b>Inscrito em:</b></li>
                <li>{cod1} - {class1}</li>
                <li>{dias1} - Prof. {prof1}</li>
                <li>{cod2} - {class2}</li>
                <li>{dias2} - Prof. {prof2}</li>
                <li></li>
                <li><b>Matérias disponíveis:</b></li>
                <li>{cod3} - {class3}</li>
                <li>{dias3} - Prof. {prof3}</li>
                <li>{cod4} - {class4}</li>
                <li>{dias4} - Prof. {prof4}</li>
                <li>{cod5} - {class5}</li>
                <li>{dias5} - Prof. {prof5}</li>
                <li>{cod6} - {class6}</li>
                <li>{dias6} - Prof. {prof6}</li>
            </ul>
        </div>
    )
}