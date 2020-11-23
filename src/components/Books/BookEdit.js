import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import API_URL from '../../env';

const BookEdit = (props) => {
    const [editAuthor, setEditAuthor] = useState(props.bookToUpdate.author);
    const [editTitle, setEditTitle] = useState(props.bookToUpdate.title);
    const [editGenre, setEditGenre] = useState(props.bookToUpdate.genre);
    const [editNumOfPages, setEditNumOfPages] = useState(props.bookToUpdate.total_pages);
    const [editRating, setEditRating] = useState(props.bookToUpdate.rating);
    const [editYearPublished, setEditYearPublished] = useState(props.bookToUpdate.year_published);
    const [editDescription, setEditDescription] = useState(props.bookToUpdate.description);
    const [editReadStatus, setEditReadStatus] = useState(props.bookToUpdate.read_status);

    const handleSubmit = (e, book) => {
        e.preventDefault();
        const url = `${API_URL}/book/edit/${props.bookToUpdate.id}`;
        console.log(url);
        const headers = {
            method: 'PUT',
            body: JSON.stringify({
                author: editAuthor,
                title: editTitle, 
                genre: editGenre,
                total_pages: editNumOfPages,
                rating: editRating,
                year_published: editYearPublished,
                description: editDescription,
                read_status: editReadStatus
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        };
        fetch(url, headers)
            .then(() => {
                props.fetchBooks();
                props.updateOff();
                props.infoOff();
             // props.updateOff(); --- put this as an on submit below
            })
            .catch(err => console.log('Book Edit Fetch Error:', err));
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Currently Editing <span className='text-primary'>"{props.bookToUpdate.title}"</span></ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Button onClick={props.updateOff} color='primary'>X</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='author' className='text-primary'>Edit Author:</Label>
                        <Input name='author' className='editInput' value={editAuthor} onChange={e => setEditAuthor(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='title' className='text-primary'>Edit Title:</Label>
                        <Input name='title' className='editInput' value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='genre' className='text-primary'>Edit Genre:</Label>
                        <Input type='select' className='editInput' name='genre' value={editGenre} onChange={e => setEditGenre(e.target.value)}>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Romance">Romance</option>
                            <option value="Sci-Fi">Science Fiction</option>
                            <option value="Self-Help">Self-Help</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='numOfPages' className='text-primary'>Edit Total Number Of Pages:</Label>
                        <Input name='numOfPages' className='editInput' value={editNumOfPages} onChange={e => setEditNumOfPages(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='yearPublished' className='text-primary'>Edit Year Published:</Label>
                        <Input name='yearPublished' className='editInput' value={editYearPublished} onChange={e => setEditYearPublished(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description' className='text-primary'>Edit Book Description:</Label>
                        <Input name='description' className='editInput' value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='readStatus' className='text-primary'>Book Status:</Label>
                        <Input type='select' name='readStatus' className='editInput' value={editReadStatus} onChange={e => setEditReadStatus(e.target.value)}>
                            <option value='read'>Already Read</option>
                            <option value='reading'>Currently Reading</option>
                            <option value='to-read'>Wanting To Read</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating' className='text-primary'>Edit Rating:</Label>
                        <Input type='select' name='rating' className='editInput' value={editRating} onChange={e => setEditRating(e.target.value)}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit'color='primary'>Update Book</Button>
                    {/* <Button type='submit' onClick={()=> {props.updateOff()}}>Update Book</Button> */}
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default BookEdit;