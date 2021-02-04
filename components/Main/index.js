import React from 'react';

import './styles.css';

import Grid from '../Grid/index';

import List from '../List/index';

function Main({name, course, periodo, matricula, nivel, creditos, carga}){
    return(
        <div className="main">
            <div className="main-title">
                <h3>Visualização de Inscrição em Disciplinas</h3>
            </div>
            <div className="main-header">
                <h3><b>Informações do aluno:</b></h3>
                <div className="infos1">
                    <h4>Nome: {name}</h4>
                    <h4>Curso: {course}</h4>
                </div>
                <div className="infos2">
                    <h4>Período: {periodo} / Matrícula: {matricula}</h4>
                    <h4>Nível: {nivel}</h4>
                </div>
                <div className="infos3">
                    <h4>Créditos: {creditos}</h4>
                    <h4>Carga Semanal: {carga}</h4>
                </div>
            </div>
            <div className="main-container">
                <Grid/>
                <List
                cod1="ALGLIN" class1="Álgebra Linear"
                dias1="Seg e Qua (14:00 às 15:00)" prof1="Amanda Costa"
                cod2="INTENG" class2="Introdução à Engenharia Mecânica"
                dias2="Ter e Qui (9:00 às 11:00)" prof2="João Pereira"
                cod3="CALCII" class3="Cálculo II"
                dias3="Seg, Qua e Sex (18:00 às 20:00)" prof3="Maria Souza"
                cod4="FISEXP" class4="Física Experimental"
                dias4="Ter e Qua (8:00 às 10:00)" prof4="Eugênio Torres"
                cod5="QUIMICAI" class5="Química I"
                dias5="Qua e Sex (12:00 às 13:00)" prof5="Arnaldo Valério"
                cod6="PROGI" class6="Programação"
                dias6="Ter e Qui (16:00 às 17:00)" prof6="Maria Souza"/>
            </div>
        </div>
    )
}

export default Main;