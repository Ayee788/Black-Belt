import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Create from './views/Create';
import Edit from './views/Edit';
import ViewOne from './views/ViewOne';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Dashboard/>}/>
        <Route path={'/create'} element={<Create/>}/>
        <Route path={'/edit/:id'} element={<Edit/>}/>
        <Route path={'/viewOne/:id'} element={<ViewOne/>}/>
      </Routes>
    </div>
  );
}

export default App;
