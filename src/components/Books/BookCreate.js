import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const BookCreate = (props) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [numOfPages, setNumOfPages] = useState(0);
    const [rating, setRating] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        const url = 'http://localhost:3001/book/create';
        const headers = {
            method: 'POST',
            body: JSON.stringify({author: author, title: title, genre: genre, numOfPages: numOfPages, rating: rating}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        };

        fetch(url, headers)
            .then(res => res.json())
            .then(json => {
                setAuthor('');
                setTitle('');
                setGenre('');
                setNumOfPages(0);
                setRating(0);
                props.getBooks();
            })
            .catch(err => console.log('Error', err));
    }

    return(
        <div>
            <h3>Create A Book</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='author'>Author:</Label>
                    <Input name='author' value={author} onChange={e => setAuthor(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='title'>Title:</Label>
                    <Input name='title' value={title} onChange={e => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='genre'>Genre:</Label>
                    <Input type='select' name='genre' value={genre} onChange={e => setGenre(e.target.value)}>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Non-Fiction'>Non-Fiction</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='numOfPages'>Number Of Pages:</Label>
                    <Input name='numOfPages' value={numOfPages} onChange={e => setNumOfPages(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating'>Rating:</Label>
                    <Input name='rating' value={rating} onChange={e => setRating(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Add Book</Button>
            </Form>
        </div>
    );
};

export default BookCreate;