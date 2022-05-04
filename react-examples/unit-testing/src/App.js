import './App.css';
import About from './components/About/About';
import Account from './components/Account/Account';
import Company from './components/Company/Company';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Unit Testing!</h1>
      <About />
      <hr />
      
      <Company />
      <hr/>

      <Account />
    </div>
  );
}

export default App;
