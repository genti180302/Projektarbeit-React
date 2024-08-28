import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./sass/main.scss"


const Navigation = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}



const App = () => {
  return (
    <>
      <Navigation/>
    </>
  );
}

export default App;
