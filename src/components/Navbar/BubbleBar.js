import React, { useState } from "react";
import { Nav, NavItem, Button, NavLink } from "reactstrap";
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
            <Link to='/book/create' onClick={props.createOn}>Add Book</Link>
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
          <NavItem>
            <Link to='/book/search'>Search</Link>
          </NavItem>
            <br />
        </Nav>
        <Button color="primary" onClick={props.clickLogout}>Log Out</Button>
      </div>
  );
}
