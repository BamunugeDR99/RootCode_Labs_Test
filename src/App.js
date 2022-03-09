import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddStudent from "./components/home";

function App() {
  return (


    <Router>

      <Routes>
      
       <Route exact path="/add" element={<AddStudent/>} />
     
       </Routes> 
     </Router>

 


    
  
  );
}

export default App;
