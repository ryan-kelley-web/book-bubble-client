import Signup from './Signup';
import Login from './Login'; 
import './Auth.css';

const Auth = (props) => {

    return(
        <div>
            <Signup updateToken={props.updateToken}/>
            <Login updateToken={props.updateToken}/>
        </div>
    )
}

export default Auth; 