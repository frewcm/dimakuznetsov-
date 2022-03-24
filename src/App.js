import './App.css'
import Upload from './components/pages/upload/Upload';
import Vault from './components/pages/vault/Vault';
import Policies from './components/pages/policies/Policies';
import Nav from './components/navbar/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
          <Nav />
               <Routes>
                  <Route path='/' element={<Upload />}/>
                  <Route path='/vault' element={<Vault />}/>
                  <Route path='/policies' element={<Policies />}/>
               </Routes>
    </Router>
  );
}

export default App;
