
import './App.css';
import Search from './Search';

function App() {
  const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Another Item']
  return (
    <div className="App">
      <Search items={items}/>
    </div>
  );
}

export default App;
