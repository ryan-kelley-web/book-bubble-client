import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Container, Row, Col, Progress, Modal, ModalBody} from 'reactstrap';
import './Book.css';
import API_URL from '../../env';


const BookInfo = (props) => {

    const deleteBook = (book) => {
        console.log("Delete book id:", book.id);
        const url = `${API_URL}/book/${book.id}`;
        const options = {
            method: 'DELETE', 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        };
        fetch(url, options)
            .then(() => {
                props.fetchBooks();
                props.infoOff();
            })
            .catch(err => console.log('Book Info Fetch Error:', err));
    };


    return(
        <Modal isOpen={true}>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Button onClick={props.infoOff} color='primary'>X</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='author' className='text-primary'>Author:</Label>
                        <Label name='author' className='infoLabel'>{props.book.author}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='title' className='text-primary'>Title:</Label>
                        <Label name='title' className='infoLabel'>{props.book.title}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='genre' className='text-primary'>Genre:</Label>
                        <Label name='genre' className='infoLabel'>{props.book.genre}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='numOfPages' className='text-primary'>Total Number Of Pages:</Label>
                        <Label name='numOfPages' className='infoLabel'>{props.book.total_pages}</Label>
                        {/* //attempting progress bar add */}
                        {/* <Progress value="25">25%</Progress> */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='yearPublished' className='text-primary'>Year Published:</Label>
                        <Label name='yearPublished' className='infoLabel'>{props.book.year_published}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description' className='text-primary'>Book Description:</Label>
                        <Label name='description' className='infoLabel'>{props.book.description}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='readStatus' className='text-primary'>Book Status:</Label>
                        <Label name='readStatus' className='infoLabel'>{props.book.read_status}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating' className='text-primary'>Rating:</Label>
                        <Label name='rating' className='infoLabel'>{props.book.rating}</Label>
                    </FormGroup>
                    <Button color='primary' onClick={props.updateOn}>Edit Book</Button>
                    <Button color='danger' className='deleteBtn' onClick={() => deleteBook(props.book)}>Delete Book</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default BookInfo;


/*

<Container>
            <Form>
                <FormGroup>
                    <Label htmlFor='author'>Author:</Label>
                    <Label name='author'>{props.book.author}</Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='title'>Title:</Label>
                    <Label name='title'>{props.book.title}</Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='genre'>Genre:</Label>
                    <Label name='genre'>{props.book.genre}</Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='numOfPages'>Total Number Of Pages:</Label>
                    <Label name='numOfPages'>{props.book.total_pages}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='yearPublished'>Year Published:</Label>
                        <Label name='yearPublished'>{props.book.year_published}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Book Description:</Label>
                        <Label name='description'>{props.book.description}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='readStatus'>Book Status:</Label>
                        <Label name='readStatus'>{props.book.read_status}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>Rating:</Label>
                        <Label name='rating'>{props.book.rating}</Label>
                    </FormGroup>
                    <Button color='warning' onClick={props.updateOn}>Edit Book</Button>
                    <Button color='danger' onClick={() => deleteBook(props.book)}>Delete Book</Button>
                </Form>
            </Container>

*/