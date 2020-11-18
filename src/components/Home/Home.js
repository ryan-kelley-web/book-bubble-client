import React, { useState } from 'react';
import { Alert } from 'reactstrap'; import { Badge } from 'reactstrap';
import LeftArrow from './home-assets/left_arrow.png';
import BubbleBar from '../Navbar/BubbleBar';



export default function Home(props) {

    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    return (


        <div>
            ***Home***
            <h1>BookBubble</h1>
            <Alert color="dark" isOpen={visible} toggle={onDismiss}>
                <p>Welcome to your Bubble!</p>
                <br/>
                <p>Your <b>Bubble</b> is a virtual reading room that is secluded - in a, "bubble," - from the rest of the world and web. </p><br/>
                <p>You can use your Bubble to organize book collections, monitor reading progress, and pick up some best practices along the way.</p>
                    <br />
                    <p>Add any book or books of your choosing and store them on one of three <b>Shelves</b>:</p>
               <br/> <ul>
                        <li>Books you’ve already <b>Read</b></li><br />
                        <li>Books you want <b>To Read</b></li><br />
                        <li>Books you’re currently <b>Reading</b></li><br />
                    </ul><br/>
        <p>Also, for features and strategies to help you read faster and remember important discoveries made on your reading adventures, be sure to check out the <b>Reading Dojo</b>.</p> <br />
                    <img src={LeftArrow} /><p>You can access all of this using the <b>BubbleBar</b>. Now click 'Add Book' to begin your BookBubble collection!
        </p>
            </Alert>

        </div>


    )
}
