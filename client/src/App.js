import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import RecipeCreate from './components/RecipeCreate';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Good Food</h1>
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route path= '/home' component= {Home}/>
        <Route path= '/recipecreat' component= {RecipeCreate}/>
        <Route path= '/home/:id' component= {RecipeDetail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
