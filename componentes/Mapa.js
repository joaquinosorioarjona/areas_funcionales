import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import ControlTitulo from './Titulo';
import Leyenda from './Leyenda';
import ControlEscala from './Escala';
import ControlCapas from './ControlCapas';

import AreasFuncionales0906 from './AreasFuncionales0906';
import AreasFuncionales1504 from './AreasFuncionales1504';
import AreasFuncionales1612 from './AreasFuncionales1612';
import AreasFuncionales1908 from './AreasFuncionales1908';


const Mapa = () => {

  return (
    <>
      <MapContainer
        center={[39.98, -3.51]}
        zoom={7}
        style={{ height: '910px', width: '100%' }}
      >
        <ControlTitulo
          title="Áreas funcionales en España durante la pandemia del COVID-19"
          subtitle="Estudio en cuatro periodos distintos a partir de datos de telefonía móvil del INE"
          autor="Autor: Joaquín Osorio Arjona (Doctor en Geografía, Profesor en la UNED)"
        />

        <ControlCapas>

          <ControlCapas.BaseLayer checked name="ArcGIS fondo claro">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/">Esri</a>, USGS, NOAA'
            />
          </ControlCapas.BaseLayer>

          <ControlCapas.BaseLayer name="ArcGIS fondo oscuro">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/">Esri</a>, USGS, NOAA'
            />
          </ControlCapas.BaseLayer>

          <ControlCapas.BaseLayer name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </ControlCapas.BaseLayer>

          <ControlCapas.Overlay checked name="15 de abril de 2020">
            <AreasFuncionales1504 />
          </ControlCapas.Overlay>

          <ControlCapas.Overlay name="19 de agosto de 2020">
            <AreasFuncionales1908 />
          </ControlCapas.Overlay>

          <ControlCapas.Overlay name="16 de diciembre de 2020">
            <AreasFuncionales1612 />
          </ControlCapas.Overlay>

          <ControlCapas.Overlay name="9 de junio de 2021">
            <AreasFuncionales0906 />
          </ControlCapas.Overlay>

        </ControlCapas>

        <ControlEscala />
        <Leyenda />

      </MapContainer>
    </>
  );
};

export default Mapa;

