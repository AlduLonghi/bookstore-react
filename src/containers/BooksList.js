import { connect } from "react-redux";

const BooksList = ({ books }) => {
    return ( 
        <table>
            <tr>
                <th>Book ID</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
            {books.map(book => {
                <tr>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.category}</td>
                </tr>
            })}
        </table>
     );
}

function mapStateToProps(state){
  return {
      books: state.books
  }
}
 
export default connect(mapStateToProps)(BooksList);