
import './App.css';
import AllRouter from './Router/AllRouter';
import { Link } from 'react-router-dom';
import "./style/Style.css"

function App() {
  return (
    <div className="App">
       <h1>Hello ShunyEka</h1>

          <div className='navbar'>

              <Link className='navlink' to="/">Add User</Link>

              <Link className='navlink'  to="/userdetails">User Details</Link>
          </div>
       
      
        <AllRouter/> 


    </div>
  );
}

export default App;
