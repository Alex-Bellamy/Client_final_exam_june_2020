import React, { useEffect, useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import axios from "axios"

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    let response = await axios.get("https://content.viaplay.se/pc-se/serier/samtliga");
    setShows(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
  }

  let content = shows.map((show) => (
        <img src={`${show.content.images.landscape.url}`}/>
    )
  )
  return (
    <div>
      <Header />
      <div id="display-show" class="display-show">{content}</div>
      <Footer />
    </div>
  );
}

export default App;