import { useEffect, useState } from 'react';

const useFetch = () => {
  const [userData, setUserData] = useState([]);
  async function fetchData() {
    // TO DO: change url to meet assignment requirements
    let url = 'https://randomuser.me/api/?results=20';
    let resp = await fetch(url);
    let data = await resp.json();
    setUserData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { userData };
};

export default useFetch;
