import React, { useState } from 'react'
import {Navbar,Nav,Container,Button,NavDropdown,Form,FormControl} from 'react-bootstrap'

function NavBar({filter}) {

    const [input,setinput] = useState("");

    return (

        <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
                Something else here
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            Link
            </Nav.Link>
        </Nav>
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=> setinput(e.target.value)}
            />
            <Button onClick={()=>filter(input)} variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
</Navbar>
    )
}

export default NavBar