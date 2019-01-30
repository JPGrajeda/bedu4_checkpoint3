import React from 'react';
import { Footer, Button } from 'react-materialize';
// import './Footer.scss';

const Futer = (props) => {
    return (
        <div className="footer-container">
            <p>Faltan {props.agendar} tareas</p>
            <div>
                <Button onClick={() => props.alarmChange("all")} variant="outlined">Todos</Button>
                <Button onClick={() => props.alarmChange("alarmado")} variant="outlined">Completados</Button>
                <Button onClick={() => props.alarmChange("alertado")} variant="outlined">Pendientes</Button>
            </div>
        </div>
    )
}

export default Futer;