import Header from './components/header';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return(
    <>
      <Header />
      <Outlet />
    </>

  );
}


export default App;
