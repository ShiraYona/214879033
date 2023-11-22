import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import InputRange from './InputRange';
import MyCalender from './MyCalender'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route exact path='/' element={<InputRange/>}></Route> 
         <Route exact path='/myCalender' element={<MyCalender/>}></Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
