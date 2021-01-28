import '../styles/index.scss';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <main className="d-flex">
        <BooksList />
        <BookForm />
      </main>
    </>
  );
}

export default App;
