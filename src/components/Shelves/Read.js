import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap'; 
import API_URL from '../../env';
import BookEdit from '../Books/BookEdit';
import BookInfo from '../Books/BookInfo';
import './shelves.css';

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
    <div className='container'>
      <h3 className='shelfHeader'>Books Read</h3>
      <hr />
      <Table striped className="table">
        <thead>
          <tr>
            <th sm="6" className='shelfText'>Title</th>
            <th sm="6" className='shelfText'>Author</th>
            <th sm="6" className='shelfText'>Year Published</th>
          </tr>
        </thead>
        <tbody className='text-primary'>
          {bookMapper()}
        </tbody>
      </Table>
      {infoActive ? <BookInfo book={bookToUpdate} infoOff={infoOff} updateOn={updateOn} updateOff={updateOff} fetchBooks={fetchBooks} token={props.token} /> : <></>}
      {updateActive ? <BookEdit bookToUpdate={bookToUpdate} infoOff={infoOff} updateOff={updateOff} fetchBooks={fetchBooks} token={props.token} /> : <></>}
    </div>
  );
};

export default Read;


