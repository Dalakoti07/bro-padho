import './App.css';
import Home from './components/Home'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar';
import Exam from './components/Exam';
import TestComponent from './components/TestComponent'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route exact path="/exams/:id" render={()=> <Exam />} />
        <Route exact path="/tests/:id" render={()=> <TestComponent />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
