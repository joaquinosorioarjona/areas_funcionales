import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../estilos/Leyenda.css'; 

const Leyenda = () => {
  const map = useMap();

  React.useEffect(() => {
    const legend = L.control({ position: 'topleft' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      div.innerHTML = `
        <h4>Días del año 2020</h4>
        <i class="color-1504"></i> 15 de abril<br>
        <i class="color-0906"></i> 9 de junio<br>
        <i class="color-1908"></i> 19 de agosto<br>
        <i class="color-1612"></i> 16 de diciembre<br>
      `;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

export default Leyenda;