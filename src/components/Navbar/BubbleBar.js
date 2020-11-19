import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import BookCreate from '../Books/BookCreate';

export default function BubbleBar(props) {
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
}
