import Signup from './Signup';
import Login from './Login'; 
import './Auth.css';
// import BubbbleLogo from './bubbleLogo.jfif';
import {Container, Row, Col} from 'reactstrap';

const Auth = (props) => {

    return(
        <Container className='authContainer'>
            <Row>
                <Col md='4'>
                    <Signup updateToken={props.updateToken}/>
                </Col>
            </Row>
            <Row>
                <Col md='4'>
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth; 