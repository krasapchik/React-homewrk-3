
import './App.css';
import Aligin from './components/Aligin';
import First from './components/First/First';
import Secound from './components/Secound/Secound';
function App() {
  const user = {
    name: 'Kutman',
    age: 23
  }
  return (
    <div className="App">
      <First text={user} />
      <Secound text={user} />
      <Aligin />
    </div>
  );
}

export default App;
