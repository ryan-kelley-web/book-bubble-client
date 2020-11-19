import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap'; //figure out how to do this with material UI
import BookEdit from '../Books/BookEdit'; //will need to match the component we "link to" with the button

const Search = (props) => { 

    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    const fetchBooks = () => {
        fetch(`http://localhost:5000/book/search/${query}`, { 
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

    const bookMapper = () => {
        return books.map((book, index) => { 
            return(
                <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.year_published}</td>
                    <td>
                        <Button color="info" onClick={()=> {return(BookEdit)}}>See More</Button> 
                    </td>
                </tr>
            )
        })
    }
    //does the button go to BookEdit? Do we still have a Book or BookDisplay component to display the details of each book?
    
    const clearResults = () => {
      setBooks([]);
      setQuery('');
  }

 return (
    <>
      <h3>BookFinder</h3>
      { books.length > 0
      ? (
        <div>
        <Table striped>
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
       <button onClick={clearResults}>Clear Results</button>
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
        <button onClick={fetchBooks}>Submit</button>
        </div> 
      ) }
      </>
  );
};

export default Search;
