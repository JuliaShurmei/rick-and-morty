import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Characters.scss";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import Loader from "../Loader/Loader";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fetching) {
      async function fetchData() {
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${currentPage}`
          );
          const data = await response.json();
          setCharacters([...characters, ...data.results]);
          setCurrentPage((prevState) => prevState + 1);
        } catch (e) {
          console.log("error", e);
        } finally {
          
          setFetching(false);
          
        }
      }
      fetchData();
      setIsLoading(false);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <div className='container'>
          {characters.map((character) => {
            return (
              <div key={character.id}>
                <Link to={`/${character.id}`}>
                  <div className='item'>
                    <div className='image-container'>
                      <img className='image' src={character.image} alt="Pictire of character"></img>
                    </div>
                    <div className='image-container'>
                      <h1 className='name'> {character.name}</h1>
                    </div>
                    <div className='image-container'>
                      <h1 className='name'> </h1>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}{" "}
        </div>
      )}

      <BackToTopButton />
    </>
  );
};

export default Characters;
