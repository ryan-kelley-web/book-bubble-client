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
                <p>Welcome to <em>your Bubble!</em></p>
                <br />
                <p>A <b>Bubble</b> is a virtual reading room, secluded from the rest of the world and web. Put differently, in a "bubble." </p><br />
                <p>Bubbles organize book collections, help to monitor individual reading progress, and can even provide useful tips for effective reading.</p>
                <br />
                <p>Start by adding any book (or books) of your choosing, then storing them on one of three <b>Shelves</b>:</p>
                <br /> <ul>
                    <li>Books you’ve already <b>Read</b></li><br />
                    <li>Books you want <b>To Read</b></li><br />
                    <li>Books you’re currently <b>Reading</b></li><br />
                </ul><br />
                <p>Also, for features and strategies to help you read faster and remember important discoveries made on your reading adventures, be sure to check out the <b>Reading Dojo</b>.</p> <br />
                <img src={LeftArrow} /><p>You can access all of this using the <b>BubbleBar</b>. Now click 'Add Book' to begin your BookBubble collection!
        </p>
            </Alert>

        </div>


    )
}
