import './App.css';
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
      {/* <AddinProduct/> */}
      <Route path="/admin"><Dashbord/></Route> 
    </BrowserRouter>
    </>
  );
}
export default App;
