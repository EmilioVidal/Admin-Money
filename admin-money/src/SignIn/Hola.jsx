import React from 'react'
import './hola.css'
import './palleteSignIn.css'
import { useNavigate } from 'react-router-dom';


const Hola = () => {
    
    var nombre = "Pepe";
    var correo = "pepe@gmail.com";
    const navigate = useNavigate();

    const goToMenu= () => {
      navigate('/menu');
    };

  return (
   <div>
    <body id='body'>
        <div id='signMain-hola'>
            <div id='signPrinc-hola'>
                <p id='titulo-hola'>Hola de nuevo, {nombre}</p>
                <p id='texto-hola'>Inicia sesión con la contraseña</p>
                <p id='correo-hola'>{correo}</p>
                <input type="text" id='correo-inp-hola' placeholder='Contraseña'/>
                <button id='cont-btn-hola' onClick={goToMenu} >Iniciar Sesión</button>
            </div>
        </div>
        
    </body>
   </div>
   
  )
}

export default Hola
