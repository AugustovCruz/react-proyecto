
import './App.css';
import  Button from './componentes/button/Button'
import { ButtonChild } from './componentes/button/Button';
import Examples from './componentes/Examples';
import Flex from './componentes/Flex/Flex';
import Item from './componentes/Item/Item';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Nav from './componentes/Nav/Nav';

function App() {
  return (
    <>
      <Examples/>
      <Flex>
        <Button text= "boton A" color= "blue" />
        <Button text= "boton B" color= "white" />
        <Button text= "boton C" color= "blanco" />
        <Button text= "boton D" color= "orange" />
        <ButtonChild color= "darkgreen" >VER DETALLE</ButtonChild>
      </Flex>
      <Nav/>
      <ItemListContainer text = "Soy una props"/>
      <ItemListContainer title="Remera" price={400} detail="la mejor remera del mercado" img= "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/030/513/products/16570313215051-d982d2224177794ac516570315939140-640-0.webp"/>
      <Flex>
        <Item title="Remera" price={400} detail="la mejor remera del mercado" img= "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/030/513/products/16570313215051-d982d2224177794ac516570315939140-640-0.webp"  />
        <Item title="buzo" price={800} detail="el mejor buzo" img="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/1311-7de0c8aec92793a2f016128282027834-640-0.jpg"/>
        <Item title="zapatilla" price={400} detail="la mejor zapas" img="https://www.rosario3.com/__export/1666666096442/sites/rosario3/img/2022/10/24/adidas-superstar-marge-simpson_look_1.jpg_1756841869.jpg"/>
        <Item title="pelota" price={400} detail="el mejor balon" img="https://m.media-amazon.com/images/I/51rL1s3z7KL._AC_SX425_.jpg"/>
      </Flex>

      
    </> 
  );
}

export default App;
