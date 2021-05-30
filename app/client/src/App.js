import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/main/main';
import Logs from './components/logs/logs';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/log/:id' component={Logs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
