
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import MainPage from './Component/Mainpage';

function App() {
 return (
   <>
 
    <BrowserRouter>
   <Routes>
       <Route path='*' element={<MainPage/>}/>
   </Routes>
   </BrowserRouter>
   </>
 );
}

export default App;