import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Nav from './componentes/Nav/Nav';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/"  element={<ItemListContainer />} />
        <Route path='/category/:categoryid' element ={<ItemListContainer />} />
        <Route path="/item/:itemid" element={<ItemDetailContainer />} />
        <Route path="/contacto" element= { <h1>Contacto</h1>} />
      </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
