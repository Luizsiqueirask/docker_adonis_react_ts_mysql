import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import PersonView from "./pages/person/PersonView";
import PersonShow from "./pages/person/PersonShow";
import PersonStore from "./pages/person/PersonStore";
import PersonUpdate from "./pages/person/PersonUpdate";
import PersonDelete from "./pages/person/PersonDelete";
import PetView from "./pages/pet/PetView";
import PetShow from "./pages/pet/PetShow";
import PetStore from "./pages/pet/PetStore";
import PetUpdate from "./pages/pet/PetUpdate";
import PetDelete from "./pages/pet/PetDelete";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {

  return (
    <Routes>          
      <Route path="/">
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/person">
          <Route path="view-people" element={<PersonView />} />
          <Route path="show-person/:id" element={<PersonShow />} />           
          <Route path="add-person" children element={<PersonStore />} />
          <Route path="update-person/:id" element={<PersonUpdate />} />
          <Route path="destroy-person/:id" element={<PersonDelete />} />
        </Route>        
        <Route path="/pet">
          <Route path="view-pets" element={<PetView />} /> 
          <Route path="show-pet/:id" element={<PetShow />} />
          <Route path="add-pet" element={<PetStore />} />
          <Route path="update-pet/:id" element={<PetUpdate />} />
          <Route path="destroy-pet/:id" element={<PetDelete />} />        
        </Route>
        <Route path="/auth">
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>    
    </Routes>
  )
}

export default App
