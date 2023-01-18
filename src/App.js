import './App.css';
import { FilmCardList, Header,Footer } from './components';
import dataset from './dataset.json';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <FilmCardList movies={dataset.movies} />
      <Footer />
    </div>
  );
}

export default App;
