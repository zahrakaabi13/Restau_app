import './App.css';
import ProductList from './components/product' 
import {AddinProduct} from './components/AddinProduct'
import { BrowserRouter, Route} from "react-router-dom";
import {Dashbord} from './pages/dashbord'

import {Home} from './pages/home'
import {Shop} from './pages/Shop'

function App() {
  return (
    <>
    <BrowserRouter>
       <Route exact path="/"><Home/></Route>
       <Route path="/Poilane/Shop"><Shop/></Route>
       {/* <ProductList/> 
       <AddinProduct/>
       <Dashbord/> */}
    </BrowserRouter>
    </>
  );
}
export default App;
