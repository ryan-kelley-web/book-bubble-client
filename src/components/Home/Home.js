import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalBody, Button } from "reactstrap";
import LeftArrow from "./home-assets/left_arrow.png";
import BubbleBar from "../Navbar/BubbleBar";
import BookCreate from "../Books/BookCreate";
import Read from "../Shelves/Read";
import Reading from "../Shelves/Reading";
import ToRead from "../Shelves/ToRead";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Search from "../Shelves/Search";
import Alert from './Alert';

export default function Home(props) {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    const [alertOpen, setAlertOpen] = useState(true);
    const [createOpen, setCreateOpen] = useState(false);


    function alertOff() {
        setAlertOpen(false);
    }

    function createOn() {
        setCreateOpen(true);
    }

    function createOff() {
        setCreateOpen(false);
    }

    return (


        <div>

            <h1 >BookBubble</h1>
            <Container>
                <Row>
                    <Col md="9">
                       {alertOpen ? <Alert alertOff={alertOff}/> : <> </>}
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col md="9">
                        <Router>
                            <Row>
                                <Col sm="3">
                                    <BubbleBar clickLogout={props.clickLogout} createOn={createOn} />
                                </Col>
                                <Col >
                                    <Switch>
                                        <Route path="/book/create">
                                            {createOpen ? 
                                            <BookCreate token={props.token} createOn={createOn} createOff={createOff} /> : 
                                            <> </> }
                                        </Route>
                                        <Route path="/book/read">
                                            <Read token={props.token} />
                                        </Route>
                                        <Route path="/book/reading">
                                            <Reading token={props.token} />
                                        </Route>
                                        <Route path="/book/to-read">
                                            <ToRead token={props.token} />
                                        </Route>
                                        <Route path="/book/search">
                                            <Search token={props.token} />
                                        </Route>
                                    </Switch>
                                </Col>
                            </Row>
                        </Router>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
