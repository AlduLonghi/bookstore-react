import { connect } from "react-redux";
import Book from '../components/Book';

const BooksList = ({ books }) => {
    return ( 
        <table>
            <tr>
                <th>Book ID</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
            {books.map(book => <Book book={book} />)}
        </table>
     );
}

function mapStateToProps(state){
  return {
      books: state.books
  }
}
 
export default connect(mapStateToProps)(BooksList);