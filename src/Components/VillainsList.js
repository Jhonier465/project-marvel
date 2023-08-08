import React, { useEffect, useState } from 'react';
import axios from 'axios';

const publicKey = 'bf76db70fd9d56b7bfb673cde4a33ae0';
const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=10&=false`;

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
    <div style={{ backgroundColor: "gray", padding:"20px", textAlign:"center"}}>
    <h1>Mis villanos de Marvel</h1>
    <div className="villains-list" style={{display:"flex", flexWrap:"wrap"}}>
      {villains.map((villa) => (
        <div key={villa.id} className="villa" style={{flex:"1", padding:"20px",textAlign:"center",margin:"20px"}}>
          <h2>{villa.name}</h2>
          <img style={{width:"300px", height:"300px"}}
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