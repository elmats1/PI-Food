import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeCreate from './components/RecipeCreate';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path= '/' element= {<LandingPage />}/>
        <Route exact path= '/home' element= {<Home />}/>
        <Route exact path= '/recipe' element= {<RecipeCreate />}/>
        <Route exact path= '/recipes/:id' element= {<RecipeDetail />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
