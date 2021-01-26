import '../styles/App.css';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
