import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import AddDataset from './components/AddDataset';
import Browsing from './components/Browsing';
import ViewDataset from './components/ViewDataset';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
          <Routes>
            <Route element={ <Home/> } path="/" />
            <Route element={ <Home/> } path="homepage" />
            <Route element={ <Login/> } path="loginpage" />
            <Route element={ <Signup/> } path="signup" />
            <Route element={ <AddDataset/> } path="AddDataset" />
            <Route element={ <Browsing/> } path="browsing" />
            <Route element={ <ViewDataset/> } path="view/:id" />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
