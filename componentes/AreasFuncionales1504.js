import React, { useEffect } from 'react';
import { GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import data from '../datos/functional_areas_1504.json'; 

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const AreasFuncionales1504 = () => {
  const style = (feature) => ({
    fillColor: getRandomColor(),
    weight: 2,
    opacity: 1,
    color: 'black', 
    fillOpacity: 0.7
  });

  return <GeoJSON data={data} style={style} />;
};

export default AreasFuncionales1504;