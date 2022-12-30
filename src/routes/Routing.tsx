import {Navigate, Route, Routes} from 'react-router-dom';
import DetailPokemon from '../pages/DetailPokemon/DetailPokemon';
import Home from '../pages/Home/Home';


function Routing() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='pokemon/:name/detail' element={<DetailPokemon />} />
    </Routes>
  )
}

export default Routing;