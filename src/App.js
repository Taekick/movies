import React, { useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import axios from 'axios';
import Results from './components/Results/Results';
import Popup from './components/Popup/Popup';

function App() {
  const [state, setstate] = useState({
    query: "",
    results: [],
    seleted: {}
  });
  const apiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=3b8a81dcf96764cb947f1f8d7f764421&language=en-US';
  const apiCover = 'https://api.themoviedb.org/3/movie';

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiSearch + "&query=" + state.query)
        .then(({ data }) => {
          console.log('data:', data)
          let res = data.results;

          setstate(preveState => {
            return { ...preveState, results: res }
          });
        })
    }
  }

  const handleInput = (e) => {
    let val = e.target.value;

    setstate(preveState => {
      return { ...preveState, query: val }
    });
  }

  const openPopup = (id) => {
    axios(apiCover + "/" + id + "?api_key=3b8a81dcf96764cb947f1f8d7f764421&language=en-US").then(({ data }) => {
      console.log('data:', data)
      let result = data;
      setstate(preveState => {
        return { ...preveState, selected: result }

      });
    })
  }

  const closePopup = () => {
    setstate(preveState => {
      return { ...preveState, selected: {} }
    });
  }
  console.log('selected:', state.selected && state.selected.title)

  return (
    <div className="container">
      <header className="App">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {
          state.selected && 
          (typeof state.selected.title !== "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false
        }

      </main>
    </div>
  );
}

export default App;
