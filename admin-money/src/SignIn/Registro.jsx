import React from 'react'
import { useNavigate } from 'react-router-dom';
import './registro.css'
import './palleteSignIn.css'

const Registro = () => {

    const navigate = useNavigate();
    
    const goToMenu = () =>{
        navigate('/menu');
    }

  return (
   <div>
    <body id='body'>
        <div id='signMain-reg'>
            <div id='signPrinc-reg'>
                <p>Registro</p>
                <input type="text" className='basic-info-reg' placeholder='Nombre(s)'/>
                <input type="text" className='basic-info-reg' placeholder='Apellido(s)'/>
                <input type="text" className='basic-info-reg' placeholder='Correo electronico'/>
                <input type="password" className='basic-info-reg' placeholder='Contraseña'/>
                <input type="password" className='basic-info-reg' placeholder='Confirmar Contraseña'/>
                <button id='cont-btn-reg' onClick={goToMenu}>Crear Cuenta</button>
            </div>
        </div>
        
    </body>
   </div>
   
  )
}

export default Registro
