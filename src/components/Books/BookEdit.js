import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const BookEdit = (props) => {
    const [editAuthor, setEditAuthor] = useState(props.bookToUpdate.author);
    const [editTitle, setEditTitle] = useState(props.bookToUpdate.title);
    const [editGenre, setEditGenre] = useState(props.bookToUpdate.genre);
    const [editNumOfPages, setEditNumOfPages] = useState(props.bookToUpdate.numOfPages);
    const [editRating, setEditRating] = useState(props.bookToUpdate.rating);
    const [editYearPublished, setEditYearPublished] = useState();
    const [editDescription, setEditDescription] = useState('');
    const [editReadStatus, setEditReadStatus] = useState('');

    const handleSubmit = (e, book) => {
        e.preventDefault();
        const url = `http://localhost/book/${props.bookToUpdate.id}`;
        const headers = {
            method: 'PUT', 
            body: JSON.stringify({author: editAuthor, title: editTitle, genre: editGenre, total_pages: editNumOfPages, rating: editRating, year_published: editYearPublished, description: editDescription, read_status: editReadStatus}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        };

        fetch(url, headers)
            .then(res => {
                props.getBooks();
                props.updateOff();
            })
            .catch(err => console.log('Book Edit Fetch Error:', err));
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Currently Editing "{props.bookToUpdate.title}"</ModalHeader>
            <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='author'>Edit Author:</Label>
                    <Input name='author' value={editAuthor} onChange={e => setEditAuthor(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='title'>Edit Title:</Label>
                    <Input name='title' value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='genre'>Edit Genre:</Label>
                    <Input type='select' name='genre' value={editGenre} onChange={e => setEditGenre(e.target.value)}>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Non-Fiction'>Non-Fiction</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='numOfPages'>Edit Total Number Of Pages:</Label>
                    <Input name='numOfPages' value={editNumOfPages} onChange={e => setEditNumOfPages(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='yearPublished'>Edit Year Published:</Label>
                    <Input name='yearPublished' value={editYearPublished} onChange={e => setEditYearPublished(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>Edit Book Description:</Label>
                    <Input name='description' value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='readStatus'>Book Status:</Label>
                    <Input type='select' name='readStatus' value={editReadStatus} onChange={e => setEditReadStatus(e.target.value)}>
                        <option value='Read'>Already Read</option>
                        <option value='Reading'>Currently Reading</option>
                        <option value='To Read'>Wanting To Read</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating'>Edit Rating:</Label>
                    <Input type='select' name='rating' value={editRating} onChange={e => setEditRating(e.target.value)}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Input>
                </FormGroup>
                <Button type='submit'>Update Book</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default BookEdit;