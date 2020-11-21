import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap'; 
import API_URL from '../../env';
import BookEdit from '../Books/BookEdit';
import BookInfo from '../Books/BookInfo';

const Read = (props) => { 

    const [books, setBooks] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});
    const [infoActive, setInfoActive] = useState(false);

    const fetchBooks = () => {
        fetch(`${API_URL}/book/read`, { 
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) 
        //.then((res) => console.log(res.json()))
        .then((res) => res.json())
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

    useEffect(()=> {
        fetchBooks(); 
    }, [])

    const bookMapper = () => {
        return books.map((book, index) => { 
            return(
                <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.year_published}</td>
                    <td>
                    <Button color="primary" onClick={()=> {editUpdateBook(book); infoOn()}}>More Info</Button>
                    </td>
                </tr>
            )
        })
    }

 return (
    <>
      <h3>Books Read</h3>
      <hr />
      <Table striped className="table">
        <thead>
          <tr>
            <th sm="6">Title</th>
            <th sm="6">Author</th>
            <th sm="6">Year Published</th>
          </tr>
        </thead>
        <tbody>
          {bookMapper()}
        </tbody>
      </Table>
      {infoActive ? <BookInfo book={bookToUpdate} infoOff={infoOff} updateOn={updateOn} updateOff={updateOff} fetchBooks={fetchBooks} token={props.token} /> : <></>}
      {updateActive ? <BookEdit bookToUpdate={bookToUpdate} infoOff={infoOff} updateOff={updateOff} fetchBooks={fetchBooks} token={props.token} /> : <></>}
    </>
  );
};

export default Read;


