import { React, useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./component/PokemonList";
import Pagenation from "./component/pagenation";
const App = () => {
  const [pokemon, setpokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [CurrentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [NextPageUrl, setNextPageUrl] = useState();
  const [PrePageUrl, setPrePageUrl] = useState();
  useEffect(() => {
    let cancel;
    setloading(true);
    axios
      .get(CurrentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setpokemon(response.data.results.map((p) => p.name));
        setloading(false);
        setNextPageUrl(response.data.next);
        setPrePageUrl(response.data.previous);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
    return () => {
      cancel();
    };
  }, [CurrentPageUrl]);
  if (loading) return "loading...";
  function GoToNextPage() {
    setCurrentPageUrl(NextPageUrl);
  }
  function GoToPrePage() {
    setCurrentPageUrl(PrePageUrl);
  }
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagenation
        GoToNextPage={NextPageUrl ? GoToNextPage : null}
        GoToPrePage={PrePageUrl ? GoToPrePage : null}
      />
    </>
  );
};

export default App;
