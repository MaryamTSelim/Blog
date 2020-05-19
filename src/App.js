import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//Sass
import './App.scss';
//Components
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Sign from './Pages/Sign/Sign';
import Error from './Pages/Error/Error';

function App() {
  const logged = false;
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/account">
          {logged ? <Blog /> : <Redirect to="/sign" />}
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/error">
          <Error />
        </Route>


        <Redirect to="/error" />

      </Switch>
    </div>
  );
}

export default App;
