import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import WorkoutTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';

const BookIndex = (props) => {

    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});
    //updateActive will be used to conditionally display our BookEdit component - if a user clicks the update button, updateActive will set to true and the BookEdit component will display to the screen --- how to get it to go away?

    //bookToUpdate will be used as a prop by BookEdit - when a user clicks on a row of the Table, bookToUpdate will be switched from an empty obj to the book obj displayed on the row the user clicked on. BookEdit will use this workout obj to request updated book details to the appropriate book in the db

    const editUpdateBook = (book) =>{
        setBookToUpdate(book);
        console.log(book);
    }
    //this func updates our workoutToUpdate state var based upon input to the func

    const updateOn = () => {
        setUpdateActive(true);
    }
    //this func will be passed a prop to WorkoutTable, which will use the func when the user clicks on an update button

    return(
        <Container>
            <Row>
                {updateActive ? <WorkoutEdit workoutToUpdate={workoutToUpdate} updateOff={updateOff} token={props.token} fetchWorkouts={fetchWorkouts}/> : <></>}
            </Row>
        </Container>
    )
}

//updateActive reps if our WorkoutEdit component should be displaying or not. if true, we display the component with props involving the workout we'll update, the updateOff func to stop display of WorkoutEdit, our token to access guarded routes on the backend, and fetchWorkouts to update WorkoutTable when we've finished editing a single workout. if false, we display nothing.

export default BookIndex;