import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import DisplayCat from './component/DisplayCat';
import DisplayCoffee from './component/DisplayCoffee';
import DisplayFoodish from './component/DisplayFoodish';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <Router>
        <div className="App">
          
          <Routes>
            <Route exact path='/' element={< HomePage />}></Route>
            <Route exact path='/Cat' element={<DisplayCat />}></Route>
            <Route exact path='/Foodish' element={< DisplayFoodish />}></Route>
            <Route exact path='/Coffee' element={< DisplayCoffee />}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
