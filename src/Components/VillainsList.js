import React, { useEffect, useState } from 'react';
import axios from 'axios';

const publicKey = 'bf76db70fd9d56b7bfb673cde4a33ae0';
const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=10&isVillain=false`;

const VillainsList = () => {
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    async function getVillains() {
      try {
        const response = await axios.get(apiUrl);
        const villainsData = response.data.data.results;
        setVillains(villainsData);
      } catch (error) {
        console.error('Error al obtener la lista de villanos:', error);
      }
    }
    getVillains();
  }, []);

  return (
    <div>
    <h1>Mis villanos de Marvel</h1>
    <div className="villains-list">
      {villains.map((villa) => (
        <div key={villa.id} className="villa">
          <h2>{villa.name}</h2>
          <img
            src={`${villa.thumbnail.path}.${villa.thumbnail.extension}`}
            alt={villa.name}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default VillainsList;