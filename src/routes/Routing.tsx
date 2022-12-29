import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';


function Routing() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Routing;