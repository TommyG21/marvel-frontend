import { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.results.map((character, index) => {
        return (
          <div>
            <h4>{character.name}</h4>
            <img
              style={{ height: 30 }}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt="character"
            />
            {character.description && <div>{character.description}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
