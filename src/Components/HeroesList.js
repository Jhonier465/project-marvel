import React, { useEffect, useState } from 'react';
import axios from 'axios';

const publicKey = 'bf76db70fd9d56b7bfb673cde4a33ae0';
const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=10`;

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
    <div  style={{ backgroundColor: "lightblue", padding:"20px", textAlign:"center"}}>
      <h1>Mis héroes de Marvel</h1>
      <div className="heroes-list" style={{display:"flex", flexWrap:"wrap"}}>
        {heroes.map((hero) => (
          <div key={hero.id} className="hero" style={{flex:"1", padding:"20px",textAlign:"center",margin:"20px"}}>
            <h3>{hero.name}</h3>
            <img style={{width:"300px", height:"300px"}}
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
