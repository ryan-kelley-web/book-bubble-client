import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap'; //figure out how to do this with material UI
import API_URL from '../../env';
import BookEdit from '../Books/BookEdit'; //will need to match the component we "link to" with the button
import BookInfo from '../Books/BookInfo';

const Reading = (props) => { 

    const [books, setBooks] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});
    const [infoActive, setInfoActive] = useState(false);

    const fetchBooks = () => {
        fetch(`${API_URL}/book/reading`, { 
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) 
        //.then(res => console.log(res))
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
    //does the button go to BookEdit? Do we still have a Book or BookDisplay component to display the details of each book?

 return (
    <>
      <h3 className='shelfHeader'>Books Reading</h3>
      <hr />
      <Table striped>
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
    </>
  );
};

export default Reading