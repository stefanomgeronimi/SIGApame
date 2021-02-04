import React from 'react';

import './styles.css'

export default function Topo(){
    return (
        <div className="header-topo">
            <div className="topo1">
                <img className="img-portal" src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/41/f5/a4/41f5a455-0712-5658-101f-b11ce8bc4299/source/200x200bb.jpg"/>
                <p>Portal UFRJ</p>
            </div>
            <div className="topo2">
                <div className="topo2a">
                    <h2>Stefano Motta Geronimi</h2>
                    <h3>Aluno</h3>
                </div>
                <div className="topo2b">
                    <img className="img-perfil" src="https://elaele.com.br/img/anonimo.png"/>
                </div>
            </div>
        </div>    
    )
}