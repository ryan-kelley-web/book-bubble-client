import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap'; //figure out how to do this with material UI
import BookEdit from '../Books/BookEdit'; //will need to match the component we "link to" with the button
import API_URL from '../../env';
import BookInfo from '../Books/BookInfo';
import './shelves.css';

const Search = (props) => { 

    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});
    const [infoActive, setInfoActive] = useState(false);

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

    const infoOn = () => {
      setInfoActive(true);
    }

    const infoOff = () => {
      setInfoActive(false);
    }

    const clearResults = () => {
      setBooks([]);
      setQuery('');
  }

    const bookMapper = () => {
        return books.map((book, index) => { 
            return(
                <tr key={index}>
                    <td className='shelfText'>{book.title}</td>
                    <td className='shelfText'>{book.author}</td>
                    <td className='shelfText'>{book.year_published}</td>
                    <td>
                    <Button color="primary" onClick={()=> {editUpdateBook(book); infoOn()}}>More Info</Button>
                    </td>
                </tr>
            )
        })
    }

 return (
    <>
      <h3 className='shelfHeader'>BookFinder</h3>
      { books.length > 0
      ? (
        <div>
        <Table striped className="table">
        <thead>
          <tr>
            <th className='shelfText'>Title</th>
            <th className='shelfText'>Author</th>
            <th className='shelfText'>Year Published</th>
          </tr>
        </thead>
        <tbody className='text-primary'>
          {bookMapper()}
        </tbody>
      </Table>
      {infoActive ? <BookInfo book={bookToUpdate} infoOff={infoOff} updateOn={updateOn} updateOff={updateOff} fetchBooks={fetchBooks} token={props.token} /> : <></>}
      {updateActive ? <BookEdit bookToUpdate={bookToUpdate} infoOff={infoOff} updateOff={updateOff} fetchBooks={fetchBooks} token={props.token} /> : <></>}
       <br/><br/>
       <Button color="primary" className='clearSearchBtn' onClick={clearResults}>Clear Results</Button>
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
