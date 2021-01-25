import '../styles/App.css';
import BooksList from './BooksList';
import BookForm from '../components/BookForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
