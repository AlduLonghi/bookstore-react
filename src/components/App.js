import '../styles/index.scss';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <BooksList />
      <BookForm />
    </>
  );
}

export default App;
