import React, { useState } from 'react';
import {Button} from 'reactstrap';
import API_URL from '../../env';
import './Auth.css';


const Signup = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signupButton = (e) => {
        e.preventDefault()
        const url = `${API_URL}/user/create`
        // const body = {
        //     name: name,
        //     email: email,
        //     password: password
        // }

        fetch(url, {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'POST',
            body: JSON.stringify({user: {name: name, email: email, password: password}}),

        }).then(r => r.json())
            .then(robj => props.updateToken(robj.sessionToken));
    }

    return (
        <form>

            
{/* 
            <input
                type="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)} name="name"
                required
            /> */}
            <br />
            <h1 class='authContainer text-primary'>Sign Up</h1>
            <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); console.log(e); }} />
            <br />

            <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <Button onClick={signupButton} color="primary"  >Submit</Button>
            {/* <br /> */}
            {/* <br/><br/><br/><br/> */}
        </form>
    )
};

export default Signup;


///////////////////////////////////////////////////////////////////////////////////

// const [login, setLogin] = useState(true);

//{/* {signupFields()} */ }
//{/* <p>New to BookBubble? <br />Simply click below to get started today!</p>
            //<button type="button" onClick={loginToggle}>{login ? "Sign Up" : "Already a BookBubble reader? Log in here."}<///button> */}
//////////////////////////////////////////////////////////////////////////
// const loginToggle = () => {
//     setLogin(!login)
// }

// const signupFields = () => {
//     if (!login) {
//         return (
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="name"
//                         placeholder="Your Name"
//                         value={name}
//                         onChange={handleSubmit}
//                         required
//                     />

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={handleSubmit}
//                         required />
//                     <br />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={handleSubmit}
//                         required />
//                     <br />


//                     {/* <input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                 <br/>
//                 <label htmlFor="lastName">Last Name</label>
//                 <br/>
//                 <input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} /> */}
//                 </form>
//             </div>
//         )
//     } else {
//         return
//     }
// }


///////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';

// export default class Signup extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             full_name: "",
//             call_name: "",
//             email: "",
//             password: "",
//             password_confirmation: "",
//             signup_errors: ""
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         // console.log("Handle Change", event);
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }


//     handleSubmit(event) {
//         console.log("Form Submitted");
//         event.preventDefault();
//     }


//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         type="name"
//                         name="name"
//                         placeholder="Your Name"
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         required /> 
//                         <br/>

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={this.state.email}
//                         onChange={this.handleChange}
//                         required />
//                         <br/>

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                         onChange={this.handleChange}
//                         required />
//                         <br/>

//                     <input
//                         type="password"
//                         name="password_confirmation"
//                         placeholder="Confirm Password"
//                         value={this.state.password_confirmation}
//                         onChange={this.handleChange}
//                         required />
//                         <br/>

//                         <button type="submit">Sign Up Today!</button>
//                 </form>
//             </div>
//         );
//     }
// }

//{/* <h1>{login ? "Login" : "Sign Up Today"}</h1> */ }
//{/* <h2>{login.toString}</h2> */ }