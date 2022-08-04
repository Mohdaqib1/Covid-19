import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
type CardProps = {
  data: any
}

const CardComp: React.FC<CardProps> = ({ data }) => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", overflowX:data? "scroll":"-moz-hidden-unscrollable" }}>
      {data ?
        data.map((e, key) =>
          <div
            key={key}
            style={{ display: "flex",  width: "80%" ,marginTop:"10px"}}>
            <Card style={{ width: '80%', marginLeft: "20%" }}>
              <Card.Body>
                <Card.Title>{e["continent"]}</Card.Title>
                <Card.Text>
                  <b>Last Update :  {e["time"]}</b>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Country :  {e["country"]}</ListGroup.Item>
                <ListGroup.Item>Day :  {e["day"]}</ListGroup.Item>
                <ListGroup.Item>Population :  {e["population"]}</ListGroup.Item>
                <ListGroup.Item>One month cases  :  {e["cases"]["1M_pop"]}  active cases  :  {e["cases"]["active"]} critical cases  :  {e["cases"]["critical"]}</ListGroup.Item>
                <ListGroup.Item>new cases  :  {e["cases"]["new"]} recovered cases  :  {e["cases"]["recovered"]} total cases  :  {e["cases"]["total"]}</ListGroup.Item>
                <ListGroup.Item>One month deaths  :  {e["deaths"]["1M_pop"]} new deaths  :  {e["deaths"]["new"]} total cases  :  {e["deaths"]["total"]}</ListGroup.Item>
                <ListGroup.Item>One month tests  :  {e["tests"]["1M_pop"]} total tests  :  {e["tests"]["total"]}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        )
        :
        <div style={{fontSize:"20px",marginTop:"10%"}}>Loading<Spinner animation="border" size="sm" /></div>}
    </div>
  );
};

export default CardComp;