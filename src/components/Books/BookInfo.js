import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Container, Row, Col, Progress, Modal, ModalBody} from 'reactstrap';



const BookInfo = (props) => {

    const deleteBook = (book) => {
        console.log("Delete book id:", book.id);
        const url = `http://localhost:5000/book/${book.id}`;
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
                        <Button onClick={props.infoOff}>X</Button>
                    </FormGroup>
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
                        {/* //attempting progress bar add */}
                        {/* <Progress value="25">25%</Progress> */}
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