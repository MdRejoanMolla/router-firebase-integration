import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Order from './components/Order/Order';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

      </Routes>
    </div>
  );
}

export default App;
