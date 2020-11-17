import React, {useState} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function BubbleBar(props) {

const [isOpen, setIsOpen] = useState(false);
const selectLinks = () => {
    let newIsOpen = !isOpen; 
    setIsOpen(newIsOpen);
}

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
                <h3>Helpful Tips</h3>
                <NavItem>
                    <NavLink disabled href="#">Reading Dojo</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}
