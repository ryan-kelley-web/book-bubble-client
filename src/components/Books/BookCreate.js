import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const BookCreate = (props) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    // set default state to null????
    const [numOfPages, setNumOfPages] = useState(0);
    // rating may need to be changed to a string prop in book model
    const [rating, setRating] = useState(null);
    const [yearPublished, setYearPublished] = useState(0);
    const [description, setDescription] = useState('');
    const [readStatus, setReadStatus] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        const url = 'http://localhost:5000/book/create';
        const headers = {
            method: 'POST',
            body: JSON.stringify({author: author, title: title, genre: genre, total_pages: numOfPages, rating: rating, description: description, year_published: yearPublished, read_status: readStatus}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        };

        fetch(url, headers)
            .then(res => res.json())
            .then(() => {
                setAuthor('');
                setTitle('');
                setGenre('');
                setNumOfPages();
                setRating();
                setDescription('');
                setReadStatus('');
                setYearPublished();
                // props.getBooks();
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
                    <Label htmlFor='numOfPages'>Total Number Of Pages:</Label>
                    <Input name='numOfPages' value={numOfPages} onChange={e => setNumOfPages(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='yearPublished'>Year Published:</Label>
                    <Input name='yearPublished' value={yearPublished} onChange={e => setYearPublished(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>Book Description:</Label>
                    <Input name='description' value={description} onChange={e => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='readStatus'>Book Status:</Label>
                    <Input type='select' name='readStatus' value={readStatus} onChange={e => setReadStatus(e.target.value)}>
                        <option value='Read'>Already Read</option>
                        <option value='Reading'>Currently Reading</option>
                        <option value='To Read'>Wanting To Read</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating'>Rating:</Label>
                    <Input type='select' name='rating' value={rating} onChange={e => setRating(e.target.value)}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Input>
                </FormGroup>
                <Button type='submit'>Add Book</Button>
            </Form>
        </div>
    );
};

export default BookCreate;

/*

        author: req.body.author,
        title: req.body.title,
        genre: req.body.genre,
        total_pages: req.body.total_pages,
        rating: req.body.rating,
        description: req.body.description,
        year_published: req.body.year_published,
        read_status: req.body.read_status,

*/