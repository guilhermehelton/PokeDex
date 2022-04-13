import { useState, useEffect } from 'react';
import './App.css';
import {useApi} from './services/api'
import SearchBar from './components/SearchBar';
import PokeCard from './components/PokeCard';
import Pagination from './components/Pagination';

function App() {
  const [ search, setSearch ] = useState('')
  const [pokeList, setPokeList] = useState({})
  const [offset, setOffset] = useState(0)

  const api = useApi()

  useEffect(() => {
    if(search){

      (async function(){
        const data = await api.getPokeByName(search.toLocaleLowerCase())
        setPokeList(data)
      })()

    } else {

      (async function(offset){
        const data = await api.getPokeList(offset)
        setPokeList(data)
      })(offset)

    }
  }, [search, offset])
  

  return (
    <div className="App">
      <SearchBar
        value={search}
        onChange={e => setSearch(e)}/>

      {pokeList.results && (
        <ul className='poke-list'>
          {pokeList.results.map((pokemon, index) => (
            <PokeCard key={index}
              url={pokemon.url}/>
          ))}
        </ul>
      )}

      {!pokeList.results && pokeList.name &&(
        <ul className="poke-list">
        <PokeCard 
          url={`https://pokeapi.co/api/v2/pokemon/${pokeList.name}`}/>
        </ul>
      )}

      
      {pokeList.count && (
        <Pagination limit={10}
        total={pokeList.count}
        offset={offset}
        setOffset={setOffset}/>
      )}
    </div>
  );
}

export default App;
