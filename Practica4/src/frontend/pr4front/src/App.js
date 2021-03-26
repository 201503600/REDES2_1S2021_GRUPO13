import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import NewReport  from './components/newReport';
import ListReport  from './components/listReport';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [estado, setEstado] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Herramienta de control</h1>
        <div>
        <Button variant="contained" color="primary" onClick={(event)=>setEstado(1)}>
          Nuevo Reporte
        </Button>
        <Button variant="contained" color="secondary" onClick={(event)=>setEstado(0)}>
          Listado Reportes
        </Button>
        
          <div id="rcorners3" >
            {estado==0? <ListReport></ListReport>:<NewReport></NewReport> }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
