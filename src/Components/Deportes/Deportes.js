import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import "./Deportes.css"

export default function Deportes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://periodizationapi-heroku.herokuapp.com/deportes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Container>
          
            {items.map((item) => (
              <li key={item.id}>
                  <center>

                 
                <Row>
                  <Col lg="6" xs="12" >
                    <Card>
                      <CardHeader className="cardHeader">{item.nombre}</CardHeader>
                      <CardBody>
                          <Row>
                          <Col>{item.tipo}</Col>
                          <Col> {item.descripcion}</Col>
                          </Row>
                      </CardBody>
                    </Card>                    
                    
                  </Col>
                </Row> </center>
                <br></br>
              </li>
              
            ))}
          
        </Container>
      </div>
    );
  }
}
