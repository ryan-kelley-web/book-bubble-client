import Signup from './Signup';
import Login from './Login'; 
import './Auth.css';
import BubbleLogo from './bubbleLogo.jfif';
import {Container, Row, Col} from 'reactstrap';

const Auth = (props) => {

    return(
        <Container className='text-center'>
            <Row>
                <Col>
                    <h1 class='authContainer text-primary'>Welcome to BookBubble!!!</h1> 
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 class='authContainer text-primary'>There's A Book For That</h2>
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md='6'>
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
            {/* <Row className='imgRow'>
                <Col>
                    <img className='authLogo' src={BubbleLogo} alt='Book Bubble Logo' />
                </Col>
            </Row> */}
        </Container>
    )
}

export default Auth; 