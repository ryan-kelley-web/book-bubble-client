import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function BubbleBar(props) {

  // const [isOpen, setIsOpen] = useState(false);
  // const selectLinks = () => {
  //   let newIsOpen = !isOpen;
  //   setIsOpen(newIsOpen);
  // };


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
            <br />
            <button onClick={props.clickLogout()}>Log Out</button>
        </Nav>
      </div>
  );
}
