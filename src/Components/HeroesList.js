import React, { useEffect, useState } from 'react';
import axios from 'axios';

const publicKey = 'bf76db70fd9d56b7bfb673cde4a33ae0';
const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=10&isVillain=false`;

const HeroesList = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function getHeroes() {
      try {
        const response = await axios.get(apiUrl);
        const heroesData = response.data.data.results;
        setHeroes(heroesData);
      } catch (error) {
        console.error('Error al obtener la lista de héroes:', error);
      }
    }
    getHeroes();
  }, []);

  return (
    <div>
    <h1>Mis héroes de Marvel</h1>
    <div className="heroes-list">
      {heroes.map((hero) => (
        <div key={hero.id} className="hero">
          <h2>{hero.name}</h2>
          <img
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default HeroesList;
