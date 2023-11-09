import React, { useEffect, useState } from 'react';

const DisneyCharacters = () => {

  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);

  // function which call the disney api
  const getCharacters = async () => {
    const response = await fetch(`https://api.disneyapi.dev/character?pageSize=5&page=${page}`);
    const { data } = await response.json();
    setCharacters(data);
  }

  // Mounting phase get the first page characters
  // Updating phase when the page is updated
  useEffect(() => {

    getCharacters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexWrap: 'wrap',
        }}
      >
        {characters.map(({ name, imageUrl }) => (
          <img key={name} src={imageUrl} alt={name} style={{
            margin: 10
          }} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >Prev</button>
        <button onClick={() => {
          setPage(page + 1);
        }}>Next</button>
      </div>
    </>
  );
}

export default DisneyCharacters;