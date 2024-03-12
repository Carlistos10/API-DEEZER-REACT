import React from 'react';
import './eliminar.css'

export const Eliminar = ({ onEliminar }) => {
    return (
        <button onClick={onEliminar} className='boton'>Eliminar</button>
    );
};
