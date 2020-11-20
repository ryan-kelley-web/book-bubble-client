import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap'; 
//import BookEdit from '../Books/BookEdit'; 
import BookEdit from '../Books/BookEdit';


const Read = (props) => { 

    const [books, setBooks] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});

    const fetchBooks = () => {
        fetch('http://localhost:5000/book/read', { 
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
                    <Button color="primary" onClick={()=> {editUpdateBook(book); updateOn()}}>Edit Book</Button>
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
      {updateActive ? <BookEdit bookToUpdate={bookToUpdate} updateOff={updateOff} fetchBooks={fetchBooks} /> : <></>}
    </>
  );
};

export default Read;


