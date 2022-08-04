import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import CardComp from '../CardComp';

type NavbarProps = {

}

const Navbarcomp: React.FC<NavbarProps> = ({}) => {
  const [data ,setData] = useState("")
  const [inputText, setInputText] = useState("");
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  // const recentDatas = data?Object.entries(data):console.log("blank")
  
  // const [length ,setLength] = useState(data.split())
  function getCovid() {
    axios.get("https://covid-193.p.rapidapi.com/statistics",
      {
        'headers': {
          "X-RapidAPI-Key": "28d8fe2dc5mshf01c859ef50c3b1p11353fjsn906cfdfb8887",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
        }
      }
    ).then(res => setData(res.data.response)
    ).catch(err => console.log(err)
    )
  }
  function getCovidSearch() {
    axios.get(`https://covid-193.p.rapidapi.com/statistics?country=${inputText}`,
      {
        'headers': {
          "X-RapidAPI-Key": "28d8fe2dc5mshf01c859ef50c3b1p11353fjsn906cfdfb8887",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
        }
      }
    ).then(res => setData(res.data.response)
    ).catch(err => console.log(err)
    )
  }
  function useKey(key, cb) {
    const callbackRef = useRef(cb);
    useEffect(() => {
      callbackRef.current = cb;
    });
    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callbackRef.current(event);
        }
      }
      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle)
    }, [key]);
  }
  // Calling Enter Key Function  
  useKey("Enter", getCovidSearch)
 
 
  
    return (
        <div style={{textAlign:"center"}}>
           <Navbar bg="light" expand="xl">
      <Container fluid>
        <Navbar.Brand href="#">Updates</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={getCovid}>Covid</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter country name"
              className="me-2"
              aria-label="Search"
              value={inputText}
              onChange={inputTextHandler}
            />
            <Button
             variant="outline-dark"
             onClick={getCovidSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <CardComp data={data}/>
        </div>
    );
};

export default Navbarcomp;