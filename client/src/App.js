import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

//tema
import tema from './tema';
//header
import Header from './containers/Header/index';

//pages
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <ThemeProvider theme={tema}>
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div> 
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
