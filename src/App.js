
import './App.css';
import Homepage from './Homepage'
import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Create from './Create';
import Blogdetails from './Blogdetails';
import Notfound from './Notfound';
function App() {
  return (
    <>
        <div className="App">
    <Router>
       <Navbar/>
       <div className="content">
         <Switch>
              <Route exact path='/create'>
                <Create/>
              </Route>
              <Route path='/blogs/:id'>
                <Blogdetails/>
              </Route>  
               <Route exact path='/'>
                  <Homepage/>
              </Route>
              <Route path="*">
                {/* catch paths that doesnt exist */}
                <Notfound/>
              </Route>
            </Switch>
            </div>
   </Router> 
    </div>
    </>
  );
}
export default App;
