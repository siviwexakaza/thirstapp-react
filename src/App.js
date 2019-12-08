import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Layouts/Navbar'
import Index from './components/Layouts/Index'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Provider} from './context'

function App() {
  return (
    <Provider>

      <Router>
        <React.Fragment>

          <div className="App">
            <Navbar />
            <div className="container">

              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>

            </div>
          </div>

        </React.Fragment>
      </Router>

    </Provider>
    
    
  );
}

export default App;
