import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/container';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>

        <Container greeting={"Bienvenidos a mi tienda"}/>

      </header>
    </div>
  );
}

export default App;
