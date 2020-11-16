import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const BookEdit = (props) => {
    const [editAuthor, setEditAuthor] = useState(props.bookToUpdate.author);
    const [editTitle, setEditTitle] = useState(props.bookToUpdate.title);
    const [editGenre, setEditGenre] = useState(props.bookToUpdate.genre);
    const [editNumOfPages, setEditNumOfPages] = useState(props.bookToUpdate.numOfPages);
    const [editRating, setEditRating] = useState(props.bookToUpdate.rating);

    const handleSubmit = (e, book) => {
        e.preventDefault();
        const url = `http://localhost/book/${props.bookToUpdate.id}`;
        const headers = {
            method: 'PUT', 
            body: JSON.stringify({author: editAuthor, title: editTitle, genre: editGenre, numOfPages: editNumOfPages, rating: editRating}),
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
                    <Label htmlFor='numOfPages'>Edit Number Of Pages:</Label>
                    <Input name='numOfPages' value={editNumOfPages} onChange={e => setEditNumOfPages(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating'>Edit Rating:</Label>
                    <Input name='rating' value={editRating} onChange={e => setEditRating(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Update Book</Button>
            </Form>
            </ModalBody>
        </Modal>
    );
};

export default BookEdit;