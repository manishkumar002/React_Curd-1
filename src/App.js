
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import CreateUser from "./Components/CreateUser";
import ShowUser from "./Components/ShowUser";
import Home from "./Components/Home";
import Update from "./Components/Update";
function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreateUser/>}/>
      <Route path="/show" element={<ShowUser/>}/>
      <Route path="/update" element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
