import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


type HeaderProps = {
   
}

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
           <h2>Latest Covid-19 Updates</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;