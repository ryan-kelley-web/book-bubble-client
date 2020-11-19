import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import BookCreate from '../Books/BookCreate';

export default function BubbleBar(props) {
<<<<<<< HEAD

//     const [isOpen, setIsOpen] = useState(false);
//     const selectLinks = () => {
//     let newIsOpen = !isOpen; 
//     setIsOpen(newIsOpen);
// }


    return (
        <div>
            <h2>BubbleBar</h2>
            <Nav vertical>
                <NavItem>
                    <NavLink href="#">Add Book</NavLink>
                </NavItem>
                <h3>Shelves</h3>
                <NavItem>
                    <NavLink href="#">Read</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Reading</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">To Read</NavLink>
                </NavItem>
                {/* <h3>Helpful Tips</h3> */}
                <br/>
                
                    <button onClick={props.clickLogout}>Log Out</button>
                
            </Nav>
        </div>
    )
=======
  const [isOpen, setIsOpen] = useState(false);
  const selectLinks = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
      <div>
        <h2>BubbleBar</h2>
        <Nav vertical>
          <NavItem>
            <Link to='/book/create'>Add Book</Link>
          </NavItem>
          <h3>Shelves</h3>
          <NavItem>
            <Link to='/book/read'>Read</Link>
          </NavItem>
          <NavItem>
            <Link to='/book/reading'>Reading</Link>
          </NavItem>
          <NavItem>
            <Link to='/book/to-read'>To Read</Link>
          </NavItem>
          <h3>Helpful Tips</h3>
          <NavItem>
            <NavLink disabled href="#">
              Reading Dojo
            </NavLink>
          </NavItem>
        </Nav>
      </div>
  );
>>>>>>> 5494dbc0b49558cf5315a77ba9d3cd12d1c3c5fe
}
