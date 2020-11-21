import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap'; //figure out how to do this with material UI
import BookEdit from '../Books/BookEdit'; //will need to match the component we "link to" with the button
import API_URL from '../../env';

const Search = (props) => { 

    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});

    const fetchBooks = () => {
        fetch(`${API_URL}/book/search/${query}`, { 
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
        })
        .then( (res) => res.json())
        .then((bookData)=> {
            setBooks(bookData)
            console.log(bookData);
        })
    };

    const editUpdateBook = (book) =>{
      setBookToUpdate(book);
      console.log(book);
    }
  
    const updateOn = () => {
      setUpdateActive(true);
    }

    const updateOff = () => {
      setUpdateActive(false);
    }

    const clearResults = () => {
      setBooks([]);
      setQuery('');
  }

    const bookMapper = () => {
        return books.map((book, index) => { 
            return(
                <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.year_published}</td>
                    <td>
                    <Button color="primary" onClick={()=> {editUpdateBook(book); updateOn()}}>Edit Book</Button>
                    </td>
                </tr>
            )
        })
    }

 return (
    <>
      <h3>BookFinder</h3>
      { books.length > 0
      ? (
        <div>
        <Table striped className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year Published</th>
          </tr>
        </thead>
        <tbody>
          {bookMapper()}
        </tbody>
      </Table>
       <br/><br/>
       <Button color="primary" onClick={clearResults}>Clear Results</Button>
       </div> 
      )
      : (
       <div>
       <input
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <br/><br/>
        <Button color="primary" onClick={fetchBooks}>Submit</Button>
        </div> 
      ) }
      </>
  );
};

export default Search;
