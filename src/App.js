import SignUpPage1 from './SignUpPages/SignUpPage1';
import SignUpPage2 from './SignUpPages/SignUpPage2';
import SignUpPage3 from './SignUpPages/SignUpPage3';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUpPage1 />} />
        <Route path='/SignUpPages/SignUpPage2' element={<SignUpPage2 />} />
        <Route path='/SignUpPages/SignUpPage3' element={<SignUpPage3 />} />
      </Routes>
    </Router>
  );
}

export default App;
