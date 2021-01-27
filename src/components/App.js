import '../styles/index.scss';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="d-flex">
        <BooksList />
        <BookForm />
      </main>
    </>
  );
}

export default App;
