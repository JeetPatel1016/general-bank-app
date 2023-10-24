import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import Loans from './components/Loans';
import Transactions from './components/Transactions';
import Payments from './components/Payments';

function App() {
return ( 
  <div className="App">
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Loans" element={<Loans />}/>
        <Route path="/Transactions" element={<Transactions />}/>
        <Route path="/Payments" element={<Payments />}/>

      </Routes>
  </div>
  );
}

export default App;
