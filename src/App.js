import './App.css';
import Menu from './Menu';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <header className='mainPage' style={{'width':'80%','marginLeft':'auto','marginRight':'auto','backgroundColor':'#1e1f28'}}>
        <Menu/>
        <MainPage/>
        
      </header>
    </div>
  );
}

export default App;
