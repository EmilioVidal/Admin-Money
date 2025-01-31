import React from 'react'
import './SignIn.css'
import './palleteSignIn.css'
import { useNavigate } from 'react-router-dom';


const Sign_in = () => {
    
    const navigate = useNavigate();

    const goToRegistro = () => {
      navigate('/registro');
    };

    const goToBien = () => {
        navigate('/bienvenido');
      };

  return (
   <div>
    <body id='body'>
        <div id='signMain'>
            <div id='signPrinc'>
                <p>Iniciar Sesión</p>
                <input type="text" id='correo-inp' placeholder='Correo electronico'/>
                <button id='cont-btn' onClick={goToBien} >Continuar</button>
            </div>
            <div id='registro'>
                <p id='cuenta'>¿No tienes cuenta?</p>
                <p id='reg' onClick={goToRegistro}>Registrarme</p>
            </div>
        </div>
        
    </body>
   </div>
   
  )
}

export default Sign_in
