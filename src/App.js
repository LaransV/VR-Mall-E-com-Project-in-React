import './App.css';
import LogInPage from './Components/LogInPage';
import Login from './Components/Login';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import Vegetable from './Components/Categorys/vegetable';
import About from './Components/About';
import Atta from './Components/Categorys/Atta';
import Biscuits from './Components/Categorys/Biscuits';
import Cookware from './Components/Categorys/Cookware';
import Daily from './Components/Categorys/Daily';
import Drinks from './Components/Categorys/Drinks';
import Fish from './Components/Categorys/Fish';
import Gas from './Components/Categorys/Gas';
import Homecare from './Components/Categorys/Homecare';
import Mixer from './Components/Categorys/Mixer';
import Masala from './Components/Categorys/Masala';
import Packagedfood from './Components/Categorys/Packagedfood';
import Tableware from './Components/Categorys/Tableware';
import Tea from './Components/Categorys/Tea';
import Travel from './Components/Categorys/Travel';
import Utensils from './Components/Categorys/Utensils';
import Cart from './Components/Cart';
import Pay from './Components/Pay';
import Pay1 from './Components/Pay1';


function App() {
    const regName = sessionStorage.getItem('registeredName');
    const adminName = sessionStorage.getItem('adminName');
    return (
   <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            <Route path='/loginpage' element={<LogInPage/>}></Route>
            
            
            {regName || adminName ? <Route path="/home" element={<Home/>}/> : <Route path="/loginpage" element={<LogInPage />} /> }
             <Route path="/home" element={<Home/>}/> 
            {/* <Route path="/login" element={<LogInPage />} /> */}
            <Route path='/vegetable' element={<Vegetable/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/atta' element={<Atta/>}></Route>
            <Route path='/biscuits' element={<Biscuits/>}></Route>
            <Route path='/cookware' element={<Cookware/>}></Route>
            <Route path='/daily' element={<Daily/>}></Route>
            <Route path='/drinks' element={<Drinks/>}></Route>
            <Route path='/fish' element={<Fish/>}></Route>
            <Route path='/gas' element={<Gas/>}></Route>
            <Route path='/homecare' element={<Homecare/>}></Route>
            <Route path='/mixer' element={<Mixer/>}></Route>
            <Route path='/masala' element={<Masala/>}></Route>
            <Route path='/packagedfood' element={<Packagedfood/>}></Route>
            <Route path='/tableware' element={<Tableware/>}></Route>
            <Route path='/tea' element={<Tea/>}></Route>
            <Route path='/travel' element={<Travel/>}></Route>
            <Route path='/utensils' element={<Utensils/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/pay' element={<Pay/>}></Route>
            <Route path='/pay1' element={<Pay1/>}></Route>
        </Routes>
    </BrowserRouter>
  

   </>
  );
}
// eslint-disable-next-line


export default App;
