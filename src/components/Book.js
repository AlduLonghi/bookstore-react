const Books = ({ book }) => {
    return ( 
        <tr>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.category}</td>
        </tr>
     );
}
 
export default Books;