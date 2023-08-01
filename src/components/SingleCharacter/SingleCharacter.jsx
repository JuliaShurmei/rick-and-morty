import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleCharacter.scss";
import HomeButton from "../HomeButton/HomeButton";

const SingleCharacter = () => {
  const params = useParams();
  const [characters, setCharacters] = useState([]);
  let { name, origin, gender, image, status, species, episode } = characters;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${params.characterId}`
        );
        const data = await response.json();
        setCharacters(data);
      } catch (e) {
        console.log("error", e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <HomeButton />
      <div className='card-container'>
        <div className='single-card'>
          <div className='card-image'>
            <img className='single-image' src={image} alt="Pictire of character"></img>
          </div>
          <div className='card-details'>
            <div className='card-info'>
              <span className='card-property'>Name: </span>
              <div>{name}</div>
            </div>
            <div className='card-info'>
              <span className='card-property'>Gender:</span>
              <div>{gender}</div>
            </div>
            <div className='card-info'>
              <span className='card-property'> Status: </span>
              <div>{status} </div>
            </div>
            <div className='card-info'>
              <div className='card-property'>Origin:</div>
              <div>{origin?.name} </div>
            </div>
            <div className='card-info'>
              <span className='card-property'>Species: </span>
              <div>{species} </div>
            </div>
            <div className='card-info'>
              <span className='card-property'>First appeared in: </span>
              <div>{episode?.[0].split("/episode/")[1]} episode</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCharacter;
