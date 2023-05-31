import Employee from '../src/components/Section/Employee'
import Payroll from '../src/components/Section/Payroll/'
import Create from '../src/components/Section/Create'
import Earning from '../src/components/Section/earning'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
     <div className="content">
      <Switch>
        <Route exact path="/">
          <Employee/>
        </Route>
        <Route path="/payroll">
          <Payroll/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/newpay">
          <Earning/>
        </Route>
      </Switch>
     </div>
    </div>
    </Router>
  
  );
}

export default App;
