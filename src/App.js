import './App.css';
import { FilmCardList } from './components';
import dataset from './dataset.json';

function App() {
  let films = dataset.films;
  return (
    <div className="container mx-auto">
      <FilmCardList films={films}/>
    </div>
  );
}

export default App;
