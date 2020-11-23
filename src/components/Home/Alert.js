import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalBody, Button } from "reactstrap";
import BubbleBar from "../Navbar/BubbleBar";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './Home.css';


export default function Alert(props) {
    return (
            <Modal isOpen={true} >
                <ModalBody>

                    <Button onClick={props.alertOff} color='primary'>X</Button>
                    <p className='modalText'>Welcome to your <span className='bubbleText'>Bubble!</span></p>
                    <br />
                    <p className='modalText'>A <b>Bubble</b> is a virtual reading room, secluded from the rest of the world and web. Put differently, in a "bubble." </p><br />
                    <p className='modalText'>Bubbles organize book collections and help with monitoring individual reading progress.</p>
                    <br />
                    <p className='modalText'>Start by adding any book (or books) of your choosing, then storing them on one of three <b>Shelves</b>:</p>
                    <br /> <ul>
                        <li className='modalText'>Books you’ve already <b>Read</b></li><br />
                        <li className='modalText'>Books you want <b>To Read</b></li><br />
                        <li className='modalText'>Books you’re currently <b>Reading</b></li><br />
                    </ul><br />
                    {/* <p>Also, for features and strategies to help you read faster and remember important discoveries made on your reading adventures, be sure to check out the <b>Reading Dojo</b>.</p> <br />
                <img src={LeftArrow} /><p>You can access all of this using the <b>BubbleBar</b>. Now click 'Add Book' to begin your BookBubble collection!
        </p> */}


                </ModalBody>
            </Modal>
    )
}
