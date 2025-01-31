import React from 'react';
import './palleteSignIn.css';
import './menuPrinc.css';
import perfil from '../assets/perf.jpg';
import azul_btn from '../assets/BTN-AZ.png';

const MenuPrincipal = () => {

    var periodo = "semana";
    var balance = "-500";
  return (
    <div id="bodyP">
      <div id="bannerP">
        <div id='texto-banner'>
            <p id='titulo-banner'>Balance de la</p>
            <p id='periodo-banner'>{periodo}</p>
            <p id='balanceP'>{balance}</p>
        </div>
        <img src={perfil} alt="foto-perifl" id='pp-banner'/>
      </div>
      <div id='main-infoP'>
        <div id='paginasP'>
            <p>Ahorros</p>
            <p>Historial</p>
            <p>Tarjetas</p>
        </div>
        <p id='historialP'>Historial</p>
        <div id='hostorialMenu'>
            <div id='gastosP'>
            </div>
            <button id='mas-btn'>
                <img id = 'btn-img' src={azul_btn} alt="" />
            </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPrincipal;
